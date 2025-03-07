import Link from 'next/link';
import { FaLinkedin, FaGithub, FaInstagram } from 'react-icons/fa';

export default function SocialLinks() {
  return (
    <div className="flex justify-center space-x-6 mt-8">
      <Link href="https://www.linkedin.com/in/tu-perfil" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-blue-600">
        <FaLinkedin size={30} />
      </Link>
      <Link href="https://github.com/tu-usuario" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-gray-900">
        <FaGithub size={30} />
      </Link>
      <Link href="https://www.instagram.com/tu-usuario" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-pink-500">
        <FaInstagram size={30} />
      </Link>
    </div>
  );
}
