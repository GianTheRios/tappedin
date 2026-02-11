"use client";

import Link from "next/link";

function Nav() {
  return (
    <nav className="bg-surface border-b-3 border-border">
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        <span className="font-display text-lg font-bold tracking-tight">
          TAPPED<span className="text-orange">IN</span>
        </span>
        <div className="flex items-center gap-6">
          <Link
            href="/profile"
            className="font-mono text-[11px] text-text-tertiary tracking-[0.1em] uppercase hover:text-orange transition-colors"
          >
            Example Profile
          </Link>
          <a
            href="#how-it-works"
            className="font-mono text-[11px] text-text-tertiary tracking-[0.1em] uppercase hover:text-orange transition-colors"
          >
            How It Works
          </a>
          <button className="font-mono text-[11px] tracking-[0.1em] uppercase font-bold bg-orange text-white border-2 border-border px-4 py-2 shadow-brutal-sm hover:shadow-brutal hover:-translate-y-0.5 transition-all">
            Join Waitlist
          </button>
        </div>
      </div>
    </nav>
  );
}

function Hero() {
  return (
    <section className="max-w-6xl mx-auto px-6 pt-20 pb-24">
      <div className="max-w-4xl">
        {/* Tagline chip */}
        <div className="inline-flex items-center gap-2 mb-8 bg-orange-fill border-2 border-orange px-3 py-1 shadow-brutal-sm">
          <span className="font-mono text-[11px] tracking-[0.15em] uppercase font-bold text-orange">
            Proof &gt; Performance
          </span>
        </div>

        {/* Headline */}
        <h1 className="font-display text-5xl md:text-7xl font-bold tracking-tight leading-[0.95] mb-6 text-text-primary">
          Get discovered for what you&apos;ve{" "}
          <span className="text-orange">built</span>, not what you&apos;ve{" "}
          <span className="line-through text-text-ghost">posted</span>
        </h1>

        {/* Sub */}
        <p className="text-lg md:text-xl text-text-secondary max-w-2xl leading-relaxed mb-10">
          TappedIn is where tech professionals get hired based on real work output.
          Connect your tools, build a proof-backed profile, and let your work speak louder than your resume.
        </p>

        {/* CTAs */}
        <div className="flex flex-wrap gap-4">
          <button className="font-mono text-sm tracking-[0.05em] uppercase font-bold bg-orange text-white border-2 border-border px-8 py-3 shadow-brutal hover:shadow-brutal-hover hover:-translate-y-0.5 transition-all">
            Join the Waitlist
          </button>
          <Link
            href="/profile"
            className="font-mono text-sm tracking-[0.05em] uppercase font-bold bg-surface text-text-primary border-2 border-border px-8 py-3 shadow-brutal hover:shadow-brutal-hover hover:-translate-y-0.5 transition-all"
          >
            See an Example Profile
          </Link>
        </div>
      </div>
    </section>
  );
}

