import { Play, Brain, Settings } from "lucide-react";
import { images } from "./images";

export const config = {
    studio: { name: "TLR Studios", url: "https://tlr-website.vercel.app/" },
    hero: {
        heading: "HIMANSHU DADHICH",
        subHeading: "Creative Strategist • Content Creator • Co-founder, TLR Studios",
        body: "I’m a creative strategist and content creator. This is a collection of my work, the stories I make, and the projects I’ve been part of.",
        buttons: {
            primary: "View Work",
            secondary: "Explore TLR services",
        },
        links: {
            primary: "/content",
            secondary: "https://tlr-website.vercel.app/",
            content: "/content",
        },
    },
    essence: {
        heading: "Strategy is my work. Creating is part of who I am.",
        body: "My work takes me across ideas, scripts, shoots, and edits. Alongside the projects I work on with others, I create and share content of my own. This site brings those parts of my work together.",
        stats: [
            { label: "Years Experience", value: "7" },
            { label: "Studio", value: "TLR" },

        ],
    },
    showreel: {
        title: "Take a look at the work.",
        description: "Browse brand films, interviews, explainers, and editing work, collected by format.",
        stats: "6 projects • ~12 minutes",
    },
    whatIDo: [
        {
            title: "YouTube & Content Strategy",
            body: "I help you decide what to make, who it is for, and how to structure it. That includes channel planning, recurring formats, scripts, and publishing schedules.",
            cta: "Explore Content Work →",
            link: "/content",
            icon: Play,
            gradient: "from-blue-500/10 to-purple-500/10",
        },
        {
            title: "Creative direction",
            body: "I work on the message, the story, and the decisions that shape a video. My project archive shows how that thinking carries through into the work.",
            cta: "Explore the projects →",
            link: "/content",
            icon: Brain,
            gradient: "from-amber-500/10 to-orange-500/10",
        },
        {
            title: "Video production",
            body: "For projects that need a production team, I work with TLR Studios. We bring together scripting, filming, editing, and delivery.",
            cta: "Explore TLR services →",
            link: "https://tlr-website.vercel.app/",
            icon: Settings,
            gradient: "from-emerald-500/10 to-teal-500/10",
        },
    ],
    signatureWork: [
        {
            id: "creator-scaling",
            title: "YouTube & podcasts",
            subtitle: "Strategy • Production • Growth",
            image: images.projects.creatorScaling,
            link: "/work/creator-scaling",
            description: "Planning and producing long-form videos, interviews, and recurring creator formats.",
            details: {
                bgGradient: "from-orange-500/10 to-red-500/10",
                stats: [
                    { label: "Format", value: "Long-form" },
                    { label: "Work", value: "YouTube & podcasts" }
                ],
                overview: "Worked with creators on long-form conversations, podcasts, and YouTube videos, from shaping a format to getting episodes ready to publish.",
                challenge: "Publishing regularly while giving each conversation enough time and attention.",
                solution: "Developed episode formats, opening sequences, and editing workflows around each creator’s voice.",
                impact: "The work brought format planning, production, and editing into a shared process for recurring episodes."
            }
        },
        {
            id: "brand-films",
            title: "Brand Films & Campaigns",
            subtitle: "Story • Design • Performance",
            image: images.projects.brandFilms,
            link: "/work/brand-films",
            description: "Brand films, product explainers, and campaign videos for different audiences and platforms.",
            details: {
                bgGradient: "from-blue-500/10 to-purple-500/10",
                stats: [
                    { label: "Industries", value: "Fintech, Lifestyle, Education" },
                    { label: "Deliverables", value: "Films & explainers" }
                ],
                overview: "Produced brand films, explainers, onboarding videos, and ads for startups and established businesses.",
                challenge: "Turning a detailed business brief into a video with one clear message.",
                solution: "Started with the audience and the message, then developed the script, visual approach, and edits for each platform.",
                impact: "Delivered films and supporting edits for brand campaigns, product communication, and customer onboarding."
            }
        },
        {
            id: "tlr",
            title: "The Lecture Room",
            subtitle: "Co-Founder • Strategy • Operations",
            image: images.projects.tlr,
            link: "/work/tlr",
            description: "The studio I co-founded to work on content strategy and video production.",
            details: {
                bgGradient: "from-emerald-500/10 to-teal-500/10",
                stats: [
                    { label: "Role", value: "Co-founder" },
                    { label: "Focus", value: "Strategy & production" }
                ],
                overview: "Co-founded The Lecture Room, also known as TLR Studios, to bring content planning and production under one roof.",
                challenge: "Keeping projects organised while the team handles different briefs, schedules, and revisions.",
                solution: "Set up shared briefs, production workflows, and review stages so the team could work from a clear plan.",
                impact: "My role spans creative direction, project planning, and the day-to-day work of running the studio."
            }
        },
        {
            id: "bluestone",
            title: "Creative direction for BlueStone",
            subtitle: "Creative Strategy • Content Systems • AI Prototyping",
            image: images.playlist.bluestone,
            link: "/work/bluestone",
            description: "Creative direction, video content, and visual prototyping for a jewellery brand.",
            details: {
                bgGradient: "from-indigo-500/10 to-cyan-500/10",
                stats: [
                    { label: "Duration", value: "4 Months" },
                    { label: "Location", value: "On-site (BLR)" },
                    { label: "Role", value: "Freelance" },
                    { label: "Focus", value: "Creative Strategy" }
                ],
                overview: "Worked on creative direction and content development for BlueStone across brand films, social videos, and influencer campaigns. The role also included using AI tools to explore visual concepts before production.",
                challenge: "Creating content for different jewellery buyers and campaign needs while keeping a consistent visual style.",
                solution: "Organised ideas around brand stories, product communication, influencer content, and store activations. Used scripts, storyboards, and AI-assisted prototypes to align the team before filming and editing.",
                impact: "Contributed to product and seasonal campaigns, influencer content, and a visual prototyping process for reviewing ideas before production."
            }
        }
    ],
    fdiProject: {
        heading: "The FDI Project",
        subHeading: "A cinematic explainer series on India’s growth.",
        description: "A research-led series about infrastructure, investment, and the systems shaping everyday life in India.",
        themes: ["Cities", "Infrastructure", "Digital Public Goods", "Investment", "India’s Future"],
        episodes: [
            {
                title: "FDI Explained : Episode 1",
                tags: ["Cities", "Investment", "India’s Future"],
                image: images.fdi.episode1,
            },
            {
                title: "FDI Explained : Episode 2",
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
                title: "लड़के भी हारते हैं इश्क़ में (MenToo): Poetry by Jai Ojha",
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
            "I’m Himanshu, a creative strategist, content creator, and co-founder of TLR Studios. I’ve spent seven years working across storytelling and video.",
            "I like getting close to a subject, finding the story, and working out how to tell it on screen. Here, I keep a record of the projects I’ve contributed to and make space for my own creative work.",
            "I share my own content on Instagram and YouTube. For content strategy and production services, my agency, TLR Studios, brings the team and the process together."
        ],
        values: [
            "A clear brief",
            "Care in the details",
            "Honest feedback"
        ],
        skills: [
            "YouTube and long-form video",
            "Script and story development",
            "Creative direction",
            "Production planning",
            "Team coordination"
        ],
    },
    contact: {
        heading: "Let’s stay in touch.",
        email: "himanshud30@gmail.com",
        placeholder: "Say hello, share an idea, or get in touch about a creator collaboration.",
        socials: {
            youtube: "https://www.youtube.com/@himanshudadhich2785",
            instagram: "https://www.instagram.com/himanshud30",
            linkedin: "https://www.linkedin.com/in/himanshudadhich30/",
        },
    },
};

