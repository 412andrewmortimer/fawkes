// Local files can be imported directly using relative
// paths "./socket" or full ones "web/static/js/socket".

// import socket from "./socket"

require('../css/app.scss');

import axios from 'axios';
import 'phoenix_html';
import Vue from 'vue/dist/vue.js';
import 'bootstrap';

const app = new Vue({
  el: '#app',
  data: {
    urls: {
      login: null,
      register: null
    },
    error: false
  }
});

// axios
//   .get('/')
//   .then(function(response) { app.urls = response.data; })
//   .catch(function() { app.error = true; });
