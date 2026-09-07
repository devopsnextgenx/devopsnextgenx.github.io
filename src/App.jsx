import './App.css'

const githubProfiles = [
  { label: 'GitHub', url: 'https://github.com/amitkshirsagar13' },
  { label: 'Developer Profile', url: 'https://github.com/devopsnextgenx' },
]

const timeline = [
  {
    period: '2005',
    title: 'Thyssenkrupp Ltd, India',
    description: 'Early engineering career focused on Boughtout/Purchase and GTE (Graduate Trainee Engineer).',
  },
  {
    period: '2006 – 2018',
    title: 'Infosys Ltd',
    description: 'Progressed through application development and engineering roles with a focus on enterprise Java-based systems, integration, and delivery excellence.',
  },
  {
    period: '2018 – 2022',
    title: 'Siemens India Ltd',
    description: 'Delivered business-critical application solutions with stronger emphasis on architecture, engineering standards, and operational reliability.',
  },
  {
    period: '2022 – Till date',
    title: 'Siemens Industries Software, US',
    description: 'Current role focused on large-scale software architecture, platform engineering, cloud enablement, and modern engineering practices.',
  },
]

const skillGroups = [
  {
    title: 'Languages',
    items: ['Java', 'JavaScript / TypeScript', 'Python', 'C / C++'],
  },
  {
    title: 'Frameworks',
    items: ['Spring Boot / ATG (Oracle)', 'MCP / RAG (AI App Development)', 'Node.js Web Apps', 'Angular / React UI'],
  },
  {
    title: 'Server / Backend',
    items: ['Microservices', 'Containerization', 'Docker / Kubernetes', 'Tomcat / WebLogic / JBoss', 'Oracle / MySQL / MongoDB'],
  },
  {
    title: 'Cloud Platforms',
    items: ['AWS', 'Azure'],
  },
]

const projectCards = [
  {
    title: 'Enterprise Application Architecture',
    type: 'Solution Design',
    summary: 'Architected scalable application platforms spanning backend services, integration layers, and delivery workflows.',
  },
  {
    title: 'DevSecOps & CI/CD Pipelines',
    type: 'Platform Engineering',
    summary: 'Built release automation and deployment patterns to improve delivery quality, speed, and operational consistency.',
  },
  {
    title: 'AI App Development',
    type: 'MCP / RAG',
    summary: 'Exploring modern AI application patterns using MCP, retrieval flows, and intelligent product experiences.',
  },
]

const stats = [
  { label: 'Experience', value: '20+ Years' },
  { label: 'Core Focus', value: 'Architecture' },
  { label: 'Cloud', value: 'AWS + Azure' },
  { label: 'Delivery', value: 'DevOps + CI/CD' },
]

function App() {
  return (
    <div className="app-shell">
      <aside className="sidebar">
        <div className="brand-row">
          <div className="brand-badge">AK</div>
          <div>
            <div className="brand-label">PROFILE</div>
            <div className="brand-name">Amit Kshirsagar</div>
          </div>
        </div>

        <nav className="nav-list" aria-label="Profile sections">
          <a href="#overview">Overview</a>
          <a href="#experience">Experience</a>
          <a href="#capabilities">Capabilities</a>
          <a href="#projects">Projects</a>
        </nav>
      </aside>

      <main className="main-panel">
        <header className="hero-panel" id="overview">
          <div className="hero-copy">
            <p className="eyebrow">// Senior Software Architect</p>
            <h1>Amit Kshirsagar</h1>
            <p className="subtitle">B.E. (Mech) • Software Architect • Application & DevOps Leader</p>
            <p className="lead">
              Experienced technology leader with a strong foundation in enterprise software,
              application architecture, cloud delivery, and CI/CD enablement. With work
              across Java, JavaScript/TypeScript, Python, and modern platform engineering,
              I build resilient systems and transformation-ready engineering practices.
            </p>

            <div className="cta-row">
              {githubProfiles.map((profile) => (
                <a
                  key={profile.label}
                  href={profile.url}
                  target="_blank"
                  rel="noreferrer"
                  className="primary-link"
                >
                  {profile.label}
                </a>
              ))}
            </div>
          </div>

          <div className="hero-card">
            <div className="chip">Available for Architecture & Platform Solutions</div>
            <div className="metric-grid">
              {stats.map((stat) => (
                <div key={stat.label} className="metric-item">
                  <div className="metric-value">{stat.value}</div>
                  <div className="metric-label">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </header>

        <section className="content-grid">
          <div className="panel" id="experience">
            <div className="section-header">
              <span className="dot" aria-hidden="true" />
              Experience
            </div>

            <div className="timeline">
              {timeline.map((item) => (
                <div key={item.period} className="timeline-item">
                  <div className="timeline-period">{item.period}</div>
                  <div className="timeline-body">
                    <h3>{item.title}</h3>
                    <p>{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="panel" id="capabilities">
            <div className="section-header">
              <span className="dot" aria-hidden="true" />
              Core Area of Competence
            </div>

            {skillGroups.map((group) => (
              <div key={group.title} className="skill-group">
                <h3>{group.title}</h3>
                <div className="tag-list">
                  {group.items.map((item) => (
                    <span key={item} className="tag">
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="panel" id="projects">
          <div className="section-header">
            <span className="dot" aria-hidden="true" />
            Project Portfolio
          </div>

          <p className="section-note">
            This structure is intentionally open for adding deeper project pages and case studies in the future.
          </p>

          <div className="project-grid">
            {projectCards.map((project) => (
              <article key={project.title} className="project-card">
                <span className="project-type">{project.type}</span>
                <h3>{project.title}</h3>
                <p>{project.summary}</p>
                <button type="button" className="ghost-button">
                  Open project page
                </button>
              </article>
            ))}
          </div>
        </section>
      </main>
    </div>
  )
}

export default App
