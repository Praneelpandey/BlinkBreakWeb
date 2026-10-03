import Nav from './components/Nav'
import Hero from './components/Hero'
import Ticker from './components/Ticker'
import HowItWorks from './components/HowItWorks'
import Features from './components/Features'
import BlinkLab from './components/BlinkLab'
import Science from './components/Science'
import Fleet from './components/Fleet'
import Specs from './components/Specs'
import DownloadCTA from './components/DownloadCTA'
import Footer from './components/Footer'

export default function App() {
  return (
    <>
      {/* ambient backdrop lives in CSS (body::before / ::after) */}
      <Nav />
      <main>
        <Hero />
        <Ticker />
        <HowItWorks />
        <Features />
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
