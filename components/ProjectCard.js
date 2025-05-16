import { useState } from 'react';
import Image from 'next/image';
import { FaExternalLinkAlt, FaGithub, FaInfoCircle } from 'react-icons/fa';
import { motion } from 'framer-motion';

export default function ProjectCard({ title, description, tags = [], image, vercelLink, githubLink }) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5 }}
      className="relative bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-lg group h-full flex flex-col"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Imagen de portada con efecto */}
      {image && (
        <div className="w-full h-48 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent z-10"></div>
          <Image
            src={image}
            alt={`Preview de ${title}`}
            layout="fill"
            objectFit="cover"
            className="transition-transform duration-700 ease-out-cubic group-hover:scale-110"
          />
          
          {/* Etiquetas superpuestas */}
          <div className="absolute bottom-3 left-3 z-20 flex flex-wrap gap-2 max-w-full">
            {tags.slice(0, 3).map((tag, index) => (
              <span 
                key={index} 
                className="bg-white/90 dark:bg-gray-900/90 backdrop-blur-sm text-xs font-medium px-2 py-1 rounded text-gray-800 dark:text-gray-200 shadow-sm"
              >
                {tag}
              </span>
            ))}
            {tags.length > 3 && (
              <span className="bg-white/90 dark:bg-gray-900/90 backdrop-blur-sm text-xs font-medium px-2 py-1 rounded text-gray-800 dark:text-gray-200 shadow-sm">
                +{tags.length - 3}
              </span>
            )}
          </div>
        </div>
      )}

      {/* Contenido */}
      <div className="p-5 flex-grow flex flex-col">
        <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-2 group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors">
          {title}
        </h3>
        
        <p className="text-gray-600 dark:text-gray-300 mb-4 text-sm flex-grow">{description}</p>

        {/* Lista completa de etiquetas en hover */}
        {isHovered && tags.length > 3 && (
          <div className="mt-2 mb-3">
            <p className="text-xs font-medium text-gray-500 dark:text-gray-400 mb-1">Tecnologías:</p>
            <div className="flex flex-wrap gap-1.5">
              {tags.map((tag, index) => (
                <span 
                  key={index} 
                  className="bg-gray-100 dark:bg-gray-700 text-xs px-1.5 py-0.5 rounded text-gray-700 dark:text-gray-300"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        )}

        {/* Enlaces */}
        <div className="flex items-center justify-between mt-auto pt-4 border-t border-gray-100 dark:border-gray-700">
          <div className="flex space-x-3">
            {vercelLink && (
              <a
                href={vercelLink}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 text-sm font-medium text-primary-600 dark:text-primary-400 hover:text-primary-700 dark:hover:text-primary-300 transition-colors"
                aria-label={`Ver el proyecto ${title} en vivo`}
              >
                <FaExternalLinkAlt size={14} />
                <span>Demo</span>
              </a>
            )}
            {githubLink && (
              <a
                href={githubLink}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 text-sm font-medium text-gray-600 dark:text-gray-400 hover:text-gray-800 dark:hover:text-gray-200 transition-colors"
                aria-label={`Ver el código fuente de ${title} en GitHub`}
              >
                <FaGithub size={14} />
                <span>Código</span>
              </a>
            )}
          </div>
          
          {/* Indicador de información */}
          <span className="text-xs text-gray-400 dark:text-gray-500 flex items-center gap-1">
            <FaInfoCircle size={12} />
            {isHovered ? "Detalles" : "Ver más"}
          </span>
        </div>
      </div>

      {/* Overlay de efecto hover */}
      <div 
        className={`absolute inset-0 bg-gradient-to-tr from-primary-600/5 to-primary-400/5 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none z-0 duration-500`}
      ></div>

      <style jsx>{`
        .ease-out-cubic {
          transition-timing-function: cubic-bezier(0.33, 1, 0.68, 1);
        }
      `}</style>
    </motion.div>
  );
}
