const HERO_CONTENT = {
  // 名前を入力してください。
  name: "山田 太郎",
  // 年齢を数字で入力してください。
  age: "26",
  // キャッチコピーは自由に変更できます。
  catchCopy: "エンジニアリング、情報教育",
  // 肩書きを記載してください。
  title: "フルスタックエンジニア",
  // 自己紹介文を記載してください。2〜3文程度がおすすめです。
  introduction:
    "ここに自己紹介文を入力してください。ミッションや強み、現在の関心領域などを簡潔にまとめましょう。",
  // 対応している言語を配列で入力してください。
  languages: ["TypeScript", "Python", "Go", "English", "日本語"],
}

const TECH_STACK = [
  {
    category: "Front-end",
    // フロントエンドで扱える技術を列挙してください。
    items: ["Next.js", "React", "TypeScript", "Tailwind CSS", "Framer Motion"],
    description:
      "ここにフロントエンドでの開発経験を入力してください。役割や得意な領域などを具体的に書くと伝わりやすくなります。",
  },
  {
    category: "Back-end",
    // バックエンドで扱える技術を列挙してください。
    items: ["Node.js", "Express", "GraphQL", "Prisma", "PostgreSQL"],
    description:
      "ここにバックエンド開発の経験を入力してください。API設計、DB設計、インフラ構築などを盛り込むと効果的です。",
  },
  {
    category: "Environment",
    // 開発環境やその他ツールを列挙してください。
    items: ["AWS", "Docker", "GitHub Actions", "Figma", "Notion"],
    description:
      "ここにその他の開発環境やツール、ワークフローについて記載してください。",
  },
]

const CAREER_TIMELINE = [
  {
    period: "2021 - 現在",
    role: "株式会社サンプル | フルスタックエンジニア",
    // 具体的な業務内容を箇条書きで記載してください。
    achievements: [
      "ここに担当したプロジェクトの概要を入力してください。",
      "役割や成果、導入した技術などを記載してください。",
      "チーム規模やリード経験があれば追記すると効果的です。",
    ],
  },
  {
    period: "2019 - 2021",
    role: "スタートアップ合同会社 | フロントエンドエンジニア",
    achievements: [
      "ここにプロダクトの内容や達成したことを書いてください。",
      "改善した指標や導入した技術などを記載すると分かりやすくなります。",
    ],
  },
  {
    period: "2018",
    role: "大学在学中 | 情報教育サークル",
    achievements: [
      "ここに学生時代の活動やプロジェクトを入力してください。",
      "教育活動やコミュニティ運営の経験があれば記載してください。",
    ],
  },
]

export default function Home() {
  return (
    <main className="bg-black text-white">
      <section className="min-h-screen flex flex-col items-center justify-center px-6 py-24">
        <div className="max-w-4xl w-full space-y-12 text-center">
          <div className="space-y-4">
            <p className="text-sm uppercase tracking-[0.4em] text-gray-500">Portfolio</p>
            <h1 className="text-4xl sm:text-5xl font-semibold tracking-tight">
              {HERO_CONTENT.name}
              <span className="block mt-2 text-xl font-normal text-gray-400">
                {HERO_CONTENT.age}歳 / {HERO_CONTENT.title}
              </span>
            </h1>
            <p className="text-lg sm:text-xl text-gray-300">{HERO_CONTENT.catchCopy}</p>
          </div>
          <p className="text-base sm:text-lg leading-relaxed text-gray-400 max-w-3xl mx-auto">
            {HERO_CONTENT.introduction}
          </p>
          <div className="flex flex-wrap items-center justify-center gap-3">
            {HERO_CONTENT.languages.map((language) => (
              <span
                key={language}
                className="rounded-full border border-gray-800 bg-gray-900 px-4 py-2 text-sm text-gray-300"
              >
                {language}
              </span>
            ))}
          </div>
        </div>
      </section>

      <section className="px-6 py-24">
        <div className="max-w-5xl mx-auto space-y-12">
          <div className="space-y-3">
            <p className="text-sm uppercase tracking-[0.4em] text-gray-500">Skills</p>
            <h2 className="text-3xl sm:text-4xl font-semibold">技術仕様</h2>
            <p className="text-gray-400">
              カテゴリごとに得意な技術やツールを整理しています。各ボックスのテキストは自由に更新してください。
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-3">
            {TECH_STACK.map((stack) => (
              <article
                key={stack.category}
                className="group rounded-2xl border border-gray-800 bg-gray-900/60 p-6 transition-all duration-300 hover:-translate-y-1 hover:border-emerald-400/70 hover:bg-gray-900 hover:shadow-[0_20px_45px_-20px_rgba(16,185,129,0.45)]"
              >
                <h3 className="text-lg font-semibold text-white group-hover:text-emerald-400">
                  {stack.category}
                </h3>
                <div className="mt-4 flex flex-wrap gap-2">
                  {stack.items.map((item) => (
                    <span key={item} className="rounded-full bg-gray-800 px-3 py-1 text-xs text-gray-300">
                      {item}
                    </span>
                  ))}
                </div>
                <p className="mt-6 text-sm leading-relaxed text-gray-400">{stack.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="px-6 py-24 bg-gray-950">
        <div className="max-w-4xl mx-auto space-y-12">
          <div className="space-y-3">
            <p className="text-sm uppercase tracking-[0.4em] text-gray-500">Career</p>
            <h2 className="text-3xl sm:text-4xl font-semibold">More About Me</h2>
            <p className="text-gray-400">
              経歴や関わったプロジェクトを時系列でまとめています。期間・役割・担当した内容を更新してください。
            </p>
          </div>
          <div className="space-y-10">
            {CAREER_TIMELINE.map((career) => (
              <div key={`${career.period}-${career.role}`} className="grid gap-4 md:grid-cols-[180px_1fr] md:gap-8">
                <div>
                  <span className="text-sm uppercase tracking-[0.2em] text-emerald-400">
                    {career.period}
                  </span>
                </div>
                <div className="space-y-3">
                  <h3 className="text-xl font-semibold text-white">{career.role}</h3>
                  <ul className="space-y-2 text-sm text-gray-400">
                    {career.achievements.map((achievement, index) => (
                      <li key={index} className="flex gap-3">
                        <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-emerald-400" />
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

      <footer className="px-6 py-12 border-t border-gray-900">
        <div className="max-w-4xl mx-auto text-center text-xs text-gray-600">
          © {new Date().getFullYear()} {HERO_CONTENT.name}. All rights reserved.
        </div>
      </footer>
    </main>
  )
}
