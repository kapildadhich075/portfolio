import { useEffect } from "react";
import { Navbar } from "../components/Navbar";
import { SignatureWork } from "../components/SignatureWork";
import { Contact } from "../components/Contact";
import { motion } from "framer-motion";

export function Work() {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <>
            <Navbar />
            <main className="pt-20">
                <section className="py-24 px-6 md:px-12 bg-background border-b border-white/5">
                    <div className="container mx-auto max-w-7xl">
                        <motion.h1
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="text-4xl md:text-7xl font-bold text-white mb-8"
                        >
                            All Signature Work
                        </motion.h1>
                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.1 }}
                            className="text-secondary text-xl max-w-2xl"
                        >
                            A collection of my best work in storytelling, strategy, and scalable content execution.
                        </motion.p>
                    </div>
                </section>
                <SignatureWork />
            </main>
            <Contact />
        </>
    );
}
