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

function initHeroAvatarFallback(root: ParentNode): void {
  const avatars = root.querySelectorAll<HTMLElement>('[data-avatar-shell]')
  avatars.forEach((avatar) => {
    const img = avatar.querySelector<HTMLImageElement>('[data-avatar-image]')
    const fallback = avatar.querySelector<HTMLElement>('[data-avatar-fallback]')
    if (!img || !fallback) return

    const showFallback = (): void => {
      avatar.dataset.avatarState = 'fallback'
    }

    const showImage = (): void => {
      avatar.dataset.avatarState = 'image'
    }

    img.addEventListener('load', showImage, { once: true })
    img.addEventListener('error', showFallback, { once: true })

    if (img.complete) {
      if (img.naturalWidth > 0) {
        showImage()
      } else {
        showFallback()
      }
    } else {
      showFallback()
    }
  })
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

  initHeroAvatarFallback(app)
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
