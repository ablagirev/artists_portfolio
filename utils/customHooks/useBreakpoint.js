import { useState, useEffect } from 'react'

import { theme } from '@mtsbank/ui-kit'
import { debounce } from 'utils/debounce'

const TIMER_DELAY = 1000

export const useBreakpoint = () => {
  const [size, setSize] = useState(window.innerWidth)
  const breakpoint = theme.breakpoints.tablet
  const isMobile = size < breakpoint

  useEffect(() => {
    const handleSetSize = () => {
      const currentSize = window.innerWidth
      const isMobileChanged = size < breakpoint && currentSize > breakpoint
      const isDesktopChanged = size > breakpoint && currentSize < breakpoint

      if (isMobileChanged || isDesktopChanged) {
        setSize(currentSize)
      }
    }

    const handleResize = debounce(handleSetSize, TIMER_DELAY)

    window.addEventListener('resize', handleResize)

    return () => {
      window.removeEventListener('resize', handleResize)
    }
  })

  return { isMobile }
}
