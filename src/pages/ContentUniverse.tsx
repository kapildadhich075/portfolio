import { useEffect, useState, useRef } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowLeft, Play, Shuffle, Clock, Eye } from "lucide-react";
import { config } from "../config";

export function ContentUniverse() {
    const { playlist } = config;
    const [activeVideoId, setActiveVideoId] = useState(playlist.videos[0]?.id);
    const playerRef = useRef<HTMLDivElement>(null);

    const activeVideo = playlist.videos.find(v => v.id === activeVideoId) || playlist.videos[0];

    // Scroll to top on mount
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const handleVideoSelect = (id: string) => {
        setActiveVideoId(id);
        // On mobile, we might want to scroll to the player
        if (window.innerWidth < 1024 && playerRef.current) {
            playerRef.current.scrollIntoView({ behavior: 'smooth' });
        }
    };

    const getYouTubeEmbedUrl = (url: string) => {
        // Simple extraction of ID from common YouTube formats
        const regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|&v=)([^#&?]*).*/;
        const match = url.match(regExp);
        const videoId = (match && match[2].length === 11) ? match[2] : null;
        return `https://www.youtube.com/embed/${videoId}?autoplay=1&rel=0&modestbranding=1`;
    };

    return (
        <div className="bg-background min-h-screen text-primary selection:bg-accent selection:text-black ">
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

            <div className="container mx-auto max-w-7xl px-6 md:px-12 pt-16">
                {/* Video Player Section */}
                <motion.div
                    ref={playerRef}
                    initial={{ opacity: 0, y: 40 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3 }}
                    className="mt-20"
                >
                    <div className="relative aspect-video w-full rounded-[32px] overflow-hidden bg-black shadow-2xl border border-white/5">
                        <AnimatePresence mode="wait">
                            <motion.div
                                key={activeVideoId}
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                exit={{ opacity: 0 }}
                                transition={{ duration: 0.5 }}
                                className="w-full h-full"
                            >
                                <iframe
                                    src={getYouTubeEmbedUrl(activeVideo.link)}
                                    title={activeVideo.title}
                                    className="w-full h-full"
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                    allowFullScreen
                                ></iframe>
                            </motion.div>
                        </AnimatePresence>
                    </div>

                    {/* Up Next / Metadata */}
                    <div className="mt-8 flex flex-col md:flex-row justify-between items-start md:items-center gap-4 border-b border-white/5 pb-8">
                        <div>
                            <h2 className="text-2xl md:text-3xl font-bold text-white mb-2">{activeVideo.title}</h2>
                            <div className="flex items-center gap-4 text-secondary/60 text-sm">
                                <span>{playlist.author}</span>
                                <span>•</span>
                                <span>{activeVideo.views}</span>
                                <span>•</span>
                                <span>{activeVideo.time}</span>
                            </div>
                        </div>
                        {activeVideoId !== playlist.videos[playlist.videos.length - 1].id && (
                            <button
                                onClick={() => {
                                    const currentIndex = playlist.videos.findIndex(v => v.id === activeVideoId);
                                    handleVideoSelect(playlist.videos[currentIndex + 1].id);
                                }}
                                className="flex items-center gap-3 bg-white/5 hover:bg-white/10 transition-colors px-6 py-3 rounded-full border border-white/10 text-white font-medium group"
                            >
                                Up Next: {playlist.videos[playlist.videos.findIndex(v => v.id === activeVideoId) + 1].title.substring(0, 30)}...
                                <Play className="w-4 h-4 fill-current group-hover:translate-x-1 transition-transform" />
                            </button>
                        )}
                    </div>
                </motion.div>
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">

                    {/* Left Column: Playlist Card */}
                    <div className="lg:col-span-5">
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            className="bg-surface/30 backdrop-blur-sm border border-white/5 rounded-[24px] p-8 sticky  overflow-hidden group"
                        >
                            {/* Decorative Blur */}
                            <div className="absolute -top-24 -right-24 w-64 h-64 bg-accent/10 blur-[100px] pointer-events-none"></div>

                            {/* Playlist Cover */}
                            <div className="relative aspect-video rounded-2xl overflow-hidden mb-8 shadow-2xl group/cover cursor-pointer" onClick={() => handleVideoSelect(playlist.videos[0].id)}>
                                <img
                                    src={playlist.videos[0].thumbnail}
                                    alt={playlist.title}
                                    className="w-full h-full object-cover transition-transform duration-700 group-hover/cover:scale-110"
                                />
                                <div className="absolute inset-0 bg-black/40 group-hover/cover:bg-black/20 transition-colors flex items-center justify-center">
                                    <div className="w-16 h-16 rounded-full bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center group-hover/cover:scale-110 transition-transform duration-300">
                                        <Play className="w-6 h-6 text-white fill-white" />
                                    </div>
                                </div>
                                <div className="absolute bottom-4 right-4 bg-black/60 backdrop-blur-md px-3 py-1 rounded-full text-[10px] text-white/90 border border-white/10">
                                    {playlist.videos.length} VIDEOS
                                </div>
                            </div>

                            <h1 className="text-3xl font-bold text-white mb-2 leading-tight tracking-tight">
                                {playlist.title}
                            </h1>
                            <p className="text-sm font-medium text-accent mb-6 uppercase tracking-widest">{playlist.author}</p>

                            <p className="text-secondary/70 text-base leading-relaxed mb-8 max-w-md">
                                {playlist.description}
                            </p>

                            <div className="flex gap-4">
                                <button
                                    onClick={() => handleVideoSelect(playlist.videos[0].id)}
                                    className="flex-1 bg-white text-black font-bold py-4 rounded-full flex items-center justify-center gap-2 hover:bg-accent transition-all hover:scale-[1.02] active:scale-[0.98]"
                                >
                                    <Play className="w-4 h-4 fill-current" /> Play All
                                </button>
                                <button className="flex-1 bg-white/5 text-white font-bold py-4 rounded-full flex items-center justify-center gap-2 hover:bg-white/10 transition-all border border-white/5">
                                    <Shuffle className="w-4 h-4" /> Shuffle
                                </button>
                            </div>
                        </motion.div>
                    </div>

                    {/* Right Column: Video List */}
                    <div className="lg:col-span-7">
                        <div className="space-y-4 max-h-[700px] overflow-y-auto pr-4 custom-scrollbar">
                            {playlist.videos.map((video, index) => (
                                <motion.div
                                    key={video.id}
                                    initial={{ opacity: 0, y: 10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: index * 0.05 }}
                                    onClick={() => handleVideoSelect(video.id)}
                                    className={cn(
                                        "group flex gap-5 p-4 rounded-2xl transition-all duration-300 cursor-pointer border",
                                        activeVideoId === video.id
                                            ? "bg-accent/10 border-accent/20"
                                            : "bg-surface/20 border-white/5 hover:bg-surface/40 hover:border-white/10"
                                    )}
                                >
                                    <div className="relative w-44 aspect-video rounded-xl overflow-hidden flex-shrink-0 shadow-lg">
                                        <img
                                            src={video.thumbnail}
                                            alt={video.title}
                                            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                                        />
                                        <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors"></div>
                                        <div className="absolute bottom-2 right-2 bg-black/80 backdrop-blur-md px-1.5 py-0.5 rounded text-[10px] font-bold text-white border border-white/10">
                                            {video.duration}
                                        </div>
                                        {activeVideoId === video.id && (
                                            <div className="absolute inset-0 border-2 border-accent rounded-xl z-10"></div>
                                        )}
                                    </div>

                                    <div className="flex-1 min-w-0 flex flex-col justify-center">
                                        <div className="flex items-center gap-2 mb-2">
                                            <span className="text-[10px] text-secondary/40 font-bold uppercase tracking-widest">
                                                Video {index + 1}
                                            </span>
                                            {activeVideoId === video.id && (
                                                <span className="flex h-1.5 w-1.5 rounded-full bg-accent animate-pulse"></span>
                                            )}
                                        </div>
                                        <h3 className={cn(
                                            "font-bold text-lg mb-2 line-clamp-2 leading-tight transition-colors",
                                            activeVideoId === video.id ? "text-accent" : "text-white group-hover:text-accent"
                                        )}>
                                            {video.title}
                                        </h3>
                                        <div className="flex items-center gap-4 text-xs text-secondary/60">
                                            <span className="flex items-center gap-1"><Eye className="w-3 h-3" /> {video.views}</span>
                                            <span className="flex items-center gap-1"><Clock className="w-3 h-3" /> {video.time}</span>
                                        </div>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </div>


            </div>

            <style dangerouslySetInnerHTML={{
                __html: `
                .custom-scrollbar::-webkit-scrollbar {
                    width: 4px;
                }
                .custom-scrollbar::-webkit-scrollbar-track {
                    background: transparent;
                }
                .custom-scrollbar::-webkit-scrollbar-thumb {
                    background: rgba(255, 255, 255, 0.05);
                    border-radius: 10px;
                }
                .custom-scrollbar::-webkit-scrollbar-thumb:hover {
                    background: rgba(255, 255, 255, 0.1);
                }
            `}} />
        </div>
    );
}

function cn(...classes: any[]) {
    return classes.filter(Boolean).join(" ");
}
