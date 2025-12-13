import { useEffect } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowLeft, Play, Shuffle, MoreVertical } from "lucide-react";
import { config } from "../config";

export function ContentUniverse() {
    // Scroll to top on mount
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const { playlist } = config;

    return (
        <div className="bg-background min-h-screen text-primary selection:bg-accent selection:text-black">
            {/* Navigation (Transparent Overlay) */}
            <nav className="fixed top-0 left-0 right-0 z-50 px-6 py-4 flex items-center justify-between pointer-events-none">
                <Link
                    to="/"
                    className="flex items-center gap-2 text-sm font-medium text-white/70 hover:text-white transition-colors bg-black/40 backdrop-blur-md px-4 py-2 rounded-full border border-white/5 pointer-events-auto"
                >
                    <ArrowLeft className="w-4 h-4" />
                    Back to Home
                </Link>
            </nav>

            <div className="container mx-auto max-w-7xl px-6 md:px-12 pt-24 pb-12 h-screen-dynamic flex flex-col lg:flex-row gap-8">
                {/* Left Sidebar (Fixed-ish look) */}
                <div className="lg:w-[360px] flex-shrink-0">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="bg-surface/50 backdrop-blur-xl border border-white/5 rounded-2xl p-6 sticky top-24"
                    >
                        {/* Playlist Cover */}
                        <div className="aspect-video w-full bg-gradient-to-br from-neutral-800 to-neutral-900 rounded-xl mb-6 relative group overflow-hidden shadow-2xl">
                            <div className="absolute inset-0 flex items-center justify-center">
                                <img src={playlist.videos[0]?.thumbnail} alt={playlist.title} className="w-full h-full object-cover opacity-60 group-hover:scale-105 transition-transform duration-700" />
                                <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors"></div>
                                <Play className="absolute w-12 h-12 text-white/80 fill-white/80 group-hover:scale-110 transition-transform duration-300 z-10" />
                            </div>
                            {/* Noise texture overlay */}
                            <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 pointer-events-none mix-blend-overlay"></div>
                            <div className="absolute bottom-4 right-4 bg-black/80 px-2 py-1 rounded text-xs font-mono text-white/80">
                                {playlist.videos.length} videos
                            </div>
                        </div>

                        <h1 className="text-2xl font-bold text-white mb-2 leading-tight">{playlist.title}</h1>

                        <div className="text-sm font-medium text-white/90 mb-4">{playlist.author}</div>

                        <div className="flex gap-2 text-xs text-secondary/70 mb-6">
                            <span>{playlist.videos.length} videos</span>
                            <span>•</span>
                            <span>Updated today</span>
                        </div>

                        <div className="flex gap-2 mb-6">
                            <button className="flex-1 bg-white text-black font-semibold py-2 rounded-full flex items-center justify-center gap-2 hover:bg-neutral-200 transition-colors">
                                <Play className="w-4 h-4 fill-current" /> Play all
                            </button>
                            <button className="flex-1 bg-white/10 text-white font-semibold py-2 rounded-full flex items-center justify-center gap-2 hover:bg-white/20 transition-colors">
                                <Shuffle className="w-4 h-4" /> Shuffle
                            </button>
                        </div>

                        <div className="text-sm text-secondary/80 leading-relaxed line-clamp-4">
                            {playlist.description}
                        </div>
                    </motion.div>
                </div>

                {/* Right Content (Video List) */}
                <div className="flex-1 overflow-y-auto">
                    {playlist.videos.map((video, index) => (
                        <motion.div
                            key={video.id}
                            initial={{ opacity: 0, x: 20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: index * 0.05 }}
                            className="group flex gap-4 p-4 rounded-xl hover:bg-white/5 transition-colors cursor-pointer border border-transparent hover:border-white/5"
                        >
                            <div className="hidden md:flex items-center justify-center w-6 text-sm text-secondary/50 font-medium">
                                {index + 1}
                            </div>

                            <div className="relative w-40 aspect-video bg-neutral-800 rounded-lg flex-shrink-0 overflow-hidden">
                                {/* Thumbnail */}
                                <div className="absolute inset-0 bg-neutral-800 group-hover:scale-105 transition-transform duration-500">
                                    <img src={video.thumbnail} alt={video.title} className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity" />
                                </div>
                                <div className="absolute bottom-1 right-1 bg-black/80 px-1.5 py-0.5 rounded text-[10px] font-medium text-white">
                                    {video.duration}
                                </div>
                            </div>

                            <div className="flex-1 min-w-0 flex flex-col justify-center">
                                <h3 className="text-white font-medium text-base mb-1 line-clamp-2 leading-snug group-hover:text-accent transition-colors">
                                    {video.title}
                                </h3>
                                <div className="flex items-center gap-1 text-xs text-secondary">
                                    <span>{playlist.author}</span>
                                    <span>•</span>
                                    <span>{video.views}</span>
                                    <span>•</span>
                                    <span>{video.time}</span>
                                </div>
                            </div>

                            <div className="hidden md:flex items-center self-start opacity-0 group-hover:opacity-100 transition-opacity">
                                <button className="p-2 hover:bg-white/10 rounded-full text-white">
                                    <MoreVertical className="w-4 h-4" />
                                </button>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </div>
    );
}
