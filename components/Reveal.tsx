'use client'

import { useEffect, useRef } from 'react'

interface RevealProps {
  children: React.ReactNode
  direction?: 'up' | 'left'
  delay?: 'd1' | 'd2' | 'd3'
  className?: string
}

export default function Reveal({ children, direction = 'up', delay, className = '' }: RevealProps) {
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.classList.add('vis')
          obs.unobserve(el)
        }
      },
      { threshold: 0.1 }
    )

    obs.observe(el)
    return () => obs.disconnect()
  }, [])

  const baseClass = direction === 'left' ? 'reveal-l' : 'reveal'
  const delayClass = delay ? ` ${delay}` : ''

  return (
    <div ref={ref} className={`${baseClass}${delayClass}${className ? ` ${className}` : ''}`}>
      {children}
    </div>
  )
}
