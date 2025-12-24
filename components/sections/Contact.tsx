'use client';

import { motion } from 'framer-motion';
import { Mail, Linkedin } from 'lucide-react';
import Link from 'next/link';
import { CONTACT_CONTENT, SOCIAL_LINKS } from '@/constants';

export function Contact() {
    return (
        <section id="contact" className="py-20 relative overflow-hidden">
            <div className="container mx-auto px-6 relative z-10 text-center">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                >
                    <h2 className="text-3xl md:text-5xl font-bold mb-6">{CONTACT_CONTENT.title}</h2>
                    <p className="text-slate-400 text-lg mb-10 max-w-2xl mx-auto">
                        {CONTACT_CONTENT.subtitle}
                    </p>

                    <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                        <Link
                            href={SOCIAL_LINKS.email}
                            className="px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-medium flex items-center gap-2 transition-colors w-full sm:w-auto justify-center"
                        >
                            <Mail className="w-5 h-5" /> {CONTACT_CONTENT.ctaEmail}
                        </Link>
                        <Link
                            href={SOCIAL_LINKS.linkedin}
                            target="_blank"
                            className="px-8 py-4 bg-white/5 hover:bg-white/10 text-white border border-white/10 rounded-lg font-medium flex items-center gap-2 transition-colors w-full sm:w-auto justify-center"
                        >
                            <Linkedin className="w-5 h-5" /> {CONTACT_CONTENT.ctaLinkedIn}
                        </Link>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
