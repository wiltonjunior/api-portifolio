'use strict';

const HttpController = require('../../../../commons/controllers/http.controller');

class ContactController extends HttpController {
  constructor() {
    super();
    this.emailService = require('../../../../commons/services/email.service');
  }

  async create({ body }, res, next) {
    const { name, email, message } = body;
    const mail = this.emailService.generateEmail(name, email, message);
    await this.emailService.sendMail(mail);
    this._sendResponse(res, next, {}, this.messages.CONTACT_SEND);
  }
}

module.exports = new ContactController();
