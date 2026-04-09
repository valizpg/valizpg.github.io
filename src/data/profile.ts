/** 全站文案与链接：后续只需改此文件即可更新页面内容 */

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

export const profile: Profile = {
  siteTitle: 'Valizpg · Portfolio',
  name: 'Valizpg',
  role: 'Developer · Builder · Curious mind',
  heroLead:
    '在这里展示你的故事、作品与链接。\n编辑 src/data/profile.ts，即可更新整站内容。',
  avatarInitials: 'V',
  aboutTitle: '关于我',
  aboutBody:
    '热爱 Web 与工具链，关注性能与体验。这个站点使用 Vite + TypeScript 构建，部署在 GitHub Pages，样式采用玻璃拟态与 Bento 布局，便于后续扩展更多区块或接入框架。',
  statusLabel: '当前状态',
  statusText: '正在迭代个人主页与开源小项目',
  skillsTitle: '技术栈',
  skills: [
    'TypeScript',
    'Vite',
    'Web APIs',
    'GitHub Actions',
    'CSS Grid',
    'Responsive UI',
  ],
  bentoNoteTitle: '可扩展',
  bentoNoteBody:
    '区块拆分为独立模块，数据集中管理。需要博客或国际化时，可在此结构上继续演进。',
  projectsTitle: '精选项目',
  projectsLead: '占位示例：替换为你的真实仓库与演示链接。',
  projects: [
    {
      title: '个人主页',
      description: '本站点源码：Vite 单页、GitHub Actions 部署。',
      tags: ['Vite', 'GitHub Pages', 'TS'],
      href: 'https://valizpg.github.io',
      sourceHref: 'https://github.com/valizpg/valizpg.github.io',
    },
    {
      title: '你的下一个项目',
      description: '在这里写一句项目简介，附上截图或动图会更吸睛。',
      tags: ['Placeholder'],
      href: 'https://github.com/valizpg',
    },
  ],
  contactTitle: '联系',
  email: 'hello@example.com',
  primaryCta: { label: '查看作品', href: '#projects' },
  secondaryCta: { label: 'GitHub', href: 'https://github.com/valizpg' },
  social: [
    { label: 'GitHub', href: 'https://github.com/valizpg', icon: 'GH' },
    { label: 'Email', href: 'mailto:hello@example.com', icon: '@' },
  ],
}
