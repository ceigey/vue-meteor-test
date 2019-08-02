
import Vue from 'vue';
import VueMeteorTracker from 'vue-meteor-tracker';
import VueRouter from 'vue-router';
import Vuex from 'vuex';
import BootstrapVue from 'bootstrap-vue';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import VueTippy from 'vue-tippy';

import routes from '#/imports/routes/WorldVue';
import modules from '#/imports/store/Modules';

// import App from './App.vue';
// import App from './AppMain.vue'
import App from './WorldVue.vue'
import './main.html';

import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-vue/dist/bootstrap-vue.css';
// import '../imports/scss/symlinks/bootstrap/bootstrap.scss';
// import '../imports/scss/symlinks/bootstrap-vue/index.scss';

Meteor.startup(() => {

  library.add(fas);
  
  Vue.use(BootstrapVue);
  Vue.use(VueMeteorTracker);
  Vue.use(VueRouter);
  Vue.use(VueTippy, {
    popperOptions: {
      modifiers: {
        preventOverflow: { enabled: false }
      }
    }
  });
  Vue.use(Vuex);
  Vue.component('font-awesome-icon', FontAwesomeIcon);

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
