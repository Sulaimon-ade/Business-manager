const nodemailer = require('nodemailer');
require('dotenv').config();

// Create a transporter object
const transporter = nodemailer.createTransport({
  service: 'gmail', // or use another email service (e.g., 'Mailgun', 'SendGrid', etc.)
  auth: {
    user: process.env.EMAIL_USER, // Your email address (e.g., example@gmail.com)
    pass: process.env.EMAIL_PASS // Your email password or app password
  }
});

// Function to send email
async function sendEmail(to, subject, text) {
  try {
    const info = await transporter.sendMail({
      from: process.env.EMAIL_USER,
      to: to, // Recipient's email address
      subject: subject,
      text: text
    });
    console.log('Email sent: ' + info.response);
  } catch (error) {
    console.error('Error sending email:', error);
  }
}

module.exports = sendEmail;