import type { ComponentProps, ReactNode } from 'react'
import { twMerge } from 'tailwind-merge'
import { CONTAINER } from './constants'

type PaddingXOptions = keyof typeof CONTAINER.paddingX

interface ContainerProps extends ComponentProps<'div'> {
  children: ReactNode
  className?: string
  paddingX?: {
    base: PaddingXOptions
    sm?: PaddingXOptions
    md?: PaddingXOptions
    lg?: PaddingXOptions
    xl?: PaddingXOptions
  }
}

export function Container({
  children,
  className,
  paddingX = { base: 'px' },
  ...rest
}: ContainerProps) {
  const breakpoints = ['base', 'sm', 'md', 'lg', 'xl'] as const

  const paddingXClasses = breakpoints.map((bp) => {
    const key = paddingX[bp] ?? paddingX.base
    return CONTAINER.paddingX[key][bp]
  })

  return (
    <div
      className={twMerge('mx-auto w-full', paddingXClasses, className)}
      {...rest}
    >
      {children}
    </div>
  )
}
