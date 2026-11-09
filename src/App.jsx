import { useEffect, useState } from 'react';
import { FaGithub, FaLinkedin } from 'react-icons/fa6';
import {
  LuArrowRight,
  LuArrowUpRight,
  LuAward,
  LuArrowUp,
  LuDownload,
  LuGraduationCap,
  LuLayers,
  LuMail,
  LuMapPin,
  LuMenu,
  LuPhone,
  LuSend,
  LuServer,
  LuWorkflow,
  LuX,
} from 'react-icons/lu';
import {
  certifications,
  education,
  experience,
  featuredProjects,
  moreProjects,
  profile,
  skills,
  stats,
  strengths,
} from './data';

const navLinks = [
  { href: '#about', label: 'About' },
  { href: '#experience', label: 'Experience' },
  { href: '#projects', label: 'Projects' },
  { href: '#certifications', label: 'Certifications' },
  { href: '#contact', label: 'Contact' },
];

const strengthIcons = { server: LuServer, layers: LuLayers, workflow: LuWorkflow };

function useReveal() {
  useEffect(() => {
    const items = document.querySelectorAll('.reveal');
    if (!('IntersectionObserver' in window)) return;
    document.documentElement.classList.add('reveal-ready');
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: '0px 0px -40px 0px' },
    );
    items.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);
}

function ResumeButton({ className = '', children = 'Download resume' }) {
  return (
    <a
      href={profile.resume}
      download={profile.resumeDownloadName}
      className={`inline-flex items-center justify-center gap-2 rounded-xl bg-accent px-5 py-3 text-sm font-semibold text-ink shadow-lg shadow-accent/20 transition hover:-translate-y-0.5 hover:bg-amber-300 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent ${className}`}
    >
      <LuDownload aria-hidden="true" className="size-4" />
      {children}
    </a>
  );
}

function Chip({ children }) {
  return (
    <span className="rounded-md border border-white/10 bg-white/[0.04] px-2.5 py-1 font-mono text-xs text-slate-300">
      {children}
    </span>
  );
}

function SectionHeading({ id, index, eyebrow, title, intro }) {
  return (
    <div className="reveal mb-12 max-w-2xl">
      <p className="font-mono text-sm text-accent">
        {index} · {eyebrow}
      </p>
      <h2 id={id} className="mt-3 text-3xl font-bold tracking-tight text-white sm:text-4xl">
        {title}
      </h2>
      {intro && <p className="mt-4 text-base leading-relaxed text-slate-400">{intro}</p>}
    </div>
  );
}

