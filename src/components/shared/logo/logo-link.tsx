import { logos } from '../../../assets'

interface LogoLinkProps {
  variant: 'default' | 'white'
}

export function LogoLink({ variant }: LogoLinkProps) {
  return (
    <a href="/">
      <img
        src={variant === 'default' ? logos.default : logos.white}
        alt="Easy Bank logo"
      />
    </a>
  )
}
