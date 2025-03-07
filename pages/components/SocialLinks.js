import Link from 'next/link';
import { FaLinkedin, FaGithub,  FaGoogle } from 'react-icons/fa';

export default function SocialLinks() {
  return (
    <div className="flex justify-center space-x-6 mt-8">
      <Link href="https://www.linkedin.com/in/miguel-angel-gomez-arango-235863306/" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-blue-600">
        <FaLinkedin size={30} />
      </Link>
      <Link href="https://github.com/CloritoxD" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-gray-900">
        <FaGithub size={30} />
      </Link>
      <Link  href="https://mail.google.com/mail/?view=cm&amp;fs=1&amp;tf=1&amp;to=bydemon101@gmail.com" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-pink-500">
        <FaGoogle size={30} />
      </Link>
    </div>
  );
}
