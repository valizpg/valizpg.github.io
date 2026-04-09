/** 滚动进入视口时的淡入上浮 */
export function initRevealMotion(root: ParentNode = document): void {
  const nodes = root.querySelectorAll<HTMLElement>('[data-reveal]')
  if (nodes.length === 0) return

  const io = new IntersectionObserver(
    (entries) => {
      for (const e of entries) {
        if (!e.isIntersecting) continue
        e.target.classList.add('is-visible')
        io.unobserve(e.target)
      }
    },
    { threshold: 0.12, rootMargin: '0px 0px -8% 0px' },
  )

  for (const el of nodes) io.observe(el)
}
