import { twMerge } from 'tailwind-merge'
import { MENU_LINKS, MOBILE_NAV } from '../constants'

export function MobileNav({ open }: { open: boolean }) {
  return (
    <nav
      className={twMerge(
        'bg-black/50 fixed w-full md:opacity-0 md:hidden',
        ...Object.values(MOBILE_NAV.height),
        open
          ? 'opacity-100 pointer-events-auto'
          : 'opacity-0 pointer-events-none',
      )}
    >
      <ul
        className={`m-6 transition-all duration-700 bg-white rounded-sm py-7 ${open ? 'opacity-100 translate-0' : 'opacity-0 -translate-y-20'}`}
      >
        <li className="flex flex-col items-center gap-5 text-lg text-primary-dark-blue">
          {MENU_LINKS.map(({ label, href }) => (
            <a key={label} href={href}>
              {label}
            </a>
          ))}
        </li>
      </ul>
    </nav>
  )
}
