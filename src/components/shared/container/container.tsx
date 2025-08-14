import type { ComponentProps, ReactNode } from 'react'
import { twMerge } from 'tailwind-merge'
import { CONTAINER } from './constants'

interface ContainerProps extends ComponentProps<'div'> {
  children: ReactNode
  className?: string
  padding?: string
}

export function Container({
  children,
  className,
  padding = twMerge(...Object.values(CONTAINER.px)),
  ...rest
}: ContainerProps) {
  return (
    <div className={twMerge('mx-auto w-full', padding, className)} {...rest}>
      {children}
    </div>
  )
}
