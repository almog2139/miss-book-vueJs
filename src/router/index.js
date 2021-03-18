import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import UserProfile from '../views/UserProfile.vue'
import BookApp from '../views/BookApp.vue'
import About from '../views/About.vue'
import BookDetails from '../cmps/BookDetails.vue'
import BookAuthor from '../cmps/BookAuthor.vue'
import AboutTeam from '@/cmps/AboutTeam.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/book/:id',
    component: BookDetails,
    children: [
      {
        path: '/book/:id/author',
        component: BookAuthor
      }
    ]
  },
  {
    path: '/book',
    name: 'BookApp',
    component: BookApp
  },
  {
    path: '/about',
    component: About,
    children: [
      {
        path: '/about/team',
        component: AboutTeam
      },
    ]
    ,
    
  },
  {
    path: '/user',
    component: UserProfile
  },
  {
    path: '/',
    component: Home
  },
]

const router = new VueRouter({
  routes
})

export default router
