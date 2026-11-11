import { profile, skills, projects } from './data'

function Section({ id, title, children }) {
  return (
    <section id={id} className="mx-auto max-w-5xl px-6 py-16">
      <h2 className="mb-8 text-2xl font-bold">
        <span className="text-accent">#</span> {title}
      </h2>
      {children}
    </section>
  )
}

function Button({ href, children, primary }) {
  const cls = primary
    ? 'bg-accent text-black hover:opacity-90'
    : 'border border-white/20 hover:border-accent hover:text-accent'
  return (
    <a
      href={href}
      target={href.startsWith('http') ? '_blank' : undefined}
      rel="noreferrer"
      className={`rounded-lg px-5 py-2.5 text-sm font-semibold transition ${cls}`}
    >
      {children}
    </a>
  )
}

function Header() {
  const links = [
    ['Giới thiệu', '#about'],
    ['Kỹ năng', '#skills'],
    ['Dự án', '#projects'],
    ['Liên hệ', '#contact'],
  ]
  return (
    <header className="sticky top-0 z-10 border-b border-white/10 bg-bg/80 backdrop-blur">
      <nav className="mx-auto flex max-w-5xl items-center justify-between px-6 py-4">
        <a href="#top" className="font-bold text-accent">
          {profile.name}
        </a>
        <ul className="hidden gap-6 text-sm text-white/70 sm:flex">
          {links.map(([label, href]) => (
            <li key={href}>
              <a href={href} className="hover:text-accent">
                {label}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  )
}

function Hero() {
  return (
    <div id="top" className="mx-auto max-w-5xl px-6 pb-8 pt-24">
      <p className="mb-3 font-mono text-sm text-accent">Xin chào, mình là</p>
      <h1 className="text-4xl font-extrabold sm:text-6xl">{profile.name}</h1>
      <p className="mt-3 text-xl text-white/80 sm:text-2xl">{profile.role}</p>
      <p className="mt-6 max-w-2xl text-white/60">{profile.tagline}</p>
      <div className="mt-8 flex flex-wrap gap-3">
        <Button href="#projects" primary>
          Xem dự án
        </Button>
        {profile.cv && <Button href={profile.cv}>Tải CV</Button>}
        {profile.github && <Button href={profile.github}>GitHub</Button>}
        {profile.linkedin && <Button href={profile.linkedin}>LinkedIn</Button>}
      </div>
    </div>
  )
}

function About() {
  return (
    <Section id="about" title="Giới thiệu">
      <div className="max-w-2xl space-y-4 text-white/70">
        {profile.about.map((p, i) => (
          <p key={i}>{p}</p>
        ))}
      </div>
    </Section>
  )
}

function Skills() {
  return (
    <Section id="skills" title="Kỹ năng">
      <div className="grid gap-4 sm:grid-cols-2">
        {skills.map((g) => (
          <div key={g.group} className="rounded-xl bg-card p-5">
            <h3 className="mb-3 font-semibold text-accent">{g.group}</h3>
            <div className="flex flex-wrap gap-2">
              {g.items.map((s) => (
                <span
                  key={s}
                  className="rounded-md bg-white/5 px-3 py-1 text-sm text-white/80"
                >
                  {s}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </Section>
  )
}

function Projects() {
  return (
    <Section id="projects" title="Dự án">
      <div className="grid gap-6 md:grid-cols-2">
        {projects.map((p) => (
          <article
            key={p.title}
            className="flex flex-col overflow-hidden rounded-xl bg-card ring-1 ring-white/5 transition hover:ring-accent/50"
          >
            {p.image ? (
              <img
                src={p.image}
                alt={p.title}
                loading="lazy"
                className="h-48 w-full object-cover"
              />
            ) : (
              <div className="flex h-48 items-center justify-center bg-white/5 text-sm text-white/30">
                Chưa có ảnh
              </div>
            )}
            <div className="flex flex-1 flex-col p-5">
              <h3 className="text-lg font-bold">{p.title}</h3>
              <p className="mt-2 flex-1 text-sm text-white/60">{p.summary}</p>
              <div className="mt-4 flex flex-wrap gap-2">
                {p.stack.map((s) => (
                  <span
                    key={s}
                    className="rounded bg-accent/10 px-2 py-0.5 font-mono text-xs text-accent"
                  >
                    {s}
                  </span>
                ))}
              </div>
              {(p.demo || p.repo) && (
                <div className="mt-4 flex gap-4 text-sm">
                  {p.demo && (
                    <a
                      href={p.demo}
                      target="_blank"
                      rel="noreferrer"
                      className="text-accent hover:underline"
                    >
                      Demo →
                    </a>
                  )}
                  {p.repo && (
                    <a
                      href={p.repo}
                      target="_blank"
                      rel="noreferrer"
                      className="text-white/70 hover:text-accent"
                    >
                      GitHub
                    </a>
                  )}
                </div>
              )}
            </div>
          </article>
        ))}
      </div>
    </Section>
  )
}

function Contact() {
  return (
    <Section id="contact" title="Liên hệ">
      <p className="mb-6 max-w-xl text-white/60">
        Bạn muốn trao đổi về cơ hội thực tập hoặc dự án? Cứ nhắn cho mình nhé.
      </p>
      <Button href={`mailto:${profile.email}`} primary>
        {profile.email}
      </Button>
    </Section>
  )
}

const year = new Date().getFullYear()

export default function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Contact />
      </main>
      <footer className="border-t border-white/10 py-8 text-center text-sm text-white/40">
        © {year} {profile.name}
      </footer>
    </>
  )
}
