import { Container } from '../shared/container/container'
import { ARTICLES_ITEMS } from './constants'

export function Articles() {
  return (
    <section className="w-full py-16 bg-neutral-very-light-gray md:py-28">
      <Container>
        <div className="pb-8 md:pb-10 xl:pb-14">
          <h2 className="text-[1.9rem] leading-9 text-primary-dark-blue font-thin sm:text-[2rem] xl:text-[2.4rem] text-center md:text-start">
            Latest Articles
          </h2>
        </div>

        <ul className="grid grid-cols-1 gap-y-5 md:gap-9 md:grid-cols-2 lg:grid-cols-4">
          {ARTICLES_ITEMS.map(({ title, author, image, paragraph }) => (
            <li
              key={title}
              className="max-w-xs m-auto bg-white rounded-md size-full md:m-0 md:max-w-[330px] hover:shadow-lg hover:shadow-neutral-light-grayish-blue"
            >
              <a href="#">
                <img
                  src={image.src}
                  alt={image.alt}
                  className="w-full h-[200px] bg-cover rounded-t-md bg-center"
                />
                <div className="flex flex-col gap-2 p-8 xl:gap-5">
                  <span className="text-[0.55rem] text-neutral-grayish-blue xl:text-xs">
                    {author}
                  </span>
                  <h3 className="font-thin leading-6 text-primary-dark-blue xxl:text-[1.5rem]">
                    {title}
                  </h3>
                  <p className="text-[0.8rem] xxl:text-[1rem] text-neutral-grayish-blue line-clamp-3">
                    {paragraph}
                  </p>
                </div>
              </a>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  )
}
