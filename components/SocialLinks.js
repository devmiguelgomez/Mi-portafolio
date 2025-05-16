import { 
  FaGithub, 
  FaLinkedin, 
  FaTwitter, 
  FaEnvelope,
  FaInstagram
} from 'react-icons/fa';
import { motion } from 'framer-motion';

export default function SocialLinks({ size = "default" }) {
  // Determinar tamaño de íconos según la prop size
  const getIconSize = () => {
    switch(size) {
      case "small": return 18;
      case "large": return 28;
      default: return 22;
    }
  };
  
  // Clases para los contenedores de íconos
  const getContainerClass = () => {
    const baseClasses = "flex items-center justify-center rounded-full transition-all";
    
    switch(size) {
      case "small": 
        return `${baseClasses} w-8 h-8`;
      case "large": 
        return `${baseClasses} w-12 h-12`;
      default: 
        return `${baseClasses} w-10 h-10`;
    }
  };

  const iconSize = getIconSize();
  const containerClass = getContainerClass();
  
  // Array de enlaces sociales
  const socialLinks = [
    {
      name: "GitHub",
      icon: <FaGithub size={iconSize} />,
      url: "https://github.com/devmiguelgomez",
      color: "hover:bg-gray-800 dark:hover:bg-gray-700",
      ariaLabel: "Visita mi perfil de GitHub"
    },
    {
      name: "LinkedIn",
      icon: <FaLinkedin size={iconSize} />,
      url: "https://www.linkedin.com/in/devmiguelgomez/",
      color: "hover:bg-blue-600",
      ariaLabel: "Visita mi perfil de LinkedIn"
    },
/*     {
      name: "Twitter",
      icon: <FaTwitter size={iconSize} />,
      url: "https://twitter.com/tu_usuario_twitter",
      color: "hover:bg-sky-500",
      ariaLabel: "Sígueme en Twitter"
    },
    {
      name: "Instagram",
      icon: <FaInstagram size={iconSize} />,
      url: "https://instagram.com/tu_usuario_instagram",
      color: "hover:bg-gradient-to-tr from-yellow-500 via-pink-500 to-purple-500",
      ariaLabel: "Sígueme en Instagram"
    }, */
    {
      name: "Email",
      icon: <FaEnvelope size={iconSize} />,
      url: "mailto:devmiguelgomez@gmail.com",
      color: "hover:bg-red-500",
      ariaLabel: "Envíame un email"
    }
  ];

  // Variantes para animación
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const item = {
    hidden: { y: 10, opacity: 0 },
    show: { y: 0, opacity: 1 }
  };

  return (
    <motion.div 
      className="flex space-x-3 my-4"
      variants={container}
      initial="hidden"
      animate="show"
    >
      {socialLinks.map((social, index) => (
        <motion.div key={index} variants={item}>
          <a 
            href={social.url}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={social.ariaLabel}
            className={`${containerClass} ${social.color} hover:text-white bg-gray-100 dark:bg-gray-800 hover:shadow-lg transform hover:-translate-y-1`}
          >
            {social.icon}
            <span className="sr-only">{social.name}</span>
          </a>
        </motion.div>
      ))}
    </motion.div>
  );
}
