import { Play, Brain, Settings } from "lucide-react";
import { images } from "./images";

export const config = {
    hero: {
        heading: "HIMANSHU DADHICH",
        subHeading: "Storyteller • Creative Strategist • Video Producer",
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
                title: "The TRUTH About Ola Electric - Startup Case Study",
                views: "73K views",
                time: "1 year ago",
                duration: "9:33",
                thumbnail: images.playlist.olaElectric,
                link: "https://youtu.be/xEt0_TFvKqc?si=rnlyE-5F28CLO2Ea"
            },
            {
                id: "2",
                title: "How @FanCode Is Changing Sports Consumption in India?",
                views: "12K views",
                time: "1 year ago",
                duration: "59:30",
                thumbnail: images.playlist.fanCode,
                link: "https://youtu.be/xEt0_TFvKqc?si=rnlyE-5F28CLO2Ea"
            },
            {
                id: "3",
                title: "I Spent a Day at Scaler School of Business and Found Out The TRUTH",
                views: "3.5K views",
                time: "8 months ago",
                duration: "26:44",
                thumbnail: images.playlist.scaler,
                link: "https://youtu.be/xEt0_TFvKqc?si=rnlyE-5F28CLO2Ea"
            },
            {
                id: "4",
                title: "Innovating for a Greener India: Chara CEO Bhakta Keshavachar",
                views: "141 views",
                time: "1 year ago",
                duration: "31:47",
                thumbnail: images.playlist.chara,
                link: "https://youtu.be/xEt0_TFvKqc?si=rnlyE-5F28CLO2Ea"
            },
            {
                id: "5",
                title: "The Decline of Dunzo!... What Happened? | Startup Case Study",
                views: "480K views",
                time: "2 years ago",
                duration: "7:59",
                thumbnail: images.playlist.dunzo,
                link: "https://youtu.be/xEt0_TFvKqc?si=rnlyE-5F28CLO2Ea"
            },
            {
                id: "6",
                title: "Building the Future of Indian Infrastructure",
                views: "120K views",
                time: "3 weeks ago",
                duration: "14:20",
                thumbnail: images.playlist.infrastructure,
                link: "https://youtu.be/xEt0_TFvKqc?si=rnlyE-5F28CLO2Ea"
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
        placeholder: "Tell me what you’re building and where you feel stuck.",
        socials: {
            youtube: "https://www.youtube.com/@himanshudhich",
            instagram: "https://www.instagram.com/himanshud30",
            linkedin: "https://www.linkedin.com/in/himanshudadhich30/",
        },
    },
};

