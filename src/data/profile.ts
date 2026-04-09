/** 类型定义；可编辑内容在 profile.json */

import raw from './profile.json'

export interface SocialLink {
  label: string
  href: string
  /** 简单图标：emoji 或短文本 */
  icon: string
}

export interface ProjectItem {
  title: string
  description: string
  tags: string[]
  href?: string
  sourceHref?: string
}

export interface Profile {
  siteTitle: string
  /** SEO / 分享摘要，与 index.html 默认 meta 保持一致 */
  siteDescription: string
  name: string
  /** 渐变标题下的副标题 */
  role: string
  /** 首屏简介（支持换行） */
  heroLead: string
  avatarInitials: string
  aboutTitle: string
  aboutBody: string
  statusLabel: string
  statusText: string
  skillsTitle: string
  /** 技能标签 */
  skills: string[]
  bentoNoteTitle: string
  bentoNoteBody: string
  projectsTitle: string
  projectsLead: string
  projects: ProjectItem[]
  contactTitle: string
  email: string
  primaryCta: { label: string; href: string }
  secondaryCta: { label: string; href: string }
  social: SocialLink[]
}

const profileData = raw as Profile

if (import.meta.env.DEV) {
  const keys: (keyof Profile)[] = [
    'siteTitle',
    'siteDescription',
    'name',
    'role',
    'heroLead',
    'avatarInitials',
    'aboutTitle',
    'aboutBody',
    'statusLabel',
    'statusText',
    'skillsTitle',
    'skills',
    'bentoNoteTitle',
    'bentoNoteBody',
    'projectsTitle',
    'projectsLead',
    'projects',
    'contactTitle',
    'email',
    'primaryCta',
    'secondaryCta',
    'social',
  ]
  for (const k of keys) {
    if (!(k in profileData)) {
      console.error(`[profile] 缺少字段: ${String(k)}`)
    }
  }
}

export const profile: Profile = profileData
