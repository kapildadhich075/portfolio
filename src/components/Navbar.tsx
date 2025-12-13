import { motion } from "framer-motion";
import { config } from "../config";
import { useEffect, useState } from "react";
import { cn } from "../lib/utils";

export function Navbar() {
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <motion.nav
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            className={cn(
                "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
                scrolled ? "bg-black/50 backdrop-blur-md border-b border-white/5 py-4" : "py-6"
            )}
        >
            <div className="flex items-center justify-between px-6 md:px-12 max-w-7xl mx-auto">
                <div className="text-xl font-bold tracking-tighter text-primary">HD.</div>
                <div className="hidden md:flex gap-8">
                    <a href={config.hero.links.primary} className="text-secondary hover:text-primary transition-colors text-sm">
                        Work
                    </a>
                    <a href={config.hero.links.secondary} className="text-secondary hover:text-primary transition-colors text-sm">
                        Contact
                    </a>
                    <a href={config.hero.links.content} className="text-secondary hover:text-primary transition-colors text-sm">
                        Content
                    </a>
                </div>
            </div>
        </motion.nav>
    );
}
