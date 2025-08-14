import { icons } from '../../../assets'
import { Container } from '../../shared/container/container'
import { LogoLink } from '../logo-link'

interface MobileContainerProps {
  open: boolean
  setOpen: React.Dispatch<React.SetStateAction<boolean>>
}

export function MobileContainer({ open, setOpen }: MobileContainerProps) {
  return (
    <Container className="flex items-center justify-between size-full md:hidden">
      <LogoLink />

      <button
        onClick={() => setOpen((prev) => !prev)}
        aria-label={open ? 'close menu button' : 'open menu button'}
      >
        <img
          src={open ? icons.close : icons.hamburger}
          alt=""
          aria-hidden="true"
        />
      </button>
    </Container>
  )
}
