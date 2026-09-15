export type Profile = {
  name: string;
  role: string;
  headline: string;
  intro: string;
  email: string;
  linkedin: string;
  github: string;
  siteUrl: string;
};

export type SelectedWork = {
  id: string;
  title: string;
  kicker: string;
  summary: string;
  role: string;
  outcome: string;
  href: string;
  linkLabel: string;
  image?: string;
  imageAlt?: string;
};

export type Episode = {
  number: number;
  name: string;
  role: string;
  topic: string;
  href: string;
};

export type CommunityItem = {
  id: string;
  title: string;
  meta: string;
  description: string;
  href?: string;
  linkLabel?: string;
};

export type Experience = {
  organization: string;
  role: string;
  period: string;
  description: string;
  href?: string;
};

export type Experiment = {
  id: string;
  name: string;
  description: string;
  href?: string;
  youtubeId?: string;
  image?: string;
  imageAlt?: string;
};

export const profile: Profile = {
  name: "Mohit Silla",
  role: "COO at GenSync",
  headline: "I build products, run delivery, and bring founders together.",
  intro:
    "I’m Mohit Silla, COO at GenSync. My work spans software, AI workflows, and the coordination behind client delivery. Through The Build Club, I host conversations with founders and help bring entrepreneurial communities together across India.",
  email: "mohitsilla@wne3.com",
  linkedin: "https://www.linkedin.com/in/mohitsilla/",
  github: "https://github.com/spunkykiller/",
  siteUrl: "https://mohitsilla.vercel.app",
};

export const selectedWork: SelectedWork[] = [
  {
    id: "connectme",
    title: "ConnectME",
    kicker: "Client work · GenSync",
    summary:
      "Helping a Dubai IoT business make its products easier to understand and find online.",
    role:
      "I implemented the website and product presentation, and contributed to search work.",
    outcome:
      "Website and product updates, with a public case study documenting search visibility.",
    href: "https://gensync.us/case-studies/seo/connectme",
    linkLabel: "View the case study",
    image: "/images/connectme-work.webp",
    imageAlt: "ConnectME product catalogue for smart meters and IoT gateways",
  },
  {
    id: "api-key-health",
    title: "API Key Health",
    kicker: "Product build",
    summary:
      "A shared view of API credentials, who owns them and how supported providers are performing.",
    role:
      "I built the application, bringing credential ownership and provider checks into one workspace.",
    outcome:
      "Credential management with scheduled provider checks and usage visibility where available.",
    href: "https://apikeyhealth.com/",
    linkLabel: "Explore the product",
    image: "/images/api-key-health-dashboard.png",
    imageAlt: "API Key Health workspace dashboard",
  },
  {
    id: "gensync-systems",
    title: "GenSync operating systems",
    kicker: "Operations · GenSync",
    summary:
      "The delivery layer behind GenSync’s websites, product films and growth systems.",
    role:
      "I built the internal dashboard, connected team tasks to Google Sheets and coordinated client delivery.",
    outcome:
      "A shared CRM, client and pipeline views, and task handoffs from intake through delivery.",
    href: "https://gensync.us/",
    linkLabel: "Visit the GenSync website",
    image: "/images/gensync-public-site.png",
    imageAlt: "GenSync’s public website showing its launch, film and growth systems work",
  },
];

export const episodes: Episode[] = [
  {
    number: 11,
    name: "Ravi Eswarapu",
    role: "Ecosystem builder · RTIH & ā hub",
    topic: "Building Visakhapatnam’s startup ecosystem.",
    href: "https://www.youtube.com/watch?v=Ygnxo6LbIf8",
  },
  {
    number: 12,
    name: "Darahas Muggu",
    role: "Founder · Callensights",
    topic: "Starting young: from student ideas to two ventures.",
    href: "https://www.youtube.com/watch?v=Xg-YMVwWqbE",
  },
];

export const community: CommunityItem[] = [
  {
    id: "leaads",
    title: "LEAAD’S NGO",
    meta: "Team lead · Vadodara",
    description:
      "Led restaurant-to-shelter food redistribution in Vadodara, redistributing 1,000+ meals in one month.",
  },
  {
    id: "founder-community",
    title: "Vizag Founder’s Meetup",
    meta: "Co-host · Visakhapatnam",
    description:
      "A gathering for founders in Visakhapatnam to meet, exchange ideas and build relationships.",
    href: "https://luma.com/osilnxhn",
    linkLabel: "View the meetup",
  },
  {
    id: "iit-patna",
    title: "Conversations on stage",
    meta: "AI Summit & E-Summit IIT Patna · 2024",
    description:
      "Hosted specific sessions at IIT Patna’s E-Summit and AI Summit in 2024, helping bring founders and students into conversation.",
  },
  {
    id: "student-innovation",
    title: "Helping students build",
    meta: "Entrepreneurs Club & GitHub Community · GITAM",
    description:
      "Mentored student innovators, organized technology workshops and helped coordinate university entrepreneurship programs and hackathons.",
  },
];

export const experience: Experience[] = [
  {
    organization: "GenSync",
    role: "COO",
    period: "Current",
    description:
      "Technical delivery, operating systems and coordination across client websites, content and growth work.",
    href: "https://gensync.us/",
  },
  {
    organization: "WNE3",
    role: "Co-founder & COO",
    period: "Earlier venture",
    description:
      "Worked from concept to pilot on generative commerce: turning natural-language ideas into customized, on-demand products.",
    href: "https://www.wne3.com/",
  },
  {
    organization: "GAIL (India) Limited",
    role: "Business Information Systems intern",
    period: "Vadodara",
    description:
      "Supported enterprise IT work, documented cybersecurity risks and helped with employee security-awareness workshops.",
  },
  {
    organization: "GITAM",
    role: "B.Tech · Computer Science Engineering",
    period: "2021–2025",
    description:
      "Studied computer science in Visakhapatnam while building products and contributing to student entrepreneurship and technology communities.",
  },
];

export const experiments: Experiment[] = [
  {
    id: "spotify-agent",
    name: "Spotify AI Agent",
    description:
      "Manage Spotify playlists through a conversation, using natural-language commands.",
    youtubeId: "GXdZ3hmpd30",
  },
  {
    id: "telegram-analyzer",
    name: "Telegram Trading Signal Analyzer",
    description:
      "A Python tool for extracting trading-signal data and exploring timing patterns.",
    href: "https://github.com/spunkykiller/Trading-Signal-Analyzer",
    image: "/images/telegram-analyzer.png",
    imageAlt: "Telegram trading-signal analysis dashboard",
  },
  {
    id: "whatsapp-intelligence",
    name: "WhatsApp Chat Intelligence",
    description:
      "Turn group-chat exports into a dashboard for finding useful conversations and opportunities.",
    youtubeId: "1YTM52-x9X8",
    image: "/images/whatsapp-chat.png",
    imageAlt: "WhatsApp Chat Intelligence dashboard",
  },
  {
    id: "automeet",
    name: "AutoMeet Recorder",
    description:
      "Automate meeting recording and keep a local archive through OBS.",
    href: "https://github.com/spunkykiller/AutoMeet_OBS",
    image: "/images/automeet.png",
    imageAlt: "AutoMeet Recorder interface",
  },
];
