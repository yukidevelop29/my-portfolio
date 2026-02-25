import { PROJECTS } from "@/src/constants/projects";

export default function Home() {
  return (
    <main className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-12 text-center">Portfolio</h1>

      {/* グリッドレイアウト */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {PROJECTS.map((project) => (
          <div
            key={project.id}
            className="border rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition-shadow"
          >
            {/* 画像エリア */}
            <div className="relative h-48 bg-gray-200">
              {/* Imageコンポーネントを使う場合は basePath を意識 */}
              <img
                src={`${process.env.NODE_ENV === "production" ? "/my-portfolio" : ""}${project.image}`}
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
  );
}
