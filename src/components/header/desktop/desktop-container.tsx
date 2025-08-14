import { logos } from '../../../assets'
import { PrimaryButton } from '../../shared/button/primary-button'
import { Container } from '../../shared/container/container'
import { DesktopNav } from './desktop-nav'

export function DesktopContainer() {
  return (
    <Container className="items-center justify-between hidden md:flex size-full">
      <a href="/">
        <img src={logos.default} alt="Easy Bank Logo" />
      </a>

      <DesktopNav />

      <PrimaryButton label="Request Invite" />
    </Container>
  )
}
