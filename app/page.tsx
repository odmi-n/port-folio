import Header from "./components/Header"
import HeroSection from "./components/HeroSection"
import ImageSection from "./components/ImageSection"
import Footer from "./components/Footer"

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <HeroSection />
      <ImageSection />
      <Footer />
    </main>
  )
}
