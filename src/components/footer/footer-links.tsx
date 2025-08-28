import { FOOTER_LINKS } from './constants'

export function FooterLinks() {
  return (
    <ul className="grid py-10 gap-y-4 md:py-0 md:grid-cols-2 md:gap-y-3 md:place-items-start">
      {FOOTER_LINKS.map(({ href, label }) => (
        <li
          key={label}
          className="text-sm text-center text-white md:text-start hover:text-primary-lime-green xxl:text-base"
        >
          <a href={href}>{label}</a>
        </li>
      ))}
    </ul>
  )
}
