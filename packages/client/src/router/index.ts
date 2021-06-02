import { createRouter, createWebHistory } from '@ionic/vue-router';
import { RouteRecordRaw } from 'vue-router';

const routes: Array<RouteRecordRaw> = [
  {
    path: '',
    redirect: '/home'
  },
  {
    path: '/home',
    component: ()=> import ("../views/Home.vue")
  },
  {
    path: '/signin',
    component: ()=> import ("../views/SignIn.vue")
  },
  {
    path: '/cheer/edit',
    component: ()=> import ("../views/cheer/Editor.vue")
  },
  {
    path: '/cheer/edit/:itemid',
    component: ()=> import ("../views/cheer/Editor.vue")
  },
  {
    path: '/cheer/:itemid/edit',
    component: ()=> import ("../views/cheer/Editor.vue")
  },
  {
    path: '/cheer/list',
    component: ()=> import ("../views/cheer/List.vue")
  },

  {
    path: '/folder/:id',
    component: () => import ('../views/Folder.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
