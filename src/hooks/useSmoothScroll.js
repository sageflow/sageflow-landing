import { useCallback } from 'react'

export const useSmoothScroll = (offset = 80) => {
  const scrollTo = useCallback((targetId) => {
    const targetElement = document.getElementById(targetId)
    if (!targetElement) {
      console.warn(`Element with id "${targetId}" not found`)
      return
    }

    const targetPosition = targetElement.offsetTop - offset
    
    // Use native smooth scrolling if supported, otherwise fallback to manual implementation
    if ('scrollBehavior' in document.documentElement.style) {
      window.scrollTo({
        top: targetPosition,
        behavior: 'smooth'
      })
    } else {
      // Fallback for older browsers
      const startPosition = window.pageYOffset
      const distance = targetPosition - startPosition
      const duration = 800
      let start = null

      const step = (timestamp) => {
        if (!start) start = timestamp
        const progress = timestamp - start
        const progressPercentage = Math.min(progress / duration, 1)
        
        // Easing function
        const ease = progressPercentage < 0.5 
          ? 2 * progressPercentage * progressPercentage 
          : -1 + (4 - 2 * progressPercentage) * progressPercentage

        window.scrollTo(0, startPosition + distance * ease)

        if (progress < duration) {
          requestAnimationFrame(step)
        }
      }

      requestAnimationFrame(step)
    }
  }, [offset])

  const handleLinkClick = useCallback((event, targetId) => {
    event.preventDefault()
    scrollTo(targetId)
  }, [scrollTo])

  return { scrollTo, handleLinkClick }
}
