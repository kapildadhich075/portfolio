import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { cn } from "../lib/utils";

export function Navbar() {
    const [scrolled, setScrolled] = useState(false);
    const location = useLocation();

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    };

    const isHome = location.pathname === "/";

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
                <Link
                    to="/"
                    onClick={scrollToTop}
                    className="text-xl font-bold tracking-tighter text-primary hover:text-accent transition-colors"
                >
                    HD.
                </Link>
                <div className="hidden md:flex gap-8">
                    <Link
                        to="/work"
                        className={cn(
                            "text-secondary hover:text-primary transition-colors text-lg",
                            location.pathname === "/work" && "text-primary font-medium"
                        )}
                    >
                        Work
                    </Link>
                    <Link
                        to="/content"
                        className={cn(
                            "text-secondary hover:text-primary transition-colors text-lg",
                            location.pathname === "/content" && "text-primary font-medium"
                        )}
                    >
                        Content
                    </Link>
                    <a
                        href={isHome ? "#about" : "/#about"}
                        className="text-secondary hover:text-primary transition-colors text-lg"
                    >
                        Background
                    </a>
                    <a
                        href={isHome ? "#contact" : "/#contact"}
                        className="text-secondary hover:text-primary transition-colors text-lg"
                    >
                        Contact
                    </a>
                </div>
            </div>
        </motion.nav>
    );
}
