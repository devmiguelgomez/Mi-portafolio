import Layout from './components/Layout'
import Image from 'next/image'
import { FaEye, FaDownload } from 'react-icons/fa';
export default function About() {
  return (
    <Layout>
      <div className="flex flex-col items-center justify-center min-h-screen bg-white dark:bg-gray-900 text-center p-6 fade-in">
        <h1 className="text-5xl font-extrabold text-gray-800 dark:text-white mb-4">
          Sobre Mí
        </h1>
                {/* Foto personal */}
                <div className="w-48 h-48 relative mb-6 rounded-full overflow-hidden border-4 border-blue-500 shadow-lg">
          <Image
            src="/images/mi-foto.jpg"
            alt="Foto de Miguel Gomez"
            layout="fill"
            objectFit="cover"
          />
        </div>
        <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mb-8">
          ¡Hola! Soy Miguel Gomez, estudiante de Ingeniería de Sistemas en sexto semestre,
          técnico en sistemas y desarrollador multimedia enfocado en la creación de páginas web. 
          Me apasiona la tecnología, la programación y el diseño de experiencias digitales.
        </p>
        <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl">
          Tengo conocimientos en HTML, CSS, JavaScript, React, Next.js, Node.js, Git, AWS y bases de datos SQL y MongoDB. 
          Me gusta mantenerme en constante aprendizaje para seguir mejorando mis habilidades y ofrecer soluciones innovadoras.
        </p>
         {/* Botones de CV con Iconos */}
         <div className="mt-6 flex flex-col md:flex-row justify-center gap-4">
            <a 
              href="/miguel-gomez-cv.pdf" 
              target="_blank" 
              rel="noopener noreferrer"
              className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition transform hover:scale-105 flex items-center gap-2 shadow-lg"
            >
              <FaEye className="w-5 h-5" /> Ver CV
            </a>

            <a 
              href="/miguel-gomez-cv.pdf" 
              download="Miguel-Gomez-CV.pdf"
              className="px-6 py-3 bg-gray-600 text-white rounded-lg hover:bg-gray-700 transition transform hover:scale-105 flex items-center gap-2 shadow-lg"
            >
              <FaDownload className="w-5 h-5" /> Descargar CV
            </a>
          </div>
      </div>

      {/* Animación */}
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
    </Layout>
  )
}
