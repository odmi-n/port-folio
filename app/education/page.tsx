import Header from "../components/Header"
import EducationSection from "../components/EducationSection"
import Footer from "../components/Footer"

export default function Education() {
  return (
    <main className="min-h-screen">
      <Header />
      <div className="pt-16">
        <EducationSection />
      </div>
      <Footer />
    </main>
  )
}
