import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import Head from './components/componentshead.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path:'/head',
      component: Head
    }
  ]
})
