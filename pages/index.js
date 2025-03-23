import { useRef } from 'react';
import Image from 'next/image';
import Layout from '../components/Layout';
import SocialLinks from '../components/SocialLinks';
import SkillsSection from '../components/SkillsSection';
import ProjectCard from '../components/ProjectCard';
import { FaEye, FaDownload } from 'react-icons/fa';
import { useState } from 'react';

// Datos de proyectos
const projects = [
  {
    title: "Mi Portafolio",
    description: "Un portafolio profesional creado con Next.js y TailwindCSS.",
    tags: ["Next.js", "Tailwind CSS", "React"],
    image: "/images/proyecto1.png",
    vercelLink: "https://devmiguelgomez.vercel.app/",
    githubLink: "https://github.com/devmiguelgomez/Mi-portafolio"
  },
  {
    title: "App de Tareas (En desarrollo)",
    description: "Aplicación para gestionar tareas con MongoDB y Node.js.",
    tags: ["Node.js", "MongoDB", "React", "Tailwind CSS", "Express",   "nodemailer", "vite", "node-cron"],
    image: "/images/proyecto2.png",
    vercelLink: "https://pp-task-chi.vercel.app/",
    githubLink: "https://github.com/devmiguelgomez/app-task"
  },
  {
    title: "E-commerce (Proximamente)",
    description: "Tienda en línea con React y Stripe.",
    tags: ["React", "AWS", "Node.js", "MongoDB" ],
    image: "/images/proyecto3.png",
  }
];

