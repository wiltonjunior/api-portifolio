'use strict';

const pkg = require('../../../../package.json');
const logger = require('../../../commons/logger/logger');
const BaseRouter = require('../../../commons/router/base.router');

class LoopbackRouter extends BaseRouter {
  initialize() {
    this.get('/version', (req, res) => res.json({ version: pkg.version }));
  }
}

module.exports = new LoopbackRouter().getRouter();
