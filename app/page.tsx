"use client";

import Image from "next/image";
import { ArrowUpRight, Play, X, Github, Linkedin, Mail, AlertTriangle } from "lucide-react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import MagneticButton from "./components/MagneticButton";
import Spotlight from "./components/Spotlight";

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
        tech: ["Python", "Data Visualization"],
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
        tech: ["Automation", "Local Archival"],
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
        description: "Building the future of commerce with Generative AI. Enabling users to create exactly what they want, instantly, using prompts.",
        link: "https://wne3.com/",
    },
];

function ProjectCard({ project }: { project: typeof projects[0] }) {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <Spotlight className="group/card rounded-2xl bg-[#111111]">
            <div className="flex flex-col gap-4 p-6 relative z-10 transition-colors">
                <div className="flex flex-col gap-3">
                    <div className="flex justify-between items-start">
                        <Link
                            href={project.link}
                            target="_blank"
                            className="flex items-center gap-2 text-foreground font-medium hover:text-accent transition-colors text-lg group"
                        >
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
                            <span
                                key={t}
                                className="text-[10px] uppercase tracking-wider text-neutral-500 bg-neutral-900 px-2 py-1 rounded-md border border-neutral-800/50"
                            >
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
        </Spotlight>
    );
}

const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.1,
            delayChildren: 0.2, // Small initial delay
        },
    },
};

const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

export default function Home() {
    return (
        <div className="flex flex-col gap-24 md:gap-32 pb-10 w-full max-w-4xl mx-auto">
            {/* Hero Section - Staggered Entrance */}
            <motion.section
                className="flex flex-col gap-8 max-w-2xl"
                variants={containerVariants}
                initial="hidden"
                animate="visible"
            >
                <div className="flex flex-col gap-6">
                    <motion.div variants={itemVariants}>
                        <Image
                            src="/images/profile.jpg"
                            alt="Mohit Silla"
                            width={160}
                            height={160}
                            className="rounded-full opacity-90 mb-2 grayscale hover:grayscale-0 transition-all duration-500"
                            priority
                        />
                    </motion.div>
                    <motion.h1 variants={itemVariants} className="text-foreground text-xl font-medium tracking-tight">
                        I’m Mohit Silla.
                    </motion.h1>
                    <motion.div variants={itemVariants} className="flex flex-col gap-4">
                        <p className="text-secondary text-lg max-w-prose leading-relaxed">
                            Developer and core operator building end-to-end systems.
                        </p>
                        <p className="text-secondary text-base max-w-prose leading-relaxed opacity-80">
                            I operate at the intersection of AI, automation, and infrastructure. Everything I build solves a real problem and runs in production.
                        </p>
                    </motion.div>
                </div>

                <motion.div variants={itemVariants} className="flex flex-wrap gap-4 mt-2">
                    <MagneticButton>
                        <Link
                            href="mailto:mohitsilla@wne3.com"
                            className="flex items-center gap-2.5 px-5 py-2.5 bg-[#111111] border border-neutral-800 rounded-lg text-secondary hover:text-white hover:border-neutral-600 transition-all group"
                        >
                            <Mail className="w-4 h-4 opacity-70 group-hover:opacity-100" />
                            <span className="text-sm font-medium">Email</span>
                        </Link>
                    </MagneticButton>
                    <MagneticButton>
                        <Link
                            href="https://www.linkedin.com/in/mohitsilla/"
                            target="_blank"
                            className="flex items-center gap-2.5 px-5 py-2.5 bg-[#111111] border border-neutral-800 rounded-lg text-secondary hover:text-white hover:border-neutral-600 transition-all group"
                        >
                            <Linkedin className="w-4 h-4 opacity-70 group-hover:opacity-100" />
                            <span className="text-sm font-medium">LinkedIn</span>
                        </Link>
                    </MagneticButton>
                    <MagneticButton>
                        <Link
                            href="https://github.com/spunkykiller/"
                            target="_blank"
                            className="flex items-center gap-2.5 px-5 py-2.5 bg-[#111111] border border-neutral-800 rounded-lg text-secondary hover:text-white hover:border-neutral-600 transition-all group"
                        >
                            <Github className="w-4 h-4 opacity-70 group-hover:opacity-100" />
                            <span className="text-sm font-medium">GitHub</span>
                        </Link>
                    </MagneticButton>
                </motion.div>
            </motion.section>

            {/* What I Do Section */}
            <motion.section
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6 }}
                className="flex flex-col gap-8"
            >
                <h2 className="text-foreground text-xs font-bold tracking-widest uppercase text-opacity-50">
                    Core Competencies
                </h2>
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
                            <span className="mr-4 opacity-20 text-sm">0{index + 1}</span> {item}
                        </motion.li>
                    ))}
                </ul>
            </motion.section>

            {/* Active Work & Platforms */}
            <section id="work" className="flex flex-col gap-8">
                <h2 className="text-foreground text-xs font-bold tracking-widest uppercase text-opacity-50">
                    Active Ecosystems
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {organizations.map((org, index) => (
                        <Spotlight key={index} className="rounded-2xl">
                            <Link href={org.link} target="_blank" className="group block h-full relative z-10">
                                <div className="h-full flex flex-col gap-3 p-6 group-hover:bg-[#161616]/50 transition-all duration-300 rounded-2xl">
                                    <div className="flex items-center justify-between">
                                        <span className="text-foreground font-medium text-lg group-hover:text-white transition-colors">
                                            {org.name}
                                        </span>
                                        <ArrowUpRight className="w-5 h-5 text-neutral-600 group-hover:text-white group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
                                    </div>
                                    <p className="text-secondary text-sm leading-relaxed">{org.description}</p>
                                </div>
                            </Link>
                        </Spotlight>
                    ))}
                </div>
            </section>

            {/* Projects Section */}
            <section id="projects" className="flex flex-col gap-8">
                <h2 className="text-foreground text-xs font-bold tracking-widest uppercase text-opacity-50">
                    Production Systems
                </h2>
                <div className="grid grid-cols-1 gap-6">
                    {projects.map((project, index) => (
                        <ProjectCard key={index} project={project} />
                    ))}
                </div>
            </section>

            {/* 8n8 Based Projects - Sync Error Placeholder */}
            <section id="n8n-projects" className="flex flex-col gap-8">
                <h2 className="text-foreground text-xs font-bold tracking-widest uppercase text-opacity-50">
                    8n8 Based Projects
                </h2>
                <div className="w-full p-8 border border-neutral-800/60 bg-[#111111]/40 rounded-2xl flex flex-col items-center justify-center gap-4 min-h-[180px] text-center border-dashed">
                    <div className="flex items-center gap-2 text-red-500/80 animate-pulse">
                        <AlertTriangle className="w-5 h-5" />
                        <span className="font-mono text-sm tracking-widest uppercase font-bold">Sync Error</span>
                    </div>
                    <p className="font-mono text-xs text-secondary/60 max-w-sm">
                        [System Notification]: Connection to 8n8 node pending... <br />
                        Data stream interrupted. Retrying handshake in 3... 2...
                    </p>
                </div>
            </section>

            {/* Footer */}
            <footer className="mt-12 flex flex-col md:flex-row justify-between items-center gap-4 border-t border-neutral-900 pt-8 text-neutral-600 text-sm">
                <p>© {new Date().getFullYear()} Mohit Silla.</p>
                <div className="flex items-center gap-6">
                    <span className="opacity-50">Crafted by Mohit</span>
                </div>
            </footer>
        </div>
    );
}
