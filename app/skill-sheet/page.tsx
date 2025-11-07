import Link from "next/link"
import type { Metadata } from "next"

// NOTE: スキルシートの内容は下記のモックデータを参照しています。
import { skillSheetData } from "./skillSheetData"

export const metadata: Metadata = {
  title: "Skill Sheet | Portfolio",
  description: "生成AIとフルスタック開発を強みにしたエンジニアのスキルシート（モックデータ）",
}

export default function SkillSheetPage() {
  const {
    profile,
    contact,
    availability,
    expertise,
    strongTechnologies,
    strongWorks,
    technicalSkills,
    dutyDetails,
    projects,
    jobHistories,
    education,
    certifications,
  } = skillSheetData

  return (
    <main className="bg-gray-100 text-gray-900">
      <div className="mx-auto max-w-5xl px-4 py-12 lg:px-8 lg:py-16">
        <header className="flex flex-col gap-6 border-b border-gray-200 pb-8">
          <div className="flex flex-col gap-4 md:flex-row md:items-start md:justify-between">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.4em] text-teal-500 print:text-black">
                Skill Sheet
              </p>
              <h1 className="mt-2 text-3xl font-bold leading-tight md:text-4xl">{profile.name}</h1>
              <p className="mt-2 text-lg font-medium text-teal-700 print:text-black">{profile.role}</p>
              <p className="mt-4 max-w-3xl text-sm leading-relaxed text-gray-600 print:text-black">
                {profile.summary}
              </p>
            </div>
            <Link
              href="/"
              className="inline-flex h-fit items-center rounded-full border border-gray-300 px-5 py-2 text-sm font-medium text-gray-600 transition hover:border-gray-400 hover:text-gray-900 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gray-400 print:hidden"
            >
              トップへ戻る
            </Link>
          </div>

          <dl className="grid gap-4 text-sm text-gray-600 print:text-black sm:grid-cols-2 lg:grid-cols-3">
            <div>
              <dt className="font-semibold text-gray-900">所属</dt>
              <dd>{profile.affiliation}</dd>
            </div>
            <div>
              <dt className="font-semibold text-gray-900">年齢</dt>
              <dd>{profile.age}</dd>
            </div>
            <div>
              <dt className="font-semibold text-gray-900">性別</dt>
              <dd>{profile.gender}</dd>
            </div>
            <div>
              <dt className="font-semibold text-gray-900">所在地</dt>
              <dd>{profile.location}</dd>
            </div>
            <div>
              <dt className="font-semibold text-gray-900">最寄駅</dt>
              <dd>{profile.nearestStation}</dd>
            </div>
            <div>
              <dt className="font-semibold text-gray-900">稼働開始日</dt>
              <dd>{availability.startDate}</dd>
            </div>
          </dl>

          <div className="flex flex-wrap gap-4 text-sm text-gray-500 print:text-black">
            <a href={`mailto:${contact.email}`} className="underline decoration-dotted underline-offset-4 print:no-underline">
              {contact.email}
            </a>
            <a href={contact.github} className="underline decoration-dotted underline-offset-4 print:no-underline" target="_blank" rel="noreferrer">
              GitHub
            </a>
            <a href={contact.x} className="underline decoration-dotted underline-offset-4 print:no-underline" target="_blank" rel="noreferrer">
              X
            </a>
            <a href={contact.website} className="underline decoration-dotted underline-offset-4 print:no-underline" target="_blank" rel="noreferrer">
              Website
            </a>
            <span className="text-xs text-gray-400 print:text-xs">
              Data source: app/skill-sheet/skillSheetData.ts
            </span>
          </div>
        </header>

        <section className="mt-10 grid gap-6 lg:grid-cols-[2fr_1fr] lg:gap-12">
          <div className="space-y-8">
            <article className="rounded-2xl bg-white p-7 shadow-sm print:border print:border-gray-300 print:shadow-none">
              <h2 className="text-xl font-semibold text-gray-900">業務内容</h2>
              <div className="mt-6 space-y-6">
                {dutyDetails.map((detail) => (
                  <section key={`${detail.companyLabel}-${detail.project}`} className="space-y-4 rounded-xl border border-gray-100 p-5 print:border-gray-300">
                    <div className="flex flex-col gap-2 md:flex-row md:items-start md:justify-between">
                      <div>
                        <div className="flex items-center gap-2">
                          <span className="rounded-full bg-teal-100 px-2 py-0.5 text-xs font-semibold text-teal-700 print:border print:border-teal-600 print:bg-white">
                            {detail.companyLabel}
                          </span>
                          <h3 className="text-lg font-semibold text-gray-900">{detail.project}</h3>
                        </div>
                        <p className="mt-1 text-sm text-gray-500 print:text-black">
                          役割規模: {detail.roleScale}｜チーム構成: {detail.teamStructure}
                        </p>
                      </div>
                      <p className="text-sm font-medium text-teal-600 print:text-black">{detail.period}</p>
                    </div>
                    <div className="grid gap-4 lg:grid-cols-2">
                      <div>
                        <h4 className="text-sm font-semibold text-gray-900">担当業務</h4>
                        <ul className="mt-2 space-y-2 text-sm text-gray-600 print:text-black">
                          {detail.responsibilities.map((responsibility) => (
                            <li key={responsibility} className="relative pl-4">
                              <span className="absolute left-0 top-2 h-1.5 w-1.5 rounded-full bg-gray-300" />
                              {responsibility}
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div>
                        <h4 className="text-sm font-semibold text-gray-900">習得スキル・工夫</h4>
                        <ul className="mt-2 space-y-2 text-sm text-gray-600 print:text-black">
                          {detail.learnedSkills.map((skill) => (
                            <li key={skill} className="relative pl-4">
                              <span className="absolute left-0 top-2 h-1.5 w-1.5 rounded-full bg-teal-400" />
                              {skill}
                            </li>
                          ))}
                        </ul>
                        <p className="mt-3 rounded-lg bg-gray-50 p-3 text-xs text-gray-500 print:bg-white print:text-black">
                          {detail.comment}
                        </p>
                      </div>
                    </div>
                    <div className="grid gap-3 sm:grid-cols-2">
                      <DetailListItem label="使用言語" value={detail.languages.join(" / ")} />
                      <DetailListItem label="DB" value={detail.db} />
                      <DetailListItem label="サーバOS / 実行環境" value={detail.os} />
                      <DetailListItem label="FW・MW・ツール等" value={detail.tools.join(" / ")} />
                    </div>
                    <div>
                      <h4 className="text-sm font-semibold text-gray-900">担当工程</h4>
                      <div className="mt-2 flex flex-wrap gap-2">
                        {detail.phases.map((phase) => {
                          const covered = detail.phaseCoverage.includes(phase)
                          return (
                            <span
                              key={phase}
                              className={`rounded-full border px-3 py-1 text-xs font-medium ${
                                covered
                                  ? "border-teal-500 bg-teal-500 text-white print:border-teal-700 print:bg-white print:text-teal-800"
                                  : "border-gray-200 bg-gray-100 text-gray-500 print:border-gray-300 print:bg-white print:text-gray-600"
                              }`}
                            >
                              {phase}
                            </span>
                          )
                        })}
                      </div>
                    </div>
                  </section>
                ))}
              </div>
            </article>

            <article className="rounded-2xl bg-white p-7 shadow-sm print:border print:border-gray-300 print:shadow-none">
              <h2 className="text-xl font-semibold text-gray-900">参画プロジェクト</h2>
              <div className="mt-6 space-y-8">
                {projects.map((project) => (
                  <section key={`${project.name}-${project.period}`} className="space-y-3 border-b border-gray-100 pb-6 last:border-none last:pb-0">
                    <div className="flex flex-col gap-1 md:flex-row md:items-baseline md:justify-between">
                      <h3 className="text-lg font-semibold text-gray-900">{project.name}</h3>
                      <p className="text-sm font-medium text-teal-600 print:text-black">{project.period}</p>
                    </div>
                    <p className="text-sm text-gray-500 print:text-black">クライアント: {project.client}</p>
                    <p className="text-sm text-gray-500 print:text-black">担当: {project.role}｜チーム規模: {project.teamSize}名</p>
                    <p className="text-sm leading-relaxed text-gray-600 print:text-black">{project.summary}</p>
                    <div className="grid gap-3 lg:grid-cols-2">
                      <div>
                        <h4 className="text-sm font-semibold text-gray-900">主な役割</h4>
                        <ul className="mt-2 space-y-2 text-sm text-gray-600 print:text-black">
                          {project.responsibilities.map((responsibility) => (
                            <li key={responsibility} className="relative pl-4">
                              <span className="absolute left-0 top-2 h-1.5 w-1.5 rounded-full bg-gray-300" />
                              {responsibility}
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div>
                        <h4 className="text-sm font-semibold text-gray-900">技術スタック</h4>
                        <ul className="mt-2 flex flex-wrap gap-2 text-sm text-gray-600 print:text-black">
                          {project.techStack.map((tech) => (
                            <li key={tech} className="rounded-full bg-teal-50 px-3 py-1 text-xs font-medium text-teal-700 print:border print:border-teal-500 print:bg-white print:text-teal-700">
                              {tech}
                            </li>
                          ))}
                        </ul>
                        <h4 className="mt-4 text-sm font-semibold text-gray-900">成果</h4>
                        <ul className="mt-2 space-y-2 text-sm text-gray-600 print:text-black">
                          {project.achievements.map((achievement) => (
                            <li key={achievement} className="relative pl-4">
                              <span className="absolute left-0 top-2 h-1.5 w-1.5 rounded-full bg-teal-400" />
                              {achievement}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </section>
                ))}
              </div>
            </article>

            <article className="rounded-2xl bg-white p-7 shadow-sm print:border print:border-gray-300 print:shadow-none">
              <h2 className="text-xl font-semibold text-gray-900">職務経歴</h2>
              <div className="mt-4 space-y-4">
                {jobHistories.map((job) => (
                  <div key={`${job.company}-${job.period}`} className="rounded-xl border border-gray-100 p-4 print:border-gray-300">
                    <div className="flex flex-col gap-1 md:flex-row md:items-baseline md:justify-between">
                      <h3 className="text-sm font-semibold text-gray-900">{job.company}</h3>
                      <p className="text-sm font-medium text-teal-600 print:text-black">{job.period}</p>
                    </div>
                    <p className="text-xs text-gray-500 print:text-black">{job.employmentType}｜{job.position}</p>
                    <p className="mt-2 text-sm text-gray-600 print:text-black">事業内容: {job.business}</p>
                    <p className="mt-1 text-sm text-gray-600 print:text-black">{job.description}</p>
                  </div>
                ))}
              </div>
            </article>
          </div>

          <aside className="space-y-7">
            <section className="rounded-2xl bg-white p-6 shadow-sm print:border print:border-gray-300 print:shadow-none">
              <h2 className="text-lg font-semibold text-gray-900">コアスキル / 強み</h2>
              <ul className="mt-3 space-y-2 text-sm leading-relaxed text-gray-600 print:text-black">
                {expertise.map((item) => (
                  <li key={item} className="relative pl-4">
                    <span className="absolute left-0 top-2 h-1.5 w-1.5 rounded-full bg-teal-500" />
                    {item}
                  </li>
                ))}
              </ul>
            </section>

            <section className="rounded-2xl bg-white p-6 shadow-sm print:border print:border-gray-300 print:shadow-none">
              <h2 className="text-lg font-semibold text-gray-900">得意技術</h2>
              <ul className="mt-3 space-y-2 text-sm text-gray-600 print:text-black">
                {strongTechnologies.map((tech) => (
                  <li key={tech} className="relative pl-4">
                    <span className="absolute left-0 top-2 h-1.5 w-1.5 rounded-full bg-gray-300" />
                    {tech}
                  </li>
                ))}
              </ul>
            </section>

            <section className="rounded-2xl bg-white p-6 shadow-sm print:border print:border-gray-300 print:shadow-none">
              <h2 className="text-lg font-semibold text-gray-900">得意業務</h2>
              <ul className="mt-3 space-y-2 text-sm text-gray-600 print:text-black">
                {strongWorks.map((work) => (
                  <li key={work} className="relative pl-4">
                    <span className="absolute left-0 top-2 h-1.5 w-1.5 rounded-full bg-gray-300" />
                    {work}
                  </li>
                ))}
              </ul>
            </section>

            <section className="rounded-2xl bg-white p-6 shadow-sm print:border print:border-gray-300 print:shadow-none">
              <h2 className="text-lg font-semibold text-gray-900">技術要件</h2>
              <div className="mt-4 space-y-4">
                {technicalSkills.map((skill) => (
                  <div key={skill.category}>
                    <h3 className="text-sm font-semibold text-gray-700">{skill.category}</h3>
                    <p className="mt-1 text-sm text-gray-600 print:text-black">{skill.items.join(" / ")}</p>
                  </div>
                ))}
              </div>
            </section>

            <section className="rounded-2xl bg-white p-6 shadow-sm print:border print:border-gray-300 print:shadow-none">
              <h2 className="text-lg font-semibold text-gray-900">稼働状況</h2>
              <p className="mt-2 text-sm font-medium text-teal-700 print:text-black">{availability.status}</p>
              <p className="mt-1 text-sm text-gray-600 print:text-black">開始目安: {availability.startDate}</p>
              <p className="mt-2 text-sm text-gray-600 print:text-black">{availability.note}</p>
            </section>

            <section className="rounded-2xl bg-white p-6 shadow-sm print:border print:border-gray-300 print:shadow-none">
              <h2 className="text-lg font-semibold text-gray-900">学歴</h2>
              <ul className="mt-3 space-y-3 text-sm text-gray-600 print:text-black">
                {education.map((item) => (
                  <li key={`${item.organization}-${item.period}`}>
                    <p className="font-medium text-gray-900">{item.organization}</p>
                    <p>{item.period}</p>
                    <p className="mt-1 text-xs text-gray-500 print:text-black">{item.detail}</p>
                  </li>
                ))}
              </ul>
            </section>

            <section className="rounded-2xl bg-white p-6 shadow-sm print:border print:border-gray-300 print:shadow-none">
              <h2 className="text-lg font-semibold text-gray-900">資格</h2>
              <ul className="mt-3 space-y-2 text-sm text-gray-600 print:text-black">
                {certifications.map((certification) => (
                  <li key={certification}>{certification}</li>
                ))}
              </ul>
            </section>
          </aside>
        </section>
      </div>
    </main>
  )
}

type DetailListItemProps = {
  label: string
  value: string
}

function DetailListItem({ label, value }: DetailListItemProps) {
  return (
    <div className="flex flex-col gap-1 rounded-lg bg-gray-50 p-3 text-xs text-gray-600 print:border print:border-gray-300 print:bg-white print:text-black">
      <span className="font-semibold text-gray-900">{label}</span>
      <span>{value}</span>
    </div>
  )
}

