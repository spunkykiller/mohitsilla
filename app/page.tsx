import Image from "next/image";
import Link from "next/link";
import { community, episodes, experience, profile, selectedWork } from "./data/profile";

const externalProps = { target: "_blank", rel: "noopener noreferrer" } as const;

export default function HomePage() {
  return (
    <>
      <section className="hero" aria-labelledby="hero-title">
        <div className="hero-copy">
          <p className="eyebrow">{profile.name} · {profile.role}</p>
          <h1 id="hero-title">{profile.headline}</h1>
          <p className="hero-intro">{profile.intro}</p>
          <div className="hero-actions" aria-label="Primary links">
            <a className="button button-primary" href={`mailto:${profile.email}`}>Start a conversation</a>
            <a className="button button-secondary" href={profile.linkedin} {...externalProps}>LinkedIn <span aria-hidden="true">↗</span></a>
          </div>
          <div className="affiliations" aria-label="Current affiliations">
            <a href="https://gensync.us/" {...externalProps}><span>Operating</span>GenSync <span aria-hidden="true">↗</span></a>
            <a href="https://thebuildclub.in/" {...externalProps}><span>Hosting</span>The Build Club <span aria-hidden="true">↗</span></a>
          </div>
        </div>
        <figure className="portrait-frame">
          <Image src="/images/profile.jpg" alt="Mohit Silla outdoors beside carved stone architecture" width={600} height={600} priority sizes="(max-width: 780px) 100vw, 38vw" />
          <figcaption>Builder · Operator · Host</figcaption>
        </figure>
      </section>

      <section className="section" id="work" aria-labelledby="work-title">
        <div className="section-heading">
          <p className="section-number" aria-hidden="true">01</p>
          <div><p className="eyebrow">Selected work</p><h2 id="work-title">Products and systems I helped make real.</h2></div>
          <Link href="/experiments" className="section-link">See experiments <span aria-hidden="true">→</span></Link>
        </div>
        <div className="work-list">
          {selectedWork.map((item, index) => (
            <article className={`work-entry${item.image ? " work-entry-featured" : ""}`} key={item.id}>
              <div className="work-index" aria-hidden="true">{String(index + 1).padStart(2, "0")}</div>
              <div className="work-copy">
                <p className="eyebrow">{item.kicker}</p><h3>{item.title}</h3><p className="work-summary">{item.summary}</p>
                <dl className="work-details">
                  <div><dt>What I owned</dt><dd>{item.role}</dd></div>
                  <div><dt>What shipped</dt><dd>{item.outcome}</dd></div>
                </dl>
                <div className="inline-links">
                  <a href={item.href} className="text-link" {...externalProps}>{item.linkLabel} <span aria-hidden="true">↗</span></a>
                </div>
              </div>
              {item.image && <a href={item.href} className="work-image" aria-label={`${item.linkLabel} for ${item.title}`} {...externalProps}><Image src={item.image} alt={item.imageAlt ?? ""} width={2400} height={1482} sizes="(max-width: 780px) 100vw, 46vw" /></a>}
            </article>
          ))}
        </div>
      </section>

      <section className="section conversations-section" id="conversations" aria-labelledby="conversations-title">
        <div className="section-heading">
          <p className="section-number" aria-hidden="true">02</p>
          <div><p className="eyebrow">Conversations</p><h2 id="conversations-title">Listening to people who are building.</h2></div>
          <a href="https://www.youtube.com/@thebuildclub/videos" className="section-link" {...externalProps}>Full channel <span aria-hidden="true">↗</span></a>
        </div>
        <div className="conversation-intro">
          <p className="large-copy">The Build Club is where I sit down with founders and ecosystem builders to understand the work behind their decisions.</p>
          <a href="https://thebuildclub.in/" className="text-link" {...externalProps}>Visit The Build Club <span aria-hidden="true">↗</span></a>
        </div>
        <div className="episode-list">
          {episodes.map((episode) => (
            <a key={episode.number} href={episode.href} className="episode-entry" {...externalProps}>
              <span className="episode-number">Episode {String(episode.number).padStart(2, "0")}</span>
              <span className="episode-main"><strong>{episode.name}</strong><span>{episode.role}</span></span>
              <span className="episode-topic">{episode.topic}</span><span className="episode-arrow" aria-hidden="true">↗</span>
            </a>
          ))}
        </div>
      </section>

      <section className="section" id="community" aria-labelledby="community-title">
        <div className="section-heading">
          <p className="section-number" aria-hidden="true">03</p>
          <div><p className="eyebrow">Community & service</p><h2 id="community-title">Creating rooms where people can contribute.</h2></div>
        </div>
        <div className="community-layout">
          <div className="community-list">
            {community.map((item) => (
              <article className={`community-entry ${item.id}`} key={item.id}>
                {item.id === "leaads" && <p className="impact-number" aria-label="More than one thousand meals">1,000+</p>}
                <p className="eyebrow">{item.meta}</p><h3>{item.title}</h3><p>{item.description}</p>
                {item.href && item.linkLabel && <a href={item.href} className="text-link" {...externalProps}>{item.linkLabel} <span aria-hidden="true">↗</span></a>}
              </article>
            ))}
          </div>
          <figure className="event-figure">
            <Image src="/images/iit-patna-2024.jpg" alt="A panel in conversation at IIT Patna’s 2024 E-Summit AI Summit" width={1024} height={683} sizes="(max-width: 780px) 100vw, 45vw" />
            <figcaption>A panel at IIT Patna’s E-Summit / AI Summit, 17 March 2024. My hosting work took place across specific sessions during the event. Photograph: Imaze World.</figcaption>
          </figure>
        </div>
      </section>

      <section className="section" id="about" aria-labelledby="about-title">
        <div className="section-heading">
          <p className="section-number" aria-hidden="true">04</p>
          <div><p className="eyebrow">Background</p><h2 id="about-title">A technical education, shaped by operating.</h2></div>
        </div>
        <div className="about-grid">
          <p className="large-copy">I’m most useful where a product needs both hands-on building and the operating rhythm to move from an idea to delivery.</p>
          <div className="experience-list">
            {experience.map((item) => (
              <article className="experience-entry" key={`${item.organization}-${item.role}`}>
                <div className="experience-title"><h3>{item.href ? <a href={item.href} {...externalProps}>{item.organization}</a> : item.organization}</h3><span>{item.period}</span></div>
                <p className="experience-role">{item.role}</p><p>{item.description}</p>
              </article>
            ))}
          </div>
        </div>
        <aside className="personal-note"><p className="eyebrow">Outside work</p><p>I make time for long treks and swimming—the quieter counterweight to building and operating at speed.</p></aside>
      </section>

      <section className="contact-section" id="contact" aria-labelledby="contact-title">
        <p className="eyebrow">Let’s work together</p><h2 id="contact-title">Building something ambitious?</h2>
        <p>I’m always interested in useful products, difficult operating problems, and conversations with thoughtful founders.</p>
        <div className="contact-links">
          <a className="button button-light" href={`mailto:${profile.email}`}>{profile.email}</a>
          <a href={profile.linkedin} {...externalProps}>LinkedIn <span aria-hidden="true">↗</span></a>
          <a href={profile.github} {...externalProps}>GitHub <span aria-hidden="true">↗</span></a>
        </div>
      </section>
    </>
  );
}
