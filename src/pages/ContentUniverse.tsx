import { CreatorChannels } from "../components/CreatorChannels";
import { Contact } from "../components/Contact";
import { useEffect, useRef, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { ArrowDown, ArrowLeft, ArrowRight, ArrowUpRight, Play } from "lucide-react";
import { Navbar } from "../components/Navbar";
import { StudioServices } from "../components/StudioServices";
import { contentSeries } from "../contentSeries";

export function ContentUniverse() {
    const [params, setParams] = useSearchParams();
    const [playingVideo, setPlayingVideo] = useState<string | null>(null);
    const playerRef = useRef<HTMLElement>(null);
    const series = contentSeries.find(item => item.id === params.get("series")) ?? contentSeries[0];
    const activeVideo = series.videos.find(video => video.id === params.get("video")) ?? series.videos[0];
    const activeIndex = series.videos.findIndex(video => video.id === activeVideo.id);
    const playing = playingVideo === `${series.id}:${activeVideo.id}`;
    const totalVideos = contentSeries.reduce((total, item) => total + item.videos.length, 0);
    const videoId = new URL(activeVideo.link).pathname.slice(1);

    useEffect(() => { window.scrollTo(0, 0); }, []);

    function scrollToPlayer() {
        requestAnimationFrame(() => playerRef.current?.scrollIntoView({
            behavior: window.matchMedia("(prefers-reduced-motion: reduce)").matches ? "auto" : "smooth",
            block: "start",
        }));
    }

    function chooseSeries(id: string) {
        setPlayingVideo(null);
        setParams({ series: id });
        scrollToPlayer();
    }

    function chooseVideo(id: string) {
        setParams({ series: series.id, video: id });
        setPlayingVideo(`${series.id}:${id}`);
        scrollToPlayer();
    }

    return (
        <>
            <Navbar />
            <div className="content-page">
                <header className="page-shell content-heading">
                    <div><p className="eyebrow">MY WORK IN VIDEO</p><h1>Different formats.<br />Plenty of stories.</h1></div>
                    <div><p>A catalogue of projects I’ve contributed to, grouped by subject and format. For what I’m creating and sharing myself, find my personal channels below.</p><span className="library-count">{contentSeries.length} collections <span aria-hidden="true">/</span> {totalVideos} videos</span></div>
                </header>

                <section className="page-shell collection-section" aria-labelledby="collections-heading">
                    <div className="collection-heading"><h2 id="collections-heading">Find something to watch.</h2><a href="#collection-player">Go to player <ArrowDown size={15} /></a></div>
                    <div className="collection-grid">
                        {contentSeries.map((item, index) => (
                            <button key={item.id} className={`collection-card ${item.id === series.id ? "is-selected" : ""}`} onClick={() => chooseSeries(item.id)} aria-pressed={item.id === series.id} aria-controls="collection-player">
                                <div className="collection-cover"><img src={item.videos[0].thumbnail} alt="" loading="lazy" /><span className="collection-number">0{index + 1}</span><span className="collection-video-count">{item.videos.length} videos</span><span className="collection-arrow"><ArrowUpRight size={23} /></span></div>
                                <div className="collection-card-copy"><div><h3>{item.title}</h3><span className="collection-status">{item.id === series.id ? "Selected" : "Explore"}</span></div><p>{item.description}</p></div>
                            </button>
                        ))}
                    </div>
                </section>

                <section className="playlist-section section-space" id="collection-player" ref={playerRef} aria-labelledby="playlist-heading">
                    <div className="page-shell">
                        <div className="playlist-heading"><div><p className="eyebrow">YOUR SELECTED COLLECTION</p><h2 id="playlist-heading">{series.title}</h2><p>{series.description}</p></div><a href="#collections-heading">Browse collections <ArrowUpRight size={17} /></a></div>
                        <div className="playlist-layout">
                            <div className="player-column">
                                <div className="video-frame">
                                    {playing ? <iframe key={`${series.id}:${activeVideo.id}`} src={`https://www.youtube-nocookie.com/embed/${videoId}?autoplay=1&rel=0`} title={activeVideo.title} allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen /> : <button className="video-poster" onClick={() => setPlayingVideo(`${series.id}:${activeVideo.id}`)} aria-label={`Play ${activeVideo.title}`}><img src={activeVideo.thumbnail} alt="" /><span className="poster-shade" /><span className="poster-play"><Play size={25} fill="currentColor" /></span><span className="poster-caption">Watch this video</span></button>}
                                </div>
                                <div className="video-details"><p className="eyebrow" aria-live="polite">VIDEO {activeIndex + 1} OF {series.videos.length} <span aria-hidden="true">/</span> {activeVideo.duration}</p><h3>{activeVideo.title}</h3><a href={activeVideo.link} target="_blank" rel="noopener noreferrer">Watch on YouTube <ArrowUpRight size={16} /><span className="sr-only"> (opens in a new tab)</span></a></div>
                                <div className="player-controls"><button disabled={activeIndex === 0} onClick={() => chooseVideo(series.videos[activeIndex - 1].id)}><ArrowLeft size={17} /> Previous video</button><button disabled={activeIndex === series.videos.length - 1} onClick={() => chooseVideo(series.videos[activeIndex + 1].id)}>Next video <ArrowRight size={17} /></button></div>
                            </div>
                            <div className="queue"><div className="queue-heading"><h3>In this collection</h3><span>{series.videos.length} videos</span></div><ol className="video-queue">{series.videos.map((video, index) => <li key={video.id}><button className={`queue-item ${video.id === activeVideo.id ? "is-active" : ""}`} onClick={() => chooseVideo(video.id)} aria-current={video.id === activeVideo.id ? "true" : undefined}><div className="queue-image"><img src={video.thumbnail} alt="" loading="lazy" /><span>{video.duration}</span></div><div><span className="queue-index">{video.id === activeVideo.id ? "Selected video" : `Video ${index + 1}`}</span><h4>{video.title}</h4></div></button></li>)}</ol></div>
                        </div>
                    </div>
                </section>
            </div>
            <CreatorChannels />
            <StudioServices />
            <Contact />
        </>
    );
}
