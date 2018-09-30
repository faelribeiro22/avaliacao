// eslint-disable-next-line
import VueSVGIcon from 'vue-svgicon';
import Vue from 'vue';
import App from './App.vue';
import store from './store';

Vue.use(VueSVGIcon);

Vue.config.productionTip = false;

new Vue({
  store,
  render: h => h(App),
}).$mount('#app');
