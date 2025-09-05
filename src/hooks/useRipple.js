import { useCallback } from 'react'

export const useRipple = () => {
  const createRipple = useCallback((event) => {
    const button = event.currentTarget
    const rect = button.getBoundingClientRect()
    const size = Math.max(rect.width, rect.height)
    const x = event.clientX - rect.left - size / 2
    const y = event.clientY - rect.top - size / 2
    
    const ripple = document.createElement('span')
    ripple.style.width = ripple.style.height = size + 'px'
    ripple.style.left = x + 'px'
    ripple.style.top = y + 'px'
    ripple.classList.add('ripple')
    
    // Ensure button has relative positioning for ripple effect
    const originalPosition = button.style.position
    if (!originalPosition || originalPosition === 'static') {
      button.style.position = 'relative'
    }
    
    button.appendChild(ripple)
    
    // Clean up after animation
    const cleanup = () => {
      if (ripple.parentNode) {
        ripple.parentNode.removeChild(ripple)
      }
    }
    
    ripple.addEventListener('animationend', cleanup)
    setTimeout(cleanup, 600) // Fallback cleanup
    
  }, [])

  return createRipple
}
