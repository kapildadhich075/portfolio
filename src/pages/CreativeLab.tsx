import { useEffect } from "react";
import { ArrowDown, ArrowUpRight, Check, Plus, X } from "lucide-react";
import { Navbar } from "../components/Navbar";
import { Contact } from "../components/Contact";
import { config } from "../config";

const weeks = [
    {
        number: "01", title: "Positioning & creative voice", label: "FIND YOUR POINT OF VIEW",
        description: "Look closely at the work you make and the perspective behind it. Define a direction that feels specific to you, with enough room to keep exploring.",
        focus: ["Audit of your current work", "The Creative POV Matrix", "Finding stories in ordinary places"],
        takeaway: "A clearer creative direction and a set of ideas to develop.",
    },
    {
        number: "02", title: "Storytelling & scripting architecture", label: "GIVE THE STORY STRUCTURE",
        description: "Build a narrative that gives people a reason to keep watching. Work through the script, pacing, and emotional choices that carry an idea from the opening to the final frame.",
        focus: ["Scriptwriting for video", "Pacing and retention rhythm", "Emotional tone and soundscapes"],
        takeaway: "A script and story structure ready to take into production.",
    },
    {
        number: "03", title: "Lean production & editorial craft", label: "MAKE WITH WHAT YOU HAVE",
        description: "Make deliberate choices with accessible gear. Explore shot selection, lighting, editing rhythm, and the way colour and sound change the feeling of a film.",
        focus: ["Camera and lighting essentials", "The editorial edit workflow", "Colour grading and sound design"],
        takeaway: "A production and editing workflow you can use on your next project.",
    },
    {
        number: "04", title: "Packaging, pricing & the creator business", label: "BUILD A PRACTICE THAT LASTS",
        description: "Work out how to explain the value of your craft, shape a clear offer, and have better conversations with clients. Discuss pricing, pitching, and protecting your creative scope.",
        focus: ["Structuring creative service packages", "Attracting and approaching clients", "Retainers and fixed-scope projects"],
        takeaway: "A service offer, pricing approach, and plan for client conversations.",
    },
];
const goodFit = [
    "You make videos or films and want to develop a more focused creative practice.",
    "You want to build an audience and client relationships around the work you care about.",
    "You’re ready for direct feedback on your scripts, edits, and service offerings.",
    "You value craft and are willing to film, write, edit, and revise.",
];
const notFit = [
    "You’re looking for guaranteed virality, quick income, or automated content shortcuts.",
    "You want to watch the sessions without making or revising work of your own.",
    "You cannot set aside 4 to 5 hours each week for live sessions and assignments.",
];
const applicationUrl = `mailto:${config.contact.email}?subject=${encodeURIComponent("TLR Creative Lab: Cohort 01 application")}&body=${encodeURIComponent("Hi Himanshu,\n\nI’d like to apply for Cohort 01 at TLR Creative Lab.\n\nName:\nPortfolio or social links:\nTell me about your current creative work:\nWhat would you like to work on during the cohort?\nCan you commit 4 to 5 hours each week?\n\nPlease share the start date, session timings, and fee details.\n\nThank you!")}`;
const bookingUrl = "https://calendly.com/himanshud30/30min";

function CohortActions() {
    return <div className="cohort-actions"><a className="cohort-apply" href={applicationUrl}>Apply for Cohort 01 <ArrowUpRight size={18} /></a><a className="cohort-call" href={bookingUrl} target="_blank" rel="noopener noreferrer">Book a call <ArrowUpRight size={17} /><span className="sr-only"> (opens in a new tab)</span></a></div>;
}

