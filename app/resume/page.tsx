'use client';

import { motion } from 'framer-motion';
import { Download, FileText } from 'lucide-react';
import { RESUME_CONTENT } from '@/constants';

export default function ResumePage() {
    return (
        <article className="min-h-screen py-32 px-6">
            <div className="container mx-auto max-w-5xl">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="text-center mb-12"
                >
                    <h1 className="text-4xl md:text-5xl font-bold mb-6">{RESUME_CONTENT.title}</h1>
                    <p className="text-xl text-slate-300 max-w-2xl mx-auto mb-8">
                        {RESUME_CONTENT.description}
                    </p>

                    <a
                        href={`/${RESUME_CONTENT.fileName}`}
                        download
                        className="inline-flex items-center px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-medium transition-colors gap-2 shadow-lg shadow-blue-500/20"
                    >
                        <Download className="w-5 h-5" />
                        {RESUME_CONTENT.downloadButton}
                    </a>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    className="glass-card p-2 rounded-2xl h-[800px] border border-white/10 relative overflow-hidden bg-slate-800/50"
                >
                    {/* Check if PDF embedding is supported, otherwise fallback */}
                    <object
                        data={`/${RESUME_CONTENT.fileName}`}
                        type="application/pdf"
                        className="w-full h-full rounded-xl bg-white"
                    >
                        <div className="flex flex-col items-center justify-center h-full text-slate-400">
                            <FileText className="w-16 h-16 mb-4 opacity-50" />
                            <p className="text-lg font-medium mb-2">Unable to display PDF</p>
                            <p className="text-sm mb-6">Your browser doesn't support PDF viewing.</p>
                            <a
                                href={`/${RESUME_CONTENT.fileName}`}
                                className="text-blue-400 hover:text-blue-300 underline"
                            >
                                Download Resume instead
                            </a>
                        </div>
                    </object>
                </motion.div>
            </div>
        </article>
    );
}
