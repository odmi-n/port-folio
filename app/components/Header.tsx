"use client"

import { useState } from "react"
import { useLanguage } from "../contexts/LanguageContext"
import { Menu, X, Github } from "lucide-react"
import Link from "next/link"
import { usePathname } from "next/navigation"

export default function Header() {
  const { language, setLanguage, t } = useLanguage()
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const pathname = usePathname()

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
    setIsMenuOpen(false)
  }

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-black border-b border-gray-800">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* ロゴ/サイト名 */}
          <div className="flex-shrink-0">
            <Link
              href="/"
              className="text-xl font-extrabold text-white hover:text-gray-300 transition-colors"
            >
              {t("hero.name")}
            </Link>
          </div>

          {/* デスクトップナビゲーション */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link
              href="/programming"
              className={`transition-colors ${
                pathname === "/programming" ? "text-white font-bold" : "text-gray-300 hover:text-white font-medium"
              }`}
            >
              Programming
            </Link>
            <Link
              href="/education"
              className={`transition-colors ${
                pathname === "/education" ? "text-white font-bold" : "text-gray-300 hover:text-white font-medium"
              }`}
            >
              Education
            </Link>
            <Link
              href="/about"
              className={`transition-colors ${
                pathname === "/about" ? "text-white font-bold" : "text-gray-300 hover:text-white font-medium"
              }`}
            >
              About
            </Link>
            <Link
              href="/contact"
              className={`transition-colors ${
                pathname === "/contact" ? "text-white font-bold" : "text-gray-300 hover:text-white font-medium"
              }`}
            >
              Contact
            </Link>

            {/* 言語切替 */}
            <div className="flex items-center space-x-2">
              <button
                onClick={() => setLanguage("ja")}
                className={`${
                  language === "ja" ? "text-white font-bold" : "text-gray-400 font-medium"
                } hover:text-white transition-colors`}
              >
                JP
              </button>
              <span className="text-gray-300">|</span>
              <button
                onClick={() => setLanguage("en")}
                className={`${
                  language === "en" ? "text-white font-bold" : "text-gray-400 font-medium"
                } hover:text-white transition-colors`}
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
                className="text-white hover:text-gray-300 transition-colors"
                aria-label="GitHub"
              >
                <Github size={20} />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-gray-300 transition-colors"
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
            className="md:hidden text-white hover:text-gray-300 transition-colors"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* モバイルメニュー */}
        {isMenuOpen && (
          <div className="md:hidden bg-black border-t border-gray-800">
            <div className="px-2 pt-2 pb-3 space-y-1">
              <Link
                href="/programming"
                onClick={() => setIsMenuOpen(false)}
                className={`block w-full text-left px-3 py-2 transition-colors ${
                  pathname === "/programming" ? "text-white font-bold" : "text-gray-300 hover:text-white font-medium"
                }`}
              >
                Programming
              </Link>
              <Link
                href="/education"
                onClick={() => setIsMenuOpen(false)}
                className={`block w-full text-left px-3 py-2 transition-colors ${
                  pathname === "/education" ? "text-white font-bold" : "text-gray-300 hover:text-white font-medium"
                }`}
              >
                Education
              </Link>
              <Link
                href="/about"
                onClick={() => setIsMenuOpen(false)}
                className={`block w-full text-left px-3 py-2 transition-colors ${
                  pathname === "/about" ? "text-white font-bold" : "text-gray-300 hover:text-white font-medium"
                }`}
              >
                About
              </Link>
              <Link
                href="/contact"
                onClick={() => setIsMenuOpen(false)}
                className={`block w-full text-left px-3 py-2 transition-colors ${
                  pathname === "/contact" ? "text-white font-bold" : "text-gray-300 hover:text-white font-medium"
                }`}
              >
                Contact
              </Link>

              {/* 言語切替 */}
              <div className="flex items-center space-x-2 px-3 py-2">
                <button
                  onClick={() => setLanguage("ja")}
                  className={`${
                    language === "ja" ? "text-white font-bold" : "text-gray-400 font-medium"
                  } hover:text-white transition-colors`}
                >
                  JP
                </button>
                <span className="text-gray-300">|</span>
                <button
                  onClick={() => setLanguage("en")}
                  className={`${
                    language === "en" ? "text-white font-bold" : "text-gray-400 font-medium"
                  } hover:text-white transition-colors`}
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
                  className="text-white hover:text-gray-300 transition-colors"
                  aria-label="GitHub"
                >
                  <Github size={20} />
                </a>
                <a
                  href="https://twitter.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white hover:text-gray-300 transition-colors"
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
