import type { ProfileView } from '../data/profile'
import { escapeHtml } from '../utils/html'

export function renderAcademic(p: ProfileView): string {
  const blocks = p.academicExperiences
    .map((ac) => {
      const bullets = ac.bullets.map((b) => `<li>${escapeHtml(b)}</li>`).join('')
      return `
      <article class="exp-item exp-item--academic glass" data-reveal>
        <div class="exp-item__head">
          <div>
            <h3 class="exp-item__company">${escapeHtml(ac.title)}</h3>
            <p class="exp-item__role">${escapeHtml(ac.role)}</p>
          </div>
          <div class="exp-item__meta">
            <span class="exp-item__period">${escapeHtml(ac.period)}</span>
          </div>
        </div>
        <ul class="exp-item__list">${bullets}</ul>
      </article>`
    })
    .join('')

  return `
  <section class="section resume-section" id="academic" aria-labelledby="academic-title">
    <div class="section__head" data-reveal>
      <h2 id="academic-title" class="section__title">${escapeHtml(p.academicTitle)}</h2>
    </div>
    <div class="exp-stack">
      ${blocks}
    </div>
  </section>`
}
