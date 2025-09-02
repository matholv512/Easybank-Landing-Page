import { Articles } from '../components/articles-section/articles'
import { Feature } from '../components/feature-section/feature'
import { Hero } from '../components/hero-section/hero'

export function Home() {
  return (
    <>
      <Hero /> <Feature /> <Articles />
    </>
  )
}
