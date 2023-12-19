const express = require('express');
const bodyParser = require('body-parser');
const nodemailer = require('nodemailer');

const app = express();
const port = 3000; // Change this to your desired port

// Use middleware to parse JSON and urlencoded form data
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Serve static files (optional)
app.use(express.static('public'));

// Define a route for handling form submissions
app.post('/submit-form', (req, res) => {
  const { yourName, yourNumber, comment } = req.body;

  // Configure Nodemailer for sending emails
  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: 'anubhavsingh9582@gmail.com', // Replace with your Gmail email
      pass: 'bayz uksn vowv lfpr' // Replace with your Gmail password or an app-specific password
    }
  });

  // Configure email content
  const mailOptions = {
    from: 'anubhavsingh9582@gmail.com', // Replace with your Gmail email
    to: 'anubhavsingh9582@gmail.com', // Replace with your email address
    subject: 'Lead From Portfolio website',
    text: `Name: ${yourName}\nPhone: ${yourNumber}\nComment: ${comment}`
  };

  // Send the email
  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.error(error);
      res.status(500).send('Internal Server Error');
    } else {
      console.log('Email sent: ' + info.response);
      res.send('Thank you! Your message has been sent successfully.');
    }
  });
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
