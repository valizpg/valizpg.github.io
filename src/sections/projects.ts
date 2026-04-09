import type { ProfileView } from '../data/profile'
import { escapeHtml } from '../utils/html'

export function renderProjects(p: ProfileView): string {
  const cards = p.projects
    .map((proj) => {
      const tags = proj.tags.map((t) => `<span class="project__tag">${escapeHtml(t)}</span>`).join('')
      const mainLink = proj.href
        ? `<a class="project__link" href="${escapeHtml(proj.href)}" target="_blank" rel="noreferrer noopener">${escapeHtml(p.projectVisitLabel)}</a>`
        : ''
      const srcLink = proj.sourceHref
        ? `<a class="project__link project__link--muted" href="${escapeHtml(proj.sourceHref)}" target="_blank" rel="noreferrer noopener">${escapeHtml(p.projectSourceLabel)}</a>`
        : ''
      const links = [mainLink, srcLink].filter(Boolean).join('')

      return `
      <article class="project glass" data-reveal>
        <div class="project__thumb" aria-hidden="true">
          <div class="project__thumb-inner"></div>
        </div>
        <div class="project__body">
          <h3 class="project__title">${escapeHtml(proj.title)}</h3>
          <p class="project__desc">${escapeHtml(proj.description)}</p>
          <div class="project__tags">${tags}</div>
          ${links ? `<div class="project__actions">${links}</div>` : ''}
        </div>
      </article>`
    })
    .join('')

  return `
  <section class="section projects" id="projects" aria-labelledby="projects-title">
    <div class="section__head" data-reveal>
      <h2 id="projects-title" class="section__title">${escapeHtml(p.projectsTitle)}</h2>
      <p class="section__lead">${escapeHtml(p.projectsLead)}</p>
    </div>
    <div class="projects__grid">
      ${cards}
    </div>
  </section>`
}
