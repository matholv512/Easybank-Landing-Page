import type { ComponentProps } from 'react'

interface PrimaryButtonProps extends ComponentProps<'button'> {
  label: string
}

export function PrimaryButton({ label, ...rest }: PrimaryButtonProps) {
  return (
    <button
      className="px-8 py-3 text-sm font-bold bg-gradient-to-r from-primary-lime-green to-primary-bright-cyan rounded-4xl hover:cursor-pointer text-neutral-light-grayish-blue hover:brightness-105 active:brightness-125"
      {...rest}
    >
      {label}
    </button>
  )
}
