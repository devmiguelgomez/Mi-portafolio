import emailjs from '@emailjs/browser';

// Configura tus credenciales de EmailJS
const SERVICE_ID = 'service_27nv2y8'; // Servicio en emailjs.com
const TEMPLATE_ID = 'template_8zxcmrl'; // Plantilla en emailjs.com
const PUBLIC_KEY = 'YCzbxDDRBcsxjl7JL'; // Clave pública de EmailJS

export const sendEmail = async (formData) => {
  try {
    const templateParams = {
      from_name: formData.name,
      from_email: formData.email,
      message: formData.message,
      subject: formData.subject,
      to_name: 'Miguel',
      reply_to: formData.email,
      time_sent: new Date().toLocaleString('es-CO', {
        hour: '2-digit', 
        minute: '2-digit',
        year: 'numeric',
        month: 'short',
        day: 'numeric'
      })
    };
    
    const response = await emailjs.send(
      SERVICE_ID,
      TEMPLATE_ID,
      templateParams,
      PUBLIC_KEY
    );
    
    return { success: true, message: 'Mensaje enviado con éxito! 🎉' };
  } catch (error) {
    console.error('Error al enviar el email:', error);
    return { success: false, message: 'Hubo un error al enviar tu mensaje.' };
  }
};
