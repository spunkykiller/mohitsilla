"use client";

import { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring, useMotionTemplate } from "framer-motion";

export default function BackgroundGrid() {
    const mouseX = useMotionValue(0);
    const mouseY = useMotionValue(0);

    // Smooth spring animation for mouse movement
    const springX = useSpring(mouseX, { stiffness: 50, damping: 20 });
    const springY = useSpring(mouseY, { stiffness: 50, damping: 20 });

    useEffect(() => {
        const handleMouseMove = ({ clientX, clientY }: MouseEvent) => {
            mouseX.set(clientX);
            mouseY.set(clientY);
        };

        window.addEventListener("mousemove", handleMouseMove);
        return () => window.removeEventListener("mousemove", handleMouseMove);
    }, [mouseX, mouseY]);

    return (
        <div className="fixed inset-0 z-[-1] pointer-events-none overflow-hidden">
            <div className="absolute inset-0 bg-background mix-blend-normal" />
            <motion.div
                className="absolute -inset-[50px] opacity-30"
                style={{
                    background: useMotionTemplate`
                        radial-gradient(
                            600px circle at ${springX}px ${springY}px,
                            rgba(255, 255, 255, 0.04),
                            transparent 80%
                        )
                    `,
                }}
            />
        </div>
    );
}
