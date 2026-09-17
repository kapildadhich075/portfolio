import { config } from "../config";
export function AboutIntro() {
    return <section id="about" className="about-intro px-6 md:px-12 py-24 border-t border-black/10">
        <div className="max-w-7xl mx-auto"><div className="editorial-heading"><span className="eyebrow">BEHIND THE WORK</span><h2>The person<br />behind the work.</h2></div>
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-24 mt-14"><div className="space-y-5 text-secondary leading-relaxed">{config.about.bio.map((text, i) => <p key={i}>{text}</p>)}</div><div className="grid sm:grid-cols-2 gap-10">{[{title:"What matters to me", items:config.about.values},{title:"What I bring",items:config.about.skills}].map(group => <div key={group.title}><h3 className="font-semibold mb-5">{group.title}</h3><ul className="space-y-3 text-sm text-secondary">{group.items.map(item => <li className="border-b border-black/10 pb-3" key={item}>{item}</li>)}</ul></div>)}</div></div></div>
    </section>;
}
