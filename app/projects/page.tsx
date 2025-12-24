'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';
import { PROJECTS, PROJECTS_CONTENT } from '@/constants';
import Image from 'next/image';

export default function ProjectsPage() {
    return (
        <div className="min-h-screen pt-32 pb-20 px-6">
            <div className="container mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="text-center mb-16"
                >
                    <h1 className="text-4xl md:text-5xl font-bold mb-6">{PROJECTS_CONTENT.title}</h1>
                    <p className="text-xl text-slate-400 max-w-2xl mx-auto">
                        {PROJECTS_CONTENT.subtitle}
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {PROJECTS.map((project, index) => (
                        <motion.div
                            key={project.slug}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className="glass-card rounded-2xl p-6 hover:bg-white/10 transition-colors group"
                        >
                            <div className="h-48 mb-6 bg-slate-800 rounded-lg overflow-hidden relative">
                                {project.image ? (
                                    <Image
                                        src={project.image}
                                        alt={project.title}
                                        fill
                                        className="object-cover group-hover:scale-105 transition-transform duration-500"
                                    />
                                ) : (
                                    <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-purple-500/20 group-hover:scale-105 transition-transform duration-500" />
                                )}
                            </div>

                            <div className="flex flex-wrap gap-2 mb-4">
                                {(project.about_tags || project.tags).slice(0, 3).map((tag) => (
                                    <span key={tag} className="text-xs font-medium px-2 py-1 rounded bg-blue-500/10 text-blue-300 border border-blue-500/20">
                                        {tag}
                                    </span>
                                ))}
                                {(project.about_tags || project.tags).length > 3 && (
                                    <span className="text-xs font-medium px-2 py-1 rounded bg-slate-800 text-slate-400 border border-slate-700">
                                        +{(project.about_tags || project.tags).length - 3}
                                    </span>
                                )}
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
        </div>
    );
}
