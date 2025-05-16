import emailjs from '@emailjs/browser';

// Configura tus credenciales de EmailJS
const SERVICE_ID = 'service_27nv2y8'; // Crea un servicio en emailjs.com
const TEMPLATE_ID = 'template_8zxcmrl'; // Crea una plantilla en emailjs.com
const PUBLIC_KEY = 'YCzbxDDRBcsxjl7JL'; // Tu clave pública de EmailJS

export const sendEmail = async (formData) => {
  try {
    const templateParams = {
      from_name: formData.name,
      from_email: formData.email,
      message: formData.message,
      to_name: 'Miguel',
      reply_to: formData.email
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
