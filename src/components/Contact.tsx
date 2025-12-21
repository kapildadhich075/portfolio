import { useState } from "react";
import { config } from "../config";
import { Youtube, Linkedin, Instagram, Calendar } from "lucide-react";

export function Contact() {
    const { contact } = config;
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        message: ""
    });

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();

        const subject = encodeURIComponent(`Inquiry from ${formData.name}`);
        const body = encodeURIComponent(
            `Name: ${formData.name}\n` +
            `Email: ${formData.email}\n\n` +
            `Message:\n${formData.message}`
        );

        window.location.href = `mailto:${contact.email}?subject=${subject}&body=${body}`;
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    return (
        <footer id="contact" className="py-24 px-6 md:px-12 bg-background border-t border-white/10">
            <div className="container mx-auto max-w-7xl grid grid-cols-1 lg:grid-cols-2 gap-16">
                <div>
                    <h2 className="text-3xl md:text-5xl font-bold text-white mb-6 leading-tight">
                        {contact.heading}
                    </h2>
                    <a href={`mailto:${contact.email}`} className="text-xl text-secondary hover:text-accent transition-colors block mb-8">
                        {contact.email}
                    </a>

                    <a
                        href={contact.calendly}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-3 px-6 py-4 bg-accent/10 border border-accent/20 rounded-xl text-accent hover:bg-accent/20 transition-all group"
                    >
                        <Calendar className="w-5 h-5 group-hover:scale-110 transition-transform" />
                        <span className="font-bold uppercase tracking-widest text-xs">Book a Strategy Call</span>
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
                    <form onSubmit={handleSubmit} className="space-y-6">
                        <div>
                            <label className="block text-sm font-medium text-secondary mb-2">Name</label>
                            <input
                                type="text"
                                name="name"
                                value={formData.name}
                                onChange={handleChange}
                                required
                                className="w-full bg-background border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-accent transition-colors"
                                placeholder="Your name"
                            />
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-secondary mb-2">Email</label>
                            <input
                                type="email"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                required
                                className="w-full bg-background border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-accent transition-colors"
                                placeholder="your@email.com"
                            />
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-secondary mb-2">Message</label>
                            <textarea
                                name="message"
                                value={formData.message}
                                onChange={handleChange}
                                required
                                rows={4}
                                placeholder={config.contact.placeholder}
                                className="w-full bg-background border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-accent transition-colors resize-none"
                            ></textarea>
                        </div>
                        <button
                            type="submit"
                            className="w-full bg-white text-black font-bold py-4 rounded-lg hover:bg-neutral-200 transition-colors uppercase tracking-widest text-xs"
                        >
                            → Submit Inquiry
                        </button>
                    </form>
                </div>
            </div>
        </footer>
    );
}
