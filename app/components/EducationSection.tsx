"use client"

import { useState } from "react"
import { GraduationCap, Award, BookOpen, Calendar } from "lucide-react"

export default function EducationSection() {
  const [activeTab, setActiveTab] = useState("academic")

  // モック学歴データ
  const academicEducation = [
    {
      institution: "東京大学",
      degree: "工学部 情報理工学科",
      period: "2020年4月 - 2024年3月",
      description: "コンピュータサイエンス、アルゴリズム、データ構造、ソフトウェア工学を専攻",
      gpa: "3.8/4.0",
      status: "卒業"
    },
    {
      institution: "私立○○高等学校",
      degree: "普通科",
      period: "2017年4月 - 2020年3月",
      description: "理系コース、数学・物理・化学を重点的に学習",
      gpa: "4.2/5.0",
      status: "卒業"
    }
  ]

  // モック資格・認定データ
  const certifications = [
    {
      name: "応用情報技術者試験",
      organization: "IPA（情報処理推進機構）",
      date: "2023年10月",
      description: "ITに関する応用的知識・技能を認定する国家試験",
      status: "合格"
    },
    {
      name: "基本情報技術者試験",
      organization: "IPA（情報処理推進機構）",
      date: "2022年4月",
      description: "ITの基礎知識を認定する国家試験",
      status: "合格"
    },
    {
      name: "AWS Certified Solutions Architect",
      organization: "Amazon Web Services",
      date: "2023年6月",
      description: "AWSクラウドアーキテクチャの設計・デプロイに関する認定",
      status: "Associate"
    },
    {
      name: "TOEIC",
      organization: "ETS",
      date: "2023年1月",
      description: "英語コミュニケーション能力測定テスト",
      status: "850点"
    }
  ]

  // モックオンライン学習データ
  const onlineLearning = [
    {
      platform: "Udemy",
      courses: [
        "React Complete Guide 2023",
        "Node.js, Express, MongoDB Bootcamp",
        "AWS Certified Solutions Architect"
      ],
      completedHours: "120時間"
    },
    {
      platform: "Coursera",
      courses: [
        "Machine Learning by Stanford University",
        "Algorithms Specialization",
        "Full Stack Web Development"
      ],
      completedHours: "80時間"
    },
    {
      platform: "Pluralsight",
      courses: [
        "Advanced React Patterns",
        "Docker and Kubernetes",
        "TypeScript Fundamentals"
      ],
      completedHours: "60時間"
    }
  ]

  // モック書籍・学習リソース
  const books = [
    {
      title: "Clean Code",
      author: "Robert C. Martin",
      category: "プログラミング",
      status: "読了"
    },
    {
      title: "Designing Data-Intensive Applications",
      author: "Martin Kleppmann",
      category: "システム設計",
      status: "読了"
    },
    {
      title: "You Don't Know JS",
      author: "Kyle Simpson",
      category: "JavaScript",
      status: "読了"
    },
    {
      title: "System Design Interview",
      author: "Alex Xu",
      category: "システム設計",
      status: "読了"
    }
  ]

  const tabs = [
    { id: "academic", label: "Academic" },
    { id: "certifications", label: "Certifications" },
    { id: "online", label: "Online Learning" },
    { id: "books", label: "Books" }
  ]

  return (
    <section id="education" className="py-20 bg-black">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white mb-4">Education</h2>
          <p className="text-gray-300 text-lg">2024年4月より中高生向けにプログラミング塾を開校し、スタートメンバーとして指導をしております。自身の持つ技術を言語化することは、知識の確認や補強にも繋がっています。ここでは、どのような内容を開講しているのかを一部ご紹介します。</p>
        </div>

        {/* タブナビゲーション */}
        <div className="flex justify-center mb-12">
          <div className="flex space-x-8 border-b border-gray-800 overflow-x-auto">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`pb-4 px-2 text-lg transition-colors whitespace-nowrap ${
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
        <div className="min-h-[600px]">
          {/* 学歴タブ */}
          {activeTab === "academic" && (
            <div className="space-y-8">
              {academicEducation.map((edu, index) => (
                <div key={index} className="bg-gray-900 rounded-lg p-6 hover:bg-gray-800 transition-colors">
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex items-center">
                      <GraduationCap className="text-white mr-3" size={24} />
                      <div>
                        <h3 className="text-xl font-bold text-white">{edu.institution}</h3>
                        <p className="text-gray-300">{edu.degree}</p>
                      </div>
                    </div>
                    <span className="text-sm text-gray-400 bg-gray-800 px-3 py-1 rounded-full">
                      {edu.status}
                    </span>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <p className="text-gray-300 mb-2">
                        <Calendar className="inline mr-2" size={16} />
                        {edu.period}
                      </p>
                      <p className="text-gray-300">{edu.description}</p>
                    </div>
                    <div className="text-right">
                      <p className="text-gray-400">GPA</p>
                      <p className="text-white font-semibold text-lg">{edu.gpa}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* 資格タブ */}
          {activeTab === "certifications" && (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {certifications.map((cert, index) => (
                <div key={index} className="bg-gray-900 rounded-lg p-6 hover:bg-gray-800 transition-colors">
                  <div className="flex items-start mb-4">
                    <Award className="text-white mr-3 mt-1" size={20} />
                    <div>
                      <h3 className="text-lg font-bold text-white mb-1">{cert.name}</h3>
                      <p className="text-gray-400 text-sm">{cert.organization}</p>
                    </div>
                  </div>
                  <p className="text-gray-300 text-sm mb-3">{cert.description}</p>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-400 text-sm">{cert.date}</span>
                    <span className="bg-gray-800 text-white px-3 py-1 rounded-full text-sm">
                      {cert.status}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* オンライン学習タブ */}
          {activeTab === "online" && (
            <div className="space-y-8">
              {onlineLearning.map((platform, index) => (
                <div key={index} className="bg-gray-900 rounded-lg p-6">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-xl font-bold text-white">{platform.platform}</h3>
                    <span className="text-gray-400 text-sm">
                      完了時間: {platform.completedHours}
                    </span>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
                    {platform.courses.map((course, courseIndex) => (
                      <div
                        key={courseIndex}
                        className="bg-gray-800 p-3 rounded text-gray-300 text-sm"
                      >
                        <BookOpen className="inline mr-2" size={14} />
                        {course}
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* 書籍タブ */}
          {activeTab === "books" && (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {books.map((book, index) => (
                <div key={index} className="bg-gray-900 rounded-lg p-6 hover:bg-gray-800 transition-colors">
                  <div className="flex items-start mb-3">
                    <BookOpen className="text-white mr-3 mt-1" size={20} />
                    <div>
                      <h3 className="text-lg font-bold text-white mb-1">{book.title}</h3>
                      <p className="text-gray-400 text-sm">{book.author}</p>
                    </div>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="bg-gray-800 text-gray-300 px-3 py-1 rounded-full text-sm">
                      {book.category}
                    </span>
                    <span className="text-green-400 text-sm font-medium">
                      {book.status}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  )
}
