import { useEffect, useState } from 'react'
import { ArrowUpRight, Download, Mail } from 'lucide-react'

import BinarySeparator from './components/BinarySeparator'
import InfoBlock from './components/InfoBlock'
import Intro from './components/Intro'
import Scene from './components/Scene'
import SiteHeader from './components/SiteHeader'
import { profile } from './data/profile'

export default function App() {
  const [introDone, setIntroDone] = useState(false)
  const [introMounted, setIntroMounted] = useState(true)
  const [highContrast, setHighContrast] = useState(false)

  useEffect(() => {
    const doneTimer = window.setTimeout(() => setIntroDone(true), 1450)
    const unmountTimer = window.setTimeout(() => setIntroMounted(false), 2300)
    return () => {
      window.clearTimeout(doneTimer)
      window.clearTimeout(unmountTimer)
    }
  }, [])

  useEffect(() => {
    document.documentElement.dataset.contrast = highContrast ? 'high' : 'standard'
  }, [highContrast])

  return (
    <div className="app">
      {introMounted ? <Intro done={introDone} /> : null}
      <Scene />
      <SiteHeader highContrast={highContrast} onToggleContrast={() => setHighContrast((value) => !value)} />

      <main>
        <section className="hero section" id="top" data-section="hero">
          <BinarySeparator text="operations signal" />
          <div className="hero__inner">
            <p className="eyebrow">
              {profile.location} / {profile.discipline}
            </p>
            <h1>
              <span>{profile.name}</span>
              <strong>{profile.role}</strong>
            </h1>
            <p className="hero__copy">{profile.headline}</p>
            <div className="hero__actions">
              <a className="button button--primary" href="#contact">
                <Mail size={18} aria-hidden="true" />
                Contact
              </a>
              <a className="button button--ghost" href={profile.resume} download>
                <Download size={18} aria-hidden="true" />
                Resume
              </a>
            </div>
          </div>
          <div className="hero__ticker" aria-label="Profile highlights">
            {profile.metrics.slice(0, 4).map((metric) => (
              <span key={metric.label}>
                <strong>{metric.value}</strong> {metric.label}
              </span>
            ))}
          </div>
        </section>

        <section className="section about" id="about">
          <div className="section__label">01 / About</div>
          <div className="about__grid">
            <h2>Operational clarity, governed end to end.</h2>
            <div className="about__content">
              <p>{profile.summary}</p>
              <div className="pill-grid" aria-label="Focus areas">
                {profile.focusAreas.map((area) => (
                  <span key={area}>{area}</span>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="section impact" id="impact">
          <div className="section__label">02 / Impact</div>
          <h2>Metrics that hold under SLA pressure.</h2>
          <div className="metric-grid">
            {profile.metrics.map((metric) => (
              <article className="metric-card" key={metric.label}>
                <strong>{metric.value}</strong>
                <h3>{metric.label}</h3>
                <p>{metric.detail}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="section ledger" id="experience">
          <div className="section__label">03 / Experience</div>
          <div className="ledger__header">
            <h2>From operations associate to team lead.</h2>
            <p>
              A two-year progression across service delivery, quality governance, escalation management, vendor
              coordination, and team leadership.
            </p>
          </div>
          <div className="timeline">
            {profile.experience.map((item, index) => (
              <article className="timeline-item" key={`${item.company}-${item.role}`}>
                <div className="timeline-item__marker">{String(index + 1).padStart(2, '0')}</div>
                <div className="timeline-item__body">
                  <p className="timeline-item__period">{item.period}</p>
                  <h3>{item.role}</h3>
                  <p className="timeline-item__company">{item.company}</p>
                  <ul>
                    {item.bullets.map((bullet) => (
                      <li key={bullet}>{bullet}</li>
                    ))}
                  </ul>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="section proof" aria-labelledby="proof-heading">
          <div className="section__label">04 / Proof</div>
          <h2 id="proof-heading">Education, tools, and operating range.</h2>
          <div className="proof__grid">
            <InfoBlock title="Education" items={profile.education} />
            <InfoBlock title="Certifications" items={profile.certifications} />
            <InfoBlock title="Competencies" items={profile.competencies} />
          </div>
          <p className="publication">{profile.publication}</p>
        </section>

        <section className="section contact" id="contact">
          <BinarySeparator text="ready to coordinate" />
          <div className="contact__inner">
            <p className="eyebrow">Contact</p>
            <h2>Let&apos;s build workflows that hold.</h2>
            <div className="contact__actions">
              <a className="contact__email" href={`mailto:${profile.email}`}>
                {profile.email}
                <ArrowUpRight size={22} aria-hidden="true" />
              </a>
              <a className="button button--primary" href={profile.resume} download>
                <Download size={18} aria-hidden="true" />
                Download CV
              </a>
            </div>
          </div>
        </section>
      </main>

      <footer className="site-footer">
        <a href="#top" aria-label="Back to top">
          {profile.initials}
        </a>
      </footer>
    </div>
  )
}
