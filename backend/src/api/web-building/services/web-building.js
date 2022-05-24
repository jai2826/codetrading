'use strict';

/**
 * web-building service.
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::web-building.web-building');