export function CreativeLab() {
    useEffect(() => { window.scrollTo(0, 0); }, []);
    return <>
        <Navbar />
        <div className="lab-page cohort-page">
            <header className="page-shell cohort-hero">
                <div className="cohort-topline"><span className="eyebrow">TLR CREATIVE LAB</span><span className="cohort-open"><span aria-hidden="true" />COHORT 01 APPLICATIONS OPEN</span></div>
                <div className="cohort-hero-grid"><div><p className="cohort-kicker">CRAFT. STRUCTURE. A PRACTICE OF YOUR OWN.</p><h1>Learn the systems<br />behind <span>7 years</span><br />of creative experience.</h1><p className="cohort-summary">A 4-week live cohort for early-stage creators and filmmakers who want to turn their creative practice into a focused, sustainable business. Real projects, a clear process, and direct feedback.</p><CohortActions /><p className="cohort-action-note">Limited to 15 creators. Applications open in your email app.</p></div><aside className="cohort-note" aria-label="Cohort overview"><span className="eyebrow">THE FIRST COHORT</span><div className="cohort-edition">01<span>/ CREATIVE LAB</span></div><p>Make better work.<br />Build a way to keep making it.</p><div className="cohort-note-bottom"><span>WITH HIMANSHU DADHICH</span><a href="#curriculum" aria-label="Explore the curriculum"><ArrowDown size={23} /></a></div></aside></div>
                <dl className="cohort-facts">{[{label:"Format",value:"4 weeks live"},{label:"Cohort size",value:"Max 15 creators"},{label:"Sessions",value:"2 live sessions a week"},{label:"Outcome",value:"Your Creator OS"}].map(item => <div key={item.label}><dt>{item.label}</dt><dd>{item.value}</dd></div>)}</dl>
            </header>

            <section id="curriculum" className="cohort-curriculum section-space" aria-labelledby="curriculum-heading"><div className="page-shell"><div className="cohort-section-heading"><div><p className="eyebrow">THE CURRICULUM</p><h2 id="curriculum-heading">Four weeks.<br />A stronger foundation.</h2></div><p>Each week tackles a different part of your practice. Start with your point of view, develop the work, and finish with a clearer way to offer it to clients.</p></div><div className="cohort-weeks">{weeks.map(week => <article className="cohort-week" key={week.number}><div className="cohort-week-number"><span>WEEK</span>{week.number}</div><div className="cohort-week-copy"><p className="eyebrow">{week.label}</p><h3>{week.title}</h3><p>{week.description}</p></div><div className="cohort-week-focus"><h4>Focus areas</h4><ul>{week.focus.map(item => <li key={item}><Plus size={14} aria-hidden="true" />{item}</li>)}</ul><p className="cohort-takeaway"><span>WHAT YOU’LL WORK TOWARDS</span>{week.takeaway}</p></div></article>)}</div></div></section>

            <section className="page-shell cohort-outcome section-space" aria-labelledby="outcome-heading"><div><p className="eyebrow">YOUR CREATOR OS</p><h2 id="outcome-heading">A working system.<br />Built around you.</h2></div><div><p>Your Creator OS is the set of decisions and working documents you develop through the cohort: your creative direction, a story structure, a production workflow, and a service offer.</p><p>The aim is to leave with a process you can return to when you’re planning a film, reviewing an edit, or speaking with a potential client.</p><div className="cohort-outcome-tags"><span>Creative direction</span><span>Story structure</span><span>Production workflow</span><span>Service offering</span></div></div></section>

            <section className="cohort-fit-section section-space" aria-labelledby="fit-heading"><div className="page-shell"><div className="cohort-section-heading"><div><p className="eyebrow">FINDING THE RIGHT FIT</p><h2 id="fit-heading">Bring your work.<br />Be ready to work on it.</h2></div><p>Plan for 4 to 5 hours each week across live sessions and assignments. There’s space for feedback, but the progress comes from putting it into practice.</p></div><div className="cohort-fit-grid"><article><h3>This is for you if:</h3><ul>{goodFit.map(item => <li key={item}><Check size={18} aria-hidden="true" /><span>{item}</span></li>)}</ul></article><article><h3>This may not be the right fit if:</h3><ul>{notFit.map(item => <li key={item}><X size={18} aria-hidden="true" /><span>{item}</span></li>)}</ul></article></div></div></section>

            <section className="page-shell cohort-host section-space" aria-labelledby="host-heading"><img src="/assets/hero-optimized.jpg" alt="Himanshu Dadhich" width="1280" height="1920" loading="lazy" /><div><p className="eyebrow">YOUR COHORT GUIDE</p><h2 id="host-heading">Hi, I’m Himanshu.</h2><p>I’m a creative strategist, content creator, and co-founder of TLR Studios. This cohort brings together what I’ve learned through 7 years of working on stories, videos, and creative projects.</p><p>We’ll work on the decisions behind the finished piece: what to say, how to make it, and how to build a practice around it. I’ll bring direct feedback to your scripts, edits, and the way you present your work.</p></div></section>

            <section className="cohort-enrol section-space" aria-labelledby="apply-heading"><div className="page-shell"><div><p className="eyebrow">COHORT 01 / NEXT COHORT STARTS SOON</p><h2 id="apply-heading">Ready to build your<br />creative practice?</h2><p>We review every application personally to keep the group small and make sure the cohort is a good fit. Share a little about your work, or book an intro call to talk it through.</p><CohortActions /><p className="cohort-enrol-note">Apply by email with a link to your work and what you’d like to learn. An application or call does not confirm a place.</p></div><aside><span className="eyebrow">BEFORE YOU COMMIT</span><p>The exact start date, session timings, and fee are still to be announced. Ask about these when you apply or book a call.</p><span>4 weeks · 15 creators · 2 live sessions a week</span></aside></div></section>
        </div>
        <Contact />
    </>;
}
