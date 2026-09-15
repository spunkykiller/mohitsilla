import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import ExperimentDemo from "../components/ExperimentDemo";
import { experiments, profile } from "../data/profile";

const title = `Experiments | ${profile.name}`;
const description =
  "Small software projects by Mohit Silla, exploring conversational tools, chat analysis and everyday automation. Browse repositories and demos.";
const canonical = new URL("/experiments", profile.siteUrl).toString();
const imageDimensions: Record<string, { width: number; height: number }> = {
  "/images/telegram-analyzer.png": { width: 1916, height: 1016 },
  "/images/whatsapp-chat.png": { width: 1124, height: 582 },
  "/images/automeet.png": { width: 1902, height: 1128 },
};

export const metadata: Metadata = {
  title: { absolute: title },
  description,
  alternates: { canonical },
  openGraph: {
    title,
    description,
    url: canonical,
    type: "website",
    images: [
      {
        url: "/opengraph-image",
        width: 1200,
        height: 630,
        alt: "Mohit Silla — product experiments",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
    images: ["/opengraph-image"],
  },
};

export default function ExperimentsPage() {
  return (
    <div className="experiments-page">
      <header className="page-intro">
        <p className="eyebrow">Side projects</p>
        <h1>Experiments & small tools.</h1>
        <p className="page-lede">
          Things I’ve built to explore an idea or make a familiar task easier.
          Here are the repositories, screenshots and demos behind them.
        </p>
        <Link href="/" className="text-link">
          <span aria-hidden="true">← </span>Back to my profile
        </Link>
      </header>

      <div className="experiment-list">
        {experiments.map((experiment, index) => (
          <article
            key={experiment.id}
            id={experiment.id}
            className="experiment-entry"
            aria-labelledby={`${experiment.id}-title`}
          >
            <div className="experiment-copy">
              <p className="eyebrow" aria-hidden="true">
                {String(index + 1).padStart(2, "0")}
              </p>
              <h2 id={`${experiment.id}-title`}>{experiment.name}</h2>
              <p>{experiment.description}</p>
              {experiment.href && (
                <a
                  href={experiment.href}
                  className="text-link"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`View the ${experiment.name} repository (opens in a new tab)`}
                >
                  View repository <span aria-hidden="true">↗</span>
                </a>
              )}
            </div>

            {(experiment.image || experiment.youtubeId) && (
              <div className="experiment-media">
                {experiment.image && (
                  <Image
                    src={experiment.image}
                    alt={experiment.imageAlt ?? `${experiment.name} screenshot`}
                    width={imageDimensions[experiment.image]?.width ?? 1200}
                    height={imageDimensions[experiment.image]?.height ?? 675}
                    sizes="(max-width: 760px) 100vw, 50vw"
                    style={{ width: "100%", height: "auto" }}
                  />
                )}
                {experiment.youtubeId && (
                  <ExperimentDemo
                    name={experiment.name}
                    youtubeId={experiment.youtubeId}
                  />
                )}
              </div>
            )}
          </article>
        ))}
      </div>
    </div>
  );
}
