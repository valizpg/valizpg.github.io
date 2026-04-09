import type { Profile } from '../data/profile'
import { escapeHtml } from '../utils/html'

export function renderBento(p: Profile): string {
  const skills = p.skills
    .map((s) => `<li class="skill-pill glass"><span>${escapeHtml(s)}</span></li>`)
    .join('')

  return `
  <section class="section bento-wrap" id="about" aria-labelledby="about-title">
    <div class="section__head" data-reveal>
      <h2 id="about-title" class="section__title">${escapeHtml(p.aboutTitle)}</h2>
      <p class="section__lead">Bento · 关于、状态与技能</p>
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
        <ul class="skill-list">${skills}</ul>
      </article>
      <article class="bento__card bento__card--note glass">
        <h3 class="bento__card-title">${escapeHtml(p.bentoNoteTitle)}</h3>
        <p class="bento__card-body">${escapeHtml(p.bentoNoteBody)}</p>
      </article>
    </div>
  </section>`
}
