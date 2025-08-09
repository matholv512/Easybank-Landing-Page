import type { ReactNode } from 'react'

export function Layout({ children }: { children: ReactNode }) {
  return (
    <div className="flex flex-col">
      <header>header</header>
      <main>{children}</main>
      <footer>footer</footer>
    </div>
  )
}
