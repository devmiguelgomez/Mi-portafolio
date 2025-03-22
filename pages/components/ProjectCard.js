import { FaExternalLinkAlt, FaGithub } from 'react-icons/fa';
import Image from 'next/image';

export default function ProjectCard({ title, description, tags = [], image, vercelLink, githubLink }) {
  return (
    <div className="relative bg-white dark:bg-gray-800 rounded-lg overflow-hidden shadow-lg transform transition-transform hover:scale-105 hover:shadow-2xl group">
      {/* Imagen de portada */}
      {image && (
        <div className="w-full h-48 relative overflow-hidden">
          <Image
            src={image}
            alt={`Preview de ${title}`}
            width={500}
            height={300}
            objectFit="cover"
            className="group-hover:scale-110 transition-transform duration-300"
          />
        </div>
      )}

      {/* Contenido */}
      <div className="p-4">
        <h3 className="text-2xl font-extrabold text-gray-800 dark:text-white">{title}</h3>
        <p className="text-gray-600 dark:text-gray-300 mt-2">{description}</p>

        {/* Etiquetas */}
        {tags.length > 0 && (
          <div className="mt-3 flex flex-wrap gap-2">
            {tags.map((tag, index) => (
              <span key={index} className="bg-blue-100 dark:bg-blue-800 text-blue-800 dark:text-blue-200 px-2 py-1 rounded text-xs">
                {tag}
              </span>
            ))}
          </div>
        )}

        {/* Enlaces */}
        <div className="mt-4 flex space-x-4">
          {vercelLink && (
            <a
              href={vercelLink}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1 text-blue-600 dark:text-blue-400 hover:underline"
            >
              <FaExternalLinkAlt /> Ver Proyecto
            </a>
          )}
          {githubLink && (
            <a
              href={githubLink}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1 text-gray-600 dark:text-gray-400 hover:underline"
            >
              <FaGithub /> Código Fuente
            </a>
          )}
        </div>
      </div>
    </div>
  );
}
