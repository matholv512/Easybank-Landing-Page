import type { ReactNode } from 'react'
import { Header } from '../components/header/header'
import { Footer } from '../components/footer/footer'

export function Layout({ children }: { children: ReactNode }) {
  return (
    <div className="relative flex flex-col w-screen max-w-full overflow-hidden font-sans bg-neutral-very-light-gray scroll-smooth">
      <Header />
      <main className="flex-1 max-w-[1920px] m-auto">{children}</main>
      <Footer />
    </div>
  )
}
