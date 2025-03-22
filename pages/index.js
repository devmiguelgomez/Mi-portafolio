import Image from 'next/image';
import Layout from './components/Layout';
import SocialLinks from './components/SocialLinks';
import SkillsSection from './components/SkillsSection';
import Link from 'next/link';

export default function Home() {
  return (
    <Layout title="Inicio | Mi Portafolio">
      <section className="py-12 md:py-20">
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
          
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400">
            Miguel Gómez
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-700 dark:text-gray-300 mb-8 max-w-2xl">
            Desarrollador Web & Diseñador UI/UX
          </p>
          
          <div className="flex flex-wrap justify-center gap-4">
            <a
              href="/miguel-gomez-cv.pdf"
              download
              className="px-6 py-3 bg-blue-600 hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600 text-white rounded-lg transition-colors shadow-md"
            >
              Descargar CV
            </a>
            <Link href="/contact">
              <span className="px-6 py-3 bg-gray-200 hover:bg-gray-300 dark:bg-gray-700 dark:hover:bg-gray-600 text-gray-800 dark:text-white rounded-lg transition-colors shadow-md cursor-pointer">
                Contáctame
              </span>
            </Link>
          </div>
        </div>
      </section>
      
      <SocialLinks />
      <SkillsSection />
    </Layout>
  );
}
