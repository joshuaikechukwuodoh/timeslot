import twilio from "twilio";
import env from "dotenv";
env.config();

const client = twilio(process.env.ACCOUNT_SID, process.env.AUTH_TOKEN);

export const sendWhatsAppMessage = (message) => {
  return client.messages.create({
    from: process.env.TWILIO_PHONE_NUMBER,
    to: `whatsapp:${process.env.WHATSAPP_NUMBER}`,
    body: message,
  });
};
