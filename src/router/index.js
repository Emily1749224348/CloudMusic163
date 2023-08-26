import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'

Vue.use(Router)

export default new Router({
  routes: [
    // hello world 页面
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    }
  ]
})
