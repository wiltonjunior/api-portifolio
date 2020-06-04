
'use strict'

class EmailService {

  constructor() {
    this.nodemailer = require('nodemailer');
    this.propertyUtils = require('../utils/property.utils');
    this.sendMail = this.sendMail.bind(this);
    this.generateEmail = this.generateEmail.bind(this);
  }

  generateEmail(name, email, message) {
    const mail = `
        <div style="font-family: sans-serif;">
            <h3>Olá!</h3>
            <h4>Zabbix Reports possui uma nova pergunta!</h4>
            <h4 style="font-size: 15px">Abaixo seguem as credenciais do remetente:</h4>
            <div>
                <div>
                    <span style="margin-right: 4px">Nome: </span><strong>${name}</strong>
                </div>
                <br />
                <div>
                    <span style="margin-right: 4px">Email: </span><strong>${email}</strong>
                </div>
            </div>
            <h4 style="text-decoration: underline; margin-bottom: 0">Mensagem: </h4>
            <p style="margin: 8px 0">
                ${message}
            </p>
        </div>
    `;
    return mail;
  }

  async sendMail(mail) {
    const transporter = this.nodemailer.createTransport({
      host: 'smtp.gmail.com',
      port: 587,
      secure: false,
      requireTLS: true,
      auth: {
        user: process.env.EMAIL_SENDER,
        pass: process.env.EMAIL_PASSWORD
      }
    });
    const mailOptions = {
      from: process.env.EMAIL_SENDER,
      to: process.env.EMAIL_RECEIVER,
      subject: `Zabbix Reports possui uma nova pergunta!`,
      html: mail
    };
    await transporter.sendMail(mailOptions, (error, info) => {
      if (error) {
        return console.log(error.message);
      }
    });
  }
}

module.exports = new EmailService();
