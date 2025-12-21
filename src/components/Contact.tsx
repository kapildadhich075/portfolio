import { config } from "../config";
import { Youtube, Linkedin, Instagram } from "lucide-react";

export function Contact() {
    const { contact } = config;

    return (
        <footer id="contact" className="py-24 px-6 md:px-12 bg-background border-t border-white/10">
            <div className="container mx-auto max-w-7xl grid grid-cols-1 lg:grid-cols-2 gap-16">
                <div>
                    <h2 className="text-3xl md:text-5xl font-bold text-white mb-6 leading-tight">
                        {contact.heading}
                    </h2>
                    <a href={`mailto:${contact.email}`} className="text-xl text-secondary hover:text-accent transition-colors">
                        {contact.email}
                    </a>

                    <div className="flex gap-6 mt-12">
                        <a href={contact.socials.youtube} className="p-3 bg-surface rounded-full text-white hover:text-red-500 transition-colors">
                            <Youtube className="w-5 h-5" />
                        </a>
                        <a href={contact.socials.linkedin} className="p-3 bg-surface rounded-full text-white hover:text-blue-500 transition-colors">
                            <Linkedin className="w-5 h-5" />
                        </a>
                        <a href={contact.socials.instagram} className="p-3 bg-surface rounded-full text-white hover:text-pink-500 transition-colors">
                            <Instagram className="w-5 h-5" />
                        </a>
                    </div>

                    <div className="mt-20 text-sm text-secondary/40">
                        © {new Date().getFullYear()} Himanshu Dadhich. All rights reserved.
                    </div>
                </div>

                <div className="bg-surface p-8 rounded-2xl border border-white/5">
                    <form className="space-y-6">
                        <div>
                            <label className="block text-sm font-medium text-secondary mb-2">Name</label>
                            <input type="text" className="w-full bg-background border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-accent transition-colors" placeholder="Your name" />
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-secondary mb-2">Email</label>
                            <input type="email" className="w-full bg-background border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-accent transition-colors" placeholder="your@email.com" />
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-secondary mb-2">Message</label>
                            <textarea
                                rows={4}
                                placeholder={config.contact.placeholder}
                                className="w-full bg-background border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-accent transition-colors resize-none"
                            ></textarea>
                        </div>
                        <button type="button" className="w-full bg-white text-black font-bold py-4 rounded-lg hover:bg-neutral-200 transition-colors uppercase tracking-widest text-xs">
                            → Submit Inquiry
                        </button>
                    </form>
                </div>
            </div>
        </footer>
    );
}
