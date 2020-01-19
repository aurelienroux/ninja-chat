import Vue from 'vue'
import VueRouter from 'vue-router'
import Welcome from '../views/Welcome.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'welcome',
    component: Welcome
  },
  {
    path: '/chat',
    name: 'chat',
    component: () => import('@/components/Chat.vue'),
    props: true,
    beforeEnter: (to, _, next) => {
      if (to.params.name) {
        next()
      } else {
        next({ name: 'welcome' })
      }
    }
  }
]

const router = new VueRouter({
  mode: 'history',
  routes
})

export default router
