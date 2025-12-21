import { useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowLeft, ArrowRight, Clock, Users } from "lucide-react";
import { config } from "../config";
import { cn } from "../lib/utils";

export function CaseStudy() {
    const { id } = useParams();
    const work = config.signatureWork.find((w) => w.id === id);

    // Scroll to top on mount
    useEffect(() => {
        window.scrollTo(0, 0);
    }, [id]);

    if (!work || !work.details) {
        return (
            <div className="min-h-screen flex items-center justify-center bg-background text-white">
                <div className="text-center">
                    <h1 className="text-2xl font-bold mb-4">Case Study Not Found</h1>
                    <Link to="/" className="text-accent hover:underline">Return Home</Link>
                </div>
            </div>
        );
    }

    const { details } = work;

    return (
        <div className="bg-background min-h-screen text-primary selection:bg-accent selection:text-black pb-24">
            {/* Navigation */}
            <nav className="fixed top-0 left-0 right-0 z-50 px-6 py-6 flex items-center justify-between">
                <Link
                    to="/"
                    className="flex items-center gap-2 text-sm font-medium text-white/50 hover:text-white transition-colors bg-black/20 backdrop-blur-md px-4 py-2 rounded-full border border-white/5"
                >
                    <ArrowLeft className="w-4 h-4" />
                    Back to Home
                </Link>
                <Link to="/" className="text-xl font-bold tracking-tighter text-primary hover:text-accent transition-colors">
                    HD.
                </Link>
            </nav>

            {/* Hero Header */}
            <header className="relative pt-40 pb-20 px-6 md:px-12 overflow-hidden">
                {/* Ambient Background */}
                <div className={cn("absolute inset-0 opacity-20 bg-gradient-to-b pointer-events-none", details.bgGradient)}></div>

                <div className="container mx-auto max-w-7xl relative z-10">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        className="max-w-4xl"
                    >
                        <div className="flex items-center gap-4 mb-6">
                            <span className="px-3 py-1 rounded-full border border-white/10 text-xs uppercase tracking-wider text-secondary bg-surface/50">
                                Case Study
                            </span>
                            <span className="text-secondary/50 text-sm">|</span>
                            <span className="text-secondary text-sm">{work.subtitle}</span>
                        </div>

                        <h1 className="text-4xl md:text-7xl font-bold text-white mb-8 leading-tight">
                            {work.title}
                        </h1>

                        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 border-t border-white/10 pt-8 mt-12">
                            {details.stats.map((stat, i) => (
                                <div key={i}>
                                    <div className="text-3xl font-bold text-white mb-1">{stat.value}</div>
                                    <div className="text-xs text-secondary uppercase tracking-wider">{stat.label}</div>
                                </div>
                            ))}
                        </div>
                    </motion.div>
                </div>
            </header>

            {/* Main Content */}
            <section className="px-6 md:px-12 py-12">
                <div className="container mx-auto max-w-7xl grid grid-cols-1 lg:grid-cols-12 gap-12">

                    {/* Left Column: Context */}
                    <div className="lg:col-span-4 space-y-12">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="p-6 rounded-2xl bg-surface border border-white/5"
                        >
                            <h3 className="text-lg font-bold text-white mb-4 flex items-center gap-2">
                                <Users className="w-4 h-4 text-accent" /> Client
                            </h3>
                            <p className="text-secondary/80 text-sm leading-relaxed">
                                Confidential / Direct Client
                            </p>
                        </motion.div>
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.1 }}
                            className="p-6 rounded-2xl bg-surface border border-white/5"
                        >
                            <h3 className="text-lg font-bold text-white mb-4 flex items-center gap-2">
                                <Clock className="w-4 h-4 text-accent" /> Timeline
                            </h3>
                            <p className="text-secondary/80 text-sm leading-relaxed">
                                4 Weeks (Strategy to Delivery)
                            </p>
                        </motion.div>
                    </div>

                    {/* Right Column: Narrative */}
                    <div className="lg:col-span-8 space-y-16">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                        >
                            <h2 className="text-2xl font-bold text-white mb-4">Overview</h2>
                            <p className="text-lg text-secondary leading-relaxed">
                                {details.overview}
                            </p>
                        </motion.div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.2 }}
                            >
                                <h2 className="text-2xl font-bold mb-4 text-red-400">The Challenge</h2>
                                <p className="text-secondary leading-relaxed">
                                    {details.challenge}
                                </p>
                            </motion.div>
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.3 }}
                            >
                                <h2 className="text-2xl font-bold mb-4 text-emerald-400">The Solution</h2>
                                <p className="text-secondary leading-relaxed">
                                    {details.solution}
                                </p>
                            </motion.div>
                        </div>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="bg-accent/5 p-8 rounded-2xl border border-accent/10"
                        >
                            <h2 className="text-2xl font-bold text-accent mb-4">The Impact</h2>
                            <p className="text-white/90 text-lg leading-relaxed">
                                {details.impact}
                            </p>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Visual Gallery Placeholder */}
            <section className="px-6 md:px-12 py-12">
                <div className="container mx-auto max-w-7xl">
                    <div className="aspect-video rounded-2xl bg-surface border border-white/5 overflow-hidden flex items-center justify-center relative group">
                        <span className="text-secondary/20 uppercase tracking-widest">[ Main Visual / Video Embed ]</span>
                        <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors"></div>
                    </div>
                    <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mt-4">
                        {[1, 2, 3].map((_, i) => (
                            <div key={i} className="aspect-square rounded-xl bg-surface border border-white/5 flex items-center justify-center">
                                <span className="text-secondary/10 uppercase tracking-widest text-xs">IMG_0{i + 1}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Next Project Footer */}
            <section className="mt-24 border-t border-white/5 pt-12 text-center">
                <Link to="/" className="inline-flex items-center gap-2 text-white hover:text-accent transition-colors">
                    <span className="uppercase tracking-widest text-sm">Next Project</span>
                    <ArrowRight className="w-4 h-4" />
                </Link>
            </section>
        </div>
    );
}