function Problem() {
  const comparisons = [
    {
      linkedin: "\"Passionate thought leader with 10+ years of synergy\"",
      tappedin: "23 proofs. 847 reputation. 14 peer endorsements.",
    },
    {
      linkedin: "500+ connections. 0 verified skills.",
      tappedin: "Open-source project with 2,847 stars. Verified by 8 engineers.",
    },
    {
      linkedin: "Applied to 200 jobs. Ghosted by 195.",
      tappedin: "Company transparency score: 94%. Avg time-to-hire: 6 days.",
    },
  ];

  return (
    <section className="bg-surface-raised py-20">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex items-center gap-4 mb-12">
          <h2 className="font-mono text-[11px] tracking-[0.2em] uppercase text-text-tertiary font-bold">
            The Problem
          </h2>
          <div className="flex-1 h-0.5 bg-border-soft" />
        </div>

        <h3 className="font-display text-3xl md:text-4xl font-bold mb-12 max-w-2xl">
          Hiring is broken. Resumes lie. LinkedIn is performance theatre.
        </h3>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {comparisons.map((item, i) => (
            <div key={i} className="flex flex-col gap-3">
              {/* LinkedIn side — mimics LinkedIn's corporate aesthetic */}
              <div
                className="p-5 border border-[#E0E0E0]"
                style={{
                  background: "#F3F2EF",
                  borderRadius: "8px",
                  boxShadow: "0 1px 3px rgba(0,0,0,0.08)",
                  borderTop: "3px solid #0A66C2",
                }}
              >
                <span className="block mb-2 text-[12px] tracking-wide font-sans">
                  <span className="text-[#191919] font-semibold">Linked</span>
                  <span className="text-[#0A66C2] font-bold">in</span>
                </span>
                <p className="text-[13px] text-[#666666] leading-relaxed font-sans">
                  {item.linkedin}
                </p>
                <div className="flex items-center gap-3 mt-3 pt-3 border-t border-[#E0E0E0]">
                  <span className="text-[12px]" title="Like">&#128077;</span>
                  <span className="text-[12px]" title="Celebrate">&#128079;</span>
                  <span className="text-[12px]" title="Insightful">&#128161;</span>
                  <span className="text-[11px] text-[#666666] font-sans ml-auto">24 reactions</span>
                </div>
              </div>
              {/* TappedIn side — our sharp neo-brutalist system */}
              <div className="p-5 bg-surface border-2 border-border shadow-brutal">
                <span className="font-mono text-[10px] tracking-[0.15em] uppercase text-orange font-bold block mb-2">
                  TappedIn
                </span>
                <p className="text-sm text-text-primary font-medium leading-relaxed">
                  {item.tappedin}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function HowItWorks() {
  const steps = [
    {
      number: "01",
      title: "Connect your tools",
      description: "Link GitHub, Twitter/X, Figma, Dribbble — wherever your work lives. We pull the data, you own the narrative.",
      color: "bg-blue-light border-blue text-blue",
      time: "5 min",
    },
    {
      number: "02",
      title: "Build your Proof Profile",
      description: "Your best work, auto-organized. Peer endorsements weighted by reputation. No fluff, no buzzwords — just receipts.",
      color: "bg-orange-light border-orange text-orange",
      time: "15 min",
    },
    {
      number: "03",
      title: "Get discovered",
      description: "Companies search by verified skills, not keywords. Take micro-challenges to prove it live. Win bounties for real work.",
      color: "bg-green-light border-green text-green",
      time: "Ongoing",
    },
  ];

  return (
    <section id="how-it-works" className="py-20 max-w-6xl mx-auto px-6">
      <div className="flex items-center gap-4 mb-12">
        <h2 className="font-mono text-[11px] tracking-[0.2em] uppercase text-text-tertiary font-bold">
          How It Works
        </h2>
        <div className="flex-1 h-0.5 bg-border-soft" />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
        {steps.map((step) => (
          <div key={step.number} className="bg-surface border-2 border-border shadow-brutal p-6 flex flex-col">
            {/* Step number */}
            <div className={`inline-flex self-start items-center border-2 px-2.5 py-1 mb-5 shadow-brutal-sm ${step.color}`}>
              <span className="font-mono text-[11px] tracking-[0.15em] uppercase font-bold">
                Step {step.number}
              </span>
            </div>

            <h3 className="font-display text-xl font-bold mb-3">{step.title}</h3>
            <p className="text-sm text-text-secondary leading-relaxed flex-1">{step.description}</p>

            <div className="mt-5 pt-4 border-t-2 border-border-soft">
              <span className="font-mono text-[10px] tracking-[0.15em] uppercase text-text-ghost font-medium">
                {step.time}
              </span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

function Tracks() {
  return (
    <section className="bg-surface-raised py-20">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex items-center gap-4 mb-12">
          <h2 className="font-mono text-[11px] tracking-[0.2em] uppercase text-text-tertiary font-bold">
            Two Tracks
          </h2>
          <div className="flex-1 h-0.5 bg-border-soft" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {/* Track 1: Proof Profile */}
          <div className="bg-surface border-2 border-border shadow-brutal p-8">
            <div className="inline-flex items-center border-2 border-blue bg-blue-light px-2.5 py-1 mb-5 shadow-brutal-sm">
              <span className="font-mono text-[10px] tracking-[0.15em] uppercase font-bold text-blue">
                Track 1 — Passive
              </span>
            </div>
            <h3 className="font-display text-2xl font-bold mb-4">Proof Profile</h3>
            <p className="text-sm text-text-secondary leading-relaxed mb-6">
              Your portfolio builds itself. Connect accounts, and we auto-pull your best work — repos, shipped features, design files, writing. Peer endorsements from verified builders add weight.
            </p>
            <ul className="space-y-3">
              {[
                "Auto-aggregates from GitHub, Figma, Dribbble",
                "Peer endorsements weighted by reputation",
                "Privacy controls for stealth job searching",
                "Organic reputation score — no gaming it",
              ].map((item) => (
                <li key={item} className="flex items-start gap-2 text-sm">
                  <span className="text-blue font-bold mt-0.5">+</span>
                  <span className="text-text-secondary">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Track 2: Challenges */}
          <div className="bg-surface border-2 border-border shadow-brutal p-8">
            <div className="inline-flex items-center border-2 border-orange bg-orange-light px-2.5 py-1 mb-5 shadow-brutal-sm">
              <span className="font-mono text-[10px] tracking-[0.15em] uppercase font-bold text-orange">
                Track 2 — Active
              </span>
            </div>
            <h3 className="font-display text-2xl font-bold mb-4">Challenges &amp; Bounties</h3>
            <p className="text-sm text-text-secondary leading-relaxed mb-6">
              Prove it live. Micro-challenges are 15-30 minute tasks that reveal real skill without exploitation. Bounties are larger-scope paid work with escrowed prize pools.
            </p>
            <ul className="space-y-3">
              {[
                "15-30 min tasks across eng, design, marketing, PM",
                "Real deliverables, not whiteboard trivia",
                "Escrowed prizes — companies can't ghost",
                "Winning work becomes your proof",
              ].map((item) => (
                <li key={item} className="flex items-start gap-2 text-sm">
                  <span className="text-orange font-bold mt-0.5">+</span>
                  <span className="text-text-secondary">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

function AntiGhost() {
  const stats = [
    { value: "94%", label: "Avg transparency score", color: "text-green" },
    { value: "6d", label: "Avg time-to-hire", color: "text-blue" },
    { value: "$0", label: "Ghosted bounties", color: "text-orange" },
  ];

  return (
    <section className="py-20 max-w-6xl mx-auto px-6">
      <div className="flex items-center gap-4 mb-12">
        <h2 className="font-mono text-[11px] tracking-[0.2em] uppercase text-text-tertiary font-bold">
          Anti-Ghost Architecture
        </h2>
        <div className="flex-1 h-0.5 bg-border-soft" />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
        <div>
          <h3 className="font-display text-3xl md:text-4xl font-bold mb-6">
            Companies can&apos;t hide behind a job posting anymore.
          </h3>
          <p className="text-text-secondary leading-relaxed mb-6">
            Every company on TappedIn earns a public transparency score. Escrowed bounty funds, forced resolution timelines, and verified hiring badges mean real accountability. Ghost a candidate? Your score drops. The community sees it.
          </p>
          <ul className="space-y-3">
            {[
              "Bounty funds held in escrow — pay up or get exposed",
              "Mandatory winner selection timelines",
              "Public scores track time-to-hire and feedback quality",
              "Bad actors face algorithmic suppression",
            ].map((item) => (
              <li key={item} className="flex items-start gap-2 text-sm">
                <span className="text-green font-bold mt-0.5">+</span>
                <span className="text-text-secondary">{item}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="flex flex-col gap-4">
          {stats.map((stat) => (
            <div key={stat.label} className="bg-surface border-2 border-border shadow-brutal-sm px-6 py-5 flex items-baseline justify-between">
              <span className={`font-mono text-4xl font-bold ${stat.color}`}>{stat.value}</span>
              <span className="font-mono text-[10px] tracking-[0.15em] uppercase text-text-tertiary font-medium">
                {stat.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function FinalCTA() {
  return (
    <section className="bg-border py-20">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <h2 className="font-display text-4xl md:text-5xl font-bold text-surface mb-4">
          Stop performing. Start proving.
        </h2>
        <p className="text-lg text-text-ghost mb-10 max-w-xl mx-auto">
          TappedIn is launching soon. Join the waitlist and be the first to build your Proof Profile.
        </p>
        <button className="font-mono text-sm tracking-[0.05em] uppercase font-bold bg-orange text-white border-2 border-surface px-10 py-4 shadow-brutal-orange hover:-translate-y-0.5 transition-all">
          Join the Waitlist
        </button>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="max-w-6xl mx-auto px-6 py-8 flex items-center justify-between">
      <span className="font-display text-sm font-bold tracking-tight">
        TAPPED<span className="text-orange">IN</span>
      </span>
      <span className="font-mono text-[11px] text-text-ghost">
        &copy; 2026. Proof &gt; Performance.
      </span>
    </footer>
  );
}

export function Landing() {
  return (
    <div className="min-h-screen bg-canvas">
      <Nav />
      <Hero />
      <Problem />
      <HowItWorks />
      <Tracks />
      <AntiGhost />
      <FinalCTA />
      <Footer />
    </div>
  );
}
