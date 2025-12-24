'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { ArrowRight, Github } from 'lucide-react';
import { HERO_CONTENT, SOCIAL_LINKS } from '@/constants';

export function Hero() {
    return (
        <section className="min-h-screen flex items-center justify-center pt-20 relative overflow-hidden">
            {/* Background decoration */}
            <div className="absolute inset-0 z-0">
                <div className="absolute top-20 left-20 w-72 h-72 bg-blue-500/20 rounded-full blur-3xl" />
                <div className="absolute bottom-20 right-20 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl" />
            </div>

            <div className="container mx-auto px-6 relative z-10 text-center">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                >
                    <span className="inline-block px-3 py-1 mb-6 text-xs font-medium text-blue-400 bg-blue-500/10 rounded-full border border-blue-500/20">
                        {HERO_CONTENT.badge}
                    </span>
                    <h1 className="text-5xl md:text-7xl font-bold mb-6 tracking-tight">
                        {HERO_CONTENT.titlePrefix} <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-600">{HERO_CONTENT.titleHighlight}</span>
                    </h1>
                    <p className="text-lg md:text-xl text-slate-400 max-w-2xl mx-auto mb-10">
                        {HERO_CONTENT.description}
                    </p>

                    <div className="flex items-center justify-center gap-4">
                        <Link
                            href="#projects"
                            className="px-8 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-medium transition-all flex items-center gap-2"
                        >
                            {HERO_CONTENT.ctaMain} <ArrowRight className="w-4 h-4" />
                        </Link>
                        <Link
                            href={SOCIAL_LINKS.github}
                            target="_blank"
                            className="px-8 py-3 bg-white/5 hover:bg-white/10 text-white border border-white/10 rounded-lg font-medium transition-all flex items-center gap-2"
                        >
                            <Github className="w-4 h-4" /> {HERO_CONTENT.ctaSecondary}
                        </Link>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
