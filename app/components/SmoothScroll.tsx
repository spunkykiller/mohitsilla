"use client";

import { useEffect } from "react";
import Lenis from "lenis";

export default function SmoothScroll() {
    useEffect(() => {
        // Initialize Lenis with settings for smooth, momentum-based scrolling
        const lenis = new Lenis({
            duration: 2.5, // Much higher duration for luxurious smooth feel
            easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), // Keep exponential easing but longer duration
            orientation: "vertical",
            gestureOrientation: "vertical",
            smoothWheel: true,
            wheelMultiplier: 0.8, // Slightly lower sensitivity for weightier feel
            touchMultiplier: 1.5,
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
