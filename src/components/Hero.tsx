import { motion } from "framer-motion";
import { ArrowRight, Play } from "lucide-react";
import { config } from "../config";

export function Hero() {
    const { hero } = config;

    return (
        <section className="relative min-h-screen flex items-center pt-20 px-6 md:px-12 overflow-hidden bg-background">
            {/* Background Gradient */}
            <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_top_right,rgba(212,175,55,0.05),transparent_40%)] pointer-events-none" />

            <div className="container mx-auto max-w-7xl grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                {/* Left: Text Content */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className="space-y-8"
                >
                    <div className="space-y-2">
                        <h1 className="text-5xl md:text-7xl font-bold tracking-tighter text-primary">
                            {hero.heading}
                        </h1>
                        <h2 className="text-xl md:text-2xl text-secondary font-medium">
                            {hero.subHeading}
                        </h2>
                    </div>

                    <p className="text-lg text-secondary/80 max-w-md leading-relaxed">
                        {hero.body}
                    </p>

                    <div className="flex flex-wrap gap-4 pt-4">
                        <button className="group flex items-center gap-2 px-6 py-3 bg-primary text-background rounded-full font-medium hover:bg-white/90 transition-all">
                            <Play className="w-4 h-4 fill-current" />
                            {hero.buttons.primary}
                        </button>
                        <button className="group flex items-center gap-2 px-6 py-3 border border-secondary/20 rounded-full text-primary hover:border-accent hover:text-accent transition-all">
                            {hero.buttons.secondary}
                            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                        </button>
                    </div>
                </motion.div>

                {/* Right: Visual Placeholder */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
                    className="relative aspect-video lg:aspect-[5/6] w-full rounded-2xl overflow-hidden bg-surface border border-white/5 shadow-2xl group"
                >
                    {/* Placeholder for video/image */}
                    <img src="/src/assets/himanshu_hero.jpg" alt="" />

                    {/* Scanline/Texture Overlay */}
                    <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 pointer-events-none mix-blend-overlay"></div>

                    {/* Glow effect */}
                    <div className="absolute -inset-1 bg-accent/20 blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />
                </motion.div>
            </div>
        </section>
    );
}
