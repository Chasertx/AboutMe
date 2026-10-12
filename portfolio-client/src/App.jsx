import React, { useEffect, useState } from 'react'
import './App.css'

const currentYear = new Date().getFullYear()
const scheduleUrl = 'https://calendly.com/chaseashby199'

const fallbackProfile = {
  name: 'Chase Ashby',
  title: 'Lead Software Engineer',
  location: 'Atlanta, GA',
  email: 'chaseashby199@gmail.com',
  headline:
    'I build scalable software, AI-enabled workflows, and resilient cloud systems that support real business outcomes.',
  summary:
    'I’m a software engineer with a B.S. in Computer Science, specializing in full-stack development, cloud architecture, and AI-assisted engineering across financial services, retail, and defense environments. My work combines strong backend design, modern frontend delivery, and pragmatic problem solving.',
  highlights: ['Lead Software Engineer at Fiserv', 'AI + .NET architecture', 'Cloud, payments, and data systems'],
  skills: ['C#', '.NET Core 8/10', 'AI Engineering', 'GitHub Copilot', 'AI-assisted development', 'ASP.NET Core', 'React', 'Blazor', 'TypeScript', 'JavaScript', 'RxJS', 'SQL Server', 'Entity Framework Core', 'PostgreSQL', 'MongoDB', 'Cosmos DB', 'Azure', 'Docker', 'Git', 'Azure DevOps', 'CI/CD', 'TensorFlow', 'PyTorch'],
  projects: [
    {
      name: 'Financial Systems Modernization',
      description:
        'Led platform modernization work across mission-critical financial applications, balancing security, availability, and enterprise backlog priorities.',
      category: 'Finance',
      stack: ['.NET Core', 'Azure', 'SQL Server', 'AI Agents'],
      liveUrl: 'https://github.com/Chasertx',
      repoUrl: 'https://github.com/Chasertx',
    },
    {
      name: 'Retail Platform Automation',
      description:
        'Used AI-assisted tooling to accelerate .NET 8/10 CRUD and schema generation while focusing engineering effort on critical retail transaction workflows and database optimization.',
      category: 'Retail',
      stack: ['C#', 'PostgreSQL', 'Oracle DB', 'AKS'],
      liveUrl: 'https://github.com/Chasertx',
      repoUrl: 'https://github.com/Chasertx',
    },
    {
      name: 'Telemetry & AI Operations',
      description:
        'Built scalable web APIs and ETL workflows for telemetry and mission-planning systems, including integrations with TensorFlow Lite and edge processing.',
      category: 'Defense / Data',
      stack: ['.NET', 'Angular', 'TensorFlow', 'ETL'],
      liveUrl: 'https://github.com/Chasertx',
      repoUrl: 'https://github.com/Chasertx',
    },
  ],
  experience: [
    {
      role: 'Lead Software Engineer',
      company: 'Fiserv',
      period: 'April 2026 — Present',
      description:
        'Spearheaded technical interviewing and hiring for senior and mid-level engineers, mentored junior developers, drove Agile delivery, and led architecture for mission-critical financial applications.',
    },
    {
      role: 'Software Engineer',
      company: 'American Eagle Outfitters',
      period: 'Sep 2025 — Apr 2026',
      description:
        'Built and modernized retail backend infrastructure using .NET 8/10, PostgreSQL, AKS, and AI-assisted development to accelerate feature work and deployment reliability.',
    },
    {
      role: 'Sr. Software Engineer',
      company: 'Eastern Bank',
      period: 'Apr 2025 — Sep 2025',
      description:
        'Designed microservices and REST APIs for payment systems, built ETL for financial transaction data, and led sprint planning in Azure DevOps.',
    },
    {
      role: 'Full-Stack Engineer III',
      company: 'Dynamic Software Solutions',
      period: 'Jul 2024 — Mar 2025',
      description:
        'Architected ASP.NET Core 8 APIs, designed SQL Server schemas, and built Angular-based full-stack enterprise applications with Azure deployment pipelines.',
    },
    {
      role: 'Full-Stack Engineer II',
      company: 'Kratos Defense',
      period: 'Feb 2023 — Jul 2024',
      description:
        'Designed scalable .NET Web APIs for telemetry and mission planning tools, optimized query performance, and integrated TensorFlow Lite-based edge processing.',
    },
    {
      role: 'Full-Stack Engineer I',
      company: 'Siemens Digital Industries',
      period: 'Jan 2019 — Dec 2022',
      description:
        'Built RESTful APIs and React-based dashboards, optimized SQL queries and LINQ, and strengthened deployment confidence through xUnit tests and Agile delivery.',
    },
  ],
  socialLinks: [
    { label: 'GitHub', url: 'https://github.com/Chasertx', icon: 'gh' },
    { label: 'LinkedIn', url: 'https://www.linkedin.com/in/chase-ashby-bs-cs-664a6217a/', icon: 'in' },
    { label: 'Email', url: 'mailto:chaseashby199@gmail.com', icon: 'mail' },
  ],
}

