import { FOOTER_LINKS } from './constants'

export function FooterLinks() {
  return (
    <ul className="grid gap-y-4 py-10 md:py-0 md:grid-cols-2 md:gap-y-3 md:place-items-start">
      {FOOTER_LINKS.map(({ href, label }) => (
        <li
          key={label}
          className="text-center text-white md:text-start text-sm hover:text-primary-lime-green"
        >
          <a href={href}>{label}</a>
        </li>
      ))}
    </ul>
  )
}
