'use strict';

module.exports = {
  name: require('./package').name,

  included(app) {
    this._super.included.apply(this, arguments);

    app.import('node_modules/jquery-colpick/js/colpick.js');
    app.import('node_modules/jquery-colpick/css/colpick.css');
  }

};
