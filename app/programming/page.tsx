import Header from "../components/Header"
import ProgrammingSection from "../components/ProgrammingSection"
import Footer from "../components/Footer"

export default function Programming() {
  return (
    <main className="min-h-screen">
      <Header />
      <div className="pt-16">
        <ProgrammingSection />
      </div>
      <Footer />
    </main>
  )
}
