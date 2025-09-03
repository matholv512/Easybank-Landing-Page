import { useInView } from '../../hooks/use-in-view'
import { Container } from '../shared/container/container'
import { FEATURE_ITEMS } from './constants'

export function Feature() {
  const { ref, isVisible } = useInView<HTMLUListElement>()

  return (
    <section className="py-16 bg-neutral-light-grayish-blue md:py-28">
      <Container className="md:space-y-[70px] text-center md:text-start">
        <div
          className={`space-y-5 pb-14 md:space-y-7 max-w-[620px] transition-all duration-700 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`}
        >
          <h2 className="text-[1.9rem] leading-9 text-primary-dark-blue font-thin sm:text-[2rem] xl:text-[2.4rem]">
            Why choose Easybank?
          </h2>
          <p className="text-sm text-neutral-grayish-blue leading-6 md:text-[1rem] xl:text-[1.1rem] max-w-[255px] m-auto md:m-0 md:max-w-full">
            We leverage Open Banking to turn your bank account into your
            financial hub. Control your finances like never before.
          </p>
        </div>

        <ul
          ref={ref}
          className="grid grid-cols-1 place-items-center md:place-items-start gap-9 md:grid-cols-2 lg:grid-cols-4"
        >
          {FEATURE_ITEMS.map(({ icon, paragraph, title }) => (
            <li
              key={title}
              className={`max-w-[255px] flex flex-col gap-y-5 md:gap-y-7 xl:gap-y-9
        transition-all duration-700 hover:scale-105
        ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}
      `}
            >
              <img
                src={icon.src}
                alt={icon.alt}
                className="m-auto md:m-0 max-w-[70px]"
              />
              <h3 className="text-primary-dark-blue font-thin text-[1.2rem] sm:text-[1.3rem] xl:text-[1.5rem]">
                {title}
              </h3>
              <p className="text-sm text-neutral-grayish-blue leading-6 sm:text-[0.95rem]">
                {paragraph}
              </p>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  )
}
