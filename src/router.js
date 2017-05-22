import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)


export default new VueRouter({
  routes: [
    {
      path: '/pageA',
      name: 'pageA',
      component: resolve => require(['./pages/pageA/index.vue'], resolve)
    },
    {
      path: '/pageB',
      name: 'pageB',
      component: resolve => require(['./pages/pageB/index.vue'], resolve)
    },
    {
      path: '/pageC',
      name: 'pageC',
      component: resolve => require(['./pages/pageC/index.vue'], resolve)
    },
    {
      path: '/pageD',
      name: 'pageD',
      component: resolve => require(['./pages/pageD/index.vue'], resolve)
    },
    {
      path: '/pageE',
      name: 'pageE',
      component: resolve => require(['./pages/pageE/index.vue'], resolve)
    },
    {
      path: '*',
      redirect: '/pageA'
    }
  ],
})
