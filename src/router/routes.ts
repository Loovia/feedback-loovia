import type {RouteRecordRaw} from 'vue-router'

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    name: 'Home',
    component: () => import('@/views/HomeView.vue')
  },
  {
    path: '/feedbacks',
    name: 'Feedbacks',
    component: () => import('@/views/ListView.vue'),
    meta: {
      icon: 'r_manage_accounts',
      showInNav: true,
      showOnHomePage: true
    }
  }
]

export default routes
