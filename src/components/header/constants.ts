export const HEADER = {
  height: {
    base: 'h-[var(--header-h-base)]',
    sm: 'sm:h-[var(--header-h-sm)]',
    md: 'md:h-[var(--header-h-md)]',
    lg: 'lg:h-[var(--header-h-lg)]',
    xl: 'xl:h-[var(--header-h-xl)]',
  },
} as const

export const MOBILE_NAV = {
  height: {
    base: 'h-[calc(100vh-(var(--header-h-base)))]',
    sm: 'sm:h-[calc(100vh-(var(--header-h-sm)))]',
    md: 'md:h-[calc(100vh-(var(--header-h-md)))]',
    lg: 'lg:h-[calc(100vh-(var(--header-h-lg)))]',
    xl: 'xl:h-[calc(100vh-(var(--header-h-xl)))]',
  },
} as const

export const MENU_LINKS: { href: string; label: string }[] = [
  { href: '/', label: 'Home' },
  { href: '#', label: 'About' },
  { href: '#', label: 'Contact' },
  { href: '#', label: 'Blog' },
  { href: '#', label: 'Careers' },
]
