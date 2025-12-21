import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { config } from "../config";
import { images } from "../images";


export function Hero() {
    const { hero } = config;

    return (
        <section className="relative min-h-screen flex items-center pt-20 px-6 md:px-12 overflow-hidden bg-background">
            {/* Full-width Background Image */}
            <div className="absolute inset-0 z-0">
                <img
                    src={images.hero.background}
                    alt="Background"
                    className="w-full h-full object-cover opacity-30"
                />
                <div className="absolute inset-0 bg-gradient-to-b from-background via-background/90 to-background" />
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(212,175,55,0.1),transparent_50%)]" />
            </div>

            {/* Ambient Background Glows */}
            <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_top_right,rgba(212,175,55,0.05),transparent_40%)] pointer-events-none z-1" />

            <div className="container mx-auto max-w-7xl grid grid-cols-1 lg:grid-cols-2 gap-12 items-center relative z-10">
                {/* Left: Text Content */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className="space-y-8"
                >
                    <div className="space-y-2">
                        <h1 className="text-5xl md:text-6xl font-bold tracking-tighter text-primary font-mono">
                            {hero.heading}
                        </h1>
                        <h2 className="text-xl md:text-base  text-secondary font-mono">
                            {hero.subHeading}
                        </h2>
                    </div>

                    <p className="text-lg text-secondary/80 max-w-md leading-relaxed font-mono">
                        {hero.body}
                    </p>

                    <div className="flex flex-wrap gap-4 pt-4">
                        <a href={hero.links.primary} className="group flex items-center gap-2 px-8 py-4 bg-white text-black rounded-full font-bold hover:bg-neutral-200 transition-all hover:scale-105 shadow-xl">
                            {hero.buttons.primary}
                            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                        </a>
                        <a href={hero.links.secondary} className="group flex items-center gap-2 px-8 py-4 border border-white/20 rounded-full text-white hover:border-accent hover:text-accent transition-all hover:bg-white/5">
                            {hero.buttons.secondary}
                        </a>
                    </div>
                </motion.div>

                {/* Right: 3D Scene */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 1.2, delay: 0.4, ease: "easeOut" }}
                    className="relative aspect-square lg:aspect-[5/6] w-full"
                >

                    <img src={images.hero.profile} alt="Background" className=" w-full h-full object-cover  rounded-xl" />
                    {/* <HeroScene /> */}

                    {/* Floating Details */}
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] pointer-events-none">
                        <div className="absolute top-0 right-0 w-64 h-64 bg-accent/5 blur-[120px] rounded-full animate-pulse" />
                        <div className="absolute bottom-0 left-0 w-64 h-64 bg-primary/5 blur-[120px] rounded-full animate-pulse" style={{ animationDelay: "1s" }} />
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
