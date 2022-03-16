import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import HNav from "./components/common/HNav.vue";
import FNav from "./components/common/FNav.vue";
import HBreadcumb from "./components/common/HBreadcrumb.vue";
import vuetify from './plugins/vuetify'

Vue.config.productionTip = false;
Vue.filter("truncate", function (text, length, clamp) {
  if (text) {
    clamp = clamp || "...";
    return text.length > length ? text.slice(0, length) + clamp : text;
  }
});

new Vue({
  router,
  store,
  vuetify,
  render: h => h(App)
}).$mount("#app");

Vue.component("HNav", HNav);
Vue.component("FNav", FNav);
Vue.component("HBreadcrumb", HBreadcumb);
