import Header from "../components/Header"
import ContactSection from "../components/ContactSection"
import Footer from "../components/Footer"

export default function Contact() {
  return (
    <main className="min-h-screen">
      <Header />
      <div className="pt-16">
        <ContactSection />
      </div>
      <Footer />
    </main>
  )
}
