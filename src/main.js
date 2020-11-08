import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import VueLikeDislikeButtons from 'vue-like-dislike-buttons'

Vue.config.productionTip = false;

import mock from './mock.js'

let data = {
  memes: mock,
  favorites: [],
  currentMeme: null
}

new Vue({
  router,
  data,
  VueLikeDislikeButtons,
  render: h => h(App)
}).$mount("#app");
