import { Container } from '../shared/container/container'
import { LogoLink } from '../shared/logo/logo-link'
import { FooterCopyright } from './footer-copyright'
import { FooterCredits } from './footer-credits'
import { FooterIcons } from './footer-icons'
import { FooterLinks } from './footer-links'

export function Footer() {
  return (
    <footer className="py-10 xl:py-12 bg-primary-dark-blue min-h-[220px]">
      <Container className="flex flex-col items-center md:flex-row md:justify-between md:items-start max-w-[1920px]">
        <div className="md:flex gap-x-14 lg:gap-x-24 xl:gap-x-32">
          <div className="flex flex-col items-center md:items-start">
            <LogoLink variant="white" />

            <FooterIcons />
          </div>

          <FooterLinks />
        </div>

        <FooterCopyright />
      </Container>

      <FooterCredits />
    </footer>
  )
}
