import type { ComponentProps } from 'react'
import { twMerge } from 'tailwind-merge'

interface PrimaryButtonProps extends ComponentProps<'button'> {
  label: string
  className?: string
}

export function PrimaryButton({
  label,
  className,
  ...rest
}: PrimaryButtonProps) {
  return (
    <button
      className={twMerge(
        'px-8 py-3 text-sm font-bold bg-gradient-to-r from-primary-lime-green to-primary-bright-cyan rounded-4xl hover:cursor-pointer text-neutral-very-light-gray hover:brightness-105 active:brightness-125 xxl:text-lg',
        className,
      )}
      {...rest}
    >
      {label}
    </button>
  )
}
