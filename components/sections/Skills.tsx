'use client';

import { motion } from 'framer-motion';
import { SKILLS, SKILLS_CONTENT } from '@/constants';
import { LayoutTemplate, Server, Cloud, Cpu, Database } from 'lucide-react';

const ICONS = {
    'Frontend': LayoutTemplate,
    'Backend': Server,
    'Database': Database,
    'DevOps': Cloud,
    'Tools': Cpu, // Fallback
};

export function Skills() {
    return (
        <section id="skills" className="py-20 bg-slate-900/50">
            <div className="container mx-auto px-6">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold mb-4">{SKILLS_CONTENT.title}</h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {SKILLS.map((skillGroup, index) => {
                        const Icon = ICONS[skillGroup.category as keyof typeof ICONS] || Cpu;

                        return (
                            <motion.div
                                key={skillGroup.category}
                                initial={{ opacity: 0, scale: 0.95 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                className="glass-card p-6 rounded-2xl"
                            >
                                <div className="w-10 h-10 rounded-lg bg-blue-500/10 flex items-center justify-center mb-6 text-blue-400">
                                    <Icon className="w-5 h-5" />
                                </div>

                                <h3 className="text-lg font-bold mb-4">{skillGroup.category}</h3>

                                <ul className="space-y-2">
                                    {skillGroup.items.map((item) => (
                                        <li key={item} className="flex items-center text-slate-400 text-sm">
                                            <span className="w-1.5 h-1.5 rounded-full bg-blue-500 mr-2" />
                                            {item}
                                        </li>
                                    ))}
                                </ul>
                            </motion.div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
