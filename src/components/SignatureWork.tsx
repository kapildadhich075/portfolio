import { motion } from "framer-motion";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";
import { config } from "../config";

interface SignatureWorkProps {
    limit?: number;
}

export function SignatureWork({ limit }: SignatureWorkProps) {
    const { signatureWork } = config;
    const displayedWork = limit ? signatureWork.slice(0, limit) : signatureWork;

    return (
        <section id="signature-work" className="py-24 px-6 md:px-12 bg-background">
            <div className="container mx-auto max-w-7xl">
                <div className="flex items-center justify-between mb-16">
                    <h2 className="text-3xl md:text-5xl font-bold text-white">Signature Work</h2>
                    {limit && (
                        <Link to="/work" className="group text-white flex items-center gap-2 hover:underline transition-all">
                            View All
                            <ArrowUpRight className="w-5 h-5 transition-all group-hover:hidden" />
                            <ArrowRight className="w-5 h-5 hidden group-hover:block" />
                        </Link>
                    )}
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {displayedWork.map((work, index) => (
                        <motion.a
                            key={work.id}
                            href={work.link}
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="group block"
                        >
                            <div className="relative aspect-video mb-6 overflow-hidden rounded-xl bg-surface border border-white/5">
                                {/* Image */}
                                <div className="absolute inset-0 bg-neutral-900 transition-transform duration-500 group-hover:scale-105">
                                    <img
                                        src={work.image}
                                        alt={work.title}
                                        className="w-full h-full object-cover opacity-80 group-hover:opacity-60 transition-opacity"
                                    />
                                </div>

                                {/* Overlay on Hover */}
                                <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                                    <span className="text-white font-medium px-6 py-2 border border-white/30 rounded-full backdrop-blur-sm">View Case Study</span>
                                </div>
                            </div>

                            <div className="space-y-2">
                                <div className="flex justify-between items-start">
                                    <h3 className="text-xl font-bold text-white group-hover:text-accent transition-colors">
                                        {work.title}
                                    </h3>
                                    <ArrowUpRight className="w-5 h-5 text-secondary opacity-0 group-hover:opacity-100 -translate-y-1 translate-x-1 transition-all" />
                                </div>
                                <p className="text-sm text-secondary uppercase tracking-wider font-medium">
                                    {work.subtitle}
                                </p>
                            </div>
                        </motion.a>
                    ))}
                </div>
            </div>
        </section>
    );
}
