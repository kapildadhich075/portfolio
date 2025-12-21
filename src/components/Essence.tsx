import { motion } from "framer-motion";
import { PenTool, MapPin, Camera } from "lucide-react";
import { config } from "../config";
import { images } from "../images";

export function Essence() {
    const { essence } = config;

    return (
        <section className="relative py-24 px-6 md:px-12 bg-background border-t border-white/5 overflow-hidden">
            {/* Subtle India Map Background (Conceptual CSS Shape) */}
            <div className="absolute right-0 top-1/2 -translate-y-1/2 w-[600px] h-[600px] opacity-[0.02] pointer-events-none">
                <svg viewBox="0 0 200 200" className="w-full h-full fill-current text-white">
                    {/* Simplified abstract path representing map shapes */}
                    <path d="M100,20 C120,20 150,50 150,100 C150,150 120,180 100,180 C80,180 50,150 50,100 C50,50 80,20 100,20 Z" />
                </svg>
            </div>

            <div className="container mx-auto max-w-7xl grid grid-cols-1 lg:grid-cols-2 gap-16 items-center relative z-10">
                <div className="space-y-8">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-3xl md:text-5xl font-bold leading-tight text-white"
                    >
                        {essence.heading}
                    </motion.h2>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="text-lg text-secondary leading-relaxed"
                    >
                        {essence.body}
                    </motion.p>

                    <motion.div
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="flex gap-8 pt-4"
                    >
                        {/* Minimal Icons Row */}
                        <div className="flex gap-6 text-accent">
                            <PenTool className="w-6 h-6 opacity-80" />
                            <Camera className="w-6 h-6 opacity-80" />
                            <MapPin className="w-6 h-6 opacity-80" />
                        </div>
                    </motion.div>
                </div>

                <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    className="relative"
                >
                    <div className="aspect-[3/4] rounded-xl overflow-hidden bg-surface border border-white/5 relative group">
                        <div className="absolute inset-0 bg-neutral-900 flex items-center justify-center">
                            <video
                                src={images.hero.himanshuVideo}
                                autoPlay
                                muted
                                loop
                                playsInline
                                className="w-full h-full object-cover"
                            />
                        </div>
                        {/* Overlay Gradient */}
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                    </div>

                    {/* Floating Stats Card */}
                    <div className="absolute -bottom-6 -left-6 bg-surface/90 backdrop-blur border border-white/10 p-6 rounded-xl shadow-2xl">
                        <div className="flex gap-8">
                            {essence.stats.map((stat, i) => (
                                <div key={i} className="max-w-[150px]">
                                    <div className="text-xl font-bold text-white leading-tight mb-1">{stat.value}</div>
                                    <div className="text-[10px] text-secondary uppercase tracking-widest">{stat.label}</div>
                                </div>
                            ))}
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
