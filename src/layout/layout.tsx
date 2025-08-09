import type { ReactNode } from 'react'
import { Header } from '../components/header/header'
import { Footer } from '../components/footer/footer'

export function Layout({ children }: { children: ReactNode }) {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main>{children}</main>
      <Footer />
    </div>
  )
}
