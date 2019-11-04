import Vue from 'vue';
import App from './App.vue';
import './registerServiceWorker';
import router from './router';
import store from './store';

// import 'vue-tsx-support/options/enable-nativeon';
// import 'vue-tsx-support/options/enable-vue-router';

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount('#app');