function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-colors duration-300 ${
        scrolled || open ? 'border-b border-white/10 bg-ink/85 backdrop-blur-lg' : 'bg-transparent'
      }`}
    >
      <nav aria-label="Main" className="mx-auto flex h-16 max-w-6xl items-center justify-between px-5 sm:px-8">
        <a href="#home" className="font-mono text-base font-semibold text-white">
          <span className="text-accent">&lt;</span>SahilMaddi<span className="text-accent"> /&gt;</span>
        </a>
        <ul className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a href={link.href} className="text-sm text-slate-300 transition hover:text-white">
                {link.label}
              </a>
            </li>
          ))}
        </ul>
        <div className="hidden md:block">
          <ResumeButton className="px-4 py-2">Resume</ResumeButton>
        </div>
        <button
          type="button"
          className="rounded-lg p-2 text-slate-200 hover:bg-white/10 md:hidden"
          aria-label={open ? 'Close menu' : 'Open menu'}
          aria-expanded={open}
          aria-controls="mobile-menu"
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <LuX className="size-6" aria-hidden="true" /> : <LuMenu className="size-6" aria-hidden="true" />}
        </button>
      </nav>
      {open && (
        <div id="mobile-menu" className="border-t border-white/10 px-5 pb-6 md:hidden">
          <ul className="flex flex-col py-2">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="block rounded-lg px-2 py-3 text-base text-slate-200 hover:bg-white/5"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
          <ResumeButton className="w-full" />
        </div>
      )}
    </header>
  );
}

function Hero() {
  return (
    <section id="home" className="relative overflow-hidden pt-28 pb-12 sm:pt-36 sm:pb-16">
      <div aria-hidden="true" className="dot-grid pointer-events-none absolute inset-0" />
      <div className="relative mx-auto grid max-w-6xl items-center gap-12 px-5 sm:px-8 lg:grid-cols-[1.25fr_0.75fr]">
        <div className="reveal">
          <span className="inline-flex items-center gap-2 rounded-full border border-emerald-400/30 bg-emerald-400/10 px-3 py-1 text-xs font-medium text-emerald-300">
            <span className="size-2 animate-pulse rounded-full bg-emerald-400" />
            Open to Java Full Stack &amp; Backend roles
          </span>
          <h1 className="mt-6 text-5xl font-bold tracking-tight text-white sm:text-6xl lg:text-7xl">
            {profile.name}
          </h1>
          <p className="mt-4 font-mono text-lg text-accent sm:text-xl">{profile.role}</p>
          <p className="mt-6 max-w-xl text-lg leading-relaxed text-slate-300">
            I build the backend services and APIs that help enterprise applications talk to each other, and the front
            ends that make them easy to use. 4+ years with Java, Spring Boot, Microservices and React.js.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <ResumeButton />
            <a
              href="#contact"
              className="inline-flex items-center gap-2 rounded-xl border border-white/15 px-5 py-3 text-sm font-semibold text-white transition hover:border-white/30 hover:bg-white/5"
            >
              Get in touch <LuArrowRight aria-hidden="true" className="size-4" />
            </a>
          </div>
          <div className="mt-8 flex items-center gap-5 text-slate-400">
            <a href={profile.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub" className="transition hover:text-white">
              <FaGithub className="size-6" aria-hidden="true" />
            </a>
            <a href={profile.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="transition hover:text-white">
              <FaLinkedin className="size-6" aria-hidden="true" />
            </a>
            <a href={`mailto:${profile.email}`} aria-label="Email" className="transition hover:text-white">
              <LuMail className="size-6" aria-hidden="true" />
            </a>
            <span className="ml-1 inline-flex items-center gap-1.5 text-sm">
              <LuMapPin aria-hidden="true" className="size-4" /> {profile.location}
            </span>
          </div>
        </div>

        <div className="reveal relative mx-auto w-full max-w-[16rem] sm:max-w-sm">
          <div aria-hidden="true" className="absolute -inset-4 rounded-[2rem] bg-gradient-to-br from-accent/30 via-transparent to-sky-500/20 blur-2xl" />
          <div className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-white/5 p-2">
            <img
              src={profile.photo}
              alt={`Portrait of ${profile.name}`}
              width="480"
              height="480"
              className="aspect-square w-full rounded-[1.6rem] object-cover"
            />
          </div>
          <div className="absolute -left-4 top-8 hidden rounded-xl border border-white/10 bg-ink/90 px-3 py-2 font-mono text-xs text-slate-200 shadow-xl sm:block">
            <span className="text-accent">@</span>SpringBoot
          </div>
          <div className="absolute -right-4 bottom-10 hidden rounded-xl border border-white/10 bg-ink/90 px-3 py-2 font-mono text-xs text-slate-200 shadow-xl sm:block">
            React<span className="text-accent">.</span>js
          </div>
        </div>
      </div>

      <div className="relative mx-auto mt-16 max-w-6xl px-5 sm:mt-20 sm:px-8">
        <dl className="reveal grid grid-cols-2 gap-px overflow-hidden rounded-2xl border border-white/10 bg-white/10 lg:grid-cols-4">
          {stats.map((s) => (
            <div key={s.label} className="flex flex-col bg-ink p-5 sm:p-6">
              <dt className="text-sm leading-snug text-slate-400">{s.label}</dt>
              <dd className="order-first mb-2 text-3xl font-bold text-white sm:text-4xl">{s.value}</dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}

function About() {
  return (
    <section aria-labelledby="about-title" id="about" className="scroll-mt-20 py-16 sm:py-20">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <SectionHeading id="about-title" index="01" eyebrow="About" title="Backend engineer who ships the whole feature" />
        <div className="grid gap-12 lg:grid-cols-[1.1fr_0.9fr]">
          <div className="reveal space-y-5 text-base leading-relaxed text-slate-300">
            <p>
              I'm a Java Full Stack Developer in Hyderabad with 4+ years of experience building enterprise web
              applications. Most of my work sits where systems meet: designing REST APIs, breaking applications into
              microservices and making integrations dependable.
            </p>
            <p>
              At HCLTech I build Spring Boot services and React front ends for enterprise clients. Before that I
              automated API platform migrations at Sage IT and shipped a full-stack hotel management system at
              LanceSoft. I hold an M.Tech in Computer Science and I'm ServiceNow certified (CSA, CAD).
            </p>
            <p>
              Lately I've been building AI agents with Google's Agent Development Kit and adding AI features like live
              transcription and meeting summaries to my own projects.
            </p>
          </div>
          <div className="reveal space-y-6">
            {skills.map((g) => (
              <div key={g.group}>
                <h3 className="text-sm font-semibold uppercase tracking-wider text-slate-400">{g.group}</h3>
                <div className="mt-3 flex flex-wrap gap-2">
                  {g.items.map((item) => (
                    <Chip key={item}>{item}</Chip>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="reveal mt-12 grid gap-4 md:grid-cols-3">
          {strengths.map((s) => {
            const Icon = strengthIcons[s.icon];
            return (
              <div key={s.title} className="rounded-2xl border border-white/10 bg-white/[0.03] p-5">
                <Icon aria-hidden="true" className="size-6 text-accent" />
                <h3 className="mt-3 font-semibold text-white">{s.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-400">{s.text}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function Experience() {
  return (
    <section aria-labelledby="experience-title" id="experience" className="scroll-mt-20 py-16 sm:py-20">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <SectionHeading
          id="experience-title"
          index="02"
          eyebrow="Experience"
          title="Where I've worked"
          intro="Three companies, one thread: Java back ends that are fast, reliable and easy to integrate with."
        />
        <ol className="relative space-y-10 border-l border-white/10 pl-6 sm:pl-10">
          {experience.map((job) => (
            <li key={job.company} className="reveal relative">
              <span
                aria-hidden="true"
                className="absolute -left-[31px] top-1.5 flex size-3.5 items-center justify-center rounded-full border-2 border-accent bg-ink sm:-left-[47px]"
              />
              <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-6 sm:p-8">
                <div className="flex flex-wrap items-baseline justify-between gap-x-6 gap-y-1">
                  <h3 className="text-xl font-semibold text-white">
                    {job.role} <span className="text-accent">· {job.company}</span>
                  </h3>
                  <p className="font-mono text-sm text-slate-400">{job.period}</p>
                </div>
                <p className="mt-1 text-sm text-slate-400">{job.location}</p>
                <ul className="mt-5 space-y-3">
                  {job.points.map((p) => (
                    <li key={p} className="flex gap-3 text-slate-300">
                      <span aria-hidden="true" className="mt-2.5 size-1.5 shrink-0 rounded-full bg-accent" />
                      <span className="leading-relaxed">{p}</span>
                    </li>
                  ))}
                </ul>
                <div className="mt-5 flex flex-wrap gap-2">
                  {job.tech.map((t) => (
                    <Chip key={t}>{t}</Chip>
                  ))}
                </div>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}

function ProjectLinks({ links, note }) {
  if (!links.length) {
    return note ? <p className="font-mono text-xs text-slate-400">{note}</p> : null;
  }
  return (
    <div className="flex flex-wrap gap-x-5 gap-y-2">
      {links.map((l) => (
        <a
          key={l.href}
          href={l.href}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1.5 text-sm font-medium text-accent transition hover:text-amber-300"
        >
          {l.label.startsWith('Live') ? <LuArrowUpRight aria-hidden="true" className="size-4" /> : <FaGithub aria-hidden="true" className="size-4" />}
          {l.label}
        </a>
      ))}
    </div>
  );
}

function Projects() {
  return (
    <section aria-labelledby="projects-title" id="projects" className="scroll-mt-20 py-16 sm:py-20">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <SectionHeading
          id="projects-title"
          index="03"
          eyebrow="Projects"
          title="Things I've built"
          intro="From real-time video with AI to payment integrations and distributed systems. Most of the code is on GitHub."
        />
        <div className="grid gap-6 md:grid-cols-2">
          {featuredProjects.map((p) => (
            <article
              key={p.title}
              className="reveal group flex flex-col rounded-2xl border border-white/10 bg-white/[0.03] p-6 transition hover:-translate-y-1 hover:border-accent/40 sm:p-8"
            >
              <p className="font-mono text-xs uppercase tracking-wider text-accent">{p.tag}</p>
              <h3 className="mt-3 text-xl font-semibold text-white">{p.title}</h3>
              <p className="mt-3 leading-relaxed text-slate-300">{p.description}</p>
              <ul className="mt-4 space-y-2">
                {p.points.map((pt) => (
                  <li key={pt} className="flex gap-3 text-sm text-slate-400">
                    <span aria-hidden="true" className="mt-2 size-1 shrink-0 rounded-full bg-slate-500" />
                    <span className="leading-relaxed">{pt}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-5 flex flex-wrap gap-2">
                {p.tech.map((t) => (
                  <Chip key={t}>{t}</Chip>
                ))}
              </div>
              <div className="mt-6 flex-1" />
              <ProjectLinks links={p.links} note={p.note} />
            </article>
          ))}
        </div>

        <h3 className="reveal mt-20 text-2xl font-semibold text-white">More projects</h3>
        <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {moreProjects.map((p) => (
            <article key={p.title} className="reveal flex flex-col rounded-2xl border border-white/10 bg-white/[0.02] p-5">
              <h4 className="font-semibold text-white">{p.title}</h4>
              <p className="mt-2 text-sm leading-relaxed text-slate-400">{p.description}</p>
              <p className="mt-3 font-mono text-xs text-slate-400">{p.tech.join(' · ')}</p>
              <div className="mt-4 flex-1" />
              <ProjectLinks links={p.links} />
            </article>
          ))}
        </div>
        <div className="reveal mt-10">
          <a
            href={profile.github}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-sm font-semibold text-white hover:text-accent"
          >
            <FaGithub aria-hidden="true" className="size-5" /> See everything on GitHub
            <LuArrowUpRight aria-hidden="true" className="size-4" />
          </a>
        </div>
      </div>
    </section>
  );
}

function Certifications() {
  return (
    <section aria-labelledby="certs-title" id="certifications" className="scroll-mt-20 py-16 sm:py-20">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <SectionHeading
          id="certs-title"
          index="04"
          eyebrow="Certifications & education"
          title="Credentials"
          intro="Each badge links to its verified credential."
        />
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {certifications.map((c) => (
            <a
              key={c.href}
              href={c.href}
              target="_blank"
              rel="noopener noreferrer"
              className="reveal group flex items-start gap-4 rounded-2xl border border-white/10 bg-white/[0.03] p-5 transition hover:border-accent/40"
            >
              <span className="flex size-10 shrink-0 items-center justify-center rounded-xl bg-accent/10 text-accent">
                <LuAward aria-hidden="true" className="size-5" />
              </span>
              <span className="min-w-0">
                <span className="block font-semibold leading-snug text-white">{c.name}</span>
                <span className="mt-1 block text-sm text-slate-400">
                  {c.issuer} · {c.date}
                </span>
                <span className="mt-2 inline-flex items-center gap-1 text-xs font-medium text-accent">
                  Verify <LuArrowUpRight aria-hidden="true" className="size-3.5" />
                </span>
              </span>
            </a>
          ))}
        </div>
        <div className="mt-10 grid gap-4 sm:grid-cols-2">
          {education.map((e) => (
            <div key={e.degree} className="reveal flex items-start gap-4 rounded-2xl border border-white/10 bg-white/[0.03] p-5">
              <span className="flex size-10 shrink-0 items-center justify-center rounded-xl bg-sky-400/10 text-sky-300">
                <LuGraduationCap aria-hidden="true" className="size-5" />
              </span>
              <span>
                <span className="block font-semibold text-white">{e.degree}</span>
                <span className="mt-1 block text-sm text-slate-400">
                  {e.school}, {e.place}
                </span>
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const update = (e) => setForm((f) => ({ ...f, [e.target.name]: e.target.value }));
  const submit = (e) => {
    e.preventDefault();
    const subject = `Portfolio message from ${form.name}`;
    const body = `${form.message}\n\n${form.name}\n${form.email}`;
    window.location.href = `mailto:${profile.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  };
  const field =
    'w-full rounded-xl border border-white/15 bg-white/[0.04] px-4 py-3 text-white placeholder:text-slate-400 focus:border-accent focus:outline-none focus:ring-2 focus:ring-accent/30';

  return (
    <section aria-labelledby="contact-title" id="contact" className="scroll-mt-20 py-16 sm:py-20">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <div className="reveal grid gap-10 rounded-3xl border border-white/10 bg-gradient-to-br from-white/[0.06] to-white/[0.01] p-6 sm:p-10 lg:grid-cols-2">
          <div>
            <p className="font-mono text-sm text-accent">05 · Contact</p>
            <h2 id="contact-title" className="mt-3 text-3xl font-bold tracking-tight text-white sm:text-4xl">
              Let's work together
            </h2>
            <p className="mt-4 leading-relaxed text-slate-300">
              I'm open to Java Full Stack and Backend Developer roles. Email is the fastest way to reach me.
            </p>
            <ul className="mt-8 space-y-4">
              <li>
                <a href={`mailto:${profile.email}`} className="flex items-center gap-3 text-slate-200 hover:text-accent">
                  <LuMail aria-hidden="true" className="size-5 text-accent" /> {profile.email}
                </a>
              </li>
              <li>
                <a href={profile.phoneHref} className="flex items-center gap-3 text-slate-200 hover:text-accent">
                  <LuPhone aria-hidden="true" className="size-5 text-accent" /> {profile.phone}
                </a>
              </li>
              <li>
                <a href={profile.linkedin} target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 text-slate-200 hover:text-accent">
                  <FaLinkedin aria-hidden="true" className="size-5 text-accent" /> linkedin.com/in/sahil-maddi
                </a>
              </li>
              <li>
                <a href={profile.github} target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 text-slate-200 hover:text-accent">
                  <FaGithub aria-hidden="true" className="size-5 text-accent" /> github.com/sahilmaddi
                </a>
              </li>
            </ul>
            <ResumeButton className="mt-8" />
          </div>
          <form onSubmit={submit} className="space-y-4">
            <div className="grid gap-4 sm:grid-cols-2">
              <label className="block">
                <span className="mb-1.5 block text-sm text-slate-300">Name</span>
                <input name="name" required value={form.name} onChange={update} className={field} autoComplete="name" />
              </label>
              <label className="block">
                <span className="mb-1.5 block text-sm text-slate-300">Email</span>
                <input name="email" type="email" required value={form.email} onChange={update} className={field} autoComplete="email" />
              </label>
            </div>
            <label className="block">
              <span className="mb-1.5 block text-sm text-slate-300">Message</span>
              <textarea name="message" required rows="6" value={form.message} onChange={update} className={`${field} resize-y`} />
            </label>
            <button
              type="submit"
              className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-white px-5 py-3 text-sm font-semibold text-ink transition hover:bg-slate-200 sm:w-auto"
            >
              <LuSend aria-hidden="true" className="size-4" /> Send message
            </button>
            <p className="text-xs text-slate-400">Opens your email app with the message ready to send.</p>
          </form>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="border-t border-white/10 py-10">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-5 text-sm text-slate-400 sm:flex-row sm:px-8">
        <p>
          © {new Date().getFullYear()} {profile.name}. Built with React and Tailwind CSS.
        </p>
        <div className="flex items-center gap-5">
          <a href={profile.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub" className="hover:text-white">
            <FaGithub aria-hidden="true" className="size-5" />
          </a>
          <a href={profile.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="hover:text-white">
            <FaLinkedin aria-hidden="true" className="size-5" />
          </a>
          <a href="#home" className="inline-flex items-center gap-1 hover:text-white">
            <LuArrowUp aria-hidden="true" className="size-4" /> Back to top
          </a>
        </div>
      </div>
    </footer>
  );
}

export default function App() {
  useReveal();
  return (
    <>
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[60] focus:rounded-lg focus:bg-accent focus:px-4 focus:py-2 focus:text-ink"
      >
        Skip to content
      </a>
      <Navbar />
      <main id="main">
        <Hero />
        <About />
        <Experience />
        <Projects />
        <Certifications />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