function App() {
  const [profile, setProfile] = useState(fallbackProfile)
  const [loading, setLoading] = useState(true)
  const [theme, setTheme] = useState(() => {
    const savedTheme = window.localStorage.getItem('portfolio-theme')
    return savedTheme || 'dark'
  })

  useEffect(() => {
    window.localStorage.setItem('portfolio-theme', theme)
    document.body.classList.toggle('theme-light', theme === 'light')
    document.body.classList.toggle('theme-dark', theme === 'dark')
  }, [theme])

  useEffect(() => {
    const configuredApiUrl = import.meta.env.VITE_PORTFOLIO_API_URL?.trim()
    const isGithubPages = window.location.hostname.endsWith('github.io')
    const endpoint = configuredApiUrl || (isGithubPages ? null : '/api/portfolio')

    if (!endpoint) {
      setProfile(fallbackProfile)
      setLoading(false)
      return
    }

    fetch(endpoint)
      .then((response) => {
        if (!response.ok) {
          throw new Error('Failed to load portfolio data')
        }
        return response.json()
      })
      .then((data) => setProfile(data))
      .catch(() => setProfile(fallbackProfile))
      .finally(() => setLoading(false))
  }, [])

  if (loading) {
    return (
      <div className="page-shell">
        <div className="loading-state">Loading portfolio...</div>
      </div>
    )
  }

  const profileName = profile.name || fallbackProfile.name
  const profileImage = `${import.meta.env.BASE_URL}chase-portrait.jpg`

  return (
    <div className={`page-shell ${theme === 'dark' ? 'theme-dark' : 'theme-light'}`}>
      <header className="topbar">
        <a href="https://www.linkedin.com/in/chase-ashby-bs-cs-664a6217a/" target="_blank" rel="noreferrer" aria-label="Visit Chase Ashby on LinkedIn">
          <img
            className="brand-mark"
            src={profileImage}
            alt={`${profileName} profile`}
            aria-label="Chase Ashby profile"
          />
        </a>
        <nav className="main-nav" aria-label="Main navigation">
          <a href="#about">About</a>
          <a href="#experience">Experience</a>
          <a href="#projects">Projects</a>
          <a href="#contact">Contact</a>
        </nav>
        <div className="header-actions">
          <button
            type="button"
            className="theme-toggle"
            onClick={() => setTheme((current) => (current === 'dark' ? 'light' : 'dark'))}
            aria-label={theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'}
            title={theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'}
          >
            {theme === 'dark' ? '☀' : '☾'}
          </button>
          <a className="nav-button" href={scheduleUrl} target="_blank" rel="noreferrer">
            Schedule
          </a>
        </div>
      </header>

      <main>
        <section className="hero-section">
          <p className="mobile-hero-name">{profileName}</p>

          <div className="hero-copy">
            <p className="eyebrow">Available for select opportunities</p>
            <h1>{profileName}</h1>
            <h2>{profile.title}</h2>
            <p className="headline">{profile.headline}</p>
            <p className="summary">{profile.summary}</p>

            <div className="cta-row">
              <a className="primary-button" href="#projects">
                View projects
              </a>
              <a className="secondary-button" href={`mailto:${profile.email}`}>
                Email me
              </a>
            </div>

            <ul className="highlight-list" aria-label="Highlights">
              {profile.highlights?.map((highlight) => (
                <li key={highlight}>{highlight}</li>
              ))}
            </ul>
          </div>

          <aside className="profile-panel" aria-label="Profile overview">
            <div className="phase-stage" aria-hidden="true">
              <div className="phase-glow" />
              <div className="phase-orbit orbit-one" />
              <div className="phase-orbit orbit-two" />
              <div className="phase-orbit orbit-three" />
              <div className="avatar-ring">
                <a
                  href="https://www.linkedin.com/in/chase-ashby-bs-cs-664a6217a/"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="Visit Chase Ashby on LinkedIn"
                >
                  <img className="avatar-core" src={profileImage} alt={`${profileName} profile`} />
                </a>
              </div>
            </div>
            <div className="profile-meta">
              <span className="meta-label">Based in</span>
              <strong>{profile.location}</strong>
            </div>
            <div className="profile-meta">
              <span className="meta-label">Focus</span>
              <strong>Product engineering</strong>
            </div>
            <div className="profile-meta">
              <span className="meta-label">Stack</span>
              <strong>.NET • React • Cloud</strong>
            </div>
          </aside>
        </section>

        <section id="about" className="info-section">
          <div className="section-header">
            <p className="eyebrow">About</p>
            <h3>Crafting thoughtful digital experiences</h3>
          </div>
          <div className="about-grid">
            <p>
              I build products that balance technical rigor with experience design—turning product
              goals into systems that are clear, fast, and dependable.
            </p>
            <div className="skill-cloud">
              {profile.skills?.map((skill) => (
                <span key={skill} className="skill-pill">
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </section>

        <section id="experience" className="info-section">
          <div className="section-header">
            <p className="eyebrow">Experience</p>
            <h3>Recent work</h3>
          </div>

          <div className="timeline">
            {profile.experience?.map((item) => (
              <article key={`${item.company}-${item.role}`} className="timeline-item">
                <div className="timeline-dot" aria-hidden="true"></div>
                <div className="timeline-content">
                  <div className="role-row">
                    <h4>{item.role}</h4>
                    <span>{item.period}</span>
                  </div>
                  <p className="company-name">{item.company}</p>
                  <p>{item.description}</p>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section id="projects" className="info-section">
          <div className="section-header">
            <p className="eyebrow">Projects</p>
            <h3>Selected builds</h3>
          </div>

          <div className="project-grid">
            {profile.projects?.map((project) => (
              <article key={project.name} className="project-card">
                <div className="project-card-header">
                  <span className="project-tag">{project.category}</span>
                  <span className="project-arrow">↗</span>
                </div>
                <h4>{project.name}</h4>
                <p>{project.description}</p>
                <div className="stack-list">
                  {project.stack?.map((stackItem) => (
                    <span key={stackItem}>{stackItem}</span>
                  ))}
                </div>
                <div className="project-links">
                  <a href={project.liveUrl} target="_blank" rel="noreferrer">
                    Live demo
                  </a>
                  <a href={project.repoUrl} target="_blank" rel="noreferrer">
                    Source code
                  </a>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section id="contact" className="contact-section">
          <div>
            <p className="eyebrow">Let&apos;s build something meaningful</p>
            <h3>Open to product, platform, and leadership opportunities.</h3>
          </div>
          <div className="contact-actions">
            <a className="primary-button" href={`mailto:${profile.email}`}>
              chaseashby199@gmail.com
            </a>
            <div className="social-row">
              {profile.socialLinks?.map((link) => (
                <a key={link.label} href={link.url} target="_blank" rel="noreferrer" className="social-link">
                  {link.label}
                </a>
              ))}
            </div>
          </div>
        </section>
      </main>

      <footer className="site-footer">
        <p>© {currentYear} {profileName}. Crafted with React and .NET.</p>
      </footer>
    </div>
  )
}

export default App
