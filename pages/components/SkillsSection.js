import { FaHtml5, FaCss3Alt, FaJsSquare, FaReact, FaNodeJs, FaGit, FaGithub, FaAws } from 'react-icons/fa'; 
import { SiMongodb, SiNextdotjs } from 'react-icons/si';

const skills = [
  { name: 'HTML5', icon: <FaHtml5 className="text-orange-600 w-12 h-12" /> },
  { name: 'CSS3', icon: <FaCss3Alt className="text-blue-600 w-12 h-12" /> },
  { name: 'JavaScript', icon: <FaJsSquare className="text-yellow-500 w-12 h-12" /> },
  { name: 'React', icon: <FaReact className="text-blue-400 w-12 h-12" /> },
  { name: 'Next.js', icon: <SiNextdotjs className="text-black dark:text-white w-12 h-12" /> },
  { name: 'Node.js', icon: <FaNodeJs className="text-green-600 w-12 h-12" /> },
  { name: 'Git', icon: <FaGit className="text-orange-600 w-12 h-12" /> },
  { name: 'GitHub', icon: <FaGithub className="text-gray-800 dark:text-white w-12 h-12" /> },
  { name: 'MongoDB', icon: <SiMongodb className="text-green-500 w-12 h-12" /> },
  { name: 'AWS', icon: <FaAws className="text-orange-500 w-12 h-12" /> },
];

export default function SkillsSection() {
  return (
    <section className="w-full py-12 bg-white dark:bg-gray-900 fade-in">
      <div className="max-w-5xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center text-gray-800 dark:text-white mb-8">
          Herramientas y Tecnologías
        </h2>
        {/* Grid más compacto */}
        <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 gap-3 md:gap-4">
          {skills.map((skill, index) => (
            <div key={index} className="flex flex-col items-center space-y-1 transform transition-transform hover:scale-105">
              {skill.icon}
              <span className="text-sm text-gray-700 dark:text-gray-300">{skill.name}</span>
            </div>
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
  );
}
