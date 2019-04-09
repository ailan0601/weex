/* global Vue */

/* weex initialized here, please do not move this line */
//导入路由文件
// 导入一个跟组件
import foo from './src/router.vue'
const {
  router
} = require('./router')
/* eslint-disable no-new */
new Vue(Vue.util.extend({
  el: '#root',
  router
}, foo))
//制定一个路由入口
router.push('index')
