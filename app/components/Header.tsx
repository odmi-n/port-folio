"use client"

import { useState } from "react"
import { useLanguage } from "../contexts/LanguageContext"
import { Menu, X, Github } from "lucide-react"

export default function Header() {
  const { language, setLanguage, t } = useLanguage()
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
    setIsMenuOpen(false)
  }

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white border-b border-gray-200">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* ロゴ/サイト名 */}
          <div className="flex-shrink-0">
            <button
              onClick={() => scrollToSection("home")}
              className="text-xl font-bold text-black hover:text-gray-600 transition-colors"
            >
              {t("hero.name")}
            </button>
          </div>

          {/* デスクトップナビゲーション */}
          <nav className="hidden md:flex items-center space-x-8">
            <button
              onClick={() => scrollToSection("career")}
              className="text-black hover:text-gray-600 transition-colors"
            >
              {t("nav.career")}
            </button>
            <button
              onClick={() => scrollToSection("contact")}
              className="text-black hover:text-gray-600 transition-colors"
            >
              {t("nav.contact")}
            </button>

            {/* 言語切替 */}
            <div className="flex items-center space-x-2">
              <button
                onClick={() => setLanguage("ja")}
                className={`${
                  language === "ja" ? "text-black font-semibold" : "text-gray-400"
                } hover:text-black transition-colors`}
              >
                JP
              </button>
              <span className="text-gray-300">|</span>
              <button
                onClick={() => setLanguage("en")}
                className={`${
                  language === "en" ? "text-black font-semibold" : "text-gray-400"
                } hover:text-black transition-colors`}
              >
                EN
              </button>
            </div>

            {/* SNSアイコン */}
            <div className="flex items-center space-x-4">
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-black hover:text-gray-600 transition-colors"
                aria-label="GitHub"
              >
                <Github size={20} />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-black hover:text-gray-600 transition-colors"
                aria-label="X (Twitter)"
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                </svg>
              </a>
            </div>
          </nav>

          {/* モバイルメニューボタン */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden text-black hover:text-gray-600 transition-colors"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* モバイルメニュー */}
        {isMenuOpen && (
          <div className="md:hidden bg-white border-t border-gray-200">
            <div className="px-2 pt-2 pb-3 space-y-1">
              <button
                onClick={() => scrollToSection("career")}
                className="block w-full text-left px-3 py-2 text-black hover:text-gray-600 transition-colors"
              >
                {t("nav.career")}
              </button>
              <button
                onClick={() => scrollToSection("contact")}
                className="block w-full text-left px-3 py-2 text-black hover:text-gray-600 transition-colors"
              >
                {t("nav.contact")}
              </button>

              {/* 言語切替 */}
              <div className="flex items-center space-x-2 px-3 py-2">
                <button
                  onClick={() => setLanguage("ja")}
                  className={`${
                    language === "ja" ? "text-black font-semibold" : "text-gray-400"
                  } hover:text-black transition-colors`}
                >
                  JP
                </button>
                <span className="text-gray-300">|</span>
                <button
                  onClick={() => setLanguage("en")}
                  className={`${
                    language === "en" ? "text-black font-semibold" : "text-gray-400"
                  } hover:text-black transition-colors`}
                >
                  EN
                </button>
              </div>

              {/* SNSアイコン */}
              <div className="flex items-center space-x-4 px-3 py-2">
                <a
                  href="https://github.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-black hover:text-gray-600 transition-colors"
                  aria-label="GitHub"
                >
                  <Github size={20} />
                </a>
                <a
                  href="https://twitter.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-black hover:text-gray-600 transition-colors"
                  aria-label="X (Twitter)"
                >
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  )
}
