import Navbar from './components/Navbar'
import Hero from './components/Hero'
import SocialProof from './components/SocialProof'
import Features from './components/Features'
import CommandConsole from './components/CommandConsole'
import BlinkSimulator from './components/BlinkSimulator'
import ScienceSection from './components/ScienceSection'
import ProgressionDashboard from './components/ProgressionDashboard'
import TechSpecs from './components/TechSpecs'
import Footer from './components/Footer'
import GridBackground from './components/GridBackground'

function App() {
  return (
    <>
      <GridBackground />
      <Navbar />
      <main>
        <Hero />
        <SocialProof />
        <Features />
        <CommandConsole />
        <BlinkSimulator />
        <ScienceSection />
        <ProgressionDashboard />
        <TechSpecs />
      </main>
      <Footer />
    </>
  )
}

export default App
