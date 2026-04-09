import type { ProfileView } from '../data/profile'
import { escapeHtml } from '../utils/html'

export function renderExperience(p: ProfileView): string {
  const blocks = p.experiences
    .map((ex) => {
      const bullets = ex.bullets.map((b) => `<li>${escapeHtml(b)}</li>`).join('')
      return `
      <article class="exp-item glass" data-reveal>
        <div class="exp-item__head">
          <div>
            <h3 class="exp-item__company">${escapeHtml(ex.company)}</h3>
            <p class="exp-item__role">${escapeHtml(ex.role)}</p>
          </div>
          <div class="exp-item__meta">
            <span class="exp-item__loc">${escapeHtml(ex.location)}</span>
            <span class="exp-item__period">${escapeHtml(ex.period)}</span>
          </div>
        </div>
        <ul class="exp-item__list">${bullets}</ul>
      </article>`
    })
    .join('')

  return `
  <section class="section resume-section" id="experience" aria-labelledby="experience-title">
    <div class="section__head" data-reveal>
      <h2 id="experience-title" class="section__title">${escapeHtml(p.experienceTitle)}</h2>
    </div>
    <div class="exp-stack">
      ${blocks}
    </div>
  </section>`
}
