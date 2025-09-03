import { useEffect, useRef, useState } from 'react'
import { useWindowSize } from './use-window-size'

export function useInView<T extends HTMLElement>(threshold?: number) {
  const ref = useRef<T | null>(null)
  const [isVisible, setIsVisible] = useState(false)
  const { width } = useWindowSize()
  const isDesktopSize = width >= 1024

  if (!threshold) {
    threshold = isDesktopSize ? 0.5 : 0.2
  }

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => setIsVisible(entry.isIntersecting),
      {
        threshold,
      },
    )

    if (ref.current) observer.observe(ref.current)

    return () => observer.disconnect()
  }, [threshold])

  return { ref, isVisible }
}
