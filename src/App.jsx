import { useEffect, useRef, useState } from 'react'

const NAV_LINKS = [
  { href: '#about', label: 'About' },
  { href: '#projects', label: 'Projects' },
  { href: '#skills', label: 'Skills' },
  { href: '#contact', label: 'Contact' },
]

const PROJECTS = [
  {
    title: 'Housing Market Analytics',
    tag: 'Data Engineering · Regression',
    description:
      'End-to-end pipeline: scraped listing data, cleaned and merged multi-source datasets, then ran linear regression to model price drivers. Published clear, decision-ready visualizations.',
    tools: ['Python', 'Pandas', 'Scikit-learn', 'SQL'],
    accent: 'blue',
    cta: { label: 'View Code', href: 'https://github.com/EthanH2004' },
  },
  {
    title: 'Sales Performance Dashboard',
    tag: 'SQL · BI',
    description:
      'Queried a relational sales dataset, designed KPI logic in SQL, and built an interactive Tableau dashboard that surfaces revenue, retention, and regional trends at a glance.',
    tools: ['SQL', 'Tableau', 'Excel'],
    accent: 'purple',
    cta: { label: 'View Dashboard', href: 'https://github.com/EthanH2004' },
  },
  {
    title: 'ML Classifier — Customer Churn',
    tag: 'Machine Learning',
    description:
      'Trained and compared several classifiers on an imbalanced churn dataset. Engineered features, tuned hyperparameters, and evaluated with precision/recall and ROC-AUC.',
    tools: ['Python', 'Scikit-learn', 'Jupyter'],
    accent: 'green',
    cta: { label: 'View Code', href: 'https://github.com/EthanH2004' },
  },
]

const SKILLS = [
  {
    category: 'Data',
    items: ['Pandas', 'SQL', 'Excel', 'Data Cleaning', 'ETL'],
  },
  {
    category: 'Analysis',
    items: ['Linear Regression', 'Statistical Analysis', 'Tableau'],
  },
  {
    category: 'AI / ML',
    items: ['Scikit-learn', 'TensorFlow', 'Python'],
  },
  {
    category: 'Other',
    items: ['Python', 'R', 'Jupyter', 'Git'],
  },
]

const CONTACT_LINKS = [
  {
    label: 'Email',
    href: 'mailto:ethanai@hennenhoefer.org',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="h-4 w-4">
        <path d="M3 7l9 6 9-6" strokeLinecap="round" strokeLinejoin="round" />
        <rect x="3" y="5" width="18" height="14" rx="2" />
      </svg>
    ),
  },
  {
    label: 'LinkedIn',
    href: 'https://www.linkedin.com/',
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="h-4 w-4">
        <path d="M4.98 3.5a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5zM3 9h4v12H3V9zm7 0h3.8v1.7h.05c.53-1 1.83-2.05 3.77-2.05 4.03 0 4.77 2.65 4.77 6.1V21h-4v-5.3c0-1.27-.02-2.9-1.77-2.9-1.77 0-2.05 1.38-2.05 2.8V21h-4V9z"/>
      </svg>
    ),
  },
  {
    label: 'GitHub',
    href: 'https://github.com/EthanH2004',
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="h-4 w-4">
        <path d="M12 .5C5.73.5.5 5.74.5 12.04c0 5.1 3.29 9.42 7.86 10.95.57.1.78-.25.78-.56 0-.27-.01-1-.02-1.96-3.2.7-3.88-1.54-3.88-1.54-.53-1.34-1.3-1.7-1.3-1.7-1.06-.72.08-.71.08-.71 1.17.08 1.79 1.2 1.79 1.2 1.04 1.78 2.73 1.27 3.4.97.1-.76.4-1.27.73-1.56-2.55-.29-5.23-1.28-5.23-5.7 0-1.26.45-2.3 1.19-3.11-.12-.29-.51-1.47.11-3.06 0 0 .97-.31 3.18 1.19a11 11 0 0 1 5.78 0c2.21-1.5 3.18-1.19 3.18-1.19.62 1.59.23 2.77.11 3.06.74.81 1.19 1.85 1.19 3.11 0 4.43-2.69 5.4-5.25 5.69.41.36.78 1.06.78 2.14 0 1.55-.01 2.8-.01 3.18 0 .31.21.67.79.55 4.56-1.54 7.84-5.85 7.84-10.95C23.5 5.74 18.27.5 12 .5z"/>
      </svg>
    ),
  },
  {
    label: 'Resume',
    href: '#',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="h-4 w-4">
        <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" strokeLinejoin="round" />
        <path d="M14 2v6h6M9 13h6M9 17h6" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
]

