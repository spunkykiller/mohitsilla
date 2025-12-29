"use client";

import Image from "next/image";
import { ArrowUpRight, Play, X, Github, Linkedin, Mail } from "lucide-react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

const projects = [
    {
        name: "Spotify AI Agent",
        description: "A conversational AI-powered web application that transforms Spotify playlist management through natural language commands.",
        link: "https://github.com/spunkykiller/spotify-agent",
        youtubeId: "GXdZ3hmpd30",
        tech: ["Next.js 16", "React 19", "Spotify API", "Google Assistant"],
    },
    {
        name: "Telegram Trading Signal Analyzer",
        description: "A Python-powered analytics tool that extracts and analyzes 3,484+ trading signals to identify optimal timing patterns.",
        link: "https://github.com/spunkykiller/Trading-Signal-Analyzer",
        image: "/images/telegram-analyzer.png",
        tech: ["Python", "BeautifulSoup", "Data Visualization"],
    },
    {
        name: "WhatsApp Chat Intelligence",
        description: "A privacy-first analytics portal that transforms chaotic WhatsApp group chats into a structured dashboard for discovering opportunities.",
        link: "https://github.com/spunkykiller/WhatsApp-Chat-Intelligence",
        youtubeId: "1YTM52-x9X8",
        image: "/images/whatsapp-chat.png",
        tech: ["Privacy-First", "Analytics", "React"],
    },
    {
        name: "AutoMeet Recorder",
        description: "De-couples physical presence from information retention by automating meeting recording and local archival via OBS.",
        link: "https://github.com/spunkykiller/AutoMeet_OBS",
        image: "/images/automeet.png",
        tech: ["OBS Scripting", "Automation", "Local Archival"],
    },
];

const organizations = [
    {
        name: "Build Club",
        description: "A community and podcast platform focused on builders, founders, and operators.",
        link: "https://thebuildclub.in/",
    },
    {
        name: "GenSync",
        description: "A creative & growth agency working across content, branding, and media systems.",
        link: "https://gensync.in/",
    },
    {
        name: "wne3.com",
        description: "Building decentralized infrastructure and operational systems for the new web.",
        link: "https://wne3.com/",
    },
];

const ecosystems = [
    "Companies worked with",
    "Communities built or operated",
    "Agencies / studios involved in",
];

function ProjectCard({ project }: { project: typeof projects[0] }) {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="flex flex-col gap-4 p-6 rounded-2xl bg-[#111111] border border-neutral-800 hover:border-neutral-700 transition-colors">
            <div className="flex flex-col gap-3">
                <div className="flex justify-between items-start">
                    <Link href={project.link} target="_blank" className="flex items-center gap-2 text-foreground font-medium hover:text-accent transition-colors text-lg group">
                        {project.name} <ArrowUpRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity" />
                    </Link>
                    {(project.youtubeId || project.image) && (
                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            className="px-3 py-1.5 text-xs font-medium bg-neutral-900 text-secondary hover:text-foreground rounded-full border border-neutral-800 transition-colors flex items-center gap-1.5"
                        >
                            {isOpen ? (
                                <>
                                    <X className="w-3 h-3" /> Close Demo
                                </>
                            ) : (
                                <>
                                    <Play className="w-3 h-3" /> Watch Demo
                                </>
                            )}
                        </button>
                    )}
                </div>
                <p className="text-secondary text-sm leading-relaxed max-w-prose">
                    {project.description}
                </p>
                <div className="flex gap-2 flex-wrap">
                    {project.tech?.map((t) => (
                        <span key={t} className="text-[10px] uppercase tracking-wider text-neutral-500 bg-neutral-900 px-2 py-1 rounded-md border border-neutral-800/50">
                            {t}
                        </span>
                    ))}
                </div>
            </div>

            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3, ease: "easeInOut" }}
                        className="overflow-hidden rounded-xl mt-2"
                    >
                        {project.youtubeId ? (
                            <div className="relative w-full aspect-video bg-black rounded-xl overflow-hidden border border-neutral-800">
                                <iframe
                                    src={`https://www.youtube.com/embed/${project.youtubeId}?autoplay=1`}
                                    title={project.name}
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                    allowFullScreen
                                    className="absolute top-0 left-0 w-full h-full"
                                />
                            </div>
                        ) : project.image ? (
                            <div className="relative w-full aspect-video bg-black rounded-xl overflow-hidden border border-neutral-800">
                                <Image
                                    src={project.image}
                                    alt={project.name}
                                    fill
                                    className="object-cover"
                                />
                            </div>
                        ) : null}
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
}

