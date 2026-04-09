import './style.css'
import { profile } from './data/profile'
import { renderNav } from './sections/nav.ts'
import { renderHero } from './sections/hero.ts'
import { renderBento } from './sections/bento.ts'
import { renderProjects } from './sections/projects.ts'
import { renderContact } from './sections/contact.ts'
import { initRevealMotion } from './utils/motion.ts'

document.title = profile.siteTitle

const app = document.querySelector<HTMLDivElement>('#app')!
app.innerHTML = `
  <div class="page">
    ${renderNav(profile)}
    <main class="main">
      ${renderHero(profile)}
      ${renderBento(profile)}
      ${renderProjects(profile)}
      ${renderContact(profile)}
    </main>
  </div>
`

initRevealMotion(app)
