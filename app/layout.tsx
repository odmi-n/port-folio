import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { LanguageProvider } from "./contexts/LanguageContext"
import LoadingBar from "./components/LoadingBar"

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" })

export const metadata: Metadata = {
  title: "Portfolio | フルスタックエンジニア",
  description: "要件定義からPM、デザインまで。AIと共に実装する爆速エンジニア",
  openGraph: {
    title: "Portfolio | フルスタックエンジニア",
    description: "要件定義からPM、デザインまで。AIと共に実装する爆速エンジニア",
    type: "website",
  },
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ja" className="scroll-smooth">
      <body className={`${inter.variable} font-sans antialiased`}>
        <LoadingBar />
        <LanguageProvider>{children}</LanguageProvider>
      </body>
    </html>
  )
}
