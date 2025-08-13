import { icons, logos } from '../../../assets'
import { Container } from '../../shared/container/container'

interface MobileContainerProps {
  open: boolean
  setOpen: React.Dispatch<React.SetStateAction<boolean>>
}

export function MobileContainer({ open, setOpen }: MobileContainerProps) {
  return (
    <Container className="flex items-center justify-between size-full md:hidden">
      <a href="/">
        <img src={logos.default} alt="Easy Bank logo" />
      </a>

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
