import { FOOTER_ICONS } from './constants'

export function FooterIcons() {
  return (
    <ul className="flex items-center justify-center mt-8 gap-x-4 md:mt-10 md:gap-x-3">
      {FOOTER_ICONS.map(({ src, alt }) => (
        <li key={src}>
          <img
            src={src}
            alt={alt}
            className="w-6 h-6 cursor-pointer md:w-5 md:h-5 xxl:w-7 xxl:h-7"
          />
        </li>
      ))}
    </ul>
  )
}
