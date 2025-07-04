import nodemailer from "nodemailer";
import env from "dotenv";
env.config();

export const sendEmail = async (to, subject, text) => {
  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.EMAIL_USER, // Your email address
      pass: process.env.EMAIL_PASS, // Your email password or app password
    },
  });

  transporter.sendMail(
    {
      from: process.env.EMAIL_USER, // Sender address
      to, // List of recipients
      subject, // Subject line
      text, // Plain text body
    },
    (error, info) => {
      if (error) {
        console.error("Error sending email:", error);
      } else {
        console.log("Email sent successfully:", info.response);
      }
    }
  );
};
