import { useState, useEffect } from 'react';
import Image from 'next/image';
import { 
  FaLinux, 
  FaServer, 
  FaRobot, 
  FaPython, 
  FaShieldAlt, 
  FaMobileAlt, 
  FaDatabase,
  FaTimes
} from 'react-icons/fa';

const certifications = [
  {
    title: "Linux Essentials",
    organization: "Cisco Networking Academy",
    date: "2025",
    image: "/images/linux-essentials.jpg", // Ruta a tu imagen de certificado
    skills: ["Linux", "Terminal", "Sistema de archivos", "Administración básica"],
    icon: <FaLinux className="text-blue-500 mr-2" size={20} />
  },
  {
    title: "Operating Systems Basics",
    organization: "Cisco Networking Academy",
    date: "2025",
    image: "/images/os-basics.jpg", // Ruta a tu imagen de certificado
    skills: ["Windows", "Linux", "Procesos", "Gestión de recursos"],
    icon: <FaServer className="text-blue-500 mr-2" size={20} />
  },
  {
    title: "Introduction to Modern AI",
    organization: "Cisco Networking Academy",
    date: "2025",
    image: "/images/modern-ai.jpg", // Ruta a tu imagen de certificado
    skills: ["Inteligencia Artificial", "Machine Learning", "Aplicaciones de IA", "Ética en IA"],
    icon: <FaRobot className="text-blue-500 mr-2" size={20} />
  },
  {
    title: "Fundamentos de Python",
    organization: "Cisco Networking Academy",
    date: "2025",
    image: "/images/python-fundamentos.jpg", // Ruta a tu imagen de certificado
    skills: ["Python", "Programación", "Estructuras de datos", "Algoritmos"],
    icon: <FaPython className="text-blue-500 mr-2" size={20} />
  },
  {
    title: "Introducción a la Ciberseguridad",
    organization: "Cisco Networking Academy",
    date: "2025",
    image: "/images/cybersecurity-intro.jpg", // Ruta a tu imagen de certificado
    skills: ["Seguridad informática", "Protección de datos", "Amenazas", "Privacidad"],
    icon: <FaShieldAlt className="text-blue-500 mr-2" size={20} />
  },
  {
    title: "Digital Awareness",
    organization: "Cisco Networking Academy",
    date: "2025",
    image: "/images/digital-awareness.jpg", // Ruta a tu imagen de certificado
    skills: ["Seguridad digital", "Privacidad en línea", "Identidad digital", "Huellas digitales"],
    icon: <FaMobileAlt className="text-blue-500 mr-2" size={20} />
  },
  {
    title: "Introducción a la Ciencia de Datos",
    organization: "Cisco Networking Academy",
    date: "2023",
    image: "/images/data-science-intro.jpg", // Ruta a tu imagen de certificado
    skills: ["Análisis de datos", "Visualización", "Estadística básica", "Big Data"],
    icon: <FaDatabase className="text-blue-500 mr-2" size={20} />
  }
];

export default function CertificationsSection() {
  const [selectedImage, setSelectedImage] = useState(null);
  const [touchStart, setTouchStart] = useState(0);
  const [touchEnd, setTouchEnd] = useState(0);

  // Manejo de eventos táctiles para dispositivos móviles
  const handleTouchStart = (e) => {
    setTouchStart(e.targetTouches[0].clientX);
  };

  const handleTouchMove = (e) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const handleTouchEnd = () => {
    // Si el deslizamiento es lo suficientemente largo, cerrar el modal
    if (touchStart - touchEnd > 100 || touchEnd - touchStart > 100) {
      closeModal();
    }
    setTouchStart(0);
    setTouchEnd(0);
  };

  const openModal = (imageSrc) => {
    setSelectedImage(imageSrc);
    document.body.style.overflow = 'hidden'; // Prevenir scroll
  };

  const closeModal = () => {
    setSelectedImage(null);
    document.body.style.overflow = 'auto'; // Restaurar scroll
  };

  // Agregar controlador de teclado para cerrar el modal con tecla ESC
  useEffect(() => {
    const handleEsc = (event) => {
      if (event.keyCode === 27) closeModal();
    };
    
    window.addEventListener('keydown', handleEsc);
    
    return () => {
      window.removeEventListener('keydown', handleEsc);
    };
  }, []);

  return (
    <section className="py-16 bg-gray-50 dark:bg-gray-800 transition-colors duration-300">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-extrabold text-gray-800 dark:text-white mb-10 text-center">
          Mis Certificaciones
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {certifications.map((cert, index) => (
            <div 
              key={index} 
              className="bg-white dark:bg-gray-700 rounded-lg shadow-lg overflow-hidden transition transform hover:scale-105 hover:shadow-xl"
            >
              {cert.image && (
                <div 
                  className="relative h-48 w-full overflow-hidden cursor-pointer"
                  onClick={() => openModal(cert.image)}
                  aria-label={`Ver certificado de ${cert.title}`}
                  role="button"
                  tabIndex={0}
                  onKeyPress={(e) => e.key === 'Enter' && openModal(cert.image)}
                >
                  <Image
                    src={cert.image}
                    alt={`Certificado ${cert.title} - ${cert.organization}`}
                    layout="fill"
                    objectFit="cover"
                    className="transition-transform duration-500 hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300 flex items-end">
                    <span className="text-white text-sm p-4">Haz clic para ampliar</span>
                  </div>
                </div>
              )}
              
              <div className="p-6">
                <div className="flex items-center mb-3">
                  {cert.icon}
                  <h3 className="text-xl font-bold text-gray-800 dark:text-white">{cert.title}</h3>
                </div>
                <p className="text-gray-600 dark:text-gray-300 mb-3">
                  {cert.organization} • {cert.date}
                </p>
                
                {/* Skills badges */}
                <div className="flex flex-wrap gap-2 mb-2">
                  {cert.skills.map((skill, idx) => (
                    <span 
                      key={idx} 
                      className="bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 text-xs px-2 py-1 rounded"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Modal optimizado para dispositivos móviles */}
      {selectedImage && (
        <div 
          className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4" 
          onClick={closeModal}
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
        >
          <div 
            className="relative max-w-4xl w-full max-h-[90vh] rounded-lg overflow-hidden" 
            onClick={e => e.stopPropagation()}
          >
            <button 
              className="absolute top-3 right-3 z-10 bg-black/50 text-white hover:bg-black/70 transition-colors rounded-full p-2"
              onClick={closeModal}
              aria-label="Cerrar vista ampliada"
            >
              <FaTimes size={24} />
            </button>
            <div className="relative w-full h-full overflow-auto">
              <Image
                src={selectedImage}
                alt="Certificado ampliado"
                width={900}
                height={650}
                layout="responsive"
                objectFit="contain"
                className="rounded-lg bg-white dark:bg-gray-900"
              />
            </div>
            <p className="text-white text-center mt-2 text-sm md:hidden">
              Desliza para cerrar
            </p>
          </div>
        </div>
      )}
    </section>
  );
}