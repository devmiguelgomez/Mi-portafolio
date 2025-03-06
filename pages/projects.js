import Layout from './components/Layout'
export default function Projects() {
    const projects = [
      {
        title: "Proyecto 1",
        description: "dahjjaddadhjad",
        link: "#"
      },
      {
        title: "Proyecto 2",
        description: "dadadadasdsad",
        link: "#"
      },
      {
        title: "Proyecto 3",
        description: "adadadad",
        link: "#"
      }
    ];
  
    return (
        <Layout>
      <div className="min-h-screen bg-white dark:bg-gray-900 p-8">
        <h1 className="text-4xl font-bold text-center text-gray-800 dark:text-white mb-12">
          Mis Proyectos
        </h1>
  
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, index) => (
            <div key={index} className="p-6 bg-gray-100 dark:bg-gray-800 rounded-lg shadow-lg">
              <h2 className="text-2xl font-semibold text-gray-800 dark:text-white">{project.title}</h2>
              <p className="text-gray-600 dark:text-gray-300 mt-2">{project.description}</p>
              <a href={project.link} className="text-blue-600 hover:text-blue-800 mt-4 inline-block">
                Ver más
              </a>
            </div>
          ))}
        </div>
      </div>
      </Layout>
    )
  }
  