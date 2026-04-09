import type { Profile } from '../data/profile'
import { escapeHtml } from '../utils/html'

export function renderHero(p: Profile): string {
  const leadLines = escapeHtml(p.heroLead).split('\n')
  const leadHtml = leadLines.map((line) => `<span class="hero__lead-line">${line}</span>`).join('<br />')

  return `
  <section class="hero section" id="hero" aria-labelledby="hero-title">
    <div class="hero__glow" aria-hidden="true"></div>
    <div class="hero__layout" data-reveal>
      <div class="hero__avatar glass" aria-hidden="true">
        <span class="hero__avatar-text">${escapeHtml(p.avatarInitials)}</span>
      </div>
      <div class="hero__copy">
        <p class="eyebrow">Portfolio · ${escapeHtml(p.role)}</p>
        <h1 id="hero-title" class="hero__title gradient-text">${escapeHtml(p.name)}</h1>
        <p class="hero__lead">${leadHtml}</p>
        <div class="hero__actions">
          <a class="btn btn--primary" href="${escapeHtml(p.primaryCta.href)}">${escapeHtml(p.primaryCta.label)}</a>
          <a class="btn btn--ghost" href="${escapeHtml(p.secondaryCta.href)}" target="_blank" rel="noreferrer noopener">${escapeHtml(p.secondaryCta.label)}</a>
        </div>
      </div>
    </div>
  </section>`
}