function useReveal() {
  useEffect(() => {
    const elements = document.querySelectorAll('.reveal')
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('in')
            io.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.12, rootMargin: '0px 0px -40px 0px' },
    )
    elements.forEach((el) => io.observe(el))
    return () => io.disconnect()
  }, [])
}

function useActiveSection(ids) {
  const [active, setActive] = useState(ids[0])
  useEffect(() => {
    const sections = ids
      .map((id) => document.getElementById(id))
      .filter(Boolean)
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(entry.target.id)
        })
      },
      { rootMargin: '-45% 0px -50% 0px', threshold: 0 },
    )
    sections.forEach((s) => io.observe(s))
    return () => io.disconnect()
  }, [ids])
  return active
}

function ThemeToggle({ theme, setTheme }) {
  return (
    <button
      onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
      className="grid h-9 w-9 place-items-center rounded-full border border-[var(--color-border)] text-[var(--color-muted)] transition hover:text-white hover:border-[var(--color-border-strong)]"
      aria-label="Toggle theme"
    >
      {theme === 'dark' ? (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" className="h-4 w-4">
          <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      ) : (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" className="h-4 w-4">
          <circle cx="12" cy="12" r="4" />
          <path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M4.93 19.07l1.41-1.41M17.66 6.34l1.41-1.41" strokeLinecap="round" />
        </svg>
      )}
    </button>
  )
}

function Nav({ active, theme, setTheme }) {
  return (
    <header className="glass-nav fixed inset-x-0 top-0 z-50">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-6">
        <a href="#top" className="group flex items-center gap-2">
          <span className="grid h-7 w-7 place-items-center rounded-md bg-gradient-to-br from-[var(--color-accent-blue)] to-[var(--color-accent-purple)] text-[11px] font-bold tracking-tight text-white shadow-[0_0_24px_-6px_rgba(0,102,255,0.9)]">
            E
          </span>
          <span className="text-sm font-semibold tracking-tight">Ethan</span>
        </a>
        <nav className="hidden items-center gap-1 md:flex">
          {NAV_LINKS.map((link) => {
            const id = link.href.slice(1)
            const isActive = active === id
            return (
              <a
                key={link.href}
                href={link.href}
                className={`relative rounded-full px-4 py-1.5 text-sm transition ${
                  isActive
                    ? 'text-white'
                    : 'text-[var(--color-muted)] hover:text-white'
                }`}
              >
                {isActive && (
                  <span className="absolute inset-0 rounded-full bg-white/5 ring-1 ring-inset ring-[var(--color-border)]" />
                )}
                <span className="relative">{link.label}</span>
              </a>
            )
          })}
        </nav>
        <div className="flex items-center gap-2">
          <ThemeToggle theme={theme} setTheme={setTheme} />
          <a
            href="#contact"
            className="hidden rounded-full bg-white px-4 py-1.5 text-sm font-medium text-black transition hover:bg-white/90 sm:inline-flex"
          >
            Let's talk
          </a>
        </div>
      </div>
    </header>
  )
}

