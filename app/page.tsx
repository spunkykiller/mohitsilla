import Image from "next/image";
import Link from "next/link";
import {
  community,
  episodes,
  experience,
  profile,
  selectedWork,
} from "./data/profile";

const externalProps = { target: "_blank", rel: "noopener noreferrer" } as const;

const workImageDimensions: Record<string, { width: number; height: number }> = {
  "/images/connectme-work.webp": { width: 1280, height: 720 },
  "/images/api-key-health-dashboard.png": { width: 1440, height: 900 },
  "/images/gensync-public-site.png": { width: 1434, height: 807 },
};

function SectionIntro({
  eyebrow,
  title,
  description,
  titleId,
  action,
}: {
  eyebrow: string;
  title: string;
  description?: string;
  titleId: string;
  action?: React.ReactNode;
}) {
  return (
    <div className="section-intro">
      <div>
        <p className="eyebrow">{eyebrow}</p>
        <h2 id={titleId}>{title}</h2>
      </div>
      {description && <p className="section-description">{description}</p>}
      {action && <div className="section-action">{action}</div>}
    </div>
  );
}

export default function HomePage() {
  return (
    <>
      <section className="hero" aria-labelledby="hero-title">
        <div className="hero-copy">
          <p className="eyebrow">{profile.role} · Visakhapatnam, India</p>
          <h1 id="hero-title">{profile.headline}</h1>
          <p className="hero-intro">{profile.intro}</p>
          <div className="hero-actions" aria-label="Primary links">
            <a className="button button-primary" href={`mailto:${profile.email}`}>
              Start a conversation
            </a>
            <a className="button button-secondary" href={profile.linkedin} {...externalProps}>
              LinkedIn <span aria-hidden="true">↗</span>
            </a>
          </div>
          <div className="affiliations" aria-label="Current affiliations">
            <a href="https://gensync.us/" {...externalProps}>
              <span>Operating</span>
              <strong>GenSync</strong>
              <span aria-hidden="true">↗</span>
            </a>
            <a href="https://thebuildclub.in/" {...externalProps}>
              <span>Hosting</span>
              <strong>The Build Club</strong>
              <span aria-hidden="true">↗</span>
            </a>
          </div>
        </div>
        <figure className="portrait-frame">
          <Image
            src="/images/profile.jpg"
            alt="Mohit Silla outdoors beside carved stone architecture"
            width={900}
            height={900}
            priority
            sizes="(max-width: 720px) 72vw, 300px"
          />
          <figcaption>Builder · Operator · Host</figcaption>
        </figure>
      </section>

      <section className="section" id="work" aria-labelledby="work-title">
        <SectionIntro
          eyebrow="Selected work"
          title="Work I can stand behind."
          titleId="work-title"
          description="Three examples of building the product, organizing the work, and getting the result into people’s hands."
          action={
            <Link href="/experiments" className="text-link">
              See experiments <span aria-hidden="true">→</span>
            </Link>
          }
        />

        <div className="work-grid">
          {selectedWork.map((item, index) => {
            const dimensions = item.image
              ? workImageDimensions[item.image] ?? { width: 1440, height: 900 }
              : undefined;

            return (
              <article className="work-card" key={item.id}>
                {item.image && dimensions ? (
                  <a
                    href={item.href}
                    className="work-visual"
                    aria-label={`${item.linkLabel} for ${item.title}`}
                    {...externalProps}
                  >
                    <Image
                      src={item.image}
                      alt={item.imageAlt ?? ""}
                      width={dimensions.width}
                      height={dimensions.height}
                      sizes="(max-width: 760px) 100vw, (max-width: 1040px) 50vw, 360px"
                    />
                  </a>
                ) : null}

                <div className="work-card-body">
                  <div className="work-card-heading">
                    <p className="work-index" aria-hidden="true">
                      {String(index + 1).padStart(2, "0")}
                    </p>
                    <div>
                      <p className="eyebrow">{item.kicker}</p>
                      <h3>{item.title}</h3>
                    </div>
                  </div>
                  <p className="work-summary">{item.summary}</p>
                  <dl className="work-details">
                    <div>
                      <dt>What I owned</dt>
                      <dd>{item.role}</dd>
                    </div>
                    <div>
                      <dt>Delivered</dt>
                      <dd>{item.outcome}</dd>
                    </div>
                  </dl>
                  <a href={item.href} className="text-link" {...externalProps}>
                    {item.linkLabel} <span aria-hidden="true">↗</span>
                  </a>
                </div>
              </article>
            );
          })}
        </div>
      </section>

      <section
        className="section split-section"
        id="conversations"
        aria-labelledby="conversations-title"
      >
        <div className="split-intro">
          <p className="eyebrow">Conversations</p>
          <h2 id="conversations-title">The Build Club.</h2>
          <p>
            I sit down with founders and ecosystem builders to understand the
            decisions, uncertainty, and work behind what they are building.
          </p>
          <div className="stacked-links">
            <a href="https://thebuildclub.in/" className="text-link" {...externalProps}>
              Visit The Build Club <span aria-hidden="true">↗</span>
            </a>
            <a
              href="https://www.youtube.com/@thebuildclub/videos"
              className="text-link text-link-muted"
              {...externalProps}
            >
              Full channel <span aria-hidden="true">↗</span>
            </a>
          </div>
        </div>
        <div className="episode-list">
          {episodes.map((episode) => (
            <a key={episode.number} href={episode.href} className="episode-entry" {...externalProps}>
              <span className="episode-number">
                Episode {String(episode.number).padStart(2, "0")}
              </span>
              <span className="episode-main">
                <strong>{episode.name}</strong>
                <span>{episode.role}</span>
              </span>
              <span className="episode-topic">{episode.topic}</span>
              <span className="episode-arrow" aria-hidden="true">↗</span>
            </a>
          ))}
        </div>
      </section>

      <section className="section" id="community" aria-labelledby="community-title">
        <SectionIntro
          eyebrow="Community & service"
          title="Work beyond the company."
          titleId="community-title"
          description="Founder rooms, student programs, interviews, and service work across the communities I have been part of."
        />

        <div className="community-grid">
          {community.map((item) => (
            <article className={`community-card ${item.id}`} key={item.id}>
              <div className="community-card-copy">
                {item.id === "leaads" && (
                  <p className="impact-number" aria-label="More than one thousand meals">
                    1,000+
                  </p>
                )}
                <p className="eyebrow">{item.meta}</p>
                <h3>{item.title}</h3>
                <p>{item.description}</p>
                {item.href && item.linkLabel && (
                  <a href={item.href} className="text-link" {...externalProps}>
                    {item.linkLabel} <span aria-hidden="true">↗</span>
                  </a>
                )}
              </div>
              {item.id === "iit-patna" && (
                <figure className="event-figure">
                  <Image
                    src="/images/iit-patna-2024.jpg"
                    alt="A panel in conversation at IIT Patna’s 2024 E-Summit AI Summit"
                    width={1024}
                    height={683}
                    sizes="(max-width: 720px) 100vw, 540px"
                  />
                  <figcaption>
                    Panel at IIT Patna’s E-Summit / AI Summit, 17 March 2024.
                    My hosting work took place across specific sessions. Photograph: Imaze World.
                  </figcaption>
                </figure>
              )}
            </article>
          ))}
        </div>
      </section>

      <section className="section split-section" id="about" aria-labelledby="about-title">
        <div className="split-intro">
          <p className="eyebrow">Background</p>
          <h2 id="about-title">Technical foundation. Operator’s range.</h2>
          <p>
            I’m most useful where a product needs hands-on building and the
            operating rhythm to move from an idea to delivery.
          </p>
          <aside className="personal-note">
            <p className="eyebrow">Outside work</p>
            <p>Long treks and swimming are the quieter counterweight to building at speed.</p>
          </aside>
        </div>
        <div className="experience-list">
          {experience.map((item) => (
            <article className="experience-entry" key={`${item.organization}-${item.role}`}>
              <div className="experience-title">
                <h3>
                  {item.href ? (
                    <a href={item.href} {...externalProps}>{item.organization}</a>
                  ) : (
                    item.organization
                  )}
                </h3>
                <span>{item.period}</span>
              </div>
              <p className="experience-role">{item.role}</p>
              <p>{item.description}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="contact-section" id="contact" aria-labelledby="contact-title">
        <div>
          <p className="eyebrow">Contact</p>
          <h2 id="contact-title">Build, operate, or collaborate.</h2>
        </div>
        <div className="contact-copy">
          <p>
            I’m interested in useful products, difficult operating problems,
            and conversations with thoughtful founders.
          </p>
          <div className="contact-links">
            <a className="button button-light" href={`mailto:${profile.email}`}>
              {profile.email}
            </a>
            <a href={profile.linkedin} {...externalProps}>LinkedIn <span aria-hidden="true">↗</span></a>
            <a href={profile.github} {...externalProps}>GitHub <span aria-hidden="true">↗</span></a>
          </div>
        </div>
      </section>
    </>
  );
}
