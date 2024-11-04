+++ 
draft = false
date = 2024-10-26T02:23:43-07:00
title = ""
description = ""
slug = ""
authors = []
tags = []
categories = []
externalLink = ""
series = []
protected=true
password = "XuanPr@j2025"
+++

<!--more-->

{{< secret "XuanPr@j2025" >}}

# SFDC Project Experience

Xuan started working at MondayCall, which is later merged into RSM, since June 2020. As of today, Xuan worked with over 30 clients in total, and that's also over 30 projects. Xuan is specialized mainly in implementing service cloud, and anything technical related such as data migration, integration, code. The following is a list of projects Xuan worked on in the past, with a short description on what the project is. The complicated use case won't be discussed here, please reach out to Xuan directly to discuss those details.

All client name has been changed to pseudonym.

If you have any questions or concerns, please reach out to Xuan directly.

## Service Cloud and Service Cloud Voice Implementation, Experience Cloud Implementation

### Service Cloud and Service Cloud Voice Implementation

Voice is using AWS Connect

-   S Media
    -   As a solution architect, oversaw all workstreams
    -   Phase I:
        -   Expand to service cloud
            -   Case management
            -   SLA
            -   Digital Engagement
            -   Chat
            -   Zendesk integration
            -   Knowledge
                -   migrate data from zendesk
            -   Setup Jira to SFDC: bring other team’s ticket into SF
        -   Customer community
            -   host knowledge
            -   let customer check on their case progress
    -   Phase II
        -   Expand on community
            -   Customer level: brown, silver, gold
            -   Different level has different experience, the look and feel of the page are all different, and the information they get is all different too
        -   Migrate intercom
            -   intercom is a chatbot tool can take both email and chat, if it is an email, it comes in a form of chat
            -   change it to SFDC chat
            -   change it to SFDC email to case
            -   Setup web to case for additional assistance
    -   Voice
        -   Configured omni for voice
        -   Automate case creation process when there is a call
        -   Implemented automation between voice records and cases
-   RSI:
    -   Solution Architect on the Service Cloud workstream, and lead developer and solution architect on Service Cloud Voice in AWS
    -   Service Cloud
        -   Case Routing
        -   SLA
        -   Text messaging
        -   ChatBot
    -   Voice
    -   AWS Connect implementation
    -   Custom block phone number implementation using lambda in AWS and phone system
    -   Community

### Voice Only Projects with AWS Connect

-   RLI:
    -   Lead soluton architect on Voice
    -   Lead developer in AWS Connect
    -   Conduct discoveries, come up with process diagrams on the design

For the following clients, the listed items are implemented:

    -   Configured Omni Channel for Voice
    -   Automate case creation when there is a call
    -   Match callers with existing contact, account
    -   Automate contact and account when they are not found
    -   Implemented automation between voice records and cases

-   Stri Labs
-   Zip
-   HR
-   S Key
-   S Docs
-   Zyw
    -   Voice implementation steps as above, additionally
    -   Next Best Action:
        -   based on keywords that’s said by agent or customer, provide the next step
        -   using service cloud voice api lwc
-   Milan Laser: voice
    -   field agent on call while on floor
    -   service cloud implementation

### Service Cloud and Experience Cloud Implementation

-   Bush:
    -   Email2Case
    -   Web-2-Case
    -   Case routing
    -   Experience cloud form
    -   Preventing attacks from spam emails (recaptcha)
        -   They are still using that today
