'use strict';

const BaseRouter = require('../../../commons/router/base.router');

class ContactRouter extends BaseRouter {
  constructor() {
    super();
    this.controller = require('./controllers/contact.controller');
  }
  initialize() {
    this.post('/', this.controller.create);
  }
}

module.exports = new ContactRouter().getRouter();