export default function Home() {
    const fadeIn = {
        initial: { opacity: 0, y: 10 },
        animate: { opacity: 1, y: 0 },
        transition: { duration: 0.5 },
    };

    return (
        <div className="flex flex-col gap-24 md:gap-32 pb-20 w-full max-w-4xl mx-auto">
            {/* Hero Section */}
            <section className="flex flex-col gap-8 max-w-2xl">
                <div className="flex flex-col gap-6">
                    <Image
                        src="/images/profile.jpg"
                        alt="Mohit Silla"
                        width={88}
                        height={88}
                        className="rounded-full opacity-90 mb-2 grayscale hover:grayscale-0 transition-all duration-500"
                        priority
                    />
                    <h1 className="text-foreground text-xl font-medium tracking-tight">I’m Mohit Silla.</h1>
                    <div className="flex flex-col gap-4">
                        <p className="text-secondary text-lg max-w-prose leading-relaxed">
                            Developer and core operator building end-to-end systems.
                        </p>
                        <p className="text-secondary text-base max-w-prose leading-relaxed opacity-80">
                            I operate at the intersection of AI, automation, and infrastructure. Everything I build solves a real problem and runs in production.
                        </p>
                    </div>
                </div>

                <div className="flex flex-wrap gap-4 mt-2">
                    <Link
                        href="https://www.linkedin.com/in/mohitsilla/"
                        target="_blank"
                        className="flex items-center gap-2.5 px-5 py-2.5 bg-[#111111] border border-neutral-800 rounded-lg text-secondary hover:text-white hover:border-neutral-600 transition-all group"
                    >
                        <Linkedin className="w-4 h-4 opacity-70 group-hover:opacity-100" />
                        <span className="text-sm font-medium">LinkedIn</span>
                    </Link>
                    <Link
                        href="https://github.com/spunkykiller"
                        target="_blank"
                        className="flex items-center gap-2.5 px-5 py-2.5 bg-[#111111] border border-neutral-800 rounded-lg text-secondary hover:text-white hover:border-neutral-600 transition-all group"
                    >
                        <Github className="w-4 h-4 opacity-70 group-hover:opacity-100" />
                        <span className="text-sm font-medium">GitHub</span>
                    </Link>
                </div>
            </section>

            {/* What I Do Section */}
            <section className="flex flex-col gap-8">
                <h2 className="text-foreground text-xs font-bold tracking-widest uppercase text-opacity-50">Core Competencies</h2>
                <ul className="flex flex-col gap-3">
                    {[
                        "End-to-end software systems",
                        "AI tools & local LLM workflows",
                        "Automation & internal tooling",
                        "Media + content infrastructure",
                        "Growth & operational systems",
                    ].map((item, index) => (
                        <motion.li
                            key={index}
                            initial={{ opacity: 0, x: -10 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1, duration: 0.4 }}
                            className="text-secondary hover:text-foreground transition-colors cursor-default text-lg"
                        >
                            <span className="mr-4 opacity-20 text-sm">0{index + 1}</span>{item}
                        </motion.li>
                    ))}
                </ul>
            </section>

            {/* Active Work & Platforms */}
            <section id="work" className="flex flex-col gap-8">
                <h2 className="text-foreground text-xs font-bold tracking-widest uppercase text-opacity-50">Active Ecosystems</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {organizations.map((org, index) => (
                        <Link key={index} href={org.link} target="_blank" className="group">
                            <div className="h-full flex flex-col gap-3 p-6 rounded-2xl bg-[#111111] border border-neutral-800 group-hover:border-neutral-600 transition-all duration-300">
                                <div className="flex items-center justify-between">
                                    <span className="text-foreground font-medium text-lg group-hover:text-white transition-colors">
                                        {org.name}
                                    </span>
                                    <ArrowUpRight className="w-5 h-5 text-neutral-600 group-hover:text-white group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
                                </div>
                                <p className="text-secondary text-sm leading-relaxed">{org.description}</p>
                            </div>
                        </Link>
                    ))}
                </div>
            </section>

            {/* Projects Section */}
            <section id="projects" className="flex flex-col gap-8">
                <h2 className="text-foreground text-xs font-bold tracking-widest uppercase text-opacity-50">Production Systems</h2>
                <div className="grid grid-cols-1 gap-6">
                    {projects.map((project, index) => (
                        <ProjectCard key={index} project={project} />
                    ))}
                </div>
            </section>

            {/* Organizations & Experience */}
            <section className="flex flex-col gap-8">
                <h2 className="text-foreground text-xs font-bold tracking-widest uppercase text-opacity-50">History</h2>
                <ul className="flex flex-col gap-3">
                    {ecosystems.map((item, index) => (
                        <li key={index} className="text-secondary flex items-center gap-3">
                            <span className="w-1.5 h-1.5 rounded-full bg-neutral-800"></span>{item}
                        </li>
                    ))}
                </ul>
            </section>

            {/* Online Presence */}
            <section className="flex flex-col gap-8">
                <h2 className="text-foreground text-xs font-bold tracking-widest uppercase text-opacity-50">Contact</h2>
                <a href="mailto:contact@mohitsilla.com" className="w-fit flex items-center gap-3 text-secondary hover:text-white transition-colors group">
                    <div className="p-3 rounded-full bg-[#111111] border border-neutral-800 group-hover:border-neutral-600 transition-colors">
                        <Mail className="w-5 h-5" />
                    </div>
                    <span className="text-lg">contact@mohitsilla.com</span>
                </a>
            </section>

            {/* Footer */}
            <footer className="mt-20 pt-8 border-t border-neutral-900 text-[10px] tracking-widest uppercase text-neutral-600 flex justify-between items-center">
                <p>System Online</p>
                <p>© 2025</p>
            </footer>
        </div>
    );
}
