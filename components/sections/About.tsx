'use client';

import { motion } from 'framer-motion';
import { ABOUT_CONTENT } from '@/constants';

export function About() {
    return (
        <section id="about" className="py-20 relative">
            <div className="container mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="max-w-3xl mx-auto text-center"
                >
                    <h2 className="text-3xl md:text-4xl font-bold mb-8">{ABOUT_CONTENT.title}</h2>
                    {ABOUT_CONTENT.paragraphs.map((paragraph, index) => (
                        <p key={index} className={`text-lg text-slate-400 leading-relaxed ${index === 0 ? 'mb-6' : ''}`}>
                            {paragraph}
                        </p>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}
