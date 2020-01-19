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
    props: true
  }
]

const router = new VueRouter({
  routes
})

export default router
