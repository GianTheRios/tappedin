"use client";

// Mock data — this is what a real builder's profile looks like
const PROFILE = {
  name: "Maya Chen",
  handle: "@mayabuilds",
  title: "Full-Stack Engineer",
  location: "SF",
  status: "open to work",
  bio: "I build things that ship. Ex-Stripe, ex-Vercel. Currently obsessed with edge computing and making databases cry.",
  reputation: 847,
  proofCount: 23,
  endorsements: 14,
  viewsThisWeek: 312,
  skills: [
    { name: "TypeScript", verified: true, endorsements: 8 },
    { name: "React", verified: true, endorsements: 6 },
    { name: "PostgreSQL", verified: true, endorsements: 4 },
    { name: "System Design", verified: false, endorsements: 2 },
    { name: "Rust", verified: false, endorsements: 1 },
    { name: "Edge Computing", verified: false, endorsements: 0 },
  ],
  proofs: [
    {
      id: 1,
      type: "GITHUB",
      title: "edge-cache-proxy",
      description: "A Rust-based edge caching proxy that reduced p99 latency from 340ms to 12ms at Vercel. Open-sourced after I left.",
      metrics: { stars: 2847, forks: 341, contributors: 28 },
      languages: ["Rust", "TypeScript"],
      date: "2025-11",
      url: "#",
    },
    {
      id: 2,
      type: "SHIPPED",
      title: "Stripe Payment Links v2",
      description: "Led the rebuild of Payment Links. Rewrote the rendering pipeline to support dynamic theming. Shipped to 4M+ merchants.",
      metrics: { users: "4.2M", performance: "+40% conversion" },
      languages: ["TypeScript", "React", "Ruby"],
      date: "2025-06",
      url: "#",
    },
    {
      id: 3,
      type: "BOUNTY_WIN",
      title: "TappedIn API Challenge — 1st Place",
      description: "Built a real-time talent matching engine in 48 hours. Beat 127 submissions. Prize: $5,000.",
      metrics: { rank: "#1 / 128", prize: "$5,000" },
      languages: ["Go", "PostgreSQL"],
      date: "2025-09",
      url: "#",
    },
    {
      id: 4,
      type: "GITHUB",
      title: "pg-notify-bus",
      description: "Event bus built on PostgreSQL LISTEN/NOTIFY. Zero external dependencies. Used in production at 3 companies I know of.",
      metrics: { stars: 1203, forks: 89, contributors: 12 },
      languages: ["TypeScript", "SQL"],
      date: "2025-03",
      url: "#",
    },
  ],
  endorsementsList: [
    {
      id: 1,
      from: "Jake Torres",
      fromTitle: "Staff Engineer @ Stripe",
      fromReputation: 923,
      text: "Maya rebuilt our payment links rendering pipeline under extreme time pressure. She identified a N+1 query pattern nobody else caught and fixed it in the same PR. The kind of engineer who makes everyone around her faster.",
      skill: "TypeScript",
      date: "2025-07",
    },
    {
      id: 2,
      from: "Ava Kim",
      fromTitle: "Engineering Manager @ Vercel",
      fromReputation: 871,
      text: "Hired Maya to work on edge infrastructure. She shipped the caching proxy that became our most-starred internal tool. When she open-sourced it after leaving, it got 2K stars in a week. She writes code like she's writing for the next person who has to read it.",
      skill: "Rust",
      date: "2025-12",
    },
    {
      id: 3,
      from: "Sam Liu",
      fromTitle: "Senior Engineer @ Stripe",
      fromReputation: 756,
      text: "Maya doesn't just ship — she ships things that don't break. Her PR review comments taught me more about TypeScript than any course I've taken.",
      skill: "System Design",
      date: "2025-08",
    },
  ],
};

function ProofTypeBadge({ type }: { type: string }) {
  const config: Record<string, { label: string; bg: string; text: string }> = {
    GITHUB: { label: "REPO", bg: "bg-blue-fill", text: "text-blue" },
    SHIPPED: { label: "SHIPPED", bg: "bg-orange-fill", text: "text-orange" },
    BOUNTY_WIN: { label: "BOUNTY WIN", bg: "bg-green-fill", text: "text-green" },
    ARTICLE: { label: "WROTE", bg: "bg-surface-raised", text: "text-text-secondary" },
  };
  const c = config[type] || config.GITHUB;
  return (
    <span className={`font-mono text-[10px] tracking-[0.15em] uppercase font-medium px-2.5 py-1 border-2 border-border ${c.bg} ${c.text}`}>
      {c.label}
    </span>
  );
}

