export default {
  namespaced: true,
  state: {
    showNav: true
  },
  mutations: {
    toggleNav(state) {
      state.showNav = !state.showNav;
    }
  },
  actions: {
    toggleNav(context) {
      context.commit('toggleNav');
    }
  },
  getters: {}
};