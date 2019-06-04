// 入口文件

import Vue from 'vue'
// 导入路由的包
import VueRouter from 'vue-router'
// 安装路由
Vue.use(VueRouter)

// 导入及安装 vue-resource
import VueResource from 'vue-resource'
Vue.use(VueResource)

import { Header, Swipe, SwipeItem } from 'mint-ui'
import 'mint-ui/lib/style.css'
Vue.component(Header.name, Header)
Vue.component(Swipe.name, Swipe)
Vue.component(SwipeItem.name, SwipeItem)

// 导入 App 组件
import app from './App.vue'
import router from './router.js'

import './lib/mui/css/mui.min.css'
import './lib/mui/css/icons-extra.css'

var vm = new Vue({
  el: '#app',
  data:{},
  render: c => c(app),
  router
})