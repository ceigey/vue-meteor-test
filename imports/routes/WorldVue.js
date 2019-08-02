import Home from '#/imports/vue/pages/Home.vue';
import Settings from '#/imports/vue/pages/Settings.vue';
import WorldEdit from '#/imports/vue/pages/WorldEdit.vue';
import WorldNew from '#/imports/vue/pages/WorldNew.vue'
import WorldSelect from '#/imports/vue/pages/WorldSelect.vue';


export default [
  { path: '/home', component: Home },
  { path: '/settings', component: Settings },
  { path: '/world-edit/:id', component: WorldEdit },
  { path: '/world-select', component: WorldSelect },
  { path: '/world-new', component: WorldNew }
];