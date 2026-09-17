import { motion } from "framer-motion";
import { config } from "../config";
import { images } from "../images";

export function AboutMe() {
    const { about } = config;

    return (
        <section id="about" className="py-24 px-6 md:px-12 bg-background border-t border-black/10">
            <div className="container mx-auto max-w-7xl grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                <div className="space-y-12">
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                    >
                        <h2 className="text-3xl md:text-5xl font-bold text-primary mb-8">{about.heading}</h2>
                        <div className="space-y-6">
                            {about.bio.map((para, i) => (
                                <p key={i} className="text-lg text-secondary leading-relaxed">
                                    {para}
                                </p>
                            ))}
                        </div>
                    </motion.div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12 pt-8 border-t border-black/10">
                        <div className="space-y-6">
                            <h3 className="text-primary font-bold uppercase tracking-wider text-sm">I care deeply about:</h3>
                            <ul className="space-y-4">
                                {about.values.map((value, i) => (
                                    <li key={i} className="flex items-center gap-3 text-secondary text-lg">
                                        <div className="w-1.5 h-1.5 rounded-full bg-accent" />
                                        {value}
                                    </li>
                                ))}
                            </ul>
                        </div>

                        <div className="space-y-6">
                            <h3 className="text-primary font-bold uppercase tracking-wider text-sm">What I bring to the table:</h3>
                            <ul className="space-y-4">
                                {about.skills.map((skill, i) => (
                                    <li key={i} className="flex items-center gap-3 text-secondary text-lg">
                                        <div className="w-1.5 h-1.5 rounded-full bg-white/40" />
                                        {skill}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>

                <div className="order-1 lg:order-2">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        className="aspect-[3/4] rounded-2xl overflow-hidden bg-surface relative"
                    >
                        {/* Image Placeholder */}
                        <div className="absolute inset-0 bg-neutral-800 flex items-center justify-center">
                            <img src={images.hero.background} alt="" />
                        </div>
                        <div className="absolute inset-0 bg-gradient-to-tr from-accent/10 to-transparent pointer-events-none mix-blend-overlay"></div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
