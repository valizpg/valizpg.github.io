import type { Profile } from '../data/profile'
import { escapeHtml } from '../utils/html'

export function renderNav(p: Profile): string {
  const brand = escapeHtml(p.name)
  return `
  <header class="site-header" data-reveal>
    <div class="site-header__inner glass">
      <a class="site-brand" href="#hero">${brand}</a>
      <nav class="site-nav" aria-label="主导航">
        <a href="#about">${escapeHtml(p.aboutTitle)}</a>
        <a href="#projects">${escapeHtml(p.projectsTitle)}</a>
        <a href="#contact">${escapeHtml(p.contactTitle)}</a>
      </nav>
    </div>
  </header>`
}
