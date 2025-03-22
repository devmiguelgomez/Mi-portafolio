import { FaLinkedin, FaGithub, FaGoogle } from 'react-icons/fa';

export default function SocialLinks() {
  return (
    <div className="flex justify-center space-x-6 mt-8">
      <a href="https://www.linkedin.com/in/devmiguelgomez/" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-blue-600">
        <FaLinkedin size={30} />
      </a>
      <a href="https://github.com/devmiguelgomez" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-gray-900">
        <FaGithub size={30} />
      </a>
      <a href="https://mail.google.com/mail/?view=cm&amp;fs=1&amp;tf=1&amp;to=devmiguelgomez@gmail.com" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-pink-500">
        <FaGoogle size={30} />
      </a>
    </div>
  );
}
