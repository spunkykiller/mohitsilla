"use client";

import { useEffect } from "react";
import Lenis from "lenis";

export default function SmoothScroll() {
    useEffect(() => {
        // Initialize Lenis with settings for smooth, momentum-based scrolling
        const lenis = new Lenis({
            duration: 1.5, // Increased slightly for more noticeable smoothness
            easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
            orientation: "vertical",
            gestureOrientation: "vertical",
            smoothWheel: true,
            wheelMultiplier: 1,
            touchMultiplier: 2,
        });

        // Explicitly add 'lenis' class to html just in case
        document.documentElement.classList.add("lenis");

        let rafId: number;
        function raf(time: number) {
            lenis.raf(time);
            rafId = requestAnimationFrame(raf);
        }

        rafId = requestAnimationFrame(raf);

        return () => {
            cancelAnimationFrame(rafId);
            lenis.destroy();
            document.documentElement.classList.remove("lenis");
        };
    }, []);

    return null;
}
