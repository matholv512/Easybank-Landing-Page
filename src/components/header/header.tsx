import { useState } from 'react'
import { HEADER } from './constants'
import { twMerge } from 'tailwind-merge'
import { MobileContainer } from './mobile/mobile-container'
import { MobileNav } from './mobile/mobile-nav'
import { DesktopContainer } from './desktop/desktop-container'

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header
      className={twMerge(
        'sticky top-0 bg-white z-50',
        ...Object.values(HEADER.height),
      )}
    >
      <MobileContainer open={isMenuOpen} setOpen={setIsMenuOpen} />

      <MobileNav open={isMenuOpen} />

      <DesktopContainer />
    </header>
  )
}
