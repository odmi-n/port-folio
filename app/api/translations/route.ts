import { type NextRequest, NextResponse } from "next/server"

const translations = {
  ja: {
    siteTitle: "山田太郎 ポートフォリオ",
    nav: {
      home: "ホーム",
      career: "経歴",
      contact: "お問い合わせ",
    },
    hero: {
      name: "山田太郎",
      title: "フルスタックエンジニア",
      catchCopy: "要件定義からPM、デザインまで。AIと共に実装する爆速エンジニア",
      intro: "Web開発5年の経験。要件定義から設計・開発・PMまで一貫して担当できます。",
    },
    career: {
      title: "経歴",
      items: [
        {
          period: "2021/04 - 現在",
          position: "シニアエンジニア",
          company: "株式会社XYZ",
          description:
            "自社プロダクトのフルスタック開発をリード。要件定義からPM業務まで幅広く担当し、開発チームの生産性向上に貢献。",
        },
        {
          period: "2019/04 - 2021/03",
          position: "フロントエンドエンジニア",
          company: "株式会社ABC",
          description:
            "React/Next.jsを用いたWebアプリケーション開発を担当。UIコンポーネントの設計・実装からパフォーマンス最適化まで幅広く経験。",
        },
      ],
    },
    contact: {
      title: "お問い合わせ",
      nameLabel: "お名前",
      emailLabel: "メールアドレス",
      messageLabel: "お問い合わせ内容",
      submitLabel: "送信",
      successMessage: "メッセージが送信されました。ご連絡ありがとうございます。",
      errorMessage: "送信に失敗しました。時間をおいて再度お試しください。",
      nameRequired: "お名前を入力してください。",
      emailRequired: "メールアドレスを入力してください。",
      emailInvalid: "メールアドレスを正しく入力してください。",
      messageRequired: "お問い合わせ内容を入力してください。",
    },
    footer: {
      copyright: "© 2025 山田太郎. All rights reserved.",
    },
  },
  en: {
    siteTitle: "Taro Yamada Portfolio",
    nav: {
      home: "Home",
      career: "Career",
      contact: "Contact",
    },
    hero: {
      name: "Taro Yamada",
      title: "Full-Stack Engineer",
      catchCopy: "From requirements to PM and design – a lightning-fast engineer coding alongside AI.",
      intro:
        "5 years of web development experience. Capable of handling everything from requirements definition to design, development, and project management.",
    },
    career: {
      title: "Career",
      items: [
        {
          period: "Apr 2021 - Present",
          position: "Senior Engineer",
          company: "XYZ Corp.",
          description:
            "Leading full-stack development of in-house products. Handling everything from requirements definition to PM tasks, contributing to team productivity improvement.",
        },
        {
          period: "Apr 2019 - Mar 2021",
          position: "Frontend Engineer",
          company: "ABC Inc.",
          description:
            "Developed web applications using React/Next.js. Experienced in UI component design, implementation, and performance optimization.",
        },
      ],
    },
    contact: {
      title: "Contact",
      nameLabel: "Name",
      emailLabel: "Email",
      messageLabel: "Message",
      submitLabel: "Submit",
      successMessage: "Your message has been sent. Thank you for reaching out.",
      errorMessage: "Failed to send. Please try again later.",
      nameRequired: "Please enter your name.",
      emailRequired: "Please enter your email address.",
      emailInvalid: "Please enter a valid email address.",
      messageRequired: "Please enter a message.",
    },
    footer: {
      copyright: "© 2025 Taro Yamada. All rights reserved.",
    },
  },
}

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url)
  const lang = searchParams.get("lang") || "ja"

  return NextResponse.json(translations[lang as keyof typeof translations] || translations.ja)
}
