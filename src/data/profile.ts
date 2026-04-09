/** 类型定义；可编辑内容在 profile.json */

import raw from './profile.json'

export type LocaleCode = 'zh' | 'en'

export interface SocialLink {
  label: string
  href: string
  icon: string
}

export interface ProjectItem {
  title: string
  description: string
  tags: string[]
  href?: string
  sourceHref?: string
}

export interface SkillCategory {
  category: string
  items: string
}

export interface EducationBlock {
  institution: string
  location: string
  degreeLine: string
  period: string
  highlights: string[]
}

export interface ExperienceItem {
  company: string
  location: string
  role: string
  period: string
  bullets: string[]
}

export interface AcademicItem {
  title: string
  role: string
  period: string
  bullets: string[]
}

/** 单一语种下的全部展示文案 */
export interface LocaleContent {
  siteTitle: string
  siteDescription: string
  name: string
  /** Hero 顶栏一行，如 Portfolio · … */
  heroEyebrow: string
  role: string
  heroLead: string
  avatarInitials: string
  aboutTitle: string
  aboutSectionLead: string
  aboutBody: string
  statusLabel: string
  statusText: string
  skillsTitle: string
  skillCategories: SkillCategory[]
  bentoNoteTitle: string
  bentoNoteBody: string
  educationTitle: string
  education: EducationBlock
  experienceTitle: string
  experiences: ExperienceItem[]
  academicTitle: string
  academicExperiences: AcademicItem[]
  projectsTitle: string
  projectsLead: string
  projects: ProjectItem[]
  contactTitle: string
  primaryCta: { label: string; href: string }
  secondaryCta: { label: string; href: string }
  social: SocialLink[]
  projectVisitLabel: string
  projectSourceLabel: string
  fineprintBuiltWith: string
  langSwitchZh: string
  langSwitchEn: string
  navAriaLabel: string
}

export interface ProfileRoot {
  email: string
  phone: string
  /** 人类可读电话，用于展示 */
  phoneDisplay: string
  locales: Record<LocaleCode, LocaleContent>
}

/** 运行时视图：语种文案 + 根级联系方式（与 mailto 一致） */
export type ProfileView = LocaleContent & {
  email: string
  phone: string
  phoneDisplay: string
  locale: LocaleCode
}

export const profileRoot: ProfileRoot = raw as ProfileRoot

const LOCALE_KEYS: (keyof LocaleContent)[] = [
  'siteTitle',
  'siteDescription',
  'name',
  'heroEyebrow',
  'role',
  'heroLead',
  'avatarInitials',
  'aboutTitle',
  'aboutSectionLead',
  'aboutBody',
  'statusLabel',
  'statusText',
  'skillsTitle',
  'skillCategories',
  'bentoNoteTitle',
  'bentoNoteBody',
  'educationTitle',
  'education',
  'experienceTitle',
  'experiences',
  'academicTitle',
  'academicExperiences',
  'projectsTitle',
  'projectsLead',
  'projects',
  'contactTitle',
  'primaryCta',
  'secondaryCta',
  'social',
  'projectVisitLabel',
  'projectSourceLabel',
  'fineprintBuiltWith',
  'langSwitchZh',
  'langSwitchEn',
  'navAriaLabel',
]

function validateRoot(p: ProfileRoot): void {
  if (!p.email || !p.phone || !p.phoneDisplay) {
    console.error('[profile] 根级缺少 email / phone / phoneDisplay')
  }
  for (const loc of ['zh', 'en'] as const) {
    const block = p.locales[loc]
    if (!block) {
      console.error(`[profile] 缺少 locales.${loc}`)
      continue
    }
    for (const k of LOCALE_KEYS) {
      if (!(k in block)) {
        console.error(`[profile] locales.${loc} 缺少字段: ${String(k)}`)
      }
    }
  }
}

if (import.meta.env.DEV) {
  validateRoot(profileRoot)
}

export function getProfileView(locale: LocaleCode): ProfileView {
  const L = profileRoot.locales[locale] ?? profileRoot.locales.zh
  return {
    ...L,
    email: profileRoot.email,
    phone: profileRoot.phone,
    phoneDisplay: profileRoot.phoneDisplay,
    locale,
  }
}

export function detectLocale(): LocaleCode {
  if (typeof window === 'undefined') return 'zh'
  try {
    const stored = localStorage.getItem('portfolio-locale') as LocaleCode | null
    if (stored === 'zh' || stored === 'en') return stored
  } catch {
    /* ignore */
  }
  const nav = navigator.language?.toLowerCase() ?? ''
  return nav.startsWith('zh') ? 'zh' : 'en'
}

export function persistLocale(locale: LocaleCode): void {
  try {
    localStorage.setItem('portfolio-locale', locale)
  } catch {
    /* ignore */
  }
}
