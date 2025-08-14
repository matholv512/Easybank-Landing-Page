import { logos } from '../../assets'

export function LogoLink() {
  return (
    <a href="/">
      <img src={logos.default} alt="Easy Bank logo" />
    </a>
  )
}
