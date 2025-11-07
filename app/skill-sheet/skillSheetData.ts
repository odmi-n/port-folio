// NOTE: スキルシートのモックデータはこのファイルに集約しています。

export const skillSheetData = {
  profile: {
    name: "諏訪 巧実 / Takumi Suwa",
    role: "フロントエンドエンジニア",
    affiliation: "株式会社WAOTECH / フリーランスエンジニア",
    age: "21歳",
    gender: "男性",
    location: "茨城県つくば市（リモート可）",
    nearestStation: "つくばエクスプレス つくば駅",
    summary:
      "要件整理から実装・運用まで伴走できるフルスタックエンジニア。生成AIとTypeScriptを活用したモダンな開発を得意とし、スクラムでのチーム開発経験と教育現場での指導経験を併せ持つ。",
  },
  contact: {
    email: "contact@example.com",
    github: "https://github.com/odmi-n",
    x: "https://x.com/UNDERCONST",
    website: "https://portfolio.example.com",
  },
  availability: {
    status: "平日夜・週末での開発/保守支援、短期PoC",
    startDate: "即日 / 調整可能",
    note: "フルリモートでの参画が可能。英語でのコミュニケーションも対応可能。",
  },
  expertise: [
    "生成AIを活用した要件定義・PoC構築",
    "Next.js / Reactを中心としたフロントエンド実装",
    "Python / DjangoでのAPI設計とバッチ処理",
    "クラウド（AWS / GCP）・CI/CD・監視体制の整備",
  ],
  strongTechnologies: [
    "Next.js / React / TypeScript",
    "Tailwind CSS / デザインシステム構築",
    "Python / Django / FastAPI",
    "AWS（Lambda / S3 / CloudFront）",
    "GCP（Cloud Functions / BigQuery）",
    "生成AI API（OpenAI / Azure OpenAI / Vertex AI）",
  ],
  strongWorks: [
    "新規サービスの0→1開発における仕様策定とPoC構築",
    "生成AIを活用した業務改善・プロトタイピング",
    "既存SaaSのUI刷新とパフォーマンス最適化",
    "スクラムでの開発推進と開発チームの育成支援",
    "データ観点からの施策検証と継続的改善",
  ],
  technicalSkills: [
    {
      category: "言語",
      items: ["TypeScript", "Python", "SQL", "Go(学習中)"]
    },
    {
      category: "フレームワーク・ライブラリ",
      items: ["Next.js", "React", "Express", "Django", "Tailwind CSS"]
    },
    {
      category: "インフラ・ツール",
      items: ["AWS", "GCP", "Cloudflare", "Docker", "GitHub Actions"]
    },
    {
      category: "マネジメント・その他",
      items: ["スクラム開発", "プロジェクトマネジメント", "テクニカルライティング", "メンターリング"]
    }
  ],
  jobHistories: [
    {
      company: "A社（株式会社WAOTECH）",
      period: "2023.04 - 現在",
      employmentType: "業務委託（週3-4日）",
      position: "フロントエンドエンジニア / テックリード補佐",
      business: "自社教育SaaSおよび生成AIサービスの開発・運用",
      description: "UI刷新や生成AI API連携、チーム開発の標準化を担当。メンターとして学生エンジニア育成にも従事。",
    },
    {
      company: "B社（ヘルスケアスタートアップ）",
      period: "2023.09 - 2023.12",
      employmentType: "業務委託",
      position: "フルスタックエンジニア",
      business: "医療データの検索・要約プラットフォームのPoC開発",
      description: "Azure OpenAIとLangChainを活用したサマリー生成と評価環境を構築。",
    },
    {
      company: "C社（地方自治体DX推進室）",
      period: "2022.11 - 2023.08",
      employmentType: "業務委託",
      position: "バックエンドエンジニア / テクニカルサポート",
      business: "LINEミニアプリを活用した市民向け通知サービス運用",
      description: "データ分析基盤と通知設計の改善、職員向け研修やQA対応を担当。",
    },
  ],
  dutyDetails: [
    {
      companyLabel: "A社",
      period: "2025年1月 - 2025年10月（10ヶ月）",
      project: "自社プログラミング教育サービスのWebアプリ開発",
      roleScale: "PG",
      teamStructure: "PM 1名 / バックエンド担当 2名 / PG 5名（案件全体：約25名）",
      responsibilities: [
        "フロントエンドの実装およびバックエンド仕様の調査・整備",
        "ローンチに向けたコーディング、各種テストとプログラム修正",
        "バックエンドを内製化できるようドキュメントテンプレートを整備",
      ],
      learnedSkills: [
        "基本的なビジネススキル・リモートでの業務遂行",
        "複数プロジェクトに跨るテスト項目の設計と自動化",
      ],
      comment:
        "全国展開を見据え、処理の効率化と障害対応手順の標準化を推進。宣言方法を統一し、共有と保守の容易さを向上。",
      languages: ["TypeScript", "SQL", "Python"],
      db: "MySQL",
      os: "Amazon Linux",
      tools: ["Docker", "GitHub", "Slack", "Django", "React"],
      phases: ["要件定義", "基本設計", "詳細設計", "実装・単体", "結合テスト", "総合テスト", "保守・運用"],
      phaseCoverage: ["詳細設計", "実装・単体", "結合テスト", "保守・運用"],
    },
    {
      companyLabel: "B社",
      period: "2023年9月 - 2023年12月（4ヶ月）",
      project: "生成AIサマリーツール PoC 構築",
      roleScale: "SE",
      teamStructure: "PdM 1名 / エンジニア 3名 / データサイエンティスト 1名",
      responsibilities: [
        "医療ドキュメントのベクトルDB化と検索APIの実装",
        "Azure OpenAIを用いた要約プロンプト設計・評価フローの整備",
        "医療情報ガイドラインに準拠したログ・監査手順の策定",
      ],
      learnedSkills: [
        "医療データの取扱い基準を踏まえたセキュアな実装",
        "PoC段階での仮説検証と指標設計",
      ],
      comment:
        "短期間で意思決定できるよう、評価レポートと改善チケットのテンプレートを整備して開発ループを高速化。",
      languages: ["TypeScript", "Python"],
      db: "Supabase (PostgreSQL)",
      os: "GCP (Cloud Run)",
      tools: ["LangChain", "Azure OpenAI", "Supabase", "Notion", "Slack"],
      phases: ["要件定義", "基本設計", "詳細設計", "実装・単体", "結合テスト", "総合テスト", "保守・運用"],
      phaseCoverage: ["要件定義", "基本設計", "実装・単体"],
    },
    {
      companyLabel: "C社",
      period: "2022年11月 - 2023年8月（10ヶ月）",
      project: "LINEミニアプリの運用改善・分析基盤整備",
      roleScale: "バックエンドエンジニア",
      teamStructure: "PM 1名 / 分析担当 2名 / 開発 4名 / サポート 1名",
      responsibilities: [
        "利用状況分析のためのBigQueryスキーマ設計とバッチ開発",
        "通知シナリオ改善を目的としたA/Bテスト自動化",
        "自治体職員向けの操作マニュアル作成と研修実施",
      ],
      learnedSkills: [
        "多様な関係者との調整とヘルプデスク対応",
        "データドリブンな施策検証と改善提案",
      ],
      comment:
        "障害対応時間を半減させるため、監視アラートと復旧手順を体系化。市民向け通知の効果測定をレポーティング。",
      languages: ["Python", "SQL"],
      db: "BigQuery",
      os: "Google Cloud Functions",
      tools: ["Docker", "GitHub", "LINE Messaging API", "DataStudio", "Slack"],
      phases: ["要件定義", "基本設計", "詳細設計", "実装・単体", "結合テスト", "総合テスト", "保守・運用"],
      phaseCoverage: ["実装・単体", "結合テスト", "総合テスト", "保守・運用"],
    },
  ],
  projects: [
    {
      name: "教育系SaaSのUI刷新と生成AI API連携",
      period: "2024.04 - 2025.01",
      client: "教育事業会社",
      teamSize: 6,
      role: "フロントエンドリード / テックリード",
      summary:
        "既存SaaSをNext.jsベースで再設計し、生成AI APIを用いたレコメンド機能を構築。UI/UX改善とパフォーマンス最適化をリード。",
      responsibilities: [
        "要件定義とステークホルダー折衝、画面仕様策定",
        "Atomic DesignベースのUIコンポーネントを設計・運用",
        "生成AI APIの検証とプロンプトチューニング、監視体制構築",
        "CI/CDパイプライン整備とエラートラッキング導入"
      ],
      techStack: ["Next.js", "TypeScript", "Tailwind CSS", "OpenAI API", "Cloudflare Workers", "Vercel"],
      achievements: [
        "ページ読み込み速度を 40% 改善し、直帰率を 18% 改善",
        "生成AIによる学習プラン自動提案機能でユーザー利用率が 1.5 倍に増加"
      ]
    },
    {
      name: "生成AIサマリーツールのPoC開発",
      period: "2023.09 - 2023.12",
      client: "ヘルスケアスタートアップ",
      teamSize: 4,
      role: "フルスタックエンジニア",
      summary:
        "医療データの要約と検索を行うPoCを構築。セキュアなデータ取り扱いとプロンプト設計を担当。",
      responsibilities: [
        "医療データの前処理とベクトルDBへの投入パイプラインを構築",
        "Next.jsとTypeScriptでのUI実装と認証基盤の構築",
        "Azure OpenAIを利用した要約プロンプト設計と評価",
        "PoC検証用のダッシュボードとレポートを実装"
      ],
      techStack: ["Next.js", "TypeScript", "Python", "LangChain", "Azure OpenAI", "Supabase"],
      achievements: [
        "サマリー検証プロセスを自動化し、検証コストを月 30 時間削減",
        "データ取り扱い方針を整理し、医療情報ガイドラインへの対応方針を確立"
      ]
    },
    {
      name: "LINEミニアプリの運用改善",
      period: "2022.11 - 2023.08",
      client: "地方自治体プロジェクト",
      teamSize: 8,
      role: "バックエンドエンジニア / テックサポート",
      summary:
        "LINEミニアプリの利用状況分析基盤を整備し、通知シナリオの最適化を行った。",
      responsibilities: [
        "Python + GCPでの分析バッチとBigQueryスキーマ設計",
        "LINE Messaging APIとの連携とWebhookの保守",
        "テスト自動化と開発者向けドキュメントの整備",
        "自治体職員向けの操作研修やQA対応"
      ],
      techStack: ["Python", "GCP", "BigQuery", "Cloud Functions", "LINE Messaging API", "Docker"],
      achievements: [
        "通知文面ABテストでクリック率を 22% 改善",
        "障害対応時間を平均 60% 短縮"
      ]
    }
  ],
  education: [
    {
      organization: "筑波大学 知識情報・図書館学類",
      period: "2022.04 - 在学中",
      detail: "情報学・データサイエンスを中心に、教育工学とサービスデザインを研究。"
    },
    {
      organization: "茨城県立 〇〇高等学校",
      period: "2019.04 - 2022.03",
      detail: "理数科にて情報工学・数学研究班に所属。"
    }
  ],
  certifications: [
    "応用情報技術者 (2024)",
    "AWS Certified Solutions Architect – Associate (2023)",
    "LINE ミニアプリ開発認定 (2023)",
    "TOEIC 820 (2024)"
  ],
} as const

export type SkillSheetData = typeof skillSheetData

