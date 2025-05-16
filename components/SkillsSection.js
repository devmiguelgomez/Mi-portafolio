import { useEffect, useState } from 'react';
import { 
  FaHtml5, FaCss3Alt, FaJsSquare, FaReact, 
  FaNodeJs, FaGit, FaGithub, FaAws, FaPython 
} from 'react-icons/fa'; 
import { SiMongodb, SiNextdotjs, SiTailwindcss, SiExpress, SiTypescript } from 'react-icons/si';

// Categorías de habilidades con niveles de competencia
const skillCategories = [
  {
    name: "Frontend",
    skills: [
      { name: 'HTML5', icon: <FaHtml5 className="text-orange-600 w-12 h-12" />, level: 95 },
      { name: 'CSS3', icon: <FaCss3Alt className="text-blue-600 w-12 h-12" />, level: 90 },
      { name: 'JavaScript', icon: <FaJsSquare className="text-yellow-500 w-12 h-12" />, level: 85 },
      { name: 'React', icon: <FaReact className="text-blue-400 w-12 h-12" />, level: 85 },
      { name: 'Next.js', icon: <SiNextdotjs className="text-black dark:text-white w-12 h-12" />, level: 80 },
      { name: 'TypeScript', icon: <SiTypescript className="text-blue-600 w-12 h-12" />, level: 75 },
      { name: 'TailwindCSS', icon: <SiTailwindcss className="text-teal-500 w-12 h-12" />, level: 90 },
    ]
  },
  {
    name: "Backend",
    skills: [
      { name: 'Node.js', icon: <FaNodeJs className="text-green-600 w-12 h-12" />, level: 80 },
      { name: 'Express', icon: <SiExpress className="text-gray-800 dark:text-gray-200 w-12 h-12" />, level: 75 },
      { name: 'MongoDB', icon: <SiMongodb className="text-green-500 w-12 h-12" />, level: 75 },
      { name: 'Python', icon: <FaPython className="w-12 h-12" style={{ color: '#3776AB' }} />, level: 70 },
    ]
  },
  {
    name: "Herramientas & DevOps",
    skills: [
      { name: 'Git', icon: <FaGit className="text-orange-600 w-12 h-12" />, level: 85 },
      { name: 'GitHub', icon: <FaGithub className="text-gray-800 dark:text-white w-12 h-12" />, level: 85 },
      { name: 'AWS', icon: <FaAws className="text-orange-500 w-12 h-12" />, level: 65 },
    ]
  }
];

export default function SkillsSection() {
  const [visibleItems, setVisibleItems] = useState(false);
  
  // Hook de observador de intersección para activar animación
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setVisibleItems(true);
          observer.disconnect();
        }
      },
      { threshold: 0.2 }
    );
    
    const section = document.getElementById('skills-section');
    if (section) observer.observe(section);
    
    return () => observer.disconnect();
  }, []);

  return (
    <section id="skills-section" className="w-full py-16 bg-gradient-to-b from-white to-gray-50 dark:from-gray-900 dark:to-gray-800">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-800 dark:text-white">
            <span className="relative inline-block">
              Mis Habilidades
              <span className="absolute -bottom-2 left-0 right-0 h-1 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full"></span>
            </span>
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Tecnologías y herramientas con las que diseño y construyo experiencias digitales.
          </p>
        </div>

        {/* Mostrar habilidades por categoría */}
        <div className="space-y-14">
          {skillCategories.map((category, catIndex) => (
            <div key={catIndex} className={`${visibleItems ? 'opacity-100' : 'opacity-0'} transition-opacity duration-1000 ease-out`} style={{ transitionDelay: `${catIndex * 200}ms` }}>
              <h3 className="text-xl font-semibold mb-8 text-gray-700 dark:text-gray-200 flex items-center">
                <span className="w-2 h-8 bg-blue-600 dark:bg-blue-500 rounded mr-3"></span>
                {category.name}
              </h3>
              
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-7 gap-8">
                {category.skills.map((skill, index) => (
                  <div 
                    key={index} 
                    className={`flex flex-col items-center ${visibleItems ? 'opacity-100' : 'opacity-0'} transform transition duration-700`}
                    style={{ transitionDelay: `${(catIndex * 100) + (index * 100)}ms` }}
                  >
                    <div className="p-4 rounded-lg bg-white dark:bg-gray-800 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 relative overflow-hidden">
                      <div className="relative z-10">
                        {skill.icon}
                      </div>
                    </div>
                    <span className="mt-3 text-sm font-medium text-gray-700 dark:text-gray-300">
                      {skill.name}
                    </span>
                    
                    {/* Barra de nivel de habilidad */}
                    <div className="w-full h-1.5 bg-gray-200 dark:bg-gray-700 rounded-full mt-2 overflow-hidden">
                      <div 
                        className="h-full bg-gradient-to-r from-blue-600 to-indigo-600 rounded-full transform origin-left transition-transform duration-1000 ease-out-quart"
                        style={{ 
                          width: visibleItems ? `${skill.level}%` : '0%',
                          transitionDelay: `${(catIndex * 100) + (index * 150) + 300}ms`
                        }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        .ease-out-quart {
          transition-timing-function: cubic-bezier(0.25, 1, 0.5, 1);
        }
      `}</style>
    </section>
  );
}
