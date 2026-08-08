import { Mail, Moon, Sun } from 'lucide-react'

import { profile } from '../data/profile'

export const NAV = [
  { href: '#about', label: 'About' },
  { href: '#impact', label: 'Impact' },
  { href: '#experience', label: 'Experience' },
  { href: '#contact', label: 'Contact' },
]

export default function SiteHeader({ highContrast, onToggleContrast }) {
  return (
    <header className="site-header">
      <a className="site-header__mark" href="#top" aria-label={`${profile.name} home`}>
        {profile.initials}
      </a>
      <nav className="site-nav" aria-label="Primary navigation">
        {NAV.map((item) => (
          <a key={item.href} href={item.href}>
            {item.label}
          </a>
        ))}
      </nav>
      <div className="site-header__actions">
        <a className="icon-link" href={`mailto:${profile.email}`} aria-label={`Email ${profile.name}`}>
          <Mail size={19} aria-hidden="true" />
        </a>
        <button className="icon-link" type="button" onClick={onToggleContrast} aria-label="Toggle contrast">
          {highContrast ? <Sun size={19} aria-hidden="true" /> : <Moon size={19} aria-hidden="true" />}
        </button>
      </div>
    </header>
  )
}
