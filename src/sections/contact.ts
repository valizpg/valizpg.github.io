import type { Profile } from '../data/profile'
import { escapeHtml } from '../utils/html'

export function renderContact(p: Profile): string {
  const social = p.social
    .map(
      (s) => `
      <a class="contact__social glass" href="${escapeHtml(s.href)}" target="_blank" rel="noreferrer noopener" aria-label="${escapeHtml(s.label)}">
        <span class="contact__social-icon">${escapeHtml(s.icon)}</span>
        <span class="contact__social-label">${escapeHtml(s.label)}</span>
      </a>`,
    )
    .join('')

  return `
  <footer class="section contact" id="contact" aria-labelledby="contact-title">
    <div class="contact__inner glass" data-reveal>
      <div class="contact__copy">
        <h2 id="contact-title" class="section__title section__title--footer">${escapeHtml(p.contactTitle)}</h2>
        <p class="contact__email">
          <a href="mailto:${escapeHtml(p.email)}">${escapeHtml(p.email)}</a>
        </p>
      </div>
      <div class="contact__socials">
        ${social}
      </div>
    </div>
    <p class="fineprint">© ${new Date().getFullYear()} ${escapeHtml(p.name)} · Built with Vite & GitHub Pages</p>
  </footer>`
}
