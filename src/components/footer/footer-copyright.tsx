import { PrimaryButton } from '../shared/button/primary-button'

export function FooterCopyright() {
  return (
    <div className="text-center flex flex-col items-center space-y-5 md:items-end">
      <PrimaryButton label="Request Invite" className="w-[10.1rem]" />
      <small className="text-neutral-grayish-blue text-sm">
        © Easybank. All Rights Reserved
      </small>
    </div>
  )
}
