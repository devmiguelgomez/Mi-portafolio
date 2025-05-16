import { useRef, useState } from 'react';
import Image from 'next/image';
import Layout from '../components/Layout';
import SocialLinks from '../components/SocialLinks';
import SkillsSection from '../components/SkillsSection';
import ProjectCard from '../components/ProjectCard';
import CertificationsSection from '../components/CertificationsSection';
import { FaDownload, FaEye } from 'react-icons/fa';
import Head from 'next/head';
import { sendEmail } from '../utils/emailService';

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
    title: "App de Tareas (Task Management App)",
    description: "Aplicación para gestionar tareas con Base de datos, mensajes automaticos para la notificacion y una interfaz agradable.",
    tags: ["Node.js", "MongoDB", "React", "Tailwind CSS", "Express",   "nodemailer", "vite", "node-cron"],
    image: "/images/proyecto2.jpg",
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
  const certificationsRef = useRef(null); // Nueva referencia
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

    const result = await sendEmail(formData);

    if (result.success) {
      setStatus(result.message);
      setSuccess(true);
      setFormData({ name: '', email: '', message: '' });
      setTimeout(() => setSuccess(false), 3000);
    } else {
      setStatus(result.message);
    }
  };

  return (
    <>
      <Head>
        <title>Miguel Gómez | Desarrollador MERN Stack | Portafolio de desarrollo web</title>
        <meta name="description" content="Portafolio profesional de Miguel Gómez, Desarrollador MERN Stack especializado en React, Node.js, MongoDB y Express. Proyectos web y aplicaciones interactivas." />
        <meta name="keywords" content="desarrollo web, programador React, Node.js, MERN Stack, portafolio desarrollador, MongoDB, Express, JavaScript, frontend, backend, UI/UX" />
        
        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.tudominio.com/" />
        <meta property="og:title" content="Miguel Gómez | Desarrollador MERN Stack" />
        <meta property="og:description" content="Portafolio profesional de desarrollo web y diseño UI/UX con React, Node.js y más tecnologías." />
        <meta property="og:image" content="https://www.tudominio.com/images/mi-foto.jpg" />
        
        {/* Twitter */}
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://www.tudominio.com/" />
        <meta property="twitter:title" content="Miguel Gómez | Desarrollador MERN Stack" />
        <meta property="twitter:description" content="Portafolio profesional de desarrollo web y diseño UI/UX con React, Node.js y más tecnologías." />
        <meta property="twitter:image" content="https://www.tudominio.com/images/mi-foto.jpg" />
      </Head>
      
      <Layout 
        title="Miguel Gómez | Desarrollador MERN Stack" 
        aboutRef={aboutRef}
        projectsRef={projectsRef}
        certificationsRef={certificationsRef} // Pasar la nueva referencia
        contactRef={contactRef}
      >
        {/* SECCIÓN PRINCIPAL */}
        <section id="home" className="py-12 md:py-20 min-h-screen flex flex-col justify-center">
          <div className="flex flex-col items-center text-center">
            {/* Logo/Imagen antes del nombre */}
            <div className="mb-8 relative w-36 h-36 md:w-40 md:h-40 overflow-hidden rounded-full border-4 border-blue-500 dark:border-blue-400 shadow-lg">
              <Image
                src="/images/mi-foto.jpg"
                alt="Miguel Gómez - Desarrollador MERN Stack"
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
              Desarrollador MERN Stack & Diseñador UI/UX
            </p>
            <p className="text-lg text-gray-600 dark:text-gray-400 mb-6 max-w-2xl">
              Transformando ideas en experiencias digitales 🚀
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
              🚀 ¡Hola! Soy Miguel Gómez, estudiante de Ingeniería de Sistemas en sexto semestre, técnico en sistemas y desarrollador multimedia enfocado en la creación de páginas web.  
              💡 Desde pequeño me ha apasionado la tecnología, la programación y el diseño de experiencias digitales.  
              🖥️ Disfruto aprender y adaptarme a nuevas herramientas, lo que me ha permitido trabajar con tecnologías como HTML, CSS, JavaScript, React, Node.js y MongoDB.  
              📚 Siempre busco nuevos desafíos que me ayuden a crecer y ofrecer soluciones innovadoras.  
              </p>

              <p className="text-lg text-gray-600 dark:text-gray-300 mb-8">
              Me considero una persona curiosa y adaptable, siempre dispuesta a aprender algo nuevo. Gracias a esto, he adquirido experiencia en diversas tecnologías y metodologías de desarrollo.  
              Mi objetivo es seguir mejorando mis habilidades y aportar valor a cada proyecto en el que participe.  
              </p>
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

        {/* NUEVA SECCIÓN DE CERTIFICACIONES */}
        <div ref={certificationsRef} id="certifications">
          <CertificationsSection />
        </div>

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

                {/* Campo oculto para el reenvío */}
                <input type="hidden" name="_replyto" value={formData.email} />
                <input type="hidden" name="_subject" value="Nuevo mensaje desde el portafolio" />

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
    </>
  );
}