function StatBlock({ value, label }: { value: string | number; label: string }) {
  return (
    <div className="flex flex-col bg-surface border-2 border-border shadow-brutal-sm px-5 py-4">
      <span className="font-mono text-2xl font-bold text-text-primary">{value}</span>
      <span className="font-mono text-[10px] tracking-[0.15em] uppercase text-text-tertiary mt-1">{label}</span>
    </div>
  );
}

function ProofCard({ proof }: { proof: (typeof PROFILE.proofs)[0] }) {
  return (
    <a
      href={proof.url}
      className="group block bg-surface border-2 border-border shadow-brutal hover:shadow-brutal-hover hover:-translate-y-0.5 transition-all duration-150"
    >
      <div className="p-6">
        {/* Header */}
        <div className="flex items-start justify-between gap-4 mb-4">
          <div className="flex items-center gap-3">
            <ProofTypeBadge type={proof.type} />
            <span className="font-mono text-[11px] text-text-tertiary">{proof.date}</span>
          </div>
          <div className="flex gap-1.5">
            {proof.languages.map((lang) => (
              <span key={lang} className="font-mono text-[10px] text-text-secondary bg-surface-raised border border-border-soft px-1.5 py-0.5">
                {lang}
              </span>
            ))}
          </div>
        </div>

        {/* Title */}
        <h3 className="font-display text-xl font-bold text-text-primary mb-2 group-hover:text-orange transition-colors">
          {proof.title}
        </h3>

        {/* Description */}
        <p className="text-sm text-text-secondary leading-relaxed mb-5">
          {proof.description}
        </p>

        {/* Metrics */}
        <div className="flex gap-6 pt-4 border-t-2 border-border-soft">
          {Object.entries(proof.metrics).map(([key, val]) => (
            <div key={key} className="flex items-baseline gap-1.5">
              <span className="font-mono text-sm font-bold text-text-primary">
                {typeof val === "number" ? val.toLocaleString() : val}
              </span>
              <span className="font-mono text-[10px] text-text-ghost uppercase">{key}</span>
            </div>
          ))}
        </div>
      </div>
    </a>
  );
}

function EndorsementCard({ endorsement }: { endorsement: (typeof PROFILE.endorsementsList)[0] }) {
  return (
    <div className="bg-surface border-2 border-border shadow-brutal-sm p-6">
      {/* Big quote mark */}
      <span className="font-display text-5xl font-bold text-orange leading-none select-none">&ldquo;</span>

      {/* Quote */}
      <p className="text-sm text-text-secondary leading-relaxed mb-5 -mt-2">
        {endorsement.text}
      </p>

      {/* Attribution */}
      <div className="flex items-center justify-between pt-4 border-t-2 border-border-soft">
        <div>
          <div className="text-sm font-bold text-text-primary">{endorsement.from}</div>
          <div className="font-mono text-[11px] text-text-tertiary">{endorsement.fromTitle}</div>
        </div>
        <div className="flex items-center gap-3">
          <span className="font-mono text-[10px] tracking-[0.15em] uppercase text-blue bg-blue-light border-2 border-blue px-2 py-0.5 font-medium">
            RE: {endorsement.skill}
          </span>
          <span className="font-mono text-[11px] font-bold text-orange">{endorsement.fromReputation}</span>
        </div>
      </div>
    </div>
  );
}

function SkillTag({ skill }: { skill: (typeof PROFILE.skills)[0] }) {
  if (skill.verified) {
    return (
      <div className="flex items-center gap-2 bg-green-light border-2 border-green px-3 py-1.5 shadow-brutal-sm">
        <span className="text-sm font-medium text-text-primary">{skill.name}</span>
        <span className="font-mono text-[9px] tracking-[0.15em] uppercase font-bold text-green">
          VERIFIED
        </span>
        {skill.endorsements > 0 && (
          <span className="font-mono text-[10px] text-text-tertiary font-medium">{skill.endorsements}</span>
        )}
      </div>
    );
  }

  return (
    <div className="flex items-center gap-2 bg-surface border-2 border-border-soft px-3 py-1.5">
      <span className="text-sm text-text-secondary">{skill.name}</span>
      {skill.endorsements > 0 && (
        <span className="font-mono text-[10px] text-text-ghost">{skill.endorsements}</span>
      )}
    </div>
  );
}

