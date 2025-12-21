import { Play, Brain, Settings } from "lucide-react";
import { images } from "./images";

export const config = {
    hero: {
        heading: "HIMANSHU DADHICH",
        subHeading: "Creative Strategist • Video Producer • Storyteller • Co-founder - TLR Studios",
        body: "I work at the intersection of storytelling, strategy, and execution — helping brands, founders, and creators build content systems that compound over time. I don’t chase virality. I design content that earns trust, attention, and long-term growth.",
        buttons: {
            primary: "View Work",
            secondary: "Work With Me",
        },
        links: {
            primary: "#signature-work",
            secondary: "#work-with-me",
            content: "/work",
        },
    },
    essence: {
        heading: "I build content systems — not just videos.",
        body: "Storytelling isn’t just about aesthetics. It’s about how people perceive you, why they trust you, and whether your content compounds or disappears. Over the last 6+ years, I’ve worked across studios, startups, and creator ecosystems — helping teams move from scattered output to clear, repeatable, scalable content systems.",
        stats: [
            { label: "Years Experience", value: "6+" },
            { label: "Views Driven", value: "30M+" },

        ],
    },
    showreel: {
        title: "Selected Work (2019–2025)",
        description: "A short highlight of projects I’ve led across YouTube, brand films, campaigns, and creator IPs — focused on clarity, structure, and scale.",
        stats: "6 projects • ~12 minutes",
    },
    whatIDo: [
        {
            title: "YouTube & Content Strategy",
            body: "For founders and creators who want YouTube and content to work long-term. Long-form YouTube strategy, Podcast & education-led formats, Short-form systems built for retention, Content positioning & narrative direction.",
            cta: "Explore Content Work →",
            link: "/work",
            icon: Play,
            gradient: "from-blue-500/10 to-purple-500/10",
        },
        {
            title: "Creative & Growth Consultancy",
            body: "For teams producing content without clear direction. Messaging & positioning, Hook and story architecture, Audience insight, Performance-aware creative strategy.",
            cta: "Book a Strategy Call →",
            link: "#contact",
            icon: Brain,
            gradient: "from-amber-500/10 to-orange-500/10",
        },
        {
            title: "End-to-End Execution",
            body: "For brands that want one accountable creative partner. Scripting & creative direction, Production & post-production, Workflow & team coordination, Scalable delivery systems.",
            cta: "Get a Complete Solution →",
            link: "#contact",
            icon: Settings,
            gradient: "from-emerald-500/10 to-teal-500/10",
        },
    ],
    signatureWork: [
        {
            id: "creator-scaling",
            title: "Scaling Creator IPs — YouTube & Podcasts",
            subtitle: "Strategy • Production • Growth",
            image: images.projects.creatorScaling,
            link: "/work/creator-scaling",
            description: "Helping creators turn individual videos into structured, growing IPs.",
            details: {
                bgGradient: "from-orange-500/10 to-red-500/10",
                stats: [
                    { label: "Combined Views", value: "100M+" },
                    { label: "Channels", value: "Multiple" }
                ],
                overview: "Worked closely with large creator IPs to scale long-form conversations, podcasts, and YouTube storytelling.",
                challenge: "Maintaining depth and authenticity while scaling output and audience size.",
                solution: "Built repeatable formats, strong narrative hooks, and creator-first workflows optimized for YouTube retention.",
                impact: "Helped creators establish authority, consistency, and long-term audience trust."
            }
        },
        {
            id: "brand-films",
            title: "Brand Films & Campaigns",
            subtitle: "Story • Design • Performance",
            image: images.projects.brandFilms,
            link: "/work/brand-films",
            description: "Narrative-driven brand films designed for perception and outcomes.",
            details: {
                bgGradient: "from-blue-500/10 to-purple-500/10",
                stats: [
                    { label: "Industries", value: "Fintech, Lifestyle, Education" },
                    { label: "Clients", value: "40+" }
                ],
                overview: "High-impact brand films, explainers, onboarding videos, and ads for startups and enterprises.",
                challenge: "Translating business goals into stories that don’t feel like ads.",
                solution: "Audience-first narratives backed by clean design, clear messaging, and platform-native execution.",
                impact: "Improved engagement, trust, and conversion across campaigns."
            }
        },
        {
            id: "tlr",
            title: "The Lecture Room",
            subtitle: "Co-Founder • Strategy • Operations",
            image: images.projects.tlr,
            link: "/work/tlr",
            description: "A creative studio built around learning, storytelling, and execution.",
            details: {
                bgGradient: "from-emerald-500/10 to-teal-500/10",
                stats: [
                    { label: "ARR", value: "₹70L+" },
                    { label: "Views", value: "30M+" }
                ],
                overview: "Built and scaled a creative studio delivering content strategy and execution for brands and creators.",
                challenge: "Balancing creative quality with scalability and fast turnaround.",
                solution: "Designed TG-first funnels, standardized workflows, and strong team systems.",
                impact: "Scaled studio operations while maintaining creative consistency."
            }
        }
    ],
    fdiProject: {
        heading: "The FDI Project",
        subHeading: "A cinematic explainer series on India’s growth.",
        description: "An independent, research-led series exploring how infrastructure, investment, and systems are shaping modern India — told through clear visuals, grounded storytelling, and on-ground context.",
        themes: ["Cities", "Infrastructure", "Digital Public Goods", "Investment", "India’s Future"],
        episodes: [
            {
                title: "FDI Explained — Episode 1",
                tags: ["Cities", "Investment", "India’s Future"],
                image: images.fdi.episode1,
            },
            {
                title: "FDI Explained — Episode 2",
                tags: ["Infrastructure", "Growth", "Economy"],
                image: images.fdi.episode2,
            },
        ],
    },
    playlist: {
        title: "Selected Work & Case Studies",
        author: "Himanshu Dadhich",
        description: "A curated collection of YouTube case studies, founder stories, and deep-dive conversations on business, startups, and growth.",
        videos: [
            {
                id: "1",
                title: "The Lecture Room | A Company in making",
                views: "240 views",
                time: "3 years ago",
                duration: "0:15",
                thumbnail: images.playlist.tlrIntro,
                link: "https://youtu.be/xEt0_TFvKqc"
            },
            {
                id: "2",
                title: "The TRUTH About Ola Electric - Startup Case Study",
                views: "73K views",
                time: "1 year ago",
                duration: "9:33",
                thumbnail: images.playlist.olaElectric,
                link: "https://youtu.be/rEOx2SDIv7c"
            },
            {
                id: "3",
                title: "How @FanCode Is Changing Sports Consumption in India?",
                views: "12K views",
                time: "1 year ago",
                duration: "59:39",
                thumbnail: images.playlist.fancode,
                link: "https://youtu.be/Qq4wWHlgncw"
            },
            {
                id: "4",
                title: "I Spent a Day at Scaler School of Business and Found Out The TRUTH",
                views: "3.5K views",
                time: "9 months ago",
                duration: "26:44",
                thumbnail: images.playlist.scaler,
                link: "https://youtu.be/Ac7r4zkCuyk"
            },
            {
                id: "5",
                title: "Innovating for a Greener India: Chara CEO Bhakta Keshavachar",
                views: "141 views",
                time: "1 year ago",
                duration: "31:47",
                thumbnail: images.playlist.chara,
                link: "https://youtu.be/vWW0MIXr__Y"
            },
            {
                id: "6",
                title: "The Decline of Dunzo! What Happened?",
                views: "480K views",
                time: "2 years ago",
                duration: "7:59",
                thumbnail: images.playlist.dunzo,
                link: "https://youtu.be/4vOrJewXBQ8"
            },
            {
                id: "7",
                title: "VFS GLOBAL | HR Services",
                views: "9 views",
                time: "1 year ago",
                duration: "4:13",
                thumbnail: images.playlist.vfs,
                link: "https://youtu.be/N105xZHCHck"
            },
            {
                id: "8",
                title: "GM Gukesh X Bluestone Jewellery X TLR Studios",
                views: "4 views",
                time: "11 months ago",
                duration: "1:30",
                thumbnail: images.playlist.bluestone,
                link: "https://youtu.be/CT9uUEg4Ep0"
            },
            {
                id: "9",
                title: "CoinDCX In-App Videos",
                views: "15 views",
                time: "1 year ago",
                duration: "4:18",
                thumbnail: images.playlist.coindcx,
                link: "https://youtu.be/VPxs3SAJh2k"
            },
            {
                id: "10",
                title: "HanuMan Vs Adipurush Teaser | Why Small Films Are Beating Bollywood!",
                views: "3.6M views",
                time: "3 years ago",
                duration: "11:20",
                thumbnail: images.playlist.hanuman,
                link: "https://youtu.be/l7vIXb4d6mE"
            },
            {
                id: "11",
                title: "How Foreign Universities are Spreading the ANTI HINDU Agenda!",
                views: "143K views",
                time: "1 year ago",
                duration: "23:31",
                thumbnail: images.playlist.foreignUniversities,
                link: "https://youtu.be/uxcjLHjpRzE"
            },
            {
                id: "12",
                title: "Finnable In-app Videos",
                views: "12 views",
                time: "1 year ago",
                duration: "2:13",
                thumbnail: images.playlist.finnable,
                link: "https://youtu.be/0pjOJZ_Dipo"
            },
            {
                id: "13",
                title: "ReadyAssist Event Aftermovie",
                views: "5 views",
                time: "1 year ago",
                duration: "1:11",
                thumbnail: images.playlist.readyAssist,
                link: "https://youtu.be/PCvGW2p-gDA"
            },
            {
                id: "14",
                title: "Convey By Finnovationz | Talking Head Sample",
                views: "11 views",
                time: "2 years ago",
                duration: "1:51",
                thumbnail: images.playlist.convey,
                link: "https://youtu.be/n_-nSJlapaM"
            },
            {
                id: "15",
                title: "How OLA ELECTRIC became the Ultimate EV MARKET LEADER?",
                views: "196 views",
                time: "1 year ago",
                duration: "6:09",
                thumbnail: images.playlist.olaCase,
                link: "https://youtu.be/hbfksNX5sDk"
            },
            {
                id: "16",
                title: "5 Years @ Google: Learnings as a Software Engineer",
                views: "13K views",
                time: "2 years ago",
                duration: "13:54",
                thumbnail: images.playlist.google,
                link: "https://youtu.be/2BEoWYk4x8w"
            },
            {
                id: "17",
                title: "BYE-JU’S",
                views: "335K views",
                time: "2 years ago",
                duration: "34:38",
                thumbnail: images.playlist.byejus,
                link: "https://youtu.be/k0JrOj03Hec"
            },
            {
                id: "18",
                title: "VizX - AI Chef Assistant",
                views: "372 views",
                time: "2 years ago",
                duration: "1:08",
                thumbnail: images.playlist.vizx,
                link: "https://youtu.be/pV9OAafXrrM"
            },
            {
                id: "19",
                title: "Indian Startup News 195: PhysicsWallah Launches a School",
                views: "74K views",
                time: "1 year ago",
                duration: "10:04",
                thumbnail: images.playlist.pw,
                link: "https://youtu.be/isY4a634RIw"
            },
            {
                id: "20",
                title: "Documentary Production | The Lecture Room",
                views: "50 views",
                time: "3 years ago",
                duration: "0:24",
                thumbnail: images.playlist.documentary,
                link: "https://youtu.be/yw5sLn-V4PA"
            },
            {
                id: "21",
                title: "WTF Is \"South Asia\"?",
                views: "232K views",
                time: "3 years ago",
                duration: "11:51",
                thumbnail: images.playlist.southAsia,
                link: "https://youtu.be/1V1-UU4NYJ8"
            },
            {
                id: "22",
                title: "ScanX - QR based inventory tracking",
                views: "468 views",
                time: "2 years ago",
                duration: "1:13",
                thumbnail: images.playlist.scanx,
                link: "https://youtu.be/V3s53qf-VkM"
            },
            {
                id: "23",
                title: "Is it worth learning Flutter in 2024 and Beyond?",
                views: "86K views",
                time: "1 year ago",
                duration: "13:41",
                thumbnail: images.playlist.flutter,
                link: "https://youtu.be/vk3MkIdeN-0"
            },
            {
                id: "24",
                title: "Elevate X: Transforming Ideas into Tomorrow’s Projects",
                views: "124 views",
                time: "2 years ago",
                duration: "0:59",
                thumbnail: images.playlist.elevateX,
                link: "https://youtu.be/w--BauI1g5U"
            },
            {
                id: "25",
                title: "Ambedkar they didn’t want you to Know",
                views: "58K views",
                time: "3 years ago",
                duration: "10:25",
                thumbnail: images.playlist.ambedkar,
                link: "https://youtu.be/agBxrOrzFa8"
            },
            {
                id: "26",
                title: "How Indian Foreign Policy Went Into GIGACHAD Mode!",
                views: "3M views",
                time: "3 years ago",
                duration: "14:02",
                thumbnail: images.playlist.foreignPolicy,
                link: "https://youtu.be/s6yp7yNpAEA"
            },
            {
                id: "27",
                title: "Animation Editing | The Lecture Room",
                views: "55 views",
                time: "4 years ago",
                duration: "1:12",
                thumbnail: images.playlist.animation,
                link: "https://youtu.be/dHF14BLoUkI"
            },
            {
                id: "28",
                title: "Explainer Video Editing | The Lecture Room",
                views: "70 views",
                time: "4 years ago",
                duration: "1:06",
                thumbnail: images.playlist.explainer,
                link: "https://youtu.be/a_MANkTAvZM"
            },
            {
                id: "29",
                title: "Discord Tech Stack",
                views: "2.8K views",
                time: "1 year ago",
                duration: "1:07",
                thumbnail: images.playlist.discord,
                link: "https://youtu.be/rINK4Ce4gHQ"
            },
            {
                id: "30",
                title: "Abhi and Niyu Opens up on Veer Savarkar, India and Bharat",
                views: "384K views",
                time: "1 year ago",
                duration: "1:40:00",
                thumbnail: images.playlist.abhiNiyu,
                link: "https://youtu.be/bB_2Ov1pHew"
            },
            {
                id: "31",
                title: "2024 Will Decide India’s Future",
                views: "610K views",
                time: "1 year ago",
                duration: "1:34:28",
                thumbnail: images.playlist.india2024,
                link: "https://youtu.be/TI9JS2mHPjQ"
            },
            {
                id: "32",
                title: "EP-01 | Why he left Meta London & moved back to India!",
                views: "11K views",
                time: "2 years ago",
                duration: "28:48",
                thumbnail: images.playlist.meta,
                link: "https://youtu.be/sjHbLpl7iUE"
            },
            {
                id: "33",
                title: "Advertisement Editing | The Lecture Room",
                views: "114 views",
                time: "4 years ago",
                duration: "0:17",
                thumbnail: images.playlist.adEditing,
                link: "https://youtu.be/tCligskSFbw"
            },
            {
                id: "34",
                title: "Podcast Editing | The Lecture Room",
                views: "13 views",
                time: "3 years ago",
                duration: "1:25",
                thumbnail: images.playlist.podcast,
                link: "https://youtu.be/fc0YGVc8Rg8"
            },
            {
                id: "35",
                title: "Khatu Wale Shyam | खाटू वाले श्याम",
                views: "5.9K views",
                time: "3 years ago",
                duration: "4:16",
                thumbnail: images.playlist.khatu,
                link: "https://youtu.be/LSKxE2QE4io"
            },
            {
                id: "36",
                title: "Logo Animation | The Lecture Room",
                views: "26 views",
                time: "3 years ago",
                duration: "0:09",
                thumbnail: images.playlist.logo,
                link: "https://youtu.be/7fnQ94Zglmk"
            },
            {
                id: "37",
                title: "Product Introduction | The Lecture Room",
                views: "16 views",
                time: "3 years ago",
                duration: "0:25",
                thumbnail: images.playlist.product,
                link: "https://youtu.be/vsNFFPkLmZk"
            },
            {
                id: "38",
                title: "Free Cash Flow Yield - The #1 Valuation Multiple",
                views: "8.5K views",
                time: "4 years ago",
                duration: "7:51",
                thumbnail: images.playlist.fcf,
                link: "https://youtu.be/AwcU3LSw7V4"
            },
            {
                id: "39",
                title: "Social Media Package | The Lecture Room",
                views: "28 views",
                time: "3 years ago",
                duration: "1:29",
                thumbnail: images.playlist.socialMedia,
                link: "https://youtu.be/FWyc9pgxcc8"
            },
            {
                id: "40",
                title: "Shorts and Reels Editing | The Lecture Room",
                views: "29 views",
                time: "3 years ago",
                duration: "0:21",
                thumbnail: images.playlist.shorts,
                link: "https://youtu.be/5euZi4tn71k"
            },
            {
                id: "41",
                title: "लड़के भी हारते हैं इश्क़ में (MenToo) – Poetry by Jai Ojha",
                views: "195K views",
                time: "5 years ago",
                duration: "2:57",
                thumbnail: images.playlist.poetry,
                link: "https://youtu.be/CR7KX2xP2Fc"
            },
            {
                id: "42",
                title: "Tribe Kombucha Event Aftermovie",
                views: "3 views",
                time: "6 months ago",
                duration: "0:58",
                thumbnail: images.playlist.kombucha,
                link: "https://youtu.be/cpm2YtfOtEI"
            }
        ]
    },
    about: {
        heading: "Hi, I’m Himanshu.",
        bio: [
            "I’m a creative strategist and video producer with 6+ years of experience building content for brands, startups, and creators.",
            "My work lives where storytelling meets business — where content isn’t just engaging, but intentional and repeatable.",
            "I’ve led studios, worked closely with founders, and helped creators scale their presence by focusing on systems over one-off wins."
        ],
        values: [
            "clarity over noise",
            "craft over shortcuts",
            "consistency over hype"
        ],
        skills: [
            "YouTube & long-form specialization",
            "Strong narrative thinking",
            "Performance-aware creativity",
            "Team & workflow leadership",
            "Calm, reliable execution"
        ],
    },
    workWithMe: [
        {
            id: "01",
            title: "Strategy Intensive (One-Time)",
            bestFor: "Founders who need clarity, fast",
            features: [
                "90-minute deep-dive strategy session",
                "Clear positioning & content direction",
                "Format & platform recommendations",
                "Actionable 30–60 day plan"
            ],
            outcome: "Clarity, confidence, and a concrete next step.",
            duration: "One-time session",
            investment: "₹3,000",
            accent: "purple"
        },
        {
            id: "02",
            title: "Creator Foundation (Starter Pack)",
            bestFor: "Founders & professionals starting or rebooting their personal brand",
            features: [
                "Content identity & positioning",
                "1 core narrative video",
                "4 high-quality short-form videos",
                "Hook & script guidance",
                "Thumbnails, metadata & publishing notes"
            ],
            outcome: "A clear starting identity with ready-to-publish content.",
            duration: "2–3 weeks",
            investment: "Starting from ₹15,000",
            accent: "blue"
        },
        {
            id: "03",
            title: "Content Strategy & Direction (Most Chosen)",
            bestFor: "Creators & brands already producing content but lacking direction",
            features: [
                "Full content & channel audit",
                "Story architecture & positioning clarity",
                "Hook frameworks & narrative structure",
                "Content calendar & format strategy",
                "Workflow optimisation",
                "Weekly 1:1 strategy calls"
            ],
            outcome: "A clear content engine your team can execute without confusion.",
            duration: "Monthly",
            investment: "₹25,000 – ₹45,000 / month",
            accent: "accent",
            popular: true
        },
        {
            id: "04",
            title: "End-to-End Content Partnership",
            bestFor: "Brands & creators who want one accountable creative partner",
            features: [
                "Creative ownership from idea to upload",
                "Scripting & narrative direction",
                "Production & post-production",
                "Short + long-form delivery",
                "Team & workflow management",
                "Performance review & growth insights"
            ],
            outcome: "A reliable, scalable content system without daily involvement.",
            duration: "3–6 months",
            investment: "Custom (based on scope)",
            accent: "emerald"
        },

    ],
    contact: {
        heading: "Let’s build something meaningful with content at its core.",
        email: "himanshud30@gmail.com",
        calendly: "https://calendly.com/himanshud30/30min",
        placeholder: "Tell me what you’re building and where you feel stuck.",
        socials: {
            youtube: "https://www.youtube.com/@himanshudadhich2785",
            instagram: "https://www.instagram.com/himanshud30",
            linkedin: "https://www.linkedin.com/in/himanshudadhich30/",
        },
    },
};

