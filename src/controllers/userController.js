const nodemailer = require('nodemailer');

const sendEmail = async (req, res) => {
  let { email, name, message, phone } = req.body;
  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: 'juandirios2011',
      pass: 'qjfortkbusduvvuj',
    },
    tls: { rejectUnauthorized: false },
  });

  const mailOptions = {
    from: 'juandirios2011@gmail.com',
    to: 'juandirios2011@gmail.com',
    subject: `${name} quiere contactarse contigo`,
    html: `<div>
              <p>${message}</p>
              <p>Telefono de contacto: ${phone}</p>
              <p>Correo electronico: ${email}</p>
           </div>`,
  };

  transporter.sendMail(mailOptions, function (error, info) {
    if (error) {
      console.log(error);
    } else {
      console.log('Email sent: ' + info.response);
    }
  });

  console.log(email, name);
  res.json(req.body);
};

module.exports = {
  sendEmail,
};
