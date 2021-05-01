import Vue from 'vue'
import App from './App'
import router from './router'
import ElementUI from 'element-ui';
import { install } from '@icon-park/vue/es/all';
import 'element-ui/lib/theme-chalk/index.css';
import store from './store/index'
import axios from 'axios'
import qs from 'qs'

install(Vue, 'svg');

Vue.config.productionTip = false
Vue.use(ElementUI)

// 设置基础URL为后端服务api地址
axios.defaults.baseURL = "http://127.0.0.1:8089"

//设置全局，每次ajax请求携带cookies
axios.defaults.withCredentials = true
//解决post没有参数的问题
axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded'


axios.create({
  headers: {'Content-Type': 'application/json;charset=utf-8'},// 设置传输内容的类型和编码
  withCredentials: true,// 指定某个请求应该发送凭据。允许客户端携带跨域cookie，也需要此配置
});

// 将API方法绑定到全局
Vue.prototype.$axios = axios
Vue.prototype.$qs = qs

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
})
