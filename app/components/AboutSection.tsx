"use client"

import { useState } from "react"

export default function AboutSection() {
  const [activeTab, setActiveTab] = useState("career")

  // 経歴データ（テーブル形式）
  const careerData = [
    { date: "2022/3", event: "茨城県立古河第三高等学校 卒業" },
    { date: "2022/4", "event": "筑波大学 情報学群 知識情報・図書館学類 入学" },
    { date: "2023/9", event: "同大学を休学、フリーランスエンジニアとして活動開始" },
    { date: "2023/3", event: "応用情報技術者試験 合格" },
    { date: "2024/3", event: "東京大学 工学部 情報理工学科 卒業" },
    { date: "2024/4", event: "フリーランスエンジニアとして活動開始" }
  ]

  // 技術要件データ
  const techRequirements = [
    { category: "フロントエンド", skills: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Vue.js"] },
    { category: "バックエンド", skills: ["Node.js", "Express", "Python", "FastAPI", "PostgreSQL", "MongoDB"] },
    { category: "インフラ", skills: ["AWS", "Docker", "Kubernetes", "Terraform", "GitHub Actions"] },
    { category: "その他", skills: ["Git", "Figma", "Adobe Creative Suite", "Agile/Scrum"] }
  ]

  // 所有機材データ
  const equipment = [
    { category: "開発環境", items: ["MacBook Pro 16inch M2 Max", "LG UltraWide 34inch Monitor", "Magic Keyboard", "Magic Mouse"] },
    { category: "カメラ機材", items: ["Canon EOS R5", "RF 24-70mm F2.8L IS USM", "RF 70-200mm F2.8L IS USM", "Godox AD200Pro"] },
    { category: "その他", items: ["iPad Pro 12.9inch", "Apple Pencil", "AirPods Pro", "Herman Miller Aeron Chair"] }
  ]

  // リンクデータ
  const links = [
    { name: "GitHub", url: "https://github.com", icon: "🔗" },
    { name: "Twitter", url: "https://twitter.com", icon: "🐦" },
    { name: "LinkedIn", url: "https://linkedin.com", icon: "💼" },
    { name: "Portfolio", url: "https://portfolio.com", icon: "🎨" }
  ]

  const tabs = [
    { id: "career", label: "経歴" },
    { id: "tech", label: "技術要件" },
    { id: "equipment", label: "所有機材" },
    { id: "links", label: "Links" }
  ]

  return (
    <section id="about" className="py-20 bg-black">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white mb-4">About</h2>
        </div>

        {/* タブナビゲーション */}
        <div className="flex justify-center mb-8">
          <div className="flex space-x-8 border-b border-gray-800">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`pb-4 px-2 text-lg transition-colors ${
                  activeTab === tab.id
                    ? "text-white border-b-2 border-white font-bold"
                    : "text-gray-400 hover:text-white font-medium"
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* タブコンテンツ */}
        <div className="min-h-[400px]">
          {/* 経歴タブ */}
          {activeTab === "career" && (
            <div className="space-y-4">
              <table className="w-full border-collapse">
                <tbody>
                  {careerData.map((item, index) => (
                    <tr key={index} className="border-b border-gray-800">
                      <td className="py-4 px-2 text-gray-400 font-medium whitespace-nowrap w-24">
                        {item.date}
                      </td>
                      <td className="py-4 px-4 text-white font-normal">
                        {item.event}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}

          {/* 技術要件タブ */}
          {activeTab === "tech" && (
            <div className="space-y-8">
              {techRequirements.map((category, index) => (
                <div key={index}>
                  <h3 className="text-xl font-bold text-white mb-4">{category.category}</h3>
                  <div className="flex flex-wrap gap-3">
                    {category.skills.map((skill, skillIndex) => (
                      <span
                        key={skillIndex}
                        className="px-4 py-2 bg-gray-800 text-white rounded-lg text-sm font-medium"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* 所有機材タブ */}
          {activeTab === "equipment" && (
            <div className="space-y-8">
              {equipment.map((category, index) => (
                <div key={index}>
                  <h3 className="text-xl font-bold text-white mb-4">{category.category}</h3>
                  <ul className="space-y-2">
                    {category.items.map((item, itemIndex) => (
                      <li key={itemIndex} className="text-gray-300 flex items-center font-normal">
                        <span className="w-2 h-2 bg-white rounded-full mr-3"></span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          )}

          {/* Linksタブ */}
          {activeTab === "links" && (
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {links.map((link, index) => (
                <a
                  key={index}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center p-6 bg-gray-900 rounded-lg hover:bg-gray-800 transition-colors group"
                >
                  <span className="text-2xl mr-4">{link.icon}</span>
                  <span className="text-lg font-semibold text-white group-hover:text-gray-300">
                    {link.name}
                  </span>
                </a>
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  )
}
