"use client"

import { useState } from "react"
import { BookOpen, Users, Code, Lightbulb, Calendar } from "lucide-react"

export default function EducationSection() {
  // プログラミング塾の講座データ
  const courses = [
    {
      id: 1,
      title: "プログラミング明講座",
      description: "プログラミングの基礎から応用まで、体系的に学習できる講座です。変数、関数、条件分岐、繰り返し処理などの基本概念から始まり、オブジェクト指向プログラミング、データ構造、アルゴリズムまでを網羅的に扱います。実際のプロジェクトを通じて、実践的なスキルを身につけることができます。",
      image: "/Teaching2.png",
      duration: "3ヶ月",
      level: "初級〜中級",
      students: "15名"
    },
    {
      id: 2,
      title: "Web開発実践講座",
      description: "HTML、CSS、JavaScriptの基礎から、React、Next.jsを使った現代的なWeb開発まで学習します。レスポンシブデザイン、API連携、データベース操作など、実際のWeb開発で必要となる技術を幅広くカバーします。最終的には、個人プロジェクトとして完全なWebアプリケーションを制作します。",
      image: "/Teaching2.png",
      duration: "4ヶ月",
      level: "中級",
      students: "12名"
    },
    {
      id: 3,
      title: "AI・機械学習入門",
      description: "人工知能と機械学習の基礎理論から実装まで学習する講座です。Python、NumPy、Pandas、scikit-learnを使用して、データ分析、予測モデルの構築、深層学習の基礎を学びます。実際のデータセットを使った分析プロジェクトを通じて、AI技術の実用的な活用方法を身につけます。",
      image: "/Teaching2.png", 
      duration: "5ヶ月",
      level: "中級〜上級",
      students: "10名"
    },
    {
      id: 4,
      title: "アプリ開発講座",
      description: "モバイルアプリケーション開発の基礎から実践まで学習します。React NativeやFlutterを使用したクロスプラットフォーム開発、ネイティブアプリ開発の手法、アプリストアへの公開プロセスまでを網羅します。UI/UXデザインの基礎も含め、ユーザーに愛されるアプリ制作を目指します。",
      image: "/Teaching2.png",
      duration: "4ヶ月", 
      level: "中級",
      students: "8名"
    }
  ]

  return (
    <section id="education" className="py-20 bg-black">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white mb-4">Education</h2>
          <p className="text-gray-300 text-lg">2024年4月より中高生向けにプログラミング塾を開校し、スタートメンバーとして指導をしております。自身の持つ技術を言語化することは、知識の確認や補強にも繋がっています。ここでは、どのような内容を開講しているのかを一部ご紹介します。</p>
        </div>

        {/* タイムライン形式の講座一覧 */}
        <div className="relative">
          {/* デスクトップ用の中央縦線 */}
          <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 w-0.5 h-full bg-gray-700"></div>
          {/* モバイル用の左側縦線 */}
          <div className="md:hidden absolute left-6 w-0.5 h-full bg-gray-700"></div>
          
          <div className="space-y-12 md:space-y-16">
            {courses.map((course, index) => (
              <div key={course.id} className="relative">
                {/* デスクトップ用のタイムライン番号（中央） */}
                <div className="hidden md:flex absolute left-1/2 transform -translate-x-1/2 -translate-y-1/2 top-8 w-12 h-12 bg-white rounded-full items-center justify-center z-10 border-4 border-gray-800">
                  <span className="text-black font-bold text-lg">{course.id}</span>
                </div>
                
                {/* モバイル用のタイムライン番号（左側） */}
                <div className="md:hidden flex absolute left-6 transform -translate-x-1/2 -translate-y-1/2 top-8 w-12 h-12 bg-white rounded-full items-center justify-center z-10 border-4 border-gray-800">
                  <span className="text-black font-bold text-lg">{course.id}</span>
                </div>
                
                {/* デスクトップレイアウト：交互配置 */}
                <div className={`hidden md:flex items-start ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}>
                  {/* テキスト部分 */}
                  <div className={`w-1/2 ${index % 2 === 0 ? 'pr-8' : 'pl-8'}`}>
                    <div className="bg-gray-900 rounded-lg p-6 hover:bg-gray-800 transition-colors relative">
                      <div className="flex items-center mb-4">
                        <BookOpen className="text-white mr-3" size={24} />
                        <h3 className="text-xl font-bold text-white">{course.title}</h3>
                      </div>
                      
                      <p className="text-gray-300 mb-4 leading-relaxed">
                        {course.description}
                      </p>
                      
                      {/* 講座詳細情報 */}
                      <div className="grid grid-cols-1 lg:grid-cols-3 gap-3 mb-4">
                        <div className="flex items-center text-sm text-gray-400">
                          <Calendar className="mr-2 flex-shrink-0" size={16} />
                          <span>{course.duration}</span>
                        </div>
                        <div className="flex items-center text-sm text-gray-400">
                          <Code className="mr-2 flex-shrink-0" size={16} />
                          <span>{course.level}</span>
                        </div>
                        <div className="flex items-center text-sm text-gray-400">
                          <Users className="mr-2 flex-shrink-0" size={16} />
                          <span>{course.students}</span>
                        </div>
                      </div>
                      
                      {/* 右下の小さな画像 */}
                      <div className="absolute bottom-4 right-4">
                        <div className="w-16 h-12 rounded-md overflow-hidden border border-gray-600">
                          <img 
                            src={course.image} 
                            alt={`${course.title}の授業風景`}
                            className="w-full h-full object-cover"
                            onError={(e) => {
                              const target = e.target as HTMLImageElement;
                              target.style.display = 'none';
                              const parent = target.parentElement;
                              if (parent) {
                                parent.innerHTML = `
                                  <div class="w-full h-full flex items-center justify-center bg-gray-700">
                                    <svg class="w-4 h-4 text-gray-500" fill="currentColor" viewBox="0 0 20 20">
                                      <path fill-rule="evenodd" d="M4 3a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H4zm12 12H4l4-8 3 6 2-4 3 6z" clip-rule="evenodd" />
                                    </svg>
                                  </div>
                                `;
                              }
                            }}
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* モバイルレイアウト：縦積み */}
                <div className="md:hidden pl-12">
                  <div className="bg-gray-900 rounded-lg p-6 hover:bg-gray-800 transition-colors">
                    <div className="flex items-center mb-4">
                      <BookOpen className="text-white mr-3" size={24} />
                      <h3 className="text-xl font-bold text-white">{course.title}</h3>
                    </div>
                    
                    {/* モバイル用画像 */}
                    <div className="mb-4 flex justify-end">
                      <div className="w-20 h-16 rounded-lg overflow-hidden border-2 border-gray-600">
                        <img 
                          src={course.image} 
                          alt={`${course.title}の授業風景`}
                          className="w-full h-full object-cover"
                          onError={(e) => {
                            const target = e.target as HTMLImageElement;
                            target.style.display = 'none';
                            const parent = target.parentElement;
                            if (parent) {
                              parent.innerHTML = `
                                <div class="w-full h-full flex items-center justify-center bg-gray-700">
                                  <div class="text-center text-gray-500">
                                    <svg class="w-4 h-4 mx-auto mb-1" fill="currentColor" viewBox="0 0 20 20">
                                      <path fill-rule="evenodd" d="M4 3a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H4zm12 12H4l4-8 3 6 2-4 3 6z" clip-rule="evenodd" />
                                    </svg>
                                    <p class="text-xs">画像</p>
                                  </div>
                                </div>
                              `;
                            }
                          }}
                        />
                      </div>
                    </div>
                    
                    <p className="text-gray-300 mb-4 leading-relaxed text-sm">
                      {course.description}
                    </p>
                    
                    {/* モバイル用講座詳細情報 */}
                    <div className="space-y-2">
                      <div className="flex items-center text-sm text-gray-400">
                        <Calendar className="mr-2 flex-shrink-0" size={16} />
                        <span>{course.duration}</span>
                      </div>
                      <div className="flex items-center text-sm text-gray-400">
                        <Code className="mr-2 flex-shrink-0" size={16} />
                        <span>{course.level}</span>
                      </div>
                      <div className="flex items-center text-sm text-gray-400">
                        <Users className="mr-2 flex-shrink-0" size={16} />
                        <span>{course.students}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
