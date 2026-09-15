import type { Metadata, Viewport } from "next";
import { Inter, Newsreader } from "next/font/google";
import SiteHeader from "./components/SiteHeader";
import { profile } from "./data/profile";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const newsreader = Newsreader({
  subsets: ["latin"],
  variable: "--font-newsreader",
  display: "swap",
});

const description =
  "Mohit Silla is COO at GenSync: a product builder, delivery operator, and host of founder conversations through The Build Club.";

export const metadata: Metadata = {
  metadataBase: new URL(profile.siteUrl),
  title: {
    default: "Mohit Silla — COO at GenSync",
    template: "%s | Mohit Silla",
  },
  description,
  alternates: { canonical: "/" },
  openGraph: {
    title: "Mohit Silla — COO at GenSync",
    description,
    url: "/",
    siteName: "Mohit Silla",
    type: "profile",
    images: [
      {
        url: "/opengraph-image",
        width: 1200,
        height: 630,
        alt: "Mohit Silla — COO at GenSync",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Mohit Silla — COO at GenSync",
    description,
    images: ["/opengraph-image"],
  },
  authors: [{ name: profile.name, url: profile.siteUrl }],
  creator: profile.name,
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#f4f0e8",
};

const personStructuredData = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: profile.name,
  url: profile.siteUrl,
  image: `${profile.siteUrl}/images/profile.jpg`,
  jobTitle: "Chief Operating Officer",
  worksFor: {
    "@type": "Organization",
    name: "GenSync",
    url: "https://gensync.us/",
  },
  sameAs: [profile.linkedin, profile.github, "https://thebuildclub.in/"],
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${inter.variable} ${newsreader.variable}`}>
      <body>
        <a href="#main-content" className="skip-link">
          Skip to content
        </a>
        <SiteHeader />
        <main id="main-content" className="page-shell">
          {children}
        </main>
        <footer className="site-footer">
          <div className="site-footer-inner">
            <p>
              Mohit Silla <span>© {new Date().getFullYear()}</span>
            </p>
            <nav aria-label="Footer navigation">
              <a href={`mailto:${profile.email}`}>Email</a>
              <a href={profile.linkedin} target="_blank" rel="noopener noreferrer">
                LinkedIn
              </a>
              <a href={profile.github} target="_blank" rel="noopener noreferrer">
                GitHub
              </a>
              <a href="/experiments">Experiments</a>
            </nav>
          </div>
        </footer>
        <script
          id="person-structured-data"
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(personStructuredData).replace(/</g, "\\u003c"),
          }}
        />
      </body>
    </html>
  );
}
