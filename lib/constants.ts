const NavbarItems = [
    {
        head : "About",
        reff : '/'
    },
    {
        head : "Experience",
        reff : '/Experience'
    },
    {
        head : "Projects",
        reff : '/Projects'
    },
    {
        head : "Resume",
        reff : '/Resume'
    },
    {
        head : "Contact",
        reff : '/Contact'
    }
]

export const Intern1Skills = [ "React.Js","Node.Js","RESTful APIs","Express.Js","MongoDB","Machine Learning"]

export const socialMedia = [
    {
        svgPath : "/social-media/github.svg",
        url : "https://github.com/NaveentejaB"
    },
    {
        svgPath : "/social-media/insta.svg",
        url : "https://www.instagram.com/weird_physicist/"
    },
    {
        svgPath : "/social-media/linkedin.svg",
        url : "https://www.linkedin.com/in/naveentejab"
    },
    {
        svgPath : "/social-media/mail.svg",
        url : "mailto:naveentejasd@gmail.com"
    },
]

export const experienceData = [
    {
        internRole : "Software Development Engineer",
        companyName : "K12 Techno Services Pvt. Ltd",
        period : "June 2025 - Present",
        imgLink : '/oms.jpg',
        info : [
            "Owned the store-payments flow processing 90K+ transactions worth Rs. 130 Cr in 3 months; integrated the payment gateway via webhooks with retry logic and shipped reconciliation dashboards for finance and operations visibility.",
            "Integrated Avanse EMI as a third-party financing partner to let students convert academic and transport fees into monthly installments, with webhook-driven status updates and atomic ERP ledger writes.",
            "Revamped the Order Management System (Django/DRF), re-architecting order placement, weight-based courier routing, and SAP stock-sync across logistics partners into a no-data-loss flow guaranteeing delivery for every order.",
            "Hardened the system to sustain 4K+ orders/hour across 120 branches during peak enrollment by decoupling order, stock-release, and dispatch into idempotent flows, cutting failure rate to under 2%.",
            "Engineered live GPS tracking over the GT06 protocol for 1200+ school buses, decoding device telemetry into real-time location updates and customized parent reminders for bus arrival, boarding, and drop-off events.",
            "Designed and built Convo, an in-house communication tool in Go used by 15K+ employees — a concurrent notification service that centralizes alerts from internal systems into an in-app bot, auto-provisions new users from the ERP, and serves on-demand reports via commands.",
        ],
        skills : ["Go", "Django", "DRF", "PostgreSQL", "Redis", "RabbitMQ", "SAP Integration", "Webhooks", "Celery", "Docker"]
    },
    {
        internRole : "Software Developer Intern",
        companyName : "Upraised",
        period : "May 2024 - July 2024",
        imgLink : '/cai.jpg',
        info : [
            "Built a unified chat interface for contract summarization and authoring — replaced two prior tools and sped up document turnaround for legal users.",
            "Implemented document upload and parsing for summarization, plus a dynamic questionnaire for contract generation.",
            "Contributed to a Django + Azure AI conversational system; added thread-ids to preserve context across multi-turn interactions.",
        ],
        skills : [ "Next.Js","Tailwind CSS","TypeScript","Django","Azure AI"]
    },
    {
        internRole : "Associate Software Developer",
        companyName : "B2Y Infy Solutions Pvt Ltd",
        period : "February 2024 - May 2024",
        imgLink : '/ecom.jpg',
        info : [
            "Architected a multi-tenant Express.js e-commerce backend supporting 20+ vendor storefronts with tenant-isolated data and shared core services.",
            "Led 2 engineers building RESTful endpoints for real-time inventory and order processing; cut API response times via query optimization and indexing.",
        ],
        skills : [ "Express.Js","Node.Js","RESTful APIs","JWT","MongoDB"]
    },
    {
        internRole : "AI Tech Intern",
        companyName : "SS Wealthserv Technologies",
        period : "October 2023 - December 2023",
        imgLink : '/vtryon.jpg',
        info : [
            "Built RESTful APIs in Express.js for apparel inventory management with CRUD operations and advanced custom-filter search.",
            "Optimized MongoDB schemas with Mongoose for ~30% faster data retrieval, and tuned the React.js frontend–backend integration for a ~10% performance gain.",
            "Contributed to a high-resolution virtual try-on model, working on cloth segmentation and human parsing based on VITON-HD research.",
        ],
        skills : [ "Express.Js","Node.Js","RESTful APIs","MongoDB","Machine Learning"]
    },
]

export const projectData = [
    {
        heading : "GreenNexus",
        subHead : "Environmental Action Platform",
        period : "March 2024 - Present",
        imgLink : "/f2.jpg",
        info : "Microservice-based sustainability platform built with Express.js and Next.js. Designed scalable REST APIs with a layered structure and minimal coupling so each service deploys independently. Built the Next.js frontend with auth, event & community management, a challenge-reward system, and a Figma-driven UI. Integrated Leaflet.js maps with customizable filters and RabbitMQ-backed notification and mailing services to drive engagement.",
        skills : [ "Microservices","RabbitMQ","Express.Js","Next.Js","Leaflet.js","RESTful APIs"]
    },
    {
        heading : "MiniMax",
        subHead : "Video Streaming Platform",
        period : "August 2024 - Present",
        imgLink : "/boxoffice.png",
        info : "Streaming platform engineered with Next.js and Django. Videos are stored on AWS S3 and transcoded to HLS for adaptive bitrate playback, with Redis caching to reduce average video start time. Async transcoding runs on Celery + Redis so uploads stay non-blocking. Added watch history, video resume, and ML-based recommendations to drive session length.",
        skills : [ "Next.Js","Django","AWS S3","Redis","Celery","Machine Learning"]
    },
    {
        heading : "QuickChat",
        subHead : "Real-Time Chat Application",
        period : "January 2024 - February 2024",
        imgLink : "/f4.jpg",
        info : "Real-time chat app with persistent WebSocket connections via Socket.io and bcrypt-secured authentication. Messages are persisted asynchronously to MongoDB while Socket.io handles live delivery — keeping latency low under concurrent users. Features friend requests with full-text search, read receipts, and browser push notifications.",
        skills : [ "React.Js","Node.Js","Express.Js","MongoDB","Socket.io"]
    },
]
export const aboutMe = 'Backend-focused engineer building production financial systems where correctness and idempotency matter most.'
export const homePageData =[
     "I'm a dual-degree (B.Tech + M.Tech) graduate from IIT Kanpur. My thesis was in aerospace, but watching a production bug cascade into a system-wide incident pulled me toward something else — building systems that actually ship.",
     "About a year of full-time engineering on production financial systems — payments, EMI flows, ERP reconciliation, and atomic ledger writes — across Django/DRF, Express.js, and Go. Comfortable in Next.js and React.js to own features end-to-end.",
     "At K12 Techno Services I re-architected the OMS to sustain 4K+ orders/hour across 120 branches, owned a store-payments flow moving Rs. 130 Cr, and recovered Rs. 40 Cr in inventory visibility by reconciling ERP↔SAP drift. I also built Convo, a Go communication tool serving 15K+ employees. Engineering systems to fail gracefully — whether aerodynamic or financial — turned out to be the same instinct."
]




export {NavbarItems}
