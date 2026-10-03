import Nav from './components/Nav'
import Hero from './components/Hero'
import Features from './components/Features'
import Flight from './components/Flight'
import Beyond from './components/Beyond'
import BlinkLab from './components/BlinkLab'
import Science from './components/Science'
import Fleet from './components/Fleet'
import Specs from './components/Specs'
import DownloadCTA from './components/DownloadCTA'
import Footer from './components/Footer'

export default function App() {
  return (
    <>
      <a className="skip-link" href="#main">Skip to content</a>
      <Nav />
      <main id="main">
        <Hero />
        <Features />
        <Flight />
        <Beyond />
        <BlinkLab />
        <Science />
        <Fleet />
        <Specs />
        <DownloadCTA />
      </main>
      <Footer />
    </>
  )
}
