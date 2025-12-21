import { motion } from "framer-motion";
import { config } from "../config";
import { cn } from "../lib/utils";
import { Calendar } from "lucide-react";


export function WorkWithMe() {
    const { workWithMe, contact } = config;

    return (
        <section id="work-with-me" className="py-24 px-6 md:px-12 bg-surface">
            <div className="container mx-auto max-w-7xl">
                <div className="text-center max-w-2xl mx-auto mb-16">
                    <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">Work With Me</h2>
                    <p className="text-secondary text-lg">Choose how deeply you want to build your content system.</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {workWithMe.map((plan, index) => (
                        <motion.div
                            key={plan.id}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className={cn(
                                "bg-background p-6 rounded-2xl border flex flex-col relative group hover:border-accent/30 transition-all duration-300",
                                plan.popular ? "border-accent/40 lg:scale-105 z-10 shadow-2xl shadow-accent/5" : "border-white/5"
                            )}
                        >
                            {plan.popular && (
                                <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-accent text-black text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-widest">
                                    Most Chosen
                                </div>
                            )}

                            <div className="mb-6">
                                <span className="text-xs text-accent opacity-50 block mb-2">{plan.id}</span>
                                <h3 className="text-xl font-bold text-white leading-tight">{plan.title}</h3>
                            </div>

                            <div className="mb-6">
                                <p className="text-xs text-secondary font-medium uppercase tracking-wider mb-2">Best for:</p>
                                <p className="text-sm text-secondary leading-relaxed">{plan.bestFor}</p>
                            </div>

                            <ul className="space-y-3 mb-8 flex-grow">
                                {plan.features.map((feature, i) => (
                                    <li key={i} className="text-sm text-secondary/80 flex gap-2">
                                        <div className="w-1 h-1 rounded-full bg-accent/40 mt-2 shrink-0" />
                                        {feature}
                                    </li>
                                ))}
                            </ul>

                            <div className="pt-6 border-t border-white/5 space-y-4 text-center">
                                <div>
                                    <p className="text-[10px] text-secondary/40 uppercase tracking-widest mb-1">Outcome</p>
                                    <p className="text-xs text-white font-medium">{plan.outcome}</p>
                                </div>
                                <div className="flex justify-between items-center bg-white/5 p-3 rounded-lg">
                                    <div className="text-left">
                                        <p className="text-[8px] text-secondary/40 uppercase tracking-widest">Investment</p>
                                        <p className="text-xs text-white font-bold">{plan.investment}</p>
                                    </div>
                                    <div className="text-right border-l border-white/10 pl-3">
                                        <p className="text-[8px] text-secondary/40 uppercase tracking-widest">Duration</p>
                                        <p className="text-xs text-white/60">{plan.duration}</p>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>

                <div className="text-center mt-16 flex gap-4 justify-center">
                    <a href="#contact" className="inline-flex h-14 items-center justify-center px-10 rounded-full bg-white text-black font-bold hover:bg-neutral-200 transition-all hover:scale-105 shadow-xl">
                        Send Me an Inquiry
                    </a>
                    <a
                        href={contact.calendly}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-3 px-6 py-4 bg-accent/10 border border-accent/20 rounded-xl text-accent hover:bg-accent/20 transition-all group"
                    >
                        <Calendar className="w-5 h-5 group-hover:scale-110 transition-transform" />
                        <span className="font-bold uppercase tracking-widest text-xs">Book a Strategy Call</span>
                    </a>
                </div>
            </div>
        </section>
    );
}
