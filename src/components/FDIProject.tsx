import { motion } from "framer-motion";
import { config } from "../config";

export function FDIProject() {
    const { fdiProject } = config;

    return (
        <section className="py-24 px-6 md:px-12 bg-surface overflow-hidden relative">
            {/* Background Accent */}
            <div className="absolute -left-20 top-0 w-96 h-96 bg-accent/5 rounded-full blur-3xl pointer-events-none" />

            <div className="container mx-auto max-w-7xl grid grid-cols-1 lg:grid-cols-2 gap-16">
                <div className="space-y-8">
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                    >
                        <span className="text-accent text-sm tracking-widest uppercase mb-4 block">Featured Series</span>
                        <h2 className="text-4xl md:text-6xl font-bold text-primary mb-6">
                            {fdiProject.heading}
                        </h2>
                        <h3 className="text-xl text-primary/90 font-medium mb-6">
                            {fdiProject.subHeading}
                        </h3>
                        <p className="text-secondary leading-relaxed text-lg mb-8">
                            {fdiProject.description}
                        </p>

                        <div className="space-y-4">
                            <h4 className="text-primary font-bold uppercase tracking-wider text-sm">Themes include:</h4>
                            <div className="flex flex-wrap gap-3">
                                {fdiProject.themes.map(theme => (
                                    <span key={theme} className="px-4 py-2 rounded-full border border-black/10 text-secondary text-sm hover:border-accent/50 transition-colors">
                                        {theme}
                                    </span>
                                ))}
                            </div>
                        </div>

                        <div className="pt-8 border-t border-black/10 mt-12">
                            <div className="flex items-center gap-4 text-sm text-secondary">
                                <div className="w-2 h-2 rounded-full bg-accent animate-pulse"></div>
                                Currently filming Season 1
                            </div>
                        </div>
                    </motion.div>
                </div>

                <div className="grid grid-cols-1 gap-6">
                    {fdiProject.episodes.map((ep, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, x: 20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.2 }}
                            className="flex gap-6 p-4 rounded-xl bg-background border border-black/10 hover:border-accent/30 transition-all cursor-pointer group"
                        >
                            <div className="w-32 aspect-video bg-neutral-800 rounded-lg flex-shrink-0 group-hover:scale-105 transition-transform overflow-hidden">
                                <img src={ep.image} alt={ep.title} className="w-full h-full object-cover" />
                            </div>
                            <div>
                                <h4 className="text-primary font-bold mb-2 group-hover:text-accent transition-colors">{ep.title}</h4>
                                <div className="flex flex-wrap gap-2">
                                    {ep.tags.map(tag => (
                                        <span key={tag} className="text-xs text-secondary bg-surface px-2 py-1 rounded-md border border-black/10">
                                            {tag}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
