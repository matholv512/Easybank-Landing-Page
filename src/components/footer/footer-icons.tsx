import { FOOTER_ICONS } from './constants'

export function FooterIcons() {
  return (
    <ul className="flex justify-center items-center gap-x-4 mt-8 md:mt-10 md:gap-x-3">
      {FOOTER_ICONS.map(({ src, alt }) => (
        <li key={src}>
          <img
            src={src}
            alt={alt}
            className="cursor-pointer w-6 h-6 md:w-5 md:h-5"
          />
        </li>
      ))}
    </ul>
  )
}