function Hero() {
  return (
    <section id="top" className="relative overflow-hidden">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            'radial-gradient(60% 50% at 50% 0%, rgba(0,102,255,0.18), transparent 60%), radial-gradient(40% 40% at 80% 20%, rgba(124,58,237,0.12), transparent 60%)',
        }}
      />
      <div className="relative mx-auto max-w-6xl px-6 pt-40 pb-28 md:pt-48 md:pb-36">
        <div className="reveal inline-flex items-center gap-2 rounded-full border border-[var(--color-border)] bg-white/[0.02] px-3 py-1 text-xs text-[var(--color-muted)]">
          <span className="h-1.5 w-1.5 rounded-full bg-[var(--color-accent-green)] shadow-[0_0_10px_rgba(16,185,129,0.8)]" />
          Open to 2026 new-grad roles
        </div>
        <h1 className="reveal mt-6 text-gradient text-5xl font-semibold leading-[1.02] tracking-tight md:text-7xl">
          Data Analyst <span className="text-[var(--color-dim)]">·</span> AI/ML Developer
          <br />
          <span className="text-[var(--color-muted)]">TTU Rawls '26</span>
        </h1>
        <p className="reveal mt-6 max-w-2xl text-lg text-[var(--color-muted)] md:text-xl">
          Turning raw data into insights. Building AI systems that work.
        </p>
        <div className="reveal mt-10 flex flex-wrap items-center gap-3">
          <a
            href="#projects"
            className="group inline-flex items-center gap-2 rounded-full bg-white px-5 py-2.5 text-sm font-medium text-black transition hover:bg-white/90"
          >
            View My Work
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="h-4 w-4 transition group-hover:translate-y-0.5">
              <path d="M12 5v14M5 12l7 7 7-7" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </a>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 rounded-full border border-[var(--color-border)] px-5 py-2.5 text-sm text-white/90 transition hover:border-[var(--color-border-strong)] hover:bg-white/5"
          >
            Get in touch
          </a>
        </div>

        <div className="reveal mt-20 grid grid-cols-2 gap-6 border-t border-[var(--color-border)] pt-10 md:grid-cols-4">
          {[
            ['Graduating', 'May 2026'],
            ['Focus', 'Data · AI / ML'],
            ['Based in', 'Lubbock, TX'],
            ['Stack', 'Python · SQL · React'],
          ].map(([k, v]) => (
            <div key={k}>
              <div className="text-xs uppercase tracking-widest text-[var(--color-dim)]">{k}</div>
              <div className="mt-2 text-sm font-medium text-white/90">{v}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

function Section({ id, eyebrow, title, children }) {
  return (
    <section id={id} className="relative mx-auto max-w-6xl px-6 py-24 md:py-32">
      <div className="reveal mb-12 flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
        <div>
          <div className="text-xs uppercase tracking-[0.2em] text-[var(--color-dim)]">{eyebrow}</div>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight md:text-4xl">{title}</h2>
        </div>
      </div>
      {children}
    </section>
  )
}

function About() {
  return (
    <Section id="about" eyebrow="01 · About" title="A data person who also has taste.">
      <div className="grid gap-10 md:grid-cols-5">
        <p className="reveal md:col-span-3 text-lg leading-relaxed text-[var(--color-muted)]">
          I'm an IT student at Texas Tech's Rawls College specializing in data analytics and machine learning.
          I love taking messy datasets, finding patterns, and building tools that make sense of complexity.
          Currently exploring RAG systems, regression modeling, and full-stack data pipelines.
        </p>
        <div className="reveal md:col-span-2">
          <div className="glass rounded-2xl p-6">
            <div className="text-xs uppercase tracking-widest text-[var(--color-dim)]">Currently</div>
            <ul className="mt-4 space-y-3 text-sm text-white/85">
              <li className="flex items-start gap-3">
                <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-[var(--color-accent-blue)]" />
                Shipping regression analysis on housing market data
              </li>
              <li className="flex items-start gap-3">
                <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-[var(--color-accent-purple)]" />
                Prototyping a RAG assistant for study notes
              </li>
              <li className="flex items-start gap-3">
                <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-[var(--color-accent-green)]" />
                Open to internships & new-grad roles for 2026
              </li>
            </ul>
          </div>
        </div>
      </div>
    </Section>
  )
}

const accentClass = {
  blue: {
    chip: 'bg-[rgba(0,102,255,0.12)] text-[#8ab4ff] ring-[rgba(0,102,255,0.3)]',
    glow: 'from-[rgba(0,102,255,0.25)] to-transparent',
  },
  purple: {
    chip: 'bg-[rgba(124,58,237,0.12)] text-[#c4b5fd] ring-[rgba(124,58,237,0.3)]',
    glow: 'from-[rgba(124,58,237,0.22)] to-transparent',
  },
  green: {
    chip: 'bg-[rgba(16,185,129,0.12)] text-[#6ee7b7] ring-[rgba(16,185,129,0.3)]',
    glow: 'from-[rgba(16,185,129,0.22)] to-transparent',
  },
}

function ProjectCard({ project, index }) {
  const a = accentClass[project.accent]
  return (
    <article className="reveal group relative overflow-hidden rounded-2xl border border-[var(--color-border)] bg-[var(--color-bg-elevated)] transition hover:border-[var(--color-border-strong)]">
      <div
        aria-hidden
        className={`pointer-events-none absolute -top-32 -right-32 h-64 w-64 rounded-full bg-gradient-radial ${a.glow} opacity-0 blur-3xl transition-opacity duration-700 group-hover:opacity-100`}
        style={{ background: `radial-gradient(circle, var(--glow) 0%, transparent 70%)` }}
      />
      <div className="relative flex h-full flex-col p-8">
        <div className="flex items-center justify-between text-xs text-[var(--color-dim)]">
          <span>0{index + 1}</span>
          <span className={`inline-flex items-center gap-1.5 rounded-full px-2.5 py-1 text-[11px] ring-1 ring-inset ${a.chip}`}>
            {project.tag}
          </span>
        </div>

        <h3 className="mt-6 text-2xl font-semibold tracking-tight text-white">{project.title}</h3>
        <p className="mt-3 text-sm leading-relaxed text-[var(--color-muted)]">{project.description}</p>

        <div className="mt-6 flex flex-wrap gap-2">
          {project.tools.map((t) => (
            <span
              key={t}
              className="rounded-md border border-[var(--color-border)] bg-white/[0.02] px-2 py-1 text-[11px] text-white/75"
            >
              {t}
            </span>
          ))}
        </div>

        <div className="mt-8 flex items-center justify-between border-t border-[var(--color-border)] pt-5">
          <a
            href={project.cta.href}
            target="_blank"
            rel="noreferrer"
            className="group/link inline-flex items-center gap-1.5 text-sm font-medium text-white/90 hover:text-white"
          >
            {project.cta.label}
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="h-3.5 w-3.5 transition group-hover/link:translate-x-0.5">
              <path d="M5 12h14M13 5l7 7-7 7" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </a>
          <span className="text-[11px] uppercase tracking-widest text-[var(--color-dim)]">Case study</span>
        </div>
      </div>
    </article>
  )
}

function Projects() {
  return (
    <Section id="projects" eyebrow="02 · Work" title="Selected projects.">
      <div className="grid gap-5 md:grid-cols-3">
        {PROJECTS.map((p, i) => (
          <ProjectCard key={p.title} project={p} index={i} />
        ))}
      </div>
    </Section>
  )
}

function Skills() {
  return (
    <Section id="skills" eyebrow="03 · Toolkit" title="What I build with.">
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        {SKILLS.map((group) => (
          <div
            key={group.category}
            className="reveal rounded-2xl border border-[var(--color-border)] bg-[var(--color-bg-elevated)] p-6 transition hover:border-[var(--color-border-strong)]"
          >
            <div className="text-xs uppercase tracking-widest text-[var(--color-dim)]">{group.category}</div>
            <ul className="mt-5 space-y-2.5">
              {group.items.map((item) => (
                <li key={item} className="flex items-center gap-2.5 text-sm text-white/85">
                  <span className="h-1 w-1 rounded-full bg-white/40" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </Section>
  )
}

function Contact() {
  return (
    <Section id="contact" eyebrow="04 · Contact" title="Let's build something.">
      <div className="reveal glass rounded-3xl p-8 md:p-12">
        <div className="grid gap-10 md:grid-cols-5">
          <div className="md:col-span-3">
            <p className="text-xl leading-relaxed text-white/90 md:text-2xl">
              I'm looking for data analytics, AI/ML, and software roles starting summer 2026.
              If you're hiring, or just want to swap notes on data pipelines, I'd love to hear from you.
            </p>
          </div>
          <div className="md:col-span-2">
            <div className="grid grid-cols-2 gap-3">
              {CONTACT_LINKS.map((c) => (
                <a
                  key={c.label}
                  href={c.href}
                  target={c.href.startsWith('http') ? '_blank' : undefined}
                  rel="noreferrer"
                  className="group flex items-center justify-between rounded-xl border border-[var(--color-border)] bg-white/[0.02] px-4 py-3 text-sm text-white/90 transition hover:border-[var(--color-border-strong)] hover:bg-white/[0.05]"
                >
                  <span className="inline-flex items-center gap-2.5">
                    <span className="text-[var(--color-muted)] group-hover:text-white">{c.icon}</span>
                    {c.label}
                  </span>
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="h-3.5 w-3.5 text-[var(--color-dim)] transition group-hover:translate-x-0.5 group-hover:text-white">
                    <path d="M7 17L17 7M9 7h8v8" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </Section>
  )
}

function Footer() {
  return (
    <footer className="border-t border-[var(--color-border)]">
      <div className="mx-auto flex max-w-6xl flex-col items-start justify-between gap-3 px-6 py-8 text-xs text-[var(--color-dim)] md:flex-row md:items-center">
        <span>© {new Date().getFullYear()} Ethan Hennenhoefer. Built with React & Vite.</span>
        <span>Texas Tech University · Rawls College of Business</span>
      </div>
    </footer>
  )
}

export default function App() {
  const [theme, setTheme] = useState('dark')
  const active = useActiveSection(['top', 'about', 'projects', 'skills', 'contact'])
  useReveal()

  useEffect(() => {
    const root = document.documentElement
    if (theme === 'light') root.classList.add('light')
    else root.classList.remove('light')
  }, [theme])

  return (
    <div className="relative min-h-screen">
      <Nav active={active} theme={theme} setTheme={setTheme} />
      <main>
        <Hero />
        <About />
        <Projects />
        <Skills />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}
