"use client"

import Image from "next/image"
import Link from "next/link"
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
          <Link href="/programming" className="block">
            <div className="group cursor-pointer relative overflow-hidden">
              <Image
                src="/Source.png"
                alt={texts[language].sourcecode}
                width={1536}
                height={1024}
                className="w-full h-auto object-cover transition-all duration-400 group-hover:scale-105 group-hover:brightness-90"
                priority
              />
              {/* White overlay */}
              <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-20 transition-opacity duration-300" />
              
              {/* Label */}
              <div className="absolute inset-0 flex items-center justify-center">
                              <span className="text-black text-2xl font-extrabold opacity-0 group-hover:opacity-100 transform translate-y-2 group-hover:translate-y-0 transition-all duration-350">
                Programming Works
              </span>
              </div>
            </div>
          </Link>

          {/* Right Image - Teaching */}
          <Link href="/education" className="block">
            <div className="group cursor-pointer relative overflow-hidden">
              <Image
                src="/Teaching2.png"
                alt={texts[language].teaching}
                width={1536}
                height={1024}
                className="w-full h-auto object-cover transition-all duration-400 group-hover:scale-105 group-hover:brightness-90"
                priority
              />
              {/* White overlay */}
              <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-20 transition-opacity duration-300" />
              
              {/* Label */}
              <div className="absolute inset-0 flex items-center justify-center">
                              <span className="text-black text-2xl font-extrabold opacity-0 group-hover:opacity-100 transform translate-y-2 group-hover:translate-y-0 transition-all duration-350">
                Education Works
              </span>
              </div>
            </div>
          </Link>
        </div>
      </div>
    </section>
  )
}

export default ImageSection
