// 入口文件

import Vue from 'vue'
// 导入路由的包
import VueRouter from 'vue-router'
// 安装路由
Vue.use(VueRouter)

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