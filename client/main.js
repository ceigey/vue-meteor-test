
import Vue from 'vue';
import VueMeteorTracker from 'vue-meteor-tracker';
import VueRouter from 'vue-router';
import Vuex from 'vuex';
import BootstrapVue from 'bootstrap-vue';

import routes from '#/imports/routes/VuerldBuildr';
import modules from '#/imports/store/Modules';

// import App from './App.vue';
// import App from './AppMain.vue'
import App from './VuerldBuildr.vue'
import './main.html';

import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-vue/dist/bootstrap-vue.css';
// import '../imports/scss/symlinks/bootstrap/bootstrap.scss';
// import '../imports/scss/symlinks/bootstrap-vue/index.scss';

Meteor.startup(() => {
  Vue.use(BootstrapVue);
  Vue.use(VueMeteorTracker);
  Vue.use(VueRouter);
  Vue.use(Vuex);

  let router = new VueRouter({
    routes
  });

  let store = new Vuex.Store({
    ...modules
  })
  
  new Vue({
    el: '#app',
    ...App,
    router,
    store
  });
});
