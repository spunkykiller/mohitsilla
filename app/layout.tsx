import type { Metadata } from "next";
import { Inter, IBM_Plex_Sans } from "next/font/google";
import "./globals.css";
import SmoothScroll from "./components/SmoothScroll";
import NavBar from "./components/NavBar";
import BackgroundSpotlight from "./components/BackgroundSpotlight";

const inter = Inter({
    subsets: ["latin"],
    variable: "--font-inter",
});

const ibmPlexSans = IBM_Plex_Sans({
    weight: ["400", "500", "600", "700"],
    subsets: ["latin"],
    variable: "--font-ibm-plex-sans",
});

export const metadata: Metadata = {
    title: "Mohit Silla — Developer & Core Operator",
    description: "Developer and operator building end-to-end systems, AI tools, automation pipelines, and production software.",
    openGraph: {
        title: "Mohit Silla — Developer & Core Operator",
        description: "Developer and operator building end-to-end systems, AI tools, automation pipelines, and production software.",
        type: "profile",
    },
    twitter: {
        card: "summary_large_image",
        title: "Mohit Silla — Developer & Core Operator",
        description: "Developer and operator building end-to-end systems, AI tools, automation pipelines, and production software.",
    },
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en" className="dark">
            <body
                className={`${inter.variable} ${ibmPlexSans.variable} font-sans bg-background text-foreground antialiased selection:bg-white selection:text-black`}
            >
                <SmoothScroll />
                <BackgroundSpotlight />
                <NavBar />
                <div className="min-h-screen flex flex-col items-center">
                    <main className="w-full max-w-5xl px-6 py-12 md:py-20 flex flex-col gap-16 md:gap-24">
                        {children}
                    </main>
                </div>
            </body>
        </html>
    );
}
