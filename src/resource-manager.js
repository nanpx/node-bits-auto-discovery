(() => {
  'use strict';

  const EventEmitter = require('events');

  class ResourceManager extends EventEmitter {
    constructor() {
      super();
    }

    load(messageCenter) {
    }

    unload() {
    }

    query() {
    }
  }

  module.exports = ResourceManager;
})();
