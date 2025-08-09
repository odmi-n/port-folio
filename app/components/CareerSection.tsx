"use client"

import { useLanguage } from "../contexts/LanguageContext"

export default function CareerSection() {
  const { t } = useLanguage()

  // 翻訳データから経歴アイテムを取得
  const careerItems = t("career.items")
  const items = Array.isArray(careerItems) ? careerItems : []

  return (
    <section id="career" className="py-20 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-black mb-4">{t("career.title")}</h2>
        </div>

        <div className="space-y-12">
          {items.map((item: any, index: number) => (
            <div key={index} className="relative">
              {/* タイムライン線 */}
              {index !== items.length - 1 && <div className="absolute left-4 top-12 w-0.5 h-full bg-gray-200"></div>}

              <div className="flex items-start space-x-6">
                {/* タイムラインドット */}
                <div className="flex-shrink-0 w-8 h-8 bg-black rounded-full flex items-center justify-center">
                  <div className="w-3 h-3 bg-white rounded-full"></div>
                </div>

                {/* コンテンツ */}
                <div className="flex-1 pb-8">
                  <div className="bg-gray-50 p-6 rounded-lg">
                    <div className="mb-2">
                      <span className="text-sm text-gray-500 font-medium">{item.period}</span>
                    </div>
                    <h3 className="text-xl font-semibold text-black mb-1">{item.position}</h3>
                    <h4 className="text-lg text-gray-700 mb-3">{item.company}</h4>
                    <p className="text-gray-600 leading-relaxed">{item.description}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