-   P Tech
    -   First project owned by me, designed, tested, and maintain the account from beginning to end (retained team until 2022, end of the year )
    -   Customized milestone/entitlement SLA for 8 different teams
        -   utilize existing entitlement/milestone feature
        -   use custom logic to figure out who should a case escalating to based on the following:
            -   Case record type
            -   Urgency: P1, P2, P3
            -   Alert 1, Alert 2, Alert 3
            -   Depends on the above, using apex to determine which team the ticket should be sent to
                -   A team can include 1 queue, or multiple queues, each queues are separated by ";"
            -   Factored in business hours and holidays (at the time holiday doesn't exist in SF yet)
    -   Case system
        -   Customized automation on which queue or queues should be assigned with cases
    -   Experience cloud
        -   Who should be seeing which case
            -   permission set automation
        -   External user rules vs Internal user rules
    -   Process builder to flow migration
        -   migrated about 15 process builder to flow using flow and invocable apex
-   CF
    -   Brought 5 teams into SFDC, all 5 teams were using a ticketing system on their own
        -   2 team using zendesk
        -   2 team using jira
        -   1 team just doing things on their own, old school, pen and paper
    -   Service Cloud - Case
    -   omni channel routing
        -   Case
            -   SLA: Entitlement, Milestone
            -   Email to case
            -   Web to case
            -   Jira
        -   messages
        -   WhatsApp
        -   chatbot
    -   Community
-   V animation
    -   Built out the whole community pages
    -   retained team to do minor adjustment such as:
        -   change button color
        -   change font
        -   override the theme color in community
    -   Create reports/dashboard
    -   New partner community
        -   Dashboard
        -   Leads
        -   MDF: market development funds
        -   FAQ
        -   be able to view my own accounts
        -   Contact support
            -   Case creation
            -   Case assignment
            -   Case routing
            -   social media: twitter, component
-   Icer: PRM community
    -   Approval process
    -   Building out the whole community
    -   Partnership object
-   Iter:
    -   Data migration
    -   Service Cloud Implementation
        -   When an asset created and have a problem, agents should be able to create a case from Asset object, case should be routed to a specific team based on the asset information and account information
        -   Case needs to be escalated if the case is not taken care of, SLA, 5 levels
        -   When a shipment related case is resolved, should trigger the shipment process, sends a signal to an external system, and sends the address information to create a shipping label
    -   PRM Community

## Data Migration and Integrations

-   A-project (1.5 years long)
    -   Technical Architect of the system migration project, migrated system architecture from Dynamic365 to Salesforce
    -   Designed new data structure based on client’s business process, and making sure the data is saved in a way that can be used more efficiently
    -   Led a team of five migrating 80G data from Dynamic365 to Salesforce, with 84 tables from D365 to 64 objects in SF
    -   Made sure Salesforce can handle all existing business functions and added new functionalities
    -   Conducted training with clients to make sure they could use the system easily and be able to handle the system on its own, including salesforce and data related tools and functions
    -   3 rounds of data migration
        -   Sandbox (Beta load)
        -   Full (performance testing)
        -   Production
        -   Integration, mulesoft
-   S-One: solve local companies site-related problem, help with project rollouts
    -   Data migration of 2.8m records on Account, Contact, Case, Task
    -   2.5 months long
    -   two loads: sandbox and production
    -   post data cleanup using apex scripts (anonymous block)
-   DS
    -   Data migration, Integration the following data
        -   Bid
        -   Bid link
        -   Product
        -   Account, Contacts, Leads (migration)
        -   Subscription
-   Ext
    -   Integration to Zendesk
        -   When there is a ticket created in Zendesk, the ticket will be created or updated in SF
        -   Including ticket comments in Zendesk
    -   Zuora Integration
        -   bring data from zuora into SFDC
        -   Subscription Opp implementation (custom object)
    -   DataLoad
-   G
    -   Community Implementation
    -   Data migration
    -   Data integration
        -   Zencraft forced Gooding to update the app otherwise they would increase the cost
        -   Update package from Zencraft to SFDC
            -   old version: classic
            -   new version: lightning, new objects, need to move the functionalities too
-   Winery I
    -   Data migration
    -   Integration
        -   iDig
        -   JitterBit migrate data from iDig into SFDC
    -   Sales data reports
    -   Experience cloud
        -   show the data to some external users, so they see what they ordered and reports
-   V W
    -   Data integration through JitterBit
-   Kym
    -   Case
    -   Chatbot
    -   Contact Data Load
    -   Sales cloud and CPQ
        -   Complicated order and order split to update contract date
        -   Using flow, later on using apex instead
    -   Code Review
    -   Integration from another group of developer hired by Kymeta
        -   Import data from Oracle to SFDC
        -   Created flow, apex to get the data and determine if it should be insert or update, and record error
-   C Homes
    -   Data migration
-   Play V
    -   Integration: from Braze Source
    -   Integration: Zendesk
        -   Case from Zendesk to SFDC
        -   Solidate all team cases
        -   Case assignment, routing through omni
-   H Education
    -   Data migration

## Sales Cloud and Experience Cloud Implementation

-   Nob
    -   Solution Architect for Sales Cloud
    -   Sales Cloud (basic sales process)
        -   Lead
        -   Opportunity
        -   Contact
        -   Sales data migration on lead
-   B Corporate
    -   Account and contact
    -   Badge information link with an external system
    -   Record which worker badged in from which building
    -   report on badge information
    -   Analyze on building usage
-   Prol
    -   Sales cloud
    -   Account, lead, contact, opp
    -   MVP
    -   integration to PSI system
    -   To have a CRM as the single source of truth for the Sales team
    -   To visualize client buying patterns:
        -   To compare activity vs outcome metrics
        -   To proactively capture and reduce churn rates
        -   To understand cross sell and upsell opportunities
    -   To have an optimized and user friendly mobile experience
    -   To actively track and report on adverse events
    -   To easily manage Territory planning
-   R Brands
    -   Community
    -   Sales Cloud Implementation
    -   Sales related data integration
    -   Using [Tray.io](http://Tray.io) (a tool client already purchased)
    -   Duplicate management
-   Tri
    -   Data migration
    -   Community
        -   PRM
        -   Customer community
            -   Designed 40 pages variations on community
        -   Rolled out to 120 users in phases

## Custom Code Solutions

-   Travels
    -   Dreamforce room booking uses this too!
    -   Scheduling system integrated with Service Cloud on booking rooms in San Francisco
    -   Providing Service Agent room scheduling data on ipad
-   Truck CO
    -   Moving all code from GCP to NetSuite
    -   Complicated python code on GCP to process data, and pushed the data to some place where no one knows
    -   The employee who was managing this implementation left
-   Flex Health
    -   Customized case change to standard
        -   Client hired a group of developers in the past to use code to control how a case could be assigned
        -   Changed to using standard out of the box functions in Salesforce
    -   Complicated use case:
        When an On Contract is created (On Contract 0), and extended to another On Contract 1, when another On Contract is created and linked to On Contract 1, the new On Contract should be linked with On Contract 0 as well.
        Users want to be able to create reports based on the relationship.
        POC done in client sandbox

---

Data related tools:

-   OpenRefine
-   JitterBit

{{< /secret >}}
