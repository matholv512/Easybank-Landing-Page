import { twMerge } from 'tailwind-merge'
import { MenuLinks, MOBILE_NAV } from '../constants'

export function MobileNav({ open }: { open: boolean }) {
  return (
    <nav
      className={twMerge(
        'bg-black/50 fixed w-full transition-opacity duration-300 md:opacity-0 md:pointer-events-none',
        Object.values(MOBILE_NAV.height),
        open
          ? 'opacity-100 pointer-events-auto'
          : 'opacity-0 pointer-events-none',
      )}
    >
      <div className="flex flex-col items-center gap-5 py-7 m-6 bg-white rounded-sm text-lg text-primary-dark-blue">
        {MenuLinks.map(({ label, href }) => (
          <a key={label} href={href}>
            {label}
          </a>
        ))}
      </div>
    </nav>
  )
}
