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
              <div className="flex overflow-x-auto snap-x snap-mandatory scrollbar-hide gap-2 rounded-lg">
                {selectedProject.images.map((img, index) => (
                  <div key={index} className="flex-shrink-0 w-full snap-center">
                    <img
                      src={`${process.env.NODE_ENV === "production" ? "/my-portfolio" : ""}${img}`}
                      className="w-full h-72 object-cover rounded-lg"
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

            <h2 className="text-3xl font-bold mb-2">{selectedProject.title}</h2>
            <div className="flex gap-2 mb-4">
              {selectedProject.techStack.map((tech) => (
                <span
                  key={tech}
                  className="bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded"
                >
                  {tech}
                </span>
              ))}
            </div>

            <p className="text-gray-700 mb-6">{selectedProject.description}</p>

            <h3 className="font-bold border-b pb-2 mb-4">
              こだわり・苦労したポイント
            </h3>
            <ul className="list-disc pl-5 space-y-2 mb-8">
              {selectedProject.points.map((point, i) => (
                <li key={i} className="text-gray-600 text-sm">
                  {point}
                </li>
              ))}
            </ul>

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
