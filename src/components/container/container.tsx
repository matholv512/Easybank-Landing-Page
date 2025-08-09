import type { ComponentProps, ReactNode } from 'react'
import { twMerge } from 'tailwind-merge'
import { CONTAINER_PADDING } from './constants'

interface ContainerProps extends ComponentProps<'div'> {
  children: ReactNode
  className?: string
  padding?: string
}

export function Container({
  children,
  className,
  padding = `${CONTAINER_PADDING.base} ${CONTAINER_PADDING.md} ${CONTAINER_PADDING.lg} ${CONTAINER_PADDING.xl}`,
  ...rest
}: ContainerProps) {
  return (
    <div className={twMerge('mx-auto w-full', padding, className)} {...rest}>
      {children}
    </div>
  )
}
