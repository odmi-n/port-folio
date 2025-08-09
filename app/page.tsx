import Header from "./components/Header"
import HeroSection from "./components/HeroSection"
import CareerSection from "./components/CareerSection"
import ContactSection from "./components/ContactSection"
import Footer from "./components/Footer"

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <HeroSection />
      <CareerSection />
      <ContactSection />
      <Footer />
    </main>
  )
}
