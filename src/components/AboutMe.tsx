import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";
import { config } from "../config";

export function AboutMe() {
    const { about } = config;

    return (
        <section className="py-24 px-6 md:px-12 bg-background border-t border-white/5">
            <div className="container mx-auto max-w-7xl grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                <div className="order-2 lg:order-1 space-y-8">
                    <h2 className="text-3xl md:text-5xl font-bold text-white mb-8">{about.heading}</h2>

                    <div className="space-y-6">
                        {about.bio.map((paragraph, i) => (
                            <p key={i} className="text-lg text-secondary leading-relaxed">
                                {paragraph}
                            </p>
                        ))}
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-4">
                        {about.features.map((feature, i) => (
                            <div key={i} className="flex items-center gap-3 text-white/80">
                                <CheckCircle2 className="w-5 h-5 text-accent flex-shrink-0" />
                                <span className="text-sm">{feature}</span>
                            </div>
                        ))}
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
                            <span className="text-secondary/20 uppercase tracking-widest">[ Portrait Image ]</span>
                        </div>
                        <div className="absolute inset-0 bg-gradient-to-tr from-accent/10 to-transparent pointer-events-none mix-blend-overlay"></div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
