// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store/index'
import axios from "axios"
import ElementUI from "element-ui"
import "element-ui/lib/theme-chalk/index.css"
import {request} from "./network/request"
import {checkLogin, updateUserInfo} from "./plugins/utils"

Vue.use(ElementUI);
Vue.prototype.$axios = axios;
Vue.prototype.$request = request;
Vue.prototype.$checkLogin = checkLogin;
Vue.prototype.$updateUserInfo = updateUserInfo;
Vue.config.productionTip = false;

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>',
  store
})
