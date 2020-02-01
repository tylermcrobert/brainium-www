import { useEffect, useRef } from 'react'

const useRadius = (radius: number) => {
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const getCorner = () => {
      if (ref.current) {
        // get radius from edge
        const { width, height } = ref.current.getBoundingClientRect()
        const smallestEdge = Math.min(width, height)
        const divRadius = smallestEdge * (radius / 100)

        // set radius
        ref.current.style.borderRadius = `${divRadius}px`
      }
    }

    getCorner()

    window.addEventListener('resize', getCorner)

    return () => {
      window.removeEventListener('resize', getCorner)
    }
  }, [])

  return ref
}

export default useRadius
