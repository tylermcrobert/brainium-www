import { useEffect, useRef } from 'react'
import ResizeObserver from 'resize-observer-polyfill'

const useRadius = (radius: number) => {
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const ro = new ResizeObserver(entries => {
      const {
        contentRect: { width, height },
        target,
      } = entries[0]
      const smallestEdge = Math.min(width, height)
      const divRadius = smallestEdge * (radius / 100)
      const div = target as HTMLDivElement

      div.style.borderRadius = `${divRadius}px`
    })

    if (ref.current) {
      ro.observe(ref.current)
    }
  }, [])

  return ref
}

export default useRadius
