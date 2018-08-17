require('../css/app.scss');

// import socket from "./socket"
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
