import Vue from 'vue';
import BootstrapVue from 'bootstrap-vue';
import App from './App.vue';
import './main.html';

// import 'bootstrap/dist/css/bootstrap.css';
// import 'bootstrap-vue/dist/bootstrap-vue.css';

Meteor.startup(() => {
  Vue.use(BootstrapVue);

  new Vue({
    el: '#app',
    ...App,
  });
});
