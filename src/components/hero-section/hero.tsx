import { backgrounds, images } from '../../assets'
import { PrimaryButton } from '../shared/button/primary-button'
import { Container } from '../shared/container/container'

export function Hero() {
  return (
    <section className="grid grid-cols-1 grid-rows-[305px_365px] md:grid-cols-12 md:grid-rows-[655px] md:items-center">
      <Container
        paddingX={{ base: 'px', md: 'pl' }}
        className="text-center md:text-start space-y-[15px] w-full order-2 md:order-1 md:col-span-6 min-[375px]:mt-4 min-[390px]:mt-8 sm:mt-10 xl:min-w-full"
      >
        <h1 className="text-[2.3rem] min-[375px]:text-[2.5rem] md:text-[2.8rem] xl:text-[3.2rem] xxl:text-[3.8rem] xl:leading-16 leading-12 text-primary-dark-blue font-thin">
          Next generation digital banking
        </h1>
        <p className="text-sm leading-6 text-neutral-grayish-blue md:text-base xxl:text-lg xxl:leading-normal max-w-[500px]">
          Take your financial life online. Your Easybank account will be a
          one-stop-shop for spending, saving, budgeting, investing, and much
          more.
        </p>
        <PrimaryButton label="Request Invite" className="mt-5" />
      </Container>

      <div className="order-1 md:overflow-hidden md:order-2 md:col-span-6 md:size-full">
        <div className="h-full md:hidden">
          <img
            src={backgrounds.introMobile}
            alt=""
            role="presentation"
            className="object-cover object-center size-full"
          />
        </div>

        <div className="hidden -translate-x-10 -translate-y-62 size-full md:block">
          <img
            src={backgrounds.introDesktop}
            alt=""
            role="presentation"
            className="object-cover object-top-left min-w-[1271px] h-auto"
          />
        </div>
        <div className="absolute w-[95%] -top-[68px] sm:-top-[62px] max-w-[375px] left-1/2 -translate-x-1/2 md:w-full md:translate-x-24 lg:translate-x-32 md:-top-8 md:max-w-none">
          <img src={images.mockups} alt="" role="presentation" />
        </div>
      </div>
    </section>
  )
}
