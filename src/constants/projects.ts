export interface Project {
  id: string;
  title: string;
  category: "Game:元気玉" | "Game:その他" | "Web" | "Coding";
  tags: string[];
  description: string;
  longDescription: string;
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
    category: "Game:元気玉",
    tags: ["Unity", "C#", "Planning", "元気玉"],
    description:
      "次々と飛来する隕石を迎撃し、地球を死守するシューティングゲームです。",
    longDescription:
      "次々と飛来する隕石を迎撃し、地球を死守するシューティングゲームです。通常の隕石を凌ぎつつ、最終目標である「超巨大隕石」を撃破するために「スーパーチャージビーム」を溜めて放つという、リソース管理とアクションを融合させた内容です。",
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
    category: "Game:元気玉",
    tags: ["Unity", "C#", "Planning", "元気玉"],
    description:
      "彫刻刀を用いて木製パネルを規定回数削り、彫像を完成させるパズルゲームです。",
    longDescription:
      "彫刻刀を用いて木製パネルを規定回数削り、彫像を完成させるパズルゲームです。「削りすぎ厳禁」という制約の中で、パズルとしての戦略性と、彫刻特有の質感を両立させた作品です。",
    points: [
      "パズルの戦略性と、彫刻特有の質感の両立",
      "間口の広さと奥行きのあるレベルデザイン",
      "物理演算を活用した演出",
    ],
    techStack: ["Unity", "C#"],
    images: [
      "/images/projects/cm_1.png",
      "/images/projects/cm_2.png",
      "/images/projects/cm_3.png",
      "/images/projects/cm_4.png",
    ],
    demo: "https://play.google.com/store/apps/details?id=com.garhijp.cyoukokukahenomichi",
  },
  {
    id: "kurayamimeirokaranodassyutsu",
    title: "暗闇迷路からの脱出",
    category: "Game:元気玉",
    tags: ["Unity", "C#", "Planning", "元気玉"],
    description:
      "「穴掘り法」による迷路自動生成アルゴリズムを用いた、ダンジョン探索型脱出ゲームです。",
    longDescription:
      "「穴掘り法」による迷路自動生成アルゴリズムを用いた、ダンジョン探索型脱出ゲームです。限られた「松明の油（リソース）」を管理しながら、暗闇に閉ざされた迷路の踏破を目指します。",
    points: [
      "アルゴリズムへの付加価値",
      "「視界」と「リソース」を連動させたシステム",
      "没入感を高める「明かり」の表現",
    ],
    techStack: ["Unity", "C#"],
    images: [
      "/images/projects/kd_1.png",
      "/images/projects/kd_2.png",
      "/images/projects/kd_3.png",
    ],
    demo: "https://play.google.com/store/apps/details?id=com.garhijp.kurayamimeirokaranodassyutsu",
  },
  {
    id: "keidorospy",
    title: "ケイドロスパイ",
    category: "Game:元気玉",
    tags: ["Unity", "C#", "Planning", "元気玉"],
    description:
      "スパイとして潜入し、敵対する二つの陣営（警察・ドロボウ）に変装しながら任務を遂行するアクションゲームです。",
    longDescription:
      "スパイとして潜入し、敵対する二つの陣営（警察・ドロボウ）に変装しながら極秘任務を遂行するアクションゲームです。「変装による権限の変化」を軸に、パズル的な攻略要素を盛り込みました。",
    points: [
      "変装状態に応じてキャラクターの権限や制約が動的に変化",
      "自由度とリプレイ性の追求",
    ],
    techStack: ["Unity", "C#"],
    images: [
      "/images/projects/kds_1.png",
      "/images/projects/kds_2.png",
      "/images/projects/kds_3.png",
      "/images/projects/kds_4.png",
    ],
    demo: "https://play.google.com/store/apps/details?id=com.garhijp.keidorospy",
  },
  {
    id: "shimaenagatohiyoko",
    title: "シマエナガとヒヨコ",
    category: "Game:元気玉",
    tags: ["Unity", "C#", "元気玉"],
    description: "シンプルなモグラ叩きゲームです。",
    longDescription: "シンプルなモグラ叩きゲームです。",
    points: [],
    techStack: ["Unity", "C#"],
    images: ["/images/projects/shimaenaga.png"],
    demo: "https://play.google.com/store/apps/details?id=com.garhijp.shimaenagatohiyoko",
  },
  {
    id: "korokorosaikorobattle",
    title: "コロコロさいころバトル",
    category: "Game:元気玉",
    tags: ["Unity", "C#", "元気玉"],
    description:
      "サイコロの出目で戦うゲームです。アイテムを使用することでダメージを増減させたり、回復したりできます。",
    longDescription:
      "サイコロの出目で戦うゲームです。アイテムを使用することでダメージを増減させたり、回復したりできます。",
    points: ["アイテム使用時の固有アニメーション"],
    techStack: ["Unity", "C#"],
    images: ["/images/projects/korokoro.png"],
    demo: "https://play.google.com/store/apps/details?id=com.garhijp.korokorosaikorobattle",
  },
  {
    id: "joutoumochimakicatch",
    title: "上棟餅まきキャッチ",
    category: "Game:元気玉",
    tags: ["Unity", "C#", "元気玉"],
    description: "降ってくるお菓子をキャッチしてハイスコアを競うゲームです。",
    longDescription:
      "降ってくるお菓子をキャッチしてハイスコアを競うゲームです。",
    points: [],
    techStack: ["Unity", "C#"],
    images: ["/images/projects/mochimaki.png"],
    demo: "https://play.google.com/store/apps/details?id=com.garhijp.joutoumochimakicatch",
  },
  {
    id: "docchigacooljankenshinpan",
    title: "どっちがクール？じゃんけん審判",
    category: "Game:元気玉",
    tags: ["Unity", "C#", "元気玉"],
    description: "じゃんけんで勝った方の手を瞬時に選択し続けるゲームです。",
    longDescription: "じゃんけんで勝った方の手を瞬時に選択し続けるゲームです。",
    points: [],
    techStack: ["Unity", "C#"],
    images: ["/images/projects/jankenshinpan.png"],
    demo: "https://play.google.com/store/apps/details?id=com.garhijp.docchigacooljankenshinpan",
  },
  {
    id: "jouzunihomeyou",
    title: "じょうずにほめよう！",
    category: "Game:元気玉",
    tags: ["Unity", "C#", "元気玉"],
    description: "選択肢から適切なセリフを選び、上手に褒めてあげるゲームです。",
    longDescription:
      "選択肢から適切なセリフを選び、上手に褒めてあげるゲームです。",
    points: ["成否によるアニメーションの変化"],
    techStack: ["Unity", "C#"],
    images: ["/images/projects/jouzunihomeyou.png"],
    demo: "https://play.google.com/store/apps/details?id=com.garhijp.jouzunihomeyou",
  },
  {
    id: "takoyakitsukurou",
    title: "たこやきつくろう！",
    category: "Game:元気玉",
    tags: ["Unity", "C#", "元気玉"],
    description: "タイミングを計ってたこ焼きをひっくり返すゲームです。",
    longDescription: "タイミングを計ってたこ焼きをひっくり返すゲームです。",
    points: ["パーティクルを使用した湯気の表現"],
    techStack: ["Unity", "C#"],
    images: ["/images/projects/takoyaki.png"],
    demo: "https://play.google.com/store/apps/details?id=com.garhijp.takoyakitsukurou",
  },
  {
    id: "iseitsuushin",
    title: "異星通信",
    category: "Game:その他",
    tags: ["Unity", "C#", "Planning", "Unity1Week"],
    description:
      "「Unity1Week（お題：おくる）」にて制作した、ゲームブック風のアドベンチャーゲームです。",
    longDescription:
      "「Unity1Week（お題：おくる）」にて制作した、ゲームブック風のアドベンチャーゲームです。遠く離れた星で病床に伏す恋人へ、冒険中の出来事を「送る」という物語を、プレイヤーの選択肢による分岐システムで表現しました。",
    points: ["動的なシナリオ変化", "エンディングの総括", "画像生成AIの活用"],
    techStack: ["Unity", "C#"],
    images: [
      "/images/projects/it_1.png",
      "/images/projects/it_2.png",
      "/images/projects/it_3.png",
    ],
  },
  {
    id: "capturetheflag",
    title: "Capture The Flag",
    category: "Game:その他",
    tags: ["Unity", "C#", "PHP", "MySQL"],
    description:
      "広大な3Dフィールドを探索し、隠された旗を発見するまでのタイムを競う3Dアクションゲームです。",
    longDescription:
      "広大な3Dフィールドを探索し、隠された旗を発見するまでのタイムを競う3Dアクションゲームです。Unityのモダンな開発手法を網羅し、さらにサーバーサイド（PHP/MySQL）との連携によるランキング機能を実装しました。",
    points: [
      "モダンなライブラリの活用",
      "探索の楽しさを支えるレベルデザイン",
      "ランキングシステムの実装",
    ],
    techStack: ["Unity", "C#", "PHP", "MySQL"],
    images: [
      "/images/projects/flg_1.png",
      "/images/projects/flg_2.png",
      "/images/projects/flg_3.png",
    ],
  },
  {
    id: "gyousyousimuration",
    title: "Capture The Flag",
    category: "Game:その他",
    tags: ["Unity", "C#", "Planning"],
    description:
      "街から街へと渡り歩き、特産品の売買を通じて富を築く、スマートフォン向けの放置型経営シミュレーションゲームです。",
    longDescription:
      "街から街へと渡り歩き、特産品の売買を通じて富を築く、スマートフォン向けの放置型経営シミュレーションゲームです。リソース投資による成長サイクルと、移動中に発生するランダムイベントを軸としたゲームデザインを行いました。",
    points: [
      "リソース投資による成長サイクル",
      "地域別の経済性",
      "ランダムイベントの実装",
    ],
    techStack: ["Unity", "C#"],
    images: [
      "/images/projects/gs_1.png",
      "/images/projects/gs_2.png",
      "/images/projects/gs_3.png",
      "/images/projects/gs_4.png",
    ],
  },
  {
    id: "adventure",
    title: "Adventure（仮）",
    category: "Game:その他",
    tags: ["Unity", "C#", "Planning", "開発中"],
    description:
      "古典的な名作アドベンチャー『シャドウゲイト』のゲーム性を元にした、探索型コマンドアドベンチャーゲームです。",
    longDescription:
      "古典的な名作アドベンチャー『シャドウゲイト』のゲーム性を元にした、探索型コマンドアドベンチャーゲームです。「調べる」「取る」「使う」といった伝統的なコマンドシステムを軸に、物語の進行度に応じた「時間概念」を導入しています。",
    points: [
      "キャラクターとの会話や情報収集が中心となる昼フェーズ",
      "コマンド選択で探索していく夜フェーズ",
      "レトロなインターフェースの現代化",
    ],
    techStack: ["Unity", "C#"],
    images: ["/images/projects/adv_1.png", "/images/projects/adv_2.png"],
  },
  {
    id: "html-css-kadai",
    title: "HTMLとCSSによるページ作成課題",
    category: "Coding",
    tags: ["HTML", "CSS"],
    description:
      "提示されたデザイン（PDF）を元に、フレームワークを一切使用せず、HTML5とCSS3のみでWebページを完全再現するコーディング課題です。",
    longDescription:
      "提示されたデザイン（PDF）を元に、フレームワークを一切使用せず、HTML5とCSS3のみでWebページを完全再現するコーディング課題です。「ガルヒ鍼灸院」という架空の鍼灸院を想定し、実務に近いアクセシビリティとレスポンシブ性能を追求しました。",
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
    longDescription:
      "「元気玉！SDGs的療育ゲームプロジェクト」の公式サイトをモデルとした、高度なWebサイト再現課題です。鍼灸院の課題よりもさらに要素が多く、検索フォームやハッシュタグリスト、動的なメニュー実装など、実務レベルのフロントエンド実装スキルが求められる内容となっています。",
    points: [
      "JavaScriptによるハンバーガーメニューの自前実装",
      "Flexboxを用いた複雑なカードレイアウトの構築",
      "徹底したマルチデバイス（レスポンシブ）対応",
    ],
    techStack: ["HTML5", "CSS3", "JavaScript"],
    images: ["/images/projects/genki_1.png", "/images/projects/genki_2.png"],
    demo: "https://yukidevelop29.github.io/genkidama/",
  },
  {
    id: "weather-app",
    title: "天気予報アプリ",
    category: "Web",
    tags: ["React", "Next.js", "OpenWeatherMap"],
    description:
      "外部APIを利用し、都市名を入力することで現在の天気および5日間の天気予報を取得・表示するWebアプリケーションです。",
    longDescription:
      "外部APIを利用し、都市名を入力することで現在の天気および5日間の天気予報を取得・表示するWebアプリケーションです。UIはAtomic Designを採用し、再利用性と保守性を意識したコンポーネント分割を行いました。ビジネスロジックとUIを分離し、責務の明確化を意識した設計を実践しています。",
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
    longDescription:
      "モダンなWeb技術スタックを採用した、高機能なタスク管理アプリケーションです。単なるリスト作成に留まらず、複雑なデータ連携やセキュリティを考慮した実務的な機能を網羅しています。",
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
