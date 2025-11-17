import { Header } from './components/header'
import { Hero } from './components//hero'
import { Features } from './components//features'
import { Story } from './components//story'
import { Security } from './components//security'
import { AppPreview } from './components//app-preview'
import { CTA } from './components//cta'
import { Footer } from './components//footer'

export default function Home() {
  return (
    <main className="min-h-screen overflow-hidden">
      <Header />
      <Hero />
      <Features />
      <Story />
      <AppPreview />
      <Security />
      <CTA />
      <Footer />
    </main>
  )
}
