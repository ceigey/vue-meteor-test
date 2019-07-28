import Vue from 'vue';
import BootstrapVue from 'bootstrap-vue';
import VueMeteorTracker from 'vue-meteor-tracker';
import App from './App.vue';
import AppMain from './AppMain.vue'
import './main.html';

// import 'bootstrap/dist/css/bootstrap.css';
// import 'bootstrap-vue/dist/bootstrap-vue.css';

Meteor.startup(() => {
  Vue.use(BootstrapVue);
  Vue.use(VueMeteorTracker);
  
  new Vue({
    el: '#app',
    ...AppMain,
  });
});
