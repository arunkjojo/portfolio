'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { NAV_ITEMS } from '@/constants';
import { cn } from '@/lib/utils';
import { useState, useEffect } from 'react';

export function Navbar() {
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <motion.nav
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.5 }}
            className={cn(
                "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
                scrolled ? "glass-nav py-4" : "py-6 bg-transparent"
            )}
        >
            <div className="container mx-auto px-6 flex items-center justify-between">
                <Link href="/" className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
                    Arun Jojo
                </Link>
                <div className="hidden md:flex items-center space-x-8">
                    {NAV_ITEMS.map((item) => (
                        <Link
                            key={item.name}
                            href={item.path}
                            className="text-sm font-medium hover:text-blue-400 transition-colors"
                        >
                            {item.name}
                        </Link>
                    ))}
                    <Link
                        href="#contact"
                        className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-full text-sm font-medium transition-colors"
                    >
                        Hire Me
                    </Link>
                </div>
            </div>
        </motion.nav>
    );
}