export function ProofProfile() {
  return (
    <div className="min-h-screen bg-canvas">
      {/* Nav */}
      <nav className="bg-surface border-b-3 border-border">
        <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
          <span className="font-display text-lg font-bold tracking-tight">
            TAPPED<span className="text-orange">IN</span>
          </span>
          <div className="flex items-center gap-6">
            <span className="font-mono text-[11px] text-text-tertiary tracking-[0.1em] uppercase cursor-pointer hover:text-orange transition-colors">
              Discover
            </span>
            <span className="font-mono text-[11px] text-text-tertiary tracking-[0.1em] uppercase cursor-pointer hover:text-orange transition-colors">
              Bounties
            </span>
            <span className="font-mono text-[11px] text-text-tertiary tracking-[0.1em] uppercase cursor-pointer hover:text-orange transition-colors">
              Challenges
            </span>
          </div>
        </div>
      </nav>

      <main className="max-w-6xl mx-auto px-6">
        {/* Hero */}
        <section className="pt-16 pb-12">
          <div className="flex items-start justify-between">
            <div>
              {/* Status pill */}
              <div className="inline-flex items-center gap-2 mb-6 bg-green-light border-2 border-green px-3 py-1 shadow-brutal-sm">
                <span className="inline-block w-2 h-2 bg-green" />
                <span className="font-mono text-[11px] tracking-[0.15em] uppercase font-bold text-green">
                  {PROFILE.status}
                </span>
              </div>

              {/* Name */}
              <h1 className="font-display text-6xl md:text-8xl font-bold tracking-tight leading-[0.9] mb-4 text-text-primary">
                {PROFILE.name}
              </h1>

              {/* Handle + title */}
              <div className="flex items-center gap-3 mb-6">
                <span className="font-mono text-sm font-bold text-orange">{PROFILE.handle}</span>
                <span className="text-text-ghost">&mdash;</span>
                <span className="font-mono text-sm text-text-secondary">{PROFILE.title}</span>
                <span className="text-text-ghost">&mdash;</span>
                <span className="font-mono text-sm text-text-tertiary">{PROFILE.location}</span>
              </div>

              {/* Bio */}
              <p className="text-base text-text-secondary max-w-xl leading-relaxed">
                {PROFILE.bio}
              </p>
            </div>

            {/* Reputation */}
            <div className="hidden md:flex flex-col items-center bg-orange-fill border-3 border-border shadow-brutal px-6 py-4">
              <span className="font-mono text-6xl font-bold text-text-primary leading-none">
                {PROFILE.reputation}
              </span>
              <span className="font-mono text-[10px] tracking-[0.2em] uppercase text-orange font-bold mt-2">
                REPUTATION
              </span>
            </div>
          </div>

          {/* Stats strip */}
          <div className="flex gap-4 mt-10">
            <StatBlock value={PROFILE.proofCount} label="Proofs" />
            <StatBlock value={PROFILE.endorsements} label="Endorsements" />
            <StatBlock value={PROFILE.viewsThisWeek} label="Views this week" />
          </div>
        </section>

        {/* Skills */}
        <section className="py-10">
          <div className="flex items-center gap-4 mb-6">
            <h2 className="font-mono text-[11px] tracking-[0.2em] uppercase text-text-tertiary font-bold">
              Skills
            </h2>
            <div className="flex-1 h-0.5 bg-border-soft" />
          </div>
          <div className="flex flex-wrap gap-2">
            {PROFILE.skills.map((skill) => (
              <SkillTag key={skill.name} skill={skill} />
            ))}
          </div>
        </section>

        {/* Proof artifacts */}
        <section className="py-10">
          <div className="flex items-center gap-4 mb-8">
            <h2 className="font-mono text-[11px] tracking-[0.2em] uppercase text-text-tertiary font-bold">
              Proof
            </h2>
            <div className="flex-1 h-0.5 bg-border-soft" />
            <span className="font-mono text-[11px] text-text-ghost font-medium">{PROFILE.proofCount} artifacts</span>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {PROFILE.proofs.map((proof) => (
              <ProofCard key={proof.id} proof={proof} />
            ))}
          </div>
        </section>

        {/* Endorsements */}
        <section className="py-10 pb-20">
          <div className="flex items-center gap-4 mb-8">
            <h2 className="font-mono text-[11px] tracking-[0.2em] uppercase text-text-tertiary font-bold">
              Endorsements
            </h2>
            <div className="flex-1 h-0.5 bg-border-soft" />
            <span className="font-mono text-[11px] text-text-ghost font-medium">{PROFILE.endorsementsList.length} from verified builders</span>
          </div>
          <div className="grid grid-cols-1 gap-5">
            {PROFILE.endorsementsList.map((endorsement) => (
              <EndorsementCard key={endorsement.id} endorsement={endorsement} />
            ))}
          </div>
        </section>
      </main>
    </div>
  );
}
