import Layout from './components/Layout'

export default function Contact() {
  return (
    <Layout>
      <h1 className="text-4xl font-bold mb-6">Contacto</h1>
      <p className="mb-4">¿Quieres trabajar conmigo? Envíame un mensaje.</p>

      <form className="space-y-4 max-w-md">
        <input type="text" placeholder="Nombre" className="w-full p-3 border rounded-lg" />
        <input type="email" placeholder="Correo" className="w-full p-3 border rounded-lg" />
        <textarea placeholder="Mensaje" rows="5" className="w-full p-3 border rounded-lg"></textarea>
        <button className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-500 transition">
          Enviar
        </button>
      </form>
    </Layout>
  )
}
