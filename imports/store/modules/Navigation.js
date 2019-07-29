export default {
  namespaced: true,
  state: {
    showSidebar: true
  },
  mutations: {
    toggleSidebar(state) {
      state.showSidebar = !state.showSidebar;
    }
  },
  actions: {
    toggleSidebar(context) {
      context.commit('toggleSidebar');
    }
  },
  getters: {}
};