import './style.css'
import {
  detectLocale,
  getProfileView,
  persistLocale,
  type LocaleCode,
} from './data/profile'
import { renderNav } from './sections/nav.ts'
import { renderHero } from './sections/hero.ts'
import { renderBento } from './sections/bento.ts'
import { renderEducation } from './sections/education.ts'
import { renderExperience } from './sections/experience.ts'
import { renderAcademic } from './sections/academic.ts'
import { renderProjects } from './sections/projects.ts'
import { renderContact } from './sections/contact.ts'
import { initRevealMotion } from './utils/motion.ts'

function applySeo(locale: LocaleCode): void {
  const p = getProfileView(locale)
  document.title = p.siteTitle
  const metaDesc = document.querySelector<HTMLMetaElement>('meta[name="description"]')
  if (metaDesc) {
    metaDesc.content = p.siteDescription
  }
  document.documentElement.lang = locale === 'zh' ? 'zh-CN' : 'en'
}

function renderApp(locale: LocaleCode): void {
  const p = getProfileView(locale)
  applySeo(locale)

  const app = document.querySelector<HTMLDivElement>('#app')!
  app.innerHTML = `
  <div class="page">
    ${renderNav(p, locale)}
    <main class="main">
      ${renderHero(p)}
      ${renderBento(p)}
      ${renderEducation(p)}
      ${renderExperience(p)}
      ${renderAcademic(p)}
      ${renderProjects(p)}
      ${renderContact(p)}
    </main>
  </div>
`

  initRevealMotion(app)
}

const appRoot = document.querySelector<HTMLDivElement>('#app')!
appRoot.addEventListener('click', (e) => {
  const target = (e.target as HTMLElement).closest<HTMLButtonElement>('[data-locale]')
  if (!target) return
  const loc = target.getAttribute('data-locale') as LocaleCode | null
  if (loc !== 'zh' && loc !== 'en') return
  e.preventDefault()
  persistLocale(loc)
  renderApp(loc)
})

renderApp(detectLocale())
