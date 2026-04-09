import type { LocaleCode, ProfileView } from '../data/profile'
import { escapeHtml } from '../utils/html'

export function renderNav(p: ProfileView, activeLocale: LocaleCode): string {
  const brand = escapeHtml(p.name)
  const zhActive = activeLocale === 'zh' ? ' is-active' : ''
  const enActive = activeLocale === 'en' ? ' is-active' : ''

  return `
  <header class="site-header" data-reveal>
    <div class="site-header__inner glass">
      <a class="site-brand" href="#hero">${brand}</a>
      <nav class="site-nav" aria-label="${escapeHtml(p.navAriaLabel)}">
        <a href="#about">${escapeHtml(p.aboutTitle)}</a>
        <a href="#education">${escapeHtml(p.educationTitle)}</a>
        <a href="#experience">${escapeHtml(p.experienceTitle)}</a>
        <a href="#academic">${escapeHtml(p.academicTitle)}</a>
        <a href="#projects">${escapeHtml(p.projectsTitle)}</a>
        <a href="#contact">${escapeHtml(p.contactTitle)}</a>
      </nav>
      <div class="lang-switch" role="group" aria-label="Language">
        <button type="button" class="lang-switch__btn${zhActive}" data-locale="zh" aria-pressed="${activeLocale === 'zh'}">${escapeHtml(p.langSwitchZh)}</button>
        <button type="button" class="lang-switch__btn${enActive}" data-locale="en" aria-pressed="${activeLocale === 'en'}">${escapeHtml(p.langSwitchEn)}</button>
      </div>
    </div>
  </header>`
}