export default function Home() {
  // Referencias para navegar a las secciones
  const aboutRef = useRef(null);
  const projectsRef = useRef(null);
  const contactRef = useRef(null);
  
  // Estado para el formulario de contacto
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState('');
  const [success, setSuccess] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('Enviando...');

    const response = await fetch('https://formspree.io/f/xvgkplvj', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(formData),
    });

    if (response.ok) {
      setStatus('Mensaje enviado con éxito! 🎉');
      setSuccess(true);
      setFormData({ name: '', email: '', message: '' });
      setTimeout(() => setSuccess(false), 3000);
    } else {
      setStatus('Hubo un error, inténtalo de nuevo.');
    }
  };

  return (
    <Layout 
      title="Miguel Gómez | Portafolio" 
      aboutRef={aboutRef}
      projectsRef={projectsRef}
      contactRef={contactRef}
    >
      {/* SECCIÓN PRINCIPAL */}
      <section id="home" className="py-12 md:py-20 min-h-screen flex flex-col justify-center">
        <div className="flex flex-col items-center text-center">
          {/* Logo/Imagen antes del nombre */}
          <div className="mb-8 relative w-36 h-36 md:w-40 md:h-40 overflow-hidden rounded-full border-4 border-blue-500 dark:border-blue-400 shadow-lg">
            <Image
              src="/images/mi-foto.jpg"
              alt="Mi foto"
              width={160}
              height={160}
              objectFit="cover"
              priority
              className="transition-transform duration-500 hover:scale-110"
            />
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400 leading-tight">
            Miguel Gómez
          </h1>

          <p className="text-xl md:text-2xl text-gray-700 dark:text-gray-300 mb-3 max-w-2xl">
            Desarrollador Web & Diseñador UI/UX
          </p>

          {/* Iconos sociales integrados directamente debajo del nombre */}
          <SocialLinks />
        </div>
        <SkillsSection />
      </section>

      {/* SECCIÓN SOBRE MÍ */}
      <section ref={aboutRef} id="about" className="py-16 min-h-screen flex items-center bg-gray-50 dark:bg-gray-800">
        <div className="container mx-auto px-4">
          <div className="flex flex-col items-center justify-center text-center p-6 fade-in">
            <h2 className="text-4xl font-extrabold text-gray-800 dark:text-white mb-6">
              Sobre Mí
            </h2>
            
            {/* Foto personal */}
            <div className="w-48 h-48 relative mb-8 rounded-full overflow-hidden border-4 border-blue-500 shadow-lg">
              <Image
                src="/images/mi-foto.jpg"
                alt="Foto de Miguel Gomez"
                layout="fill"
                objectFit="cover"
              />
            </div>
            
            <div className="max-w-2xl">
              <p className="text-lg text-gray-600 dark:text-gray-300 mb-6">
                ¡Hola! Soy Miguel Gomez, estudiante de Ingeniería de Sistemas en sexto semestre,
                técnico en sistemas y desarrollador multimedia enfocado en la creación de páginas web. 
                Desde pequeño me apasiona la tecnología, la programación y el diseño de experiencias digitales.
              </p>
              
              <p className="text-lg text-gray-600 dark:text-gray-300 mb-8">
                Una de mis virtudes es la capacidad de aprender y adaptarme a nuevas tecnologías y herramientas.
                Gracias a esto he aprendido a utilizar tecnologías como HTML, CSS, JavaScript, React, Node.js, MongoDB, entre otras.
                Me gusta mantenerme en constante aprendizaje para seguir mejorando mis habilidades y ofrecer soluciones innovadoras.
              </p>
            </div>
            
            {/* Botones de CV con Iconos */}
            <div className="mt-4 flex flex-col sm:flex-row justify-center gap-4">
              <a 
                href="/miguel-gomez-cv.pdf" 
                target="_blank" 
                rel="noopener noreferrer"
                className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition transform hover:scale-105 flex items-center justify-center gap-2 shadow-lg"
              >
                <FaEye className="w-5 h-5" /> Ver CV
              </a>

              <a 
                href="/miguel-gomez-cv.pdf" 
                download="Miguel-Gomez-CV.pdf"
                className="px-6 py-3 bg-gray-600 text-white rounded-lg hover:bg-gray-700 transition transform hover:scale-105 flex items-center justify-center gap-2 shadow-lg"
              >
                <FaDownload className="w-5 h-5" /> Descargar CV
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* SECCIÓN PROYECTOS */}
      <section ref={projectsRef} id="projects" className="py-16 min-h-screen flex items-center">
        <div className="container mx-auto max-w-6xl px-4">
          <h2 className="text-4xl font-extrabold text-gray-800 dark:text-white mb-10 text-center">
            Mis Proyectos
          </h2>

          {/* Grid de proyectos */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <ProjectCard key={index} {...project} />
            ))}
          </div>
        </div>
      </section>

      {/* SECCIÓN CONTACTO */}
      <section ref={contactRef} id="contact" className="py-16 min-h-screen flex items-center bg-gray-50 dark:bg-gray-800">
        <div className="container mx-auto max-w-4xl px-4">
          <h2 className="text-4xl font-extrabold text-gray-800 dark:text-white mb-8 text-center">
            Contáctame
          </h2>

          <p className="text-lg text-gray-600 dark:text-gray-300 text-center mb-10">
            Puedes escribirme directamente o encontrarme en mis redes sociales.
          </p>

          {/* Formulario funcional */}
          <div className="bg-white dark:bg-gray-700 shadow-lg rounded-lg p-8 mb-10">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block text-gray-700 dark:text-gray-300 mb-2">Nombre</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  placeholder="Tu nombre"
                  className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-600 dark:border-gray-500 dark:text-white"
                />
              </div>

              <div>
                <label className="block text-gray-700 dark:text-gray-300 mb-2">Correo Electrónico</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  placeholder="tucorreo@example.com"
                  className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-600 dark:border-gray-500 dark:text-white"
                />
              </div>

              <div>
                <label className="block text-gray-700 dark:text-gray-300 mb-2">Mensaje</label>
                <textarea
                  name="message"
                  rows="5"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  placeholder="Escribe tu mensaje aquí..."
                  className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-600 dark:border-gray-500 dark:text-white"
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition transform hover:scale-105 text-lg font-medium"
              >
                Enviar Mensaje
              </button>
            </form>

            {/* Mensaje de éxito */}
            {success && (
              <p className="text-center text-green-600 dark:text-green-400 mt-4 font-bold fade-in">
                {status}
              </p>
            )}
          </div>

          {/* Redes Sociales */}
          <div className="text-center">
            <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-4">Mis Redes Sociales</h3>
            <div className="flex justify-center">
              <SocialLinks />
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
