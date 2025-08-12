"use client"

import Image from "next/image"
import { useLanguage } from "../contexts/LanguageContext"

const ImageSection = () => {
  const { language } = useLanguage()

  const texts = {
    ja: {
      sourcecode: "ソースコード",
      teaching: "教育・指導"
    },
    en: {
      sourcecode: "Source Code",
      teaching: "Teaching"
    }
  }

  return (
    <section className="bg-white">
      <div className="w-full">
        <div className="grid grid-cols-1 md:grid-cols-2">
          {/* Left Image - Sourcecode */}
          <div className="group cursor-pointer">
            <div className="relative overflow-hidden hover:shadow-xl transition-all duration-300">
              <Image
                src="/Source.png"
                alt={texts[language].sourcecode}
                width={1536}
                height={1024}
                className="w-full h-auto object-cover transition-transform duration-300 group-hover:scale-105"
                priority
              />
              <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-20 transition-opacity duration-300" />
              <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/70 to-transparent">
                <h3 className="text-white text-xl font-semibold">
                  {texts[language].sourcecode}
                </h3>
              </div>
            </div>
          </div>

          {/* Right Image - Teaching */}
          <div className="group cursor-pointer">
            <div className="relative overflow-hidden hover:shadow-xl transition-all duration-300">
              <Image
                src="/Teaching2.png"
                alt={texts[language].teaching}
                width={1536}
                height={1024}
                className="w-full h-auto object-cover transition-transform duration-300 group-hover:scale-105"
                priority
              />
              <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-20 transition-opacity duration-300" />
              <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/70 to-transparent">
                <h3 className="text-white text-xl font-semibold">
                  {texts[language].teaching}
                </h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ImageSection
