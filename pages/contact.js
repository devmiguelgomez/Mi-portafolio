import Layout from './components/Layout'
import { useState } from 'react'
import SocialLinks from './components/SocialLinks'

export default function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' })
  const [status, setStatus] = useState('')
  const [success, setSuccess] = useState(false)

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setStatus('Enviando...')

    const response = await fetch('https://formspree.io/f/xvgkplvj', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(formData),
    })

    if (response.ok) {
      setStatus('Mensaje enviado con éxito! 🎉')
      setSuccess(true)
      setFormData({ name: '', email: '', message: '' }) // Limpia el formulario
      setTimeout(() => setSuccess(false), 3000) // Oculta el mensaje después de 3 segundos
    } else {
      setStatus('Hubo un error, inténtalo de nuevo.')
    }
  }

  return (
    <Layout>
      <section className="min-h-screen py-12 fade-in">
        <div className="container mx-auto max-w-4xl px-4">
          <h1 className="text-4xl font-bold text-center text-gray-800 dark:text-white mb-8">
            Contáctame
          </h1>

          <p className="text-lg text-gray-600 dark:text-gray-300 text-center mb-6">
            Puedes escribirme directamente o encontrarme en mis redes sociales.
          </p>

          {/* Formulario funcional */}
          <div className="bg-white dark:bg-gray-800 shadow-lg rounded-lg p-6 mb-8 transform transition hover:scale-105">
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-gray-700 dark:text-gray-300">Nombre</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  placeholder="Tu nombre"
                  className="w-full px-4 py-2 mt-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:text-white transition hover:border-blue-400"
                />
              </div>

              <div>
                <label className="block text-gray-700 dark:text-gray-300">Correo Electrónico</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  placeholder="tucorreo@example.com"
                  className="w-full px-4 py-2 mt-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:text-white transition hover:border-blue-400"
                />
              </div>

              <div>
                <label className="block text-gray-700 dark:text-gray-300">Mensaje</label>
                <textarea
                  name="message"
                  rows="4"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  placeholder="Escribe tu mensaje aquí..."
                  className="w-full px-4 py-2 mt-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:text-white transition hover:border-blue-400"
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition transform hover:scale-105"
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
            <div className="flex justify-center space-x-6">
            <SocialLinks />
            </div>
          </div>
        </div>

        {/* Animaciones */}
        <style jsx>{`
          .fade-in {
            opacity: 0;
            transform: translateY(20px);
            animation: fadeIn 1.2s ease-out forwards;
          }

          @keyframes fadeIn {
            from {
              opacity: 0;
              transform: translateY(20px);
            }
            to {
              opacity: 1;
              transform: translateY(0);
            }
          }
        `}</style>
      </section>
    </Layout>
  )
}
