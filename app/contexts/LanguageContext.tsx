"use client"

import type React from "react"
import { createContext, useContext, useState, useEffect } from "react"

type Language = "ja" | "en"

interface LanguageContextType {
  language: Language
  setLanguage: (lang: Language) => void
  t: (key: string) => string
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined)

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguage] = useState<Language>("ja")
  const [translations, setTranslations] = useState<Record<string, any>>({})

  useEffect(() => {
    const loadTranslations = async () => {
      try {
        const response = await fetch(`/api/translations?lang=${language}`)
        const data = await response.json()
        setTranslations(data)
      } catch (error) {
        console.error("Failed to load translations:", error)
      }
    }

    loadTranslations()
  }, [language])

  const t = (key: string): string => {
    const keys = key.split(".")
    let value = translations

    for (const k of keys) {
      value = value?.[k]
    }

    return value || key
  }

  return <LanguageContext.Provider value={{ language, setLanguage, t }}>{children}</LanguageContext.Provider>
}

export function useLanguage() {
  const context = useContext(LanguageContext)
  if (context === undefined) {
    throw new Error("useLanguage must be used within a LanguageProvider")
  }
  return context
}
