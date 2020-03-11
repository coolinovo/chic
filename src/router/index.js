import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home'
import Post from '../views/Post'
import Category from '../views/Category'
import Tag from '../views/Tag'
import About from '../views/About'
Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    redirect: '/home'
  },
  {
    path: '/home',
    component: Home
  },
  {
    path: '/posts',
    component: Post
  },
  {
    path: '/categories',
    component: Category
  },
  {
    path: '/tags',
    component: Tag
  },
  {
    path: '/about',
    component: About
  },
]

const router = new VueRouter({
  routes
})

export default router
