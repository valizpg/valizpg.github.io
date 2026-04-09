import type { ProfileView } from '../data/profile'
import { escapeHtml } from '../utils/html'

export function renderEducation(p: ProfileView): string {
  const e = p.education
  const highlights = e.highlights
    .map((h) => `<li>${escapeHtml(h)}</li>`)
    .join('')

  return `
  <section class="section resume-section" id="education" aria-labelledby="education-title">
    <div class="section__head" data-reveal>
      <h2 id="education-title" class="section__title">${escapeHtml(p.educationTitle)}</h2>
    </div>
    <article class="edu-card glass" data-reveal>
      <div class="edu-card__head">
        <div>
          <h3 class="edu-card__inst">${escapeHtml(e.institution)}</h3>
          <p class="edu-card__degree">${escapeHtml(e.degreeLine)}</p>
        </div>
        <div class="edu-card__meta">
          <span class="edu-card__loc">${escapeHtml(e.location)}</span>
          <span class="edu-card__period">${escapeHtml(e.period)}</span>
        </div>
      </div>
      <ul class="edu-card__list">${highlights}</ul>
    </article>
  </section>`
}
