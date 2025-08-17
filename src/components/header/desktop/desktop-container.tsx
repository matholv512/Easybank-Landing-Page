import { PrimaryButton } from '../../shared/button/primary-button'
import { Container } from '../../shared/container/container'
import { LogoLink } from '../../shared/logo/logo-link'
import { DesktopNav } from './desktop-nav'

export function DesktopContainer() {
  return (
    <Container className="items-center justify-between hidden md:flex size-full">
      <LogoLink variant="default" />

      <DesktopNav />

      <PrimaryButton label="Request Invite" />
    </Container>
  )
}
