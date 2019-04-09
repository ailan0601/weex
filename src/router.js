/* global Vue */
// 导入路由模块
import Router from 'vue-router'
// 引入组件
import index from './components/index.vue'
import car from './components/car.vue'
import my from './components/my.vue'
//让vue使用router当做自己的路由
Vue.use(Router)
//创建一个路由对象并输出
export const router = new Router({
  routes: [{
    path: '/index',
    name: 'index',
    component: index
  }, {
    path: '/car',
    name: '/car',
    component: car
  }, {
    path: '/my',
    name: 'my',
    component: my
  }]
})
