import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { config } from "../config";
import { cn } from "../lib/utils";

export function WhatIDo() {
    const { whatIDo } = config;

    return (
        <section className="py-24 px-6 md:px-12 bg-surface">
            <div className="container mx-auto max-w-7xl">
                <div className="mb-16">
                    <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">What I Do</h2>
                    <div className="w-20 h-1 bg-accent/50 rounded-full"></div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {whatIDo.map((item, index) => {
                        const Icon = item.icon;
                        return (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                                className="group relative p-8 rounded-2xl bg-background border border-white/5 hover:border-accent/30 transition-all duration-300 hover:-translate-y-1"
                            >
                                {/* Hover Gradient */}
                                <div
                                    className={cn(
                                        "absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl bg-gradient-to-br pointer-events-none",
                                        item.gradient
                                    )}
                                />

                                <div className="relative z-10">
                                    <div className="w-12 h-12 bg-surface rounded-xl flex items-center justify-center mb-6 text-accent group-hover:scale-110 transition-transform duration-300">
                                        <Icon className="w-6 h-6" />
                                    </div>

                                    <h3 className="text-xl font-bold text-white mb-4">{item.title}</h3>
                                    <p className="text-secondary mb-8 min-h-[5rem]">{item.body}</p>

                                    <a href={item.link} className="flex items-center gap-2 text-sm font-medium text-white group-hover:text-accent transition-colors">
                                        {item.cta.replace(" →", "")}
                                        <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                                    </a>
                                </div>
                            </motion.div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
