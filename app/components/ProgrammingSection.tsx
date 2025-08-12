"use client"

import { useState } from "react"
import { Github, ExternalLink } from "lucide-react"

export default function ProgrammingSection() {
  const [activeTab, setActiveTab] = useState("projects")

  // モックプロジェクトデータ
  const projects = [
    {
      title: "ポートフォリオサイト",
      description: "Next.js + TypeScript + Tailwind CSSで構築したレスポンシブなポートフォリオサイト",
      tech: ["Next.js", "TypeScript", "Tailwind CSS", "React"],
      github: "https://github.com",
      demo: "https://example.com",
      image: "/placeholder.jpg"
    },
    {
      title: "タスク管理アプリ",
      description: "リアルタイム同期機能を持つタスク管理アプリケーション",
      tech: ["React", "Node.js", "Socket.io", "MongoDB"],
      github: "https://github.com",
      demo: "https://example.com",
      image: "/placeholder.jpg"
    },
    {
      title: "ECサイト",
      description: "決済機能付きのフルスタックECサイト",
      tech: ["Vue.js", "Express", "PostgreSQL", "Stripe"],
      github: "https://github.com",
      demo: "https://example.com",
      image: "/placeholder.jpg"
    }
  ]

  // モック技術スタックデータ
  const techStack = {
    frontend: ["React", "Next.js", "Vue.js", "TypeScript", "JavaScript", "Tailwind CSS", "SCSS"],
    backend: ["Node.js", "Express", "Python", "FastAPI", "PHP", "Laravel"],
    database: ["PostgreSQL", "MongoDB", "MySQL", "Redis"],
    tools: ["Git", "Docker", "AWS", "Vercel", "Figma", "Postman"]
  }

  // モックスキルレベルデータ
  const skills = [
    { name: "JavaScript/TypeScript", level: 90 },
    { name: "React/Next.js", level: 85 },
    { name: "Node.js", level: 80 },
    { name: "Python", level: 75 },
    { name: "Database Design", level: 70 },
    { name: "AWS/Cloud", level: 65 }
  ]

  const tabs = [
    { id: "projects", label: "Projects" },
    { id: "skills", label: "Skills" },
    { id: "tech", label: "Tech Stack" }
  ]

  return (
    <section id="programming" className="py-20 bg-black">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white mb-4">Programming</h2>
          <p className="text-gray-300 text-lg">プロジェクト、スキル、技術スタックの紹介</p>
        </div>

        {/* タブナビゲーション */}
        <div className="flex justify-center mb-12">
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
        <div className="min-h-[600px]">
          {/* プロジェクトタブ */}
          {activeTab === "projects" && (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {projects.map((project, index) => (
                <div key={index} className="bg-gray-900 rounded-lg overflow-hidden hover:bg-gray-800 transition-colors">
                  <div className="aspect-video bg-gray-800 flex items-center justify-center">
                    <span className="text-gray-500">Project Image</span>
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-white mb-2">{project.title}</h3>
                    <p className="text-gray-300 mb-4 text-sm leading-relaxed">{project.description}</p>
                    
                    {/* 技術スタック */}
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.tech.map((tech, techIndex) => (
                        <span
                          key={techIndex}
                          className="px-2 py-1 bg-gray-800 text-white text-xs rounded"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                    
                    {/* リンク */}
                    <div className="flex space-x-4">
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center text-gray-300 hover:text-white transition-colors"
                      >
                        <Github size={16} className="mr-1" />
                        <span className="text-sm">Code</span>
                      </a>
                      <a
                        href={project.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center text-gray-300 hover:text-white transition-colors"
                      >
                        <ExternalLink size={16} className="mr-1" />
                        <span className="text-sm">Demo</span>
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* スキルタブ */}
          {activeTab === "skills" && (
            <div className="max-w-3xl mx-auto space-y-6">
              {skills.map((skill, index) => (
                <div key={index}>
                  <div className="flex justify-between mb-2">
                    <span className="text-white font-medium">{skill.name}</span>
                    <span className="text-gray-400">{skill.level}%</span>
                  </div>
                  <div className="w-full bg-gray-800 rounded-full h-2">
                    <div
                      className="bg-white h-2 rounded-full transition-all duration-1000 ease-out"
                      style={{ width: `${skill.level}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* 技術スタックタブ */}
          {activeTab === "tech" && (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {Object.entries(techStack).map(([category, techs]) => (
                <div key={category}>
                  <h3 className="text-xl font-bold text-white mb-4 capitalize">{category}</h3>
                  <div className="space-y-2">
                    {techs.map((tech, techIndex) => (
                      <div
                        key={techIndex}
                        className="flex items-center text-gray-300"
                      >
                        <span className="w-2 h-2 bg-white rounded-full mr-3"></span>
                        {tech}
                      </div>
                    ))}
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
