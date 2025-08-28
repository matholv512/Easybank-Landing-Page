import { PrimaryButton } from '../shared/button/primary-button'

export function FooterCopyright() {
  return (
    <div className="flex flex-col items-center space-y-5 text-center md:items-end">
      <PrimaryButton label="Request Invite" />
      <small className="text-sm text-neutral-grayish-blue">
        © Easybank. All Rights Reserved
      </small>
    </div>
  )
}
