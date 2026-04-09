import type { ProfileView } from '../data/profile'
import { escapeHtml } from '../utils/html'

export function renderContact(p: ProfileView): string {
  const social = p.social
    .map((s) => {
      const ext = s.href.startsWith('http')
      const target = ext ? ' target="_blank" rel="noreferrer noopener"' : ''
      return `
      <a class="contact__social glass" href="${escapeHtml(s.href)}"${target} aria-label="${escapeHtml(s.label)}">
        <span class="contact__social-icon">${escapeHtml(s.icon)}</span>
        <span class="contact__social-label">${escapeHtml(s.label)}</span>
      </a>`
    })
    .join('')

  const telHref = `tel:${escapeHtml(p.phone)}`

  return `
  <footer class="section contact" id="contact" aria-labelledby="contact-title">
    <div class="contact__inner glass" data-reveal>
      <div class="contact__copy">
        <h2 id="contact-title" class="section__title section__title--footer">${escapeHtml(p.contactTitle)}</h2>
        <p class="contact__email">
          <a href="mailto:${escapeHtml(p.email)}">${escapeHtml(p.email)}</a>
        </p>
        <p class="contact__phone">
          <a href="${telHref}">${escapeHtml(p.phoneDisplay)}</a>
        </p>
      </div>
      <div class="contact__socials">
        ${social}
      </div>
    </div>
    <p class="fineprint">© ${new Date().getFullYear()} ${escapeHtml(p.name)} · ${escapeHtml(p.fineprintBuiltWith)}</p>
  </footer>`
}
