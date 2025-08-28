import { MENU_LINKS } from '../constants'

export function DesktopNav() {
  return (
    <nav className="flex h-full gap-x-4 lg:gap-x-6 xl:gap-x-7">
      {MENU_LINKS.map(({ href, label }) => (
        <ul
          key={label}
          className="relative flex items-center text-sm transition duration-300 group text-neutral-grayish-blue hover:text-primary-dark-blue xxl:text-base"
        >
          <li>
            <a href={href}>{label}</a>
            <span className="absolute bottom-0 left-0 h-1 min-w-full transition-transform duration-300 origin-center scale-x-0 bg-gradient-to-r from-primary-lime-green to-primary-bright-cyan group-hover:scale-x-100" />
          </li>
        </ul>
      ))}
    </nav>
  )
}
