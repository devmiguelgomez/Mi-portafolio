import Image from 'next/image';
import Layout from './components/Layout';
import SocialLinks from './components/SocialLinks';
import SkillsSection from './components/SkillsSection';

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
          
          <p className="text-xl md:text-2xl text-gray-700 dark:text-gray-300 mb-3 max-w-2xl">
            Desarrollador Web & Diseñador UI/UX
          </p>
          
          {/* Iconos sociales integrados directamente debajo del nombre */}
          <SocialLinks />
        </div>
        <SkillsSection />
      </section>
    </Layout>
  );
}
