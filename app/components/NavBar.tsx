"use client";

import { useLenis } from "lenis/react";
import Link from "next/link";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const navItems = [
    { name: "Active Ecosystems", id: "#work" },
    { name: "Production Systems", id: "#projects" },
    { name: "8n8 Projects", id: "#n8n-projects" },
];

export default function NavBar() {
    const lenis = useLenis();
    const [activeSection, setActiveSection] = useState("");

    const handleScroll = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
        e.preventDefault();
        lenis?.scrollTo(id);
    };

    // Update active section on scroll
    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        setActiveSection(`#${entry.target.id}`);
                    }
                });
            },
            { threshold: 0.5 }
        );

        navItems.forEach((item) => {
            const element = document.querySelector(item.id);
            if (element) observer.observe(element);
        });

        return () => observer.disconnect();
    }, []);

    return (
        <motion.nav
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.5 }}
            className="fixed top-6 right-6 z-50 hidden md:flex items-center gap-1 p-1 bg-[#111111]/80 backdrop-blur-md border border-neutral-800 rounded-full shadow-lg"
        >
            {navItems.map((item) => (
                <Link
                    key={item.id}
                    href={item.id}
                    onClick={(e) => handleScroll(e, item.id)}
                    className={`
                        relative px-4 py-2 text-xs font-medium transition-colors rounded-full
                        ${activeSection === item.id
                            ? "text-background"
                            : "text-secondary hover:text-foreground"
                        }
                    `}
                >
                    {activeSection === item.id && (
                        <motion.div
                            layoutId="nav-pill"
                            className="absolute inset-0 bg-foreground rounded-full"
                            initial={false}
                            transition={{ type: "spring", stiffness: 300, damping: 30 }}
                        />
                    )}
                    <span className="relative z-10">{item.name}</span>
                </Link>
            ))}
        </motion.nav>
    );
}
