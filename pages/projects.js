import Layout from './components/Layout'
import ProjectCard from './components/ProjectCard'

const projects = [
  {
    title: "Mi Portafolio",
    description: "Un portafolio profesional creado con Next.js y TailwindCSS.",
    tags: ["Next.js", "Tailwind CSS", "React"],
    image: "/images/proyecto1.png",
    vercelLink: "https://devmiguelgomez.vercel.app/",
    githubLink: "https://github.com/CloritoxD/Mi-portafolio"
  },
  {
    title: "App de Tareas (En desarrollo)",
    description: "Aplicación para gestionar tareas con MongoDB y Node.js.",
    tags: ["Node.js", "MongoDB", "React"],
    image: "/images/proyecto2.png",
  },
  {
    title: "E-commerce (Proximamente)",
    description: "Tienda en línea con React y Stripe.",
    tags: ["React", "AWS", "Node.js", "MongoDB" ],
    image: "/images/proyecto3.png",
  }
]

export default function Projects() {
  return (
    <Layout>
      <section className="min-h-screen py-12 fade-in">
        <div className="container mx-auto max-w-6xl px-4">
          <h1 className="text-5xl font-extrabold text-gray-800 dark:text-white mb-8 text-center">Mis Proyectos</h1>

          {/* Grid de proyectos */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project, index) => (
              <ProjectCard key={index} {...project} />
            ))}
          </div>
        </div>

        {/* Animación de fade-in */}
        <style jsx>{`
          .fade-in {
            opacity: 0;
            transform: translateY(20px);
            animation: fadeIn 1.2s ease-out forwards;
          }

          @keyframes fadeIn {
            from {
              opacity: 0;
              transform: translateY(20px);
            }
            to {
              opacity: 1;
              transform: translateY(0);
            }
          }
        `}</style>
      </section>
    </Layout>
  )
}
