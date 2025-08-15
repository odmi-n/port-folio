"use client"

import { useLanguage } from "../contexts/LanguageContext"
import { ChevronDown } from "lucide-react"
import AnimatedCatchCopy from "./AnimatedCatchCopy"

export default function HeroSection() {
  const { t } = useLanguage()

  const scrollToAbout = () => {
    const element = document.getElementById("about")
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  // 翻訳が読み込まれているかチェック
  const isTranslationsLoaded = t("hero.name") !== "hero.name"

  return (
    <section id="home" className="min-h-screen bg-black text-white flex items-center justify-center">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {isTranslationsLoaded ? (
          <div className="space-y-8">
            <h2 className="text-lg sm:text-xl text-gray-300 font-medium">
              {t("hero.name")} | {t("hero.title")}
            </h2>
            <div className="my-12">
              <AnimatedCatchCopy />
            </div>
            <p className="text-lg sm:text-xl text-gray-300 max-w-2xl mx-auto font-normal">
              {t("hero.intro")}
            </p>
            <button
              onClick={scrollToAbout}
              className="inline-flex items-center space-x-2 text-white hover:text-gray-300 transition-colors group font-medium"
            >
              <span>詳しく見る</span>
              <ChevronDown size={20} className="group-hover:translate-y-1 transition-transform" />
            </button>
          </div>
        ) : (
          <div className="h-screen" /> // シンプルなローディング表示
        )}
      </div>
    </section>
  )
}
