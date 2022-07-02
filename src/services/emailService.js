// dependencies
import emailjs from '@emailjs/browser';
// env's
const serviceId = process.env.EMAILJS_SERVICEID;
const templateId = process.env.EMAILJS_TEMPLATEID;
const userID = process.env.EMAILJS_USERID;

const sendEmail = async (data) => {
  try {
    const res = await emailjs.send(serviceId, templateId, data, userID);
    return {
      message: 'SUCCESS!',
      status: res.status,
      text: res.text,
    };
  } catch (err) {
    return { message: 'FAILED...', err };
  }
};

export default sendEmail;
