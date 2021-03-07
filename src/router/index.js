import { createRouter, createWebHashHistory } from 'vue-router'
import Home from '../components/Home'
import Profile from '../components/Profile'
import ToDo from '../components/ToDo'
import Blogs from '../components/Blogs'
import Sign_up from '../components/Sign_up'
import Login from '../components/Login'

const routes = [
  {
    path: '/',
    redirect:'/Home'
  },
  {
    path: '/Home',
    name: 'Home',
    component: Home
  },
  {
    path: '/Profile',
    name: 'Profile',
    component: Profile
  },
  {
    path: '/ToDo',
    name: 'ToDo',
    component: ToDo
  },
  {
    path: '/Blogs',
    name: 'Blogs',
    component: Blogs
  },
  {
    path: '/Login',
    name: 'Login',
    component: Login
  },
  {
    path: '/Sign_up',
    name: 'Sign_up',
    component: Sign_up
  },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})
export default router
