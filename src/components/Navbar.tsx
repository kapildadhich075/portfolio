import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { ArrowUpRight, Menu, X } from "lucide-react";
import { config } from "../config";

export function Navbar() {
    const [open, setOpen] = useState(false);
    const { pathname } = useLocation();
    useEffect(() => {
        const close = (e: KeyboardEvent) => { if (e.key === "Escape") setOpen(false); };
        window.addEventListener("keydown", close);
        return () => window.removeEventListener("keydown", close);
    }, []);
    const links = [{to: "/", label: "Home"}, {to: "/content", label: "Content"}, {to: "/creative-lab", label: "Creative Lab"}];
    return <header className="site-header">
        <Link to="/" className="wordmark" onClick={() => { setOpen(false); window.scrollTo(0,0); }}>Himanshu Dadhich</Link>
        <nav className="desktop-nav" aria-label="Main navigation">{links.map(link => <Link key={link.to} to={link.to} aria-current={pathname === link.to ? "page" : undefined}>{link.label}</Link>)}<a href="/#studio-services">Studio</a><a href="/#contact">Contact</a></nav>
        <a className="call-button" href={config.studio.url} target="_blank" rel="noopener noreferrer">Services <ArrowUpRight size={16} /></a>
        <button className="menu-toggle" aria-label={open ? "Close navigation" : "Open navigation"} aria-expanded={open} aria-controls="mobile-navigation" onClick={() => setOpen(!open)}>{open ? <X /> : <Menu />}</button>
        {open && <nav id="mobile-navigation" className="mobile-nav" aria-label="Mobile navigation">{links.map(link => <Link key={link.to} to={link.to} onClick={() => setOpen(false)}>{link.label}</Link>)}<a href="/#studio-services" onClick={() => setOpen(false)}>Studio</a><a href="/#contact" onClick={() => setOpen(false)}>Contact</a></nav>}
    </header>;
}
