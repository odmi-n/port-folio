import Header from "../components/Header"
import AboutSection from "../components/AboutSection"
import Footer from "../components/Footer"

export default function About() {
  return (
    <main className="min-h-screen">
      <Header />
      <div className="pt-16">
        <AboutSection />
      </div>
      <Footer />
    </main>
  )
}
