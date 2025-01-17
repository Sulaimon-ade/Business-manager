const express = require('express');
const sendEmail = require('./mailer'); // Import the email function

const app = express();
app.use(express.json());

app.post('/send-email', async (req, res) => {
  const { to, subject, text } = req.body;

  try {
    await sendEmail(to, subject, text);
    res.status(200).send('Email sent successfully!');
  } catch (error) {
    res.status(500).send('Error sending email: ' + error.message);
  }
});

// Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));