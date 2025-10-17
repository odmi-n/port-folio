"use client"

import React, { useState } from "react"
import {
  BrainCircuit,
  CodeXml,
  Database,
  Wrench,
  X,
  Star,
} from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"

const techStackData = [
  {
    category: "生成AI",
    icon: BrainCircuit,
    color: "from-purple-500 to-violet-600",
    textColor: "text-purple-600",
    skills: [
      {
        name: "生成AI × Webサービス開発",
        experience: "3年",
        level: 3,
        description:
          "生成AIを活用した開発を2022年から開始（例：LP動的生成 / 自動返信）",
      },
      {
        name: "OpenAI API",
        experience: "3年",
        level: 3,
        description: "生成AIを活用した開発を行っています。",
      },
      {
        name: "SNSコンテンツ自動運営",
        experience: "0.5年",
        level: 3,
        description: "AIによる投稿生成・DM自動対応・ユーザー対応自動化",
      },
      {
        name: "SNS運用",
        experience: "1年",
        level: 3,
        description: "情報運用, インプレッション数向上とエンゲージメントの向上",
      },
    ],
  },
  {
    category: "フロントエンド",
    icon: CodeXml,
    color: "from-blue-500 to-sky-600",
    textColor: "text-blue-600",
    skills: [
      {
        name: "TypeScript",
        experience: "3年",
        level: 3,
        description: "型安全なコードベースの構築",
      },
      {
        name: "React",
        experience: "3年",
        level: 3,
        description: "大規模なSPA開発、パフォーマンス最適化",
      },
      {
        name: "Next.js",
        experience: "3年",
        level: 3,
        description: "App Router, SSR, ISRを用いたWebサイト構築",
      },
      {
        name: "Tailwind CSS",
        experience: "2年",
        level: 3,
        description: "ユーティリティファーストなCSS設計",
      },
    ],
  },
  {
    category: "バックエンド",
    icon: Database,
    color: "from-green-500 to-emerald-600",
    textColor: "text-green-600",
    skills: [
      {
        name: "Python",
        experience: "3年",
        level: 3,
        description: "Django, FastAPIでのAPI開発",
      },
      {
        name: "Node.js",
        experience: "2年",
        level: 2,
        description: "Expressを用いたAPIサーバー開発",
      },
      {
        name: "Django",
        experience: "2年",
        level: 3,
        description: "Pythonを用いたWebアプリケーション開発",
      },
    ],
  },
  {
    category: "その他の使用技術",
    icon: Wrench,
    color: "from-orange-500 to-amber-600",
    textColor: "text-orange-600",
    skills: [
      {
        name: "AWS",
        experience: "2年",
        level: 2,
        description: "EC2, S3, Lambdaなどを用いたインフラ構築",
      },
      {
        name: "GCP",
        experience: "1年",
        level: 2,
        description: "Cloud Run, Firebaseなどを利用したサービス開発",
      },
      {
        name: "Docker",
        experience: "3年",
        level: 3,
        description: "コンテナ化による開発・本番環境の構築",
      },
      {
        name: "Cloudflare",
        experience: "1年",
        level: 2,
        description: "CDN, DNS, セキュリティ設定",
      },
    ],
  },
]

const StarRating = ({ level }: { level: number }) => (
  <div className="flex">
    {[...Array(3)].map((_, i) => (
      <Star
        key={i}
        className={`w-4 h-4 ${
          i < level ? "text-yellow-400" : "text-gray-300"
        }`}
        fill={i < level ? "currentColor" : "none"}
      />
    ))}
  </div>
)

const TechStackSection = () => {
  const [selectedCategory, setSelectedCategory] = useState<any>(null)

  return (
    <section className="py-20 px-4 md:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="bg-white rounded-2xl shadow-lg p-8 md:p-12">
          <h2 className="text-center text-3xl font-bold mb-12">技術スタック</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {techStackData.map((tech) => (
              <motion.div
                key={tech.category}
                className={`rounded-xl p-6 text-white bg-gradient-to-br ${tech.color} cursor-pointer`}
                onClick={() => setSelectedCategory(tech)}
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <tech.icon className="w-10 h-10 mb-4" />
                <h3 className="font-bold text-lg">{tech.category}</h3>
                <p className="text-sm opacity-80 mt-2">クリックして詳細を表示</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      <AnimatePresence>
        {selectedCategory && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/60 flex items-center justify-center p-4 z-50"
            onClick={() => setSelectedCategory(null)}
          >
            <motion.div
              initial={{ scale: 0.9, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.9, y: 20 }}
              transition={{ type: "spring", damping: 20, stiffness: 300 }}
              className="bg-gray-50 rounded-2xl shadow-2xl w-full max-w-4xl max-h-[90vh] overflow-y-auto"
              onClick={(e) => e.stopPropagation()}
            >
              <div
                className={`p-6 rounded-t-2xl bg-gradient-to-br ${selectedCategory.color} text-white flex justify-between items-center`}
              >
                <div className="flex items-center gap-4">
                  <selectedCategory.icon className="w-8 h-8" />
                  <h3 className="font-bold text-2xl">{selectedCategory.category}</h3>
                </div>
                <button onClick={() => setSelectedCategory(null)} className="p-1 rounded-full hover:bg-white/20 transition-colors">
                  <X className="w-6 h-6" />
                </button>
              </div>

              <div className="p-8">
                <div className="overflow-x-auto">
                  <table className="w-full text-left">
                    <thead>
                      <tr className="border-b">
                        <th className="p-4 font-semibold">技術</th>
                        <th className="p-4 font-semibold">年数</th>
                        <th className="p-4 font-semibold">レベル</th>
                        <th className="p-4 font-semibold">補足</th>
                      </tr>
                    </thead>
                    <tbody>
                      {selectedCategory.skills.map((skill: any) => (
                        <tr key={skill.name} className="border-b last:border-none">
                          <td className="p-4 font-medium">{skill.name}</td>
                          <td className="p-4 text-gray-600">{skill.experience}</td>
                          <td className="p-4">
                            <StarRating level={skill.level} />
                          </td>
                          <td className="p-4 text-gray-600 text-sm">{skill.description}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}

export default TechStackSection
