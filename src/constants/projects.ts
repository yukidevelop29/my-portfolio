export interface Project {
  id: string;
  title: string;
  category: "Game" | "Web" | "Coding";
  tags: string[];
  description: string;
  points: string[]; // こだわりポイント
  techStack: string[];
  images: string[]; // サムネイル画像パス
  github?: string; // GitHubリンク（任意）
  demo?: string; // デモサイトリンク（任意）
}

export const PROJECTS: Project[] = [
  {
    id: "meteoritebuster",
    title: "メテオライトバスター",
    category: "Game",
    tags: ["Unity", "C#", "Planning", "元気玉"],
    description:
      "次々と飛来する隕石を迎撃し、地球を死守するシューティングゲームです。",
    points: [
      "リソース管理とアクション",
      "シンプルな操作に潜むジレンマ",
      "展開のメリハリ",
    ],
    techStack: ["Unity", "C#"],
    images: [
      "/images/projects/mb_1.png",
      "/images/projects/mb_2.png",
      "/images/projects/mb_3.png",
    ],
    demo: "https://play.google.com/store/apps/details?id=com.garhijp.meteoritebuster",
  },
  {
    id: "cyoukokukahenomichi",
    title: "彫刻家への道",
    category: "Game",
    tags: ["Unity", "C#", "Planning", "元気玉"],
    description:
      "彫刻刀を用いて木製パネルを規定回数削り、彫像を完成させるパズルゲームです。",
    points: [
      "パズルの戦略性と、彫刻特有の質感の両立",
      "間口の広さと奥行きのあるレベルデザイン",
      "物理演算を活用した演出",
    ],
    techStack: ["Unity", "C#"],
    images: ["/images/projects/cyoukokuka.png"],
    demo: "https://play.google.com/store/apps/details?id=com.garhijp.cyoukokukahenomichi",
  },
  {
    id: "kurayamimeirokaranodassyutsu",
    title: "暗闇迷路からの脱出",
    category: "Game",
    tags: ["Unity", "C#", "Planning", "元気玉"],
    description:
      "「穴掘り法」による迷路自動生成アルゴリズムを用いた、ダンジョン探索型脱出ゲームです。",
    points: [
      "アルゴリズムへの付加価値",
      "「視界」と「リソース」を連動させたシステム",
      "没入感を高める「明かり」の表現",
    ],
    techStack: ["Unity", "C#"],
    images: ["/images/projects/kurayamimeiro.png"],
    demo: "https://play.google.com/store/apps/details?id=com.garhijp.kurayamimeirokaranodassyutsu",
  },
  {
    id: "keidorospy",
    title: "ケイドロスパイ",
    category: "Game",
    tags: ["Unity", "C#", "Planning", "元気玉"],
    description:
      "スパイとして潜入し、敵対する二つの陣営（警察・ドロボウ）に変装しながら任務を遂行するアクションゲームです。",
    points: [
      "変装状態に応じてキャラクターの権限や制約が動的に変化",
      "自由度とリプレイ性の追求",
    ],
    techStack: ["Unity", "C#"],
    images: ["/images/projects/keidorospy.png"],
    demo: "https://play.google.com/store/apps/details?id=com.garhijp.keidorospy",
  },
  {
    id: "shimaenagatohiyoko",
    title: "シマエナガとヒヨコ",
    category: "Game",
    tags: ["Unity", "C#", "元気玉"],
    description: "シンプルなモグラ叩きゲームです。",
    points: [],
    techStack: ["Unity", "C#"],
    images: ["/images/projects/shimaenaga.png"],
    demo: "https://play.google.com/store/apps/details?id=com.garhijp.shimaenagatohiyoko",
  },
  {
    id: "korokorosaikorobattle",
    title: "コロコロさいころバトル",
    category: "Game",
    tags: ["Unity", "C#", "元気玉"],
    description:
      "サイコロの出目で戦うゲームです。アイテムを使用することでダメージを増減させたり、回復したりできます。",
    points: [],
    techStack: ["Unity", "C#"],
    images: ["/images/projects/korokoro.png"],
    demo: "https://play.google.com/store/apps/details?id=com.garhijp.korokorosaikorobattle",
  },
  {
    id: "joutoumochimakicatch",
    title: "上棟餅まきキャッチ",
    category: "Game",
    tags: ["Unity", "C#", "元気玉"],
    description: "降ってくるお菓子をキャッチしてハイスコアを競うゲームです。",
    points: [],
    techStack: ["Unity", "C#"],
    images: ["/images/projects/mochimaki.png"],
    demo: "https://play.google.com/store/apps/details?id=com.garhijp.joutoumochimakicatch",
  },
  {
    id: "docchigacooljankenshinpan",
    title: "どっちがクール？じゃんけん審判",
    category: "Game",
    tags: ["Unity", "C#", "元気玉"],
    description: "じゃんけんで勝った方の手を瞬時に選択し続けるゲームです。",
    points: [],
    techStack: ["Unity", "C#"],
    images: ["/images/projects/jankenshinpan.png"],
    demo: "https://play.google.com/store/apps/details?id=com.garhijp.docchigacooljankenshinpan",
  },
  {
    id: "jouzunihomeyou",
    title: "じょうずにほめよう！",
    category: "Game",
    tags: ["Unity", "C#", "元気玉"],
    description: "選択肢から適切なセリフを選び、上手に褒めてあげるゲームです。",
    points: [],
    techStack: ["Unity", "C#"],
    images: ["/images/projects/jouzunihomeyou.png"],
    demo: "https://play.google.com/store/apps/details?id=com.garhijp.jouzunihomeyou",
  },
  {
    id: "takoyakitsukurou",
    title: "たこやきつくろう！",
    category: "Game",
    tags: ["Unity", "C#", "元気玉"],
    description: "タイミングを計ってたこ焼きをひっくり返すゲームです。",
    points: ["パーティクルを使用した湯気の表現"],
    techStack: ["Unity", "C#"],
    images: ["/images/projects/takoyaki.png"],
    demo: "https://play.google.com/store/apps/details?id=com.garhijp.takoyakitsukurou",
  },
  {
    id: "iseitsuushin",
    title: "異星通信",
    category: "Game",
    tags: ["Unity", "C#", "Planning", "Unity1Week"],
    description:
      "「Unity1Week（お題：おくる）」にて制作した、ゲームブック風のアドベンチャーゲームです。",
    points: ["動的なシナリオ変化", "エンディングの総括", "画像生成AIの活用"],
    techStack: ["Unity", "C#"],
    images: ["/images/projects/iseitsuushin.png"],
  },
  {
    id: "capturetheflag",
    title: "Capture The Flag",
    category: "Game",
    tags: ["Unity", "C#", "PHP", "MySQL"],
    description:
      "広大な3Dフィールドを探索し、隠された旗を発見するまでのタイムを競う3Dアクションゲームです。",
    points: [
      "モダンなライブラリの活用",
      "探索の楽しさを支えるレベルデザイン",
      "ランキングシステムの実装",
    ],
    techStack: ["Unity", "C#", "PHP", "MySQL"],
    images: ["/images/projects/flag.png"],
  },
  {
    id: "gyousyousimuration",
    title: "Capture The Flag",
    category: "Game",
    tags: ["Unity", "C#", "Planning"],
    description:
      "街から街へと渡り歩き、特産品の売買を通じて富を築く、スマートフォン向けの放置型経営シミュレーションゲームです。",
    points: [
      "リソース投資による成長サイクル",
      "地域別の経済性",
      "ランダムイベントの実装",
    ],
    techStack: ["Unity", "C#"],
    images: ["/images/projects/gyousyou.png"],
  },
  {
    id: "adventure",
    title: "Adventure（仮）",
    category: "Game",
    tags: ["Unity", "C#", "Planning", "開発中"],
    description:
      "古典的な名作アドベンチャー『シャドウゲイト』のゲーム性を元にした、探索型コマンドアドベンチャーゲームです。",
    points: [
      "キャラクターとの会話や情報収集が中心となる昼フェーズ",
      "コマンド選択で探索していく夜フェーズ",
      "レトロなインターフェースの現代化",
    ],
    techStack: ["Unity", "C#"],
    images: ["/images/projects/adventure.png"],
  },
  {
    id: "html-css-kadai",
    title: "HTMLとCSSによるページ作成課題",
    category: "Coding",
    tags: ["HTML", "CSS"],
    description:
      "提示されたデザイン（PDF）を元に、フレームワークを一切使用せず、HTML5とCSS3のみでWebページを完全再現するコーディング課題です。",
    points: [
      "セマンティックなHTML設計",
      "CSS設計と保守性",
      "徹底したマルチデバイス（レスポンシブ）対応",
    ],
    techStack: ["HTML5", "CSS3", "JavaScript"],
    images: ["/images/projects/harikyu.png"],
    demo: "https://yukidevelop29.github.io/harikyu/",
  },
  {
    id: "genkidama-hp",
    title: "元気玉HP再現課題",
    category: "Coding",
    tags: ["HTML", "CSS", "JavaScript"],
    description:
      "「元気玉！SDGs的療育ゲームプロジェクト」の公式サイトをモデルとした、高度なWebサイト再現課題です。",
    points: [
      "JavaScriptによるハンバーガーメニューの自前実装",
      "Flexboxを用いた複雑なカードレイアウトの構築",
      "徹底したマルチデバイス（レスポンシブ）対応",
    ],
    techStack: ["HTML5", "CSS3", "JavaScript"],
    images: ["/images/projects/genkidama-hp.png"],
    demo: "https://yukidevelop29.github.io/genkidama/",
  },
  {
    id: "weather-app",
    title: "天気予報アプリ",
    category: "Web",
    tags: ["React", "Next.js", "OpenWeatherMap"],
    description:
      "外部APIを利用し、都市名を入力することで現在の天気および5日間の天気予報を取得・表示するWebアプリケーションです。",
    points: [
      "再利用性と保守性を意識したコンポーネント分割",
      "都市検索機能",
      "5日間予報表示",
    ],
    techStack: ["Next.js", "Tailwind CSS"],
    images: ["/images/projects/weather.png"],
  },
  {
    id: "todo-app",
    title: "ToDoアプリ",
    category: "Web",
    tags: ["React", "Next.js", "Prisma", "PostgreSQL"],
    description:
      "NextAuth.jsによる認証やPrismaを用いたDB操作を含む、実務的なタスク管理アプリです。",
    points: [
      "NextAuth.jsによるセキュアな認証基盤",
      "カテゴリとタスクの1対多リレーション設計",
      "優先度・期限による複合ソートロジック",
    ],
    techStack: [
      "Next.js",
      "Tailwind CSS",
      "Prisma",
      "PostgreSQL",
      "NextAuth.js",
    ],
    images: ["/images/projects/todo.png"],
  },
];
