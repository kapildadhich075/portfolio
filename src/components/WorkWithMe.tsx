import { motion } from "framer-motion";
import { Sparkles, BarChart, MonitorPlay } from "lucide-react";


export function WorkWithMe() {
    return (
        <section className="py-24 px-6 md:px-12 bg-surface">
            <div className="container mx-auto max-w-7xl">
                <div className="text-center max-w-2xl mx-auto mb-16">
                    <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">Work With Me</h2>
                    <p className="text-secondary text-lg">Choose how you want to scale your story.</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {/* Block 1 */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="bg-background p-8 rounded-2xl border border-white/5 flex flex-col"
                    >
                        <div className="w-12 h-12 bg-blue-500/10 rounded-xl flex items-center justify-center mb-6 text-blue-400">
                            <MonitorPlay className="w-6 h-6" />
                        </div>
                        <h3 className="text-xl font-bold text-white mb-2">Content Starter Pack</h3>
                        <p className="text-secondary mb-8 flex-grow">Perfect for founders starting their personal brand. 4 high-quality reels + 1 main narrative video.</p>
                        <ul className="space-y-3 mb-8 text-sm text-secondary">
                            <li className="flex gap-2"><span className="text-blue-400">•</span> Scripting & Hook Strategy</li>
                            <li className="flex gap-2"><span className="text-blue-400">•</span> Professional Editing</li>
                            <li className="flex gap-2"><span className="text-blue-400">•</span> Thumbnails & Metadata</li>
                        </ul>
                    </motion.div>

                    {/* Block 2 */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="bg-background p-8 rounded-2xl border border-accent/20 relative flex flex-col"
                    >
                        <div className="absolute top-0 right-0 bg-accent text-black text-xs font-bold px-3 py-1 rounded-bl-xl rounded-tr-xl">POPULAR</div>
                        <div className="w-12 h-12 bg-accent/10 rounded-xl flex items-center justify-center mb-6 text-accent">
                            <Sparkles className="w-6 h-6" />
                        </div>
                        <h3 className="text-xl font-bold text-white mb-2">Strategy & Consultancy</h3>
                        <p className="text-secondary mb-8 flex-grow">For brands that have a team but lack direction. We build your content engine.</p>
                        <ul className="space-y-3 mb-8 text-sm text-secondary">
                            <li className="flex gap-2"><span className="text-accent">•</span> Content Audit</li>
                            <li className="flex gap-2"><span className="text-accent">•</span> Workflow Optimization</li>
                            <li className="flex gap-2"><span className="text-accent">•</span> Weekly Strategy Calls</li>
                        </ul>
                    </motion.div>

                    {/* Block 3 */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 20 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="bg-background p-8 rounded-2xl border border-white/5 flex flex-col"
                    >
                        <div className="w-12 h-12 bg-emerald-500/10 rounded-xl flex items-center justify-center mb-6 text-emerald-400">
                            <BarChart className="w-6 h-6" />
                        </div>
                        <h3 className="text-xl font-bold text-white mb-2">End-to-End Execution</h3>
                        <p className="text-secondary mb-8 flex-grow">We become your dedicated media house. From idea to upload.</p>
                        <ul className="space-y-3 mb-8 text-sm text-secondary">
                            <li className="flex gap-2"><span className="text-emerald-400">•</span> Full Production Team</li>
                            <li className="flex gap-2"><span className="text-emerald-400">•</span> Channel Management</li>
                            <li className="flex gap-2"><span className="text-emerald-400">•</span> Analytics & Growth</li>
                        </ul>
                    </motion.div>
                </div>

                <div className="text-center mt-12">
                    <button className="px-8 py-4 bg-white text-black font-bold rounded-full hover:bg-neutral-200 transition-colors">
                        Send Me an Inquiry
                    </button>
                </div>
            </div>
        </section>
    );
}
