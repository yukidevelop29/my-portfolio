export interface Project {
  id: string;
  title: string;
  category: "Game" | "Web" | "Coding";
  tags: string[];
  description: string;
  points: string[]; // こだわりポイント
  techStack: string[];
  image: string; // サムネイル画像パス
  github?: string; // GitHubリンク（任意）
  demo?: string; // デモサイトリンク（任意）
}

export const PROJECTS: Project[] = [
  {
    id: "meteoritebuster",
    title: "メテオライトバスター",
    category: "Game",
    tags: ["Unity", "C#", "Planning"],
    description:
      "次々と飛来する隕石を迎撃し、地球を死守するシューティングゲームです。",
    points: [
      "リソース管理とアクション",
      "シンプルな操作に潜むジレンマ",
      "展開のメリハリ",
    ],
    techStack: ["Unity", "C#"],
    image: "/images/projects/meteoritebuster.png",
    demo: "https://play.google.com/store/apps/details?id=com.garhijp.meteoritebuster",
  },
  {
    id: "cyoukokukahenomichi",
    title: "彫刻家への道",
    category: "Game",
    tags: ["Unity", "C#", "Planning"],
    description:
      "彫刻刀を用いて木製パネルを規定回数削り、彫像を完成させるパズルゲームです。",
    points: [
      "パズルの戦略性と、彫刻特有の質感の両立",
      "間口の広さと奥行きのあるレベルデザイン",
      "物理演算を活用した演出",
    ],
    techStack: ["Unity", "C#"],
    image: "/images/projects/cyoukokuka.png",
    demo: "https://play.google.com/store/apps/details?id=com.garhijp.cyoukokukahenomichi",
  },
  {
    id: "genkidama-hp",
    title: "元気玉HP再現",
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
    image: "/images/projects/genkidama-hp.png",
    demo: "https://yukidevelop29.github.io/my-portfolio/genkidama-repro/",
  },
  {
    id: "todo-app",
    title: "Full-stack ToDo App",
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
    image: "/images/projects/todo.png",
    github: "https://github.com/...",
  },
];
