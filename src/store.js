import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    stars: 0,
    comentario: '',
  },
  mutations: {
    ADD_STAR(context, star) {
      this.state.stars = star;
    },
    COMENTARIO(context, texto) {
      this.state.comentario = texto;
    },
  },
  actions: {

  },
});
