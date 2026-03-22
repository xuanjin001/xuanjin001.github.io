/**
 * linkedin-publish.js
 *
 * Handles two things:
 *   1. Owner-only "Publish to LinkedIn" button (Alt+Shift+P to unlock)
 *   2. Copy protection — appends source attribution to copied text
 */

(function () {
  const OWNER_SESSION_KEY = "xj_owner_session";

  // ─── Helpers ────────────────────────────────────────────────────────────────

  function sha256(message) {
    return crypto.subtle
      .digest("SHA-256", new TextEncoder().encode(message))
      .then(function (buf) {
        return Array.from(new Uint8Array(buf))
          .map(function (b) { return b.toString(16).padStart(2, "0"); })
          .join("");
      });
  }

  function isOwner() {
    return sessionStorage.getItem(OWNER_SESSION_KEY) === "1";
  }

  function showPublishBtn() {
    var btn = document.getElementById("linkedin-publish-btn");
    var status = document.getElementById("linkedin-publish-status");
    if (btn) {
      btn.style.display = "inline-flex";
    }
    if (status) {
      status.style.display = "inline";
    }
  }

  // ─── Owner authentication ────────────────────────────────────────────────────
  // Press Alt+Shift+P on any post to be prompted for the owner password.
  // The password is hashed (SHA-256) and compared to the hash stored in
  // config.toml → params.linkedinOwnerHash. The plain password never appears
  // in the HTML — only the hash does.

  function activateOwnerMode() {
    if (isOwner()) {
      showPublishBtn();
      return;
    }

    var code = window.prompt("Owner password:");
    if (!code) return;

    var btn = document.getElementById("linkedin-publish-btn");
    var storedHash = btn ? btn.dataset.ownerHash : null;

    if (!storedHash) {
      window.alert("Publish button not configured on this page.");
      return;
    }

    sha256(code).then(function (hash) {
      if (hash === storedHash) {
        sessionStorage.setItem(OWNER_SESSION_KEY, "1");
        showPublishBtn();
      } else {
        window.alert("Incorrect password.");
      }
    });
  }

  // Restore owner mode if already authenticated this session
  if (isOwner()) {
    document.addEventListener("DOMContentLoaded", showPublishBtn);
  }

  // Keyboard shortcut: Alt + Shift + P
  document.addEventListener("keydown", function (e) {
    if (e.altKey && e.shiftKey && e.key === "P") {
      activateOwnerMode();
    }
  });

  // ─── Publish button click ────────────────────────────────────────────────────

  document.addEventListener("DOMContentLoaded", function () {
    var btn = document.getElementById("linkedin-publish-btn");
    var status = document.getElementById("linkedin-publish-status");
    if (!btn) return;

    btn.addEventListener("click", async function () {
      var _a = btn.dataset, title = _a.title, url = _a.url, description = _a.description;

      btn.disabled = true;
      btn.style.opacity = "0.7";
      status.textContent = "Publishing…";
      status.style.color = "";

      try {
        var response = await fetch("/.netlify/functions/post-to-linkedin", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ title: title, url: url, description: description }),
        });

        var data = await response.json();

        if (response.ok && data.success) {
          status.textContent = "✓ Published to LinkedIn!";
          status.style.color = "#0077B5";
          btn.textContent = "Published";
        } else {
          throw new Error(data.error || "Unknown error");
        }
      } catch (err) {
        status.textContent = "✗ Failed: " + err.message;
        status.style.color = "red";
        btn.disabled = false;
        btn.style.opacity = "1";
      }
    });
  });

  // ─── Copy protection ─────────────────────────────────────────────────────────
  // For selections longer than 80 characters, the copied text automatically
  // includes a "Source:" attribution line. Shorter copies (single words,
  // small quotes) are left untouched.

  document.addEventListener("copy", function (e) {
    var selection = window.getSelection().toString();
    if (selection.length > 80) {
      var attribution = "\n\nSource: " + window.location.href;
      e.clipboardData.setData("text/plain", selection + attribution);
      e.preventDefault();
    }
  });

})();
