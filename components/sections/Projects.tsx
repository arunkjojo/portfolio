'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';
import { PROJECTS, PROJECTS_CONTENT } from '@/constants';

export function Projects() {
    return (
        <section id="projects" className="py-20">
            <div className="container mx-auto px-6">
                <div className="flex justify-between items-end mb-12">
                    <div>
                        <h2 className="text-3xl md:text-4xl font-bold mb-4">{PROJECTS_CONTENT.title}</h2>
                        <p className="text-slate-400">{PROJECTS_CONTENT.subtitle}</p>
                    </div>
                    <Link href="/projects" className="text-blue-400 hover:text-blue-300 font-medium flex items-center gap-1 hidden md:flex">
                        {PROJECTS_CONTENT.viewAll} <ArrowUpRight className="w-4 h-4" />
                    </Link>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {PROJECTS.map((project, index) => (
                        <motion.div
                            key={project.slug}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className="glass-card rounded-2xl p-6 hover:bg-white/10 transition-colors group"
                        >
                            <div className="h-48 mb-6 bg-slate-800 rounded-lg overflow-hidden relative">
                                {/* Fallback for image */}
                                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-purple-500/20 group-hover:scale-105 transition-transform duration-500" />
                            </div>

                            <div className="flex gap-2 mb-4">
                                {project.tags.map((tag) => (
                                    <span key={tag} className="text-xs font-medium px-2 py-1 rounded bg-blue-500/10 text-blue-300 border border-blue-500/20">
                                        {tag}
                                    </span>
                                ))}
                            </div>

                            <h3 className="text-xl font-bold mb-2 group-hover:text-blue-400 transition-colors">
                                {project.title}
                            </h3>
                            <p className="text-slate-400 text-sm mb-6 line-clamp-2">
                                {project.description}
                            </p>

                            <Link
                                href={`/projects/${project.slug}`}
                                className="inline-flex items-center text-sm font-medium text-white hover:text-blue-400 transition-colors"
                            >
                                {PROJECTS_CONTENT.ctaCard} <ArrowUpRight className="w-4 h-4 ml-1" />
                            </Link>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
