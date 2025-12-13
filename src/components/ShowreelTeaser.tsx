import { motion } from "framer-motion";
import { Play } from "lucide-react";
import { Link } from "react-router-dom";
import { config } from "../config";

export function ShowreelTeaser() {
    const { playlist } = config;

    return (
        <section className="py-24 px-6 md:px-12 bg-background border-t border-white/5">
            <div className="container mx-auto max-w-7xl">
                <Link to="/content" className="block group relative">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.98 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        className="aspect-[21/9] w-full bg-surface rounded-2xl overflow-hidden border border-white/10 relative"
                    >
                        {/* Background (Simulated Video Cover) */}
                        <div className="absolute inset-0 bg-gradient-to-r from-neutral-900 via-neutral-800 to-neutral-900 group-hover:scale-105 transition-transform duration-700"></div>

                        {/* Overlay */}
                        <div className="absolute inset-0 bg-black/40 flex flex-col items-center justify-center gap-6 group-hover:bg-black/30 transition-colors">
                            <div className="w-20 h-20 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center group-hover:scale-110 transition-transform duration-300 border border-white/20">
                                <Play className="w-8 h-8 text-white fill-white ml-1" />
                            </div>

                            <div className="text-center">
                                <h2 className="text-3xl md:text-5xl font-bold text-white mb-2 tracking-tight">Showreel {new Date().getFullYear()}</h2>
                                <p className="text-white/70 text-lg uppercase tracking-widest font-medium">Watch the Highlights</p>
                            </div>
                        </div>

                        {/* Corner Label */}
                        <div className="absolute bottom-6 right-6 bg-black/60 backdrop-blur px-3 py-1.5 rounded-lg border border-white/10 text-xs font-mono text-white/80">
                            {playlist.videos.length} Videos • 12:00
                        </div>
                    </motion.div>
                </Link>
            </div>
        </section>
    );
}
