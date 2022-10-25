import { createRouter, createWebHistory } from 'vue-router'
import layout from '../layout/layout.vue'
import home from '../views/Home'


const routes = [
  {
    //单词管理界面路由
    path: '/',
    name: 'layout',
    component: layout,
    //子路由-单词table
    children: [
        {
          path: '/',
          name: 'home',
          component: () => import("../views/Home")
        }
    ]
  },


  //  注册界面
  {
    path: '/login',
    name: 'login',
    component: () =>  import("../views/Login")
  },

]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
