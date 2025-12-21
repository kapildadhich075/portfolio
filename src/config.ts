import { Play, Brain, Settings } from "lucide-react";

export const config = {
    hero: {
        heading: "HIMANSHU DADHICH",
        subHeading: "Creative Strategist | Video Producer | YouTube Growth Specialist",
        body: "I help brands, startups, and creators turn ideas into high-performing content through storytelling, strategy, and scalable execution.",
        buttons: {
            primary: "View Signature Work",
            secondary: "Work With Me",
        },
        links: {
            primary: "#signature-work",
            secondary: "#contact",
            content: "/content",
        },
    },
    essence: {
        heading: "I build content systems that scale stories, not just videos.",
        body: "Storytelling is not just about aesthetics — it’s about perception, trust, and growth. Over the last 6+ years, I’ve helped startups, unicorns, and creators design YouTube-first and brand-first content engines that balance creativity with performance.",
        stats: [
            { label: "Years Experience", value: "6+" },
            { label: "Views Driven", value: "30M+" },
        ],
    },
    whatIDo: [
        {
            title: "YouTube & Content Strategy",
            body: "Long-form YouTube, podcasts, educational explainers, and short-form systems designed for retention, clarity, and growth.",
            cta: "Explore Content Work →",
            link: "/content",
            icon: Play,
            gradient: "from-blue-500/10 to-purple-500/10",
        },
        {
            title: "Creative & Growth Consultancy",
            body: "Messaging, hooks, story architecture, audience insight, and performance-driven creative strategy for brands and creators.",
            cta: "Book a Strategy Call →",
            link: "#contact",
            icon: Brain,
            gradient: "from-amber-500/10 to-orange-500/10",
        },
        {
            title: "End-to-End Execution",
            body: "From scripting to production to post — I lead teams and workflows to deliver fast, scalable, high-quality content.",
            cta: "Get a Complete Solution →",
            link: "#contact",
            icon: Settings,
            gradient: "from-emerald-500/10 to-teal-500/10",
        },
    ],
    signatureWork: [
        {
            id: "creator-scaling",
            title: "Scaling Creator IPs — Podcasts & YouTube",
            subtitle: "Strategy • Production • Growth",
            image: "https://images.unsplash.com/photo-1590602847861-f357a9332bbc?q=80&w=2070&auto=format&fit=crop", // Podcast mic / studio
            link: "/work/creator-scaling",
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
            image: "https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?q=80&w=2070&auto=format&fit=crop", // Cinematic mountain / branding
            link: "/work/brand-films",
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
            title: "The Lecture Room — Content Studio & IP",
            subtitle: "Co-Founder • Strategy • Operations",
            image: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?q=80&w=2070&auto=format&fit=crop", // Creative team / office
            link: "/work/tlr",
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
        },
        {
            id: "tlr",
            title: "The Lecture Room — Content Studio & IP",
            subtitle: "Co-Founder • Strategy • Operations",
            image: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?q=80&w=2070&auto=format&fit=crop", // Creative team / office
            link: "/work/tlr",
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
        },
        {
            id: "tlr",
            title: "The Lecture Room — Content Studio & IP",
            subtitle: "Co-Founder • Strategy • Operations",
            image: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?q=80&w=2070&auto=format&fit=crop", // Creative team / office
            link: "/work/tlr",
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
        subHeading: "A cinematic explainer series breaking down India’s growth.",
        description:
            "A deep dive into the forces shaping modern India. From infrastructure to digital public goods, we cover it all with high-production value and rigorous research.",
        episodes: [
            {
                title: "FDI Explained — Episode 1",
                tags: ["Cities", "Investment", "India’s future"],
                image: "https://images.unsplash.com/photo-1548613053-220e7530434d?q=80&w=2070&auto=format&fit=crop", // India city / traffic cinematic
            },
            {
                title: "FDI Explained — Episode 2",
                tags: ["Infrastructure", "Growth", "Economy"],
                image: "https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?q=80&w=2144&auto=format&fit=crop", // Urban infrastructure
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
                thumbnail: "https://images.unsplash.com/photo-1628163013697-b6732389922a?q=80&w=2070&auto=format&fit=crop", // Electric scooter / tech
                link: "https://youtu.be/xEt0_TFvKqc?si=rnlyE-5F28CLO2Ea"
            },
            {
                id: "2",
                title: "How @FanCode Is Changing Sports Consumption in India?",
                views: "12K views",
                time: "1 year ago",
                duration: "59:30",
                thumbnail: "https://images.unsplash.com/photo-1461896836934-ffe607ba8211?q=80&w=2070&auto=format&fit=crop", // Sports stadium
                link: "https://youtu.be/xEt0_TFvKqc?si=rnlyE-5F28CLO2Ea"
            },
            {
                id: "3",
                title: "I Spent a Day at Scaler School of Business and Found Out The TRUTH",
                views: "3.5K views",
                time: "8 months ago",
                duration: "26:44",
                thumbnail: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?q=80&w=2070&auto=format&fit=crop", // Business school / meeting
                link: "https://youtu.be/xEt0_TFvKqc?si=rnlyE-5F28CLO2Ea"
            },
            {
                id: "4",
                title: "Innovating for a Greener India: Chara CEO Bhakta Keshavachar",
                views: "141 views",
                time: "1 year ago",
                duration: "31:47",
                thumbnail: "https://images.unsplash.com/photo-1497435334941-8c899ee9e8e9?q=80&w=2074&auto=format&fit=crop", // Green tech / innovation
                link: "https://youtu.be/xEt0_TFvKqc?si=rnlyE-5F28CLO2Ea"
            },
            {
                id: "5",
                title: "The Decline of Dunzo!... What Happened? | Startup Case Study",
                views: "480K views",
                time: "2 years ago",
                duration: "7:59",
                thumbnail: "https://images.unsplash.com/photo-1616400619175-5beda3a17896?q=80&w=2070&auto=format&fit=crop", // Delivery / logistics
                link: "https://youtu.be/xEt0_TFvKqc?si=rnlyE-5F28CLO2Ea"
            },
            {
                id: "6",
                title: "Building the Future of Indian Infrastructure",
                views: "120K views",
                time: "3 weeks ago",
                duration: "14:20",
                thumbnail: "https://images.unsplash.com/photo-1596525737671-55077bd55d4c?q=80&w=2070&auto=format&fit=crop", // Construction / bridge
                link: "https://youtu.be/xEt0_TFvKqc?si=rnlyE-5F28CLO2Ea"
            }
        ]
    },
    about: {
        heading: "Hi, I’m Himanshu.",
        bio: [
            "I’m a creative strategist and video producer with 6+ years of experience building content for brands, startups, and creators.",
            "My work sits at the intersection of storytelling, design, and business — where content isn’t just engaging, but strategic.",
            "From leading studios to scaling creator IPs, I focus on building systems that make great content repeatable."
        ],
        features: [
            "6+ years in creative leadership",
            "YouTube & long-form specialist",
            "Storytelling + performance mindset",
            "Team & operations management",
            "Content systems over one-off virality",
        ],
    },
    contact: {
        heading: "Let’s Build Something With Content at Its Core.",
        email: "contact@himanshudadhich.com",
        socials: {
            youtube: "#",
            instagram: "#",
            linkedin: "https://www.linkedin.com/in/himanshudadhich30/",
        },
    },
};
