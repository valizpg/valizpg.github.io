import type { ProfileView } from '../data/profile'
import { escapeHtml } from '../utils/html'

export function renderBento(p: ProfileView): string {
  const skillCategories = p.skillCategories
    .map(
      (cat) => `
      <div class="skill-category">
        <p class="skill-category__title">${escapeHtml(cat.category)}</p>
        <p class="skill-category__items">${escapeHtml(cat.items)}</p>
      </div>`,
    )
    .join('')

  return `
  <section class="section bento-wrap" id="about" aria-labelledby="about-title">
    <div class="section__head" data-reveal>
      <h2 id="about-title" class="section__title">${escapeHtml(p.aboutTitle)}</h2>
      <p class="section__lead">${escapeHtml(p.aboutSectionLead)}</p>
    </div>
    <div class="bento" data-reveal>
      <article class="bento__card bento__card--wide glass">
        <h3 class="bento__card-title">${escapeHtml(p.aboutTitle)}</h3>
        <p class="bento__card-body">${escapeHtml(p.aboutBody)}</p>
      </article>
      <article class="bento__card bento__card--tall glass">
        <p class="bento__eyebrow">${escapeHtml(p.statusLabel)}</p>
        <p class="bento__status">${escapeHtml(p.statusText)}</p>
        <div class="bento__pulse" aria-hidden="true"><span></span></div>
      </article>
      <article class="bento__card bento__card--skills glass">
        <h3 class="bento__card-title">${escapeHtml(p.skillsTitle)}</h3>
        <div class="skill-categories">${skillCategories}</div>
      </article>
      <article class="bento__card bento__card--note glass">
        <h3 class="bento__card-title">${escapeHtml(p.bentoNoteTitle)}</h3>
        <p class="bento__card-body">${escapeHtml(p.bentoNoteBody)}</p>
      </article>
    </div>
  </section>`
}
