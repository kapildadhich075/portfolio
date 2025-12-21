import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { config } from "../config";
import { images } from "../images";

export function Hero() {
    const { hero, about } = config;

    return (
        <section id="about" className="relative min-h-screen flex items-center pt-32 pb-24 px-6 md:px-12 overflow-hidden bg-background">
            {/* Full-width Background Image */}
            <div className="absolute inset-0 z-0">
                <img
                    src={images.hero.background}
                    alt="Background"
                    className="w-full h-full object-cover opacity-20"
                />
                <div className="absolute inset-0 bg-gradient-to-b from-background via-background/80 to-background" />
            </div>

            <div className="container mx-auto max-w-7xl grid grid-cols-1 lg:grid-cols-12 gap-16 items-start relative z-10">
                {/* Left: Text Content and Details */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className="lg:col-span-7 space-y-12"
                >
                    <div className="space-y-4">
                        <div className="space-y-2">
                            <h1 className="text-5xl md:text-7xl font-bold tracking-tighter text-primary font-mono">
                                {hero.heading}
                            </h1>
                            <h2 className="text-xl md:text-2xl text-accent font-mono">
                                {hero.subHeading}
                            </h2>
                        </div>

                        <div className="space-y-6 pt-4">
                            {about.bio.map((para, i) => (
                                <p key={i} className="text-lg text-secondary/90 leading-relaxed font-mono max-w-2xl">
                                    {para}
                                </p>
                            ))}
                        </div>
                    </div>

                    {/* Values & Skills Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-8 border-t border-white/10">
                        <div className="space-y-4">
                            <h3 className="text-white font-bold uppercase tracking-wider text-xs font-mono">I care deeply about:</h3>
                            <ul className="space-y-3">
                                {about.values.map((value, i) => (
                                    <li key={i} className="flex items-center gap-3 text-secondary text-base font-mono">
                                        <div className="w-1 h-1 rounded-full bg-accent" />
                                        {value}
                                    </li>
                                ))}
                            </ul>
                        </div>

                        <div className="space-y-4">
                            <h3 className="text-white font-bold uppercase tracking-wider text-xs font-mono">What I bring to the table:</h3>
                            <ul className="space-y-3">
                                {about.skills.map((skill, i) => (
                                    <li key={i} className="flex items-center gap-3 text-secondary text-base font-mono">
                                        <div className="w-1 h-1 rounded-full bg-white/40" />
                                        {skill}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>

                    <div className="flex flex-wrap gap-4 pt-4">
                        <a href={hero.links.primary} className="group flex items-center gap-2 px-8 py-4 bg-white text-black rounded-full font-bold hover:bg-neutral-200 transition-all hover:scale-105 shadow-xl font-mono text-sm">
                            {hero.buttons.primary}
                            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                        </a>
                        <a href={hero.links.secondary} className="group flex items-center gap-2 px-8 py-4 border border-white/20 rounded-full text-white hover:border-accent hover:text-accent transition-all hover:bg-white/5 font-mono text-sm">
                            {hero.buttons.secondary}
                        </a>
                    </div>
                </motion.div>

                {/* Right: Portrait Image */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 1.2, delay: 0.2, ease: "easeOut" }}
                    className="lg:col-span-5 relative"
                >
                    <div className="aspect-[4/5] rounded-2xl overflow-hidden border border-white/5 relative bg-surface">
                        <img
                            src={images.hero.profile}
                            alt={hero.heading}
                            className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent" />
                    </div>

                    {/* Ambient Glows around image */}
                    <div className="absolute -top-12 -right-12 w-64 h-64 bg-accent/10 blur-[100px] pointer-events-none rounded-full" />
                    <div className="absolute -bottom-12 -left-12 w-64 h-64 bg-primary/5 blur-[100px] pointer-events-none rounded-full" />
                </motion.div>
            </div>
        </section>
    );
}

