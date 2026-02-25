"use client";
import { useState } from "react";
import { PROJECTS, Project } from "@/src/constants/projects";

export default function Home() {
  const [filter, setFilter] = useState<"All" | "Game" | "Web" | "Coding">(
    "All",
  );

  // フィルタリング処理
  const filteredProjects =
    filter === "All" ? PROJECTS : PROJECTS.filter((p) => p.category === filter);

  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  return (
    <>
      <title>ポートフォリオ</title>
      <main className="container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold mb-12 text-center">Portfolio</h1>

        {/* タブボタン */}
        <div className="flex justify-center gap-4 mb-12">
          {["All", "Game", "Web", "Coding"].map((cat) => (
            <button
              key={cat}
              onClick={() => setFilter(cat as any)}
              className={`px-6 py-2 rounded-full border transition-colors ${
                filter === cat
                  ? "bg-blue-600 text-white"
                  : "bg-white text-gray-600 hover:bg-gray-100"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* グリッドレイアウト */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="border rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition-shadow"
              onClick={() => setSelectedProject(project)}
            >
              {/* 画像エリア */}
              <div className="relative h-48 bg-gray-200">
                {/* Imageコンポーネントを使う場合は basePath を意識 */}
                <img
                  src={`${process.env.NODE_ENV === "production" ? "/my-portfolio" : ""}${project.images[0]}`}
                  alt={project.title}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* テキストエリア */}
              <div className="p-6">
                <span className="text-sm font-semibold text-blue-600 uppercase">
                  {project.category}
                </span>
                <h2 className="text-xl font-bold mt-2 mb-4">{project.title}</h2>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="bg-gray-100 text-gray-700 px-2 py-1 rounded text-xs"
                    >
                      #{tag}
                    </span>
                  ))}
                </div>
                <p className="text-gray-600 text-sm line-clamp-3">
                  {project.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </main>

      <div
        className="fixed inset-0 bg-black/70 flex items-center justify-center p-4"
        onClick={() => setSelectedProject(null)} // 背景クリックで閉じる
      >
        <div
          className="bg-white ..."
          onClick={(e) => e.stopPropagation()} // 中身のクリックは親に伝えない
        >
          {/* コンテンツ */}
        </div>
      </div>

      {/* モーダル */}
      {selectedProject && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black bg-opacity-70">
          <div className="bg-white rounded-xl max-w-2xl w-full max-h-[90vh] overflow-y-auto p-8 relative">
            {/* 閉じるボタン */}
            <button
              onClick={() => setSelectedProject(null)}
              className="absolute top-4 right-4 text-3xl"
            >
              &times;
            </button>

            {/* 画像カルーセルエリア */}
            <div className="relative group mb-6">
              <div className="flex overflow-x-auto snap-x snap-mandatory scrollbar-hide rounded-lg">
                {selectedProject.images.map((img, index) => (
                  <div
                    key={index}
                    className="flex-shrink-0 w-full h-[400px] relative overflow-hidden snap-center"
                  >
                    {/* 背景：ぼかした元画像 */}
                    <img
                      src={`${process.env.NODE_ENV === "production" ? "/my-portfolio" : ""}${img}`}
                      className="absolute inset-0 w-full h-full object-cover blur-xl opacity-30 scale-110"
                      aria-hidden="true"
                    />

                    {/* メイン：全体を表示する画像 */}
                    <img
                      src={`${process.env.NODE_ENV === "production" ? "/my-portfolio" : ""}${img}`}
                      className="relative z-10 w-full h-full object-contain"
                      alt={`${selectedProject.title} screenshot ${index + 1}`}
                    />
                  </div>
                ))}
              </div>
              {/* 複数ある場合のみヒントを表示 */}
              {selectedProject.images.length > 1 && (
                <div className="text-center mt-2 text-xs text-gray-400">
                  ← 左右にスワイプして画像を表示 →
                </div>
              )}
            </div>

            {/* タイトルセクション */}
            <div className="mb-6">
              <p className="text-blue-600 font-bold text-sm tracking-widest uppercase mb-1">
                {selectedProject.category}
              </p>
              <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 leading-tight">
                {selectedProject.title}
              </h2>
            </div>

            <div className="flex flex-wrap gap-2 my-4">
              {selectedProject.techStack.map((tech) => (
                <span
                  key={tech}
                  className="bg-slate-800 text-white text-[10px] px-2.5 py-0.5 rounded-full font-medium"
                >
                  {tech}
                </span>
              ))}
            </div>

            {/* 説明文セクション */}
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <h3 className="text-lg font-bold text-gray-800 border-l-4 border-blue-600 pl-3">
                作品概要
              </h3>
              <p className="text-base md:text-lg">
                {selectedProject.description}
              </p>
            </div>

            {/* こだわりポイント（カード形式） */}
            <div className="mt-8">
              <h3 className="text-lg font-bold text-gray-800 mb-4">
                技術的なこだわり
              </h3>
              <div className="grid grid-cols-1 gap-3">
                {selectedProject.points.map((point, i) => (
                  <div
                    key={i}
                    className="bg-gray-50 p-4 rounded-lg border-l-2 border-gray-300 italic text-gray-600"
                  >
                    “ {point} ”
                  </div>
                ))}
              </div>
            </div>

            <div className="flex gap-4">
              {selectedProject.github && (
                <a
                  href={selectedProject.github}
                  target="_blank"
                  className="bg-gray-800 text-white px-6 py-2 rounded-lg"
                >
                  GitHub
                </a>
              )}
              {selectedProject.demo && (
                <a
                  href={selectedProject.demo}
                  target="_blank"
                  className="bg-blue-600 text-white px-6 py-2 rounded-lg"
                >
                  Link
                </a>
              )}
            </div>
          </div>
        </div>
      )}
    </>
  );
}
