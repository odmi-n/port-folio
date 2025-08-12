"use client"

import { useLanguage } from "../contexts/LanguageContext"
import { ChevronDown } from "lucide-react"

export default function HeroSection() {
  const { t } = useLanguage()

  const scrollToCareer = () => {
    const element = document.getElementById("career")
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <section id="home" className="min-h-screen bg-black text-white flex items-center justify-center">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="space-y-8">
          <div className="space-y-4">
            <h2 className="text-lg sm:text-xl text-gray-300 font-medium">
              {t("hero.name")} | {t("hero.title")}
            </h2>
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight">
              {t("hero.catchCopy")}
            </h1>
            <p className="text-lg sm:text-xl text-gray-300 max-w-2xl mx-auto font-normal">{t("hero.intro")}</p>
          </div>

          <button
            onClick={scrollToCareer}
            className="inline-flex items-center space-x-2 text-white hover:text-gray-300 transition-colors group font-medium"
          >
            <span>詳しく見る</span>
            <ChevronDown size={20} className="group-hover:translate-y-1 transition-transform" />
          </button>
        </div>
      </div>
    </section>
  )
}
