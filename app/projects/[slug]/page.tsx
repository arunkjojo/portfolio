import { PROJECTS } from '@/constants';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowLeft, Github, Globe } from 'lucide-react';

export default async function ProjectPage(props: { params: Promise<{ slug: string }> }) {
    const params = await props.params;
    const project = PROJECTS.find(p => p.slug === params.slug);

    if (!project) {
        notFound();
    }

    return (
        <article className="min-h-screen py-32 px-6">
            <div className="container mx-auto max-w-4xl">
                <Link
                    href="/#projects"
                    className="inline-flex items-center text-slate-400 hover:text-white mb-8 transition-colors group"
                >
                    <ArrowLeft className="w-4 h-4 mr-2 group-hover:-translate-x-1 transition-transform" />
                    Back to Projects
                </Link>

                <h1 className="text-4xl md:text-5xl font-bold mb-6">{project.title}</h1>

                <div className="flex flex-wrap gap-3 mb-8">
                    {project.about_tags.map(tag => (
                        <span key={tag} className="px-3 py-1 bg-blue-500/10 border border-blue-500/20 rounded-full text-blue-300 text-sm">
                            {tag}
                        </span>
                    ))}
                </div>

                <div className="aspect-video bg-slate-800 rounded-2xl mb-12 relative overflow-hidden border border-white/10">
                    <Image
                        src={project.image}
                        alt={project.title}
                        fill
                        className="object-cover"
                    />
                </div>

                <div className="prose prose-invert max-w-none">
                    <p className="text-xl text-slate-300 leading-relaxed mb-8">
                        {project.about_long_description}
                    </p>
                </div>

                <div className="flex gap-4 mt-12 py-8 border-t border-white/10">
                    <a
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg flex items-center gap-2 font-medium transition-colors"
                    >
                        <Globe className="w-4 h-4" /> Live Demo
                    </a>
                    <a
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-6 py-3 bg-white/5 hover:bg-white/10 text-white border border-white/10 rounded-lg flex items-center gap-2 font-medium transition-colors"
                    >
                        <Github className="w-4 h-4" /> View Code
                    </a>
                </div>
            </div>
        </article>
    );
}
