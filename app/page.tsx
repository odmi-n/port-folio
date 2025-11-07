"use client"

import { Github, X, ChevronDown } from "lucide-react"
import { motion } from "framer-motion"
import Link from "next/link"
import TechStackSection from "@/app/components/TechStackSection"

const HERO_CONTENT = {
  // サイトのメインタイトルを入力してください
  labName: "Portfolio",
  // サイトのサブタイトルを入力してください
  subTitle: "ENGINEER | TAKUMI SUWA",
  // 自己紹介セクションのIDを指定してください
  aboutSectionId: "about",
}

const SKILLS = [
  "TypeScript",
  "Python",
  "React",
  "Next.js",
  "Tailwind CSS",
  "Node.js",
  "Django",
  "AWS",
  "GCP",
  "Docker",
  "Cloudflare",
]

const CAREER_TIMELINE = [
  {
    period: "2023.04 -",
    role: "株式会社WAOTECH | フロントエンドエンジニア",
    achievements: [
      "フロントエンジニアとして自社教育サービスの画面遷移やAPI連携の実装を担当しました。",
      "プログラミング教育にも携わり、中高生へ基礎的なPythonとDjangoの文法を教えています。"
    ],
  },
  {
    period: "2022-",
    role: "筑波大学 情報学群 知識情報・図書館学類",
    achievements: [

    ],
  },
]

export default function Home() {
  return (
    <main className="bg-gray-50 text-gray-800">
      <section className="relative min-h-screen flex flex-col items-center justify-center bg-gradient-to-b from-gray-100 to-teal-50 p-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
          className="text-center space-y-6"
        >
          <div className="space-y-4">
            <h1 className="text-6xl sm:text-7xl font-bold tracking-tight text-gray-900">
              {HERO_CONTENT.labName}
            </h1>
            <p className="text-xl sm:text-2xl text-gray-700">{HERO_CONTENT.subTitle}</p>
          </div>
          <div className="flex justify-center gap-6">
            <a
              href="https://github.com/odmi-n"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub profile"
              className="text-gray-600 transition-colors hover:text-gray-900"
            >
              <Github className="h-8 w-8" />
            </a>
            <a
              href="https://x.com/UNDERCONST"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="X profile"
              className="text-gray-600 transition-colors hover:text-gray-900"
            >
              <X className="h-8 w-8" />
            </a>
          </div>
          <Link
            href="/skill-sheet"
            className="mx-auto block max-w-lg rounded-2xl border border-gray-200 bg-white/80 px-8 py-6 text-left shadow-xl backdrop-blur transition-all duration-200 hover:-translate-y-1 hover:border-teal-400 hover:shadow-2xl focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-teal-500"
            aria-label="スキルシート（Skill Sheet）ページへ"
          >
            <p className="text-xs font-semibold uppercase tracking-[0.35em] text-teal-500">Skill Sheet</p>
            <p className="mt-2 text-2xl font-bold text-gray-900">スキルシートを見る</p>
            <p className="mt-2 text-sm text-gray-600">
              PDF保存を意識したモックのスキルシートを表示します。
            </p>
          </Link>
        </motion.div>
        <motion.a
          href={`#${HERO_CONTENT.aboutSectionId}`}
          animate={{ y: [0, -8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
          className="absolute bottom-10 inline-flex items-center justify-center w-16 h-16 rounded-full bg-white/50 backdrop-blur-sm shadow-lg"
          aria-label="Scroll to about section"
        >
          <ChevronDown className="w-8 h-8 text-gray-700" />
        </motion.a>
      </section>

      <section id={HERO_CONTENT.aboutSectionId} className="py-20 px-4 md:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="bg-white rounded-2xl shadow-lg p-8 md:p-12">
            <div className="text-center">
              <h2 className="text-4xl font-bold tracking-tight">About Me</h2>
              <div className="mt-2 h-1 w-20 bg-teal-500 mx-auto" />
            </div>
            <div className="mt-8 space-y-6 text-gray-600">
              <p>
                筑波大学 情報学群 在学中。
                <strong className="font-semibold text-teal-600">生成AI</strong>
                を用いた開発を行っており、素早く
                <strong className="font-semibold text-teal-600">Webアプリ</strong>
                の構築を行うことができます。APIを用いたスクレイピングや最適な処理で快適なサービスの構築を目指します。
              </p>
              <p>
                <strong className="font-semibold text-teal-600">要件定義</strong>
                から担当し、運用までを一括で行うことでプロダクトの最初から最後までお付き合いします。
              </p>
              <p>
                <strong className="font-semibold text-teal-600">モダンな技術</strong>
                が大好きです。
                <strong className="font-semibold text-teal-600">LINEのミニアプリ</strong>
                や<strong className="font-semibold text-teal-600">生成AI</strong>
                と一緒に何かを作ることを得意とします。（ちょっとだけバックの方が好きかも）
              </p>
            </div>
            <div className="mt-10 flex flex-wrap gap-3 justify-center">
              {SKILLS.map((skill) => (
                <span
                  key={skill}
                  className="rounded-lg bg-teal-500 px-4 py-2 text-sm font-medium text-white"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      <TechStackSection />

      <section className="bg-gray-100 py-20 px-4 md:px-8">
        <div className="max-w-7xl mx-auto space-y-12">
          <div className="space-y-3">
            <p className="text-sm uppercase tracking-[0.4em] text-gray-500">Career</p>
            <h2 className="text-3xl sm:text-4xl font-semibold">More About Me</h2>
            <p className="text-gray-500">
              経歴や関わったプロジェクトを時系列でまとめています。
            </p>
          </div>
          <div className="space-y-10">
            {CAREER_TIMELINE.map((career) => (
              <div key={`${career.period}-${career.role}`} className="grid gap-4 md:grid-cols-[180px_1fr] md:gap-8">
                <div>
                  <span className="text-sm uppercase tracking-[0.2em] text-teal-500">
                    {career.period}
                  </span>
                </div>
                <div className="space-y-3">
                  <h3 className="text-xl font-semibold text-gray-900">{career.role}</h3>
                  <ul className="space-y-2 text-sm text-gray-500">
                    {career.achievements.map((achievement, index) => (
                      <li key={index} className="flex gap-3">
                        <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-teal-500" />
                        <span className="leading-relaxed">{achievement}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <footer className="px-6 py-12 border-t border-gray-200">
        <div className="max-w-4xl mx-auto text-center text-xs text-gray-500">
          © {new Date().getFullYear()} odmi-n. All rights reserved.
        </div>
      </footer>
    </main>
  )
}
