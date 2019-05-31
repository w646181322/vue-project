import VueRouter from 'vue-router'

import HomeContainer from './component/tabbar/homeContainer.vue'
import ShopcarContainer from './component/tabbar/shopCarContainer.vue'
import PersonContainer from './component/tabbar/personContainer.vue'
import NumberContainer from './component/tabbar/numberContainer.vue'

var router = new VueRouter({
  routes: [
    { path: '/', redirect:'/home'},
    { path: '/home', component:HomeContainer},
    { path: '/shopcar', component:ShopcarContainer},
    { path: '/person', component:PersonContainer},
    { path: '/number', component:NumberContainer}
  ]
})


export default router