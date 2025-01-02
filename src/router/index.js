import { createWebHistory, createRouter } from 'vue-router'
import IndexPage from '../pages/IndexPage.vue'
import AboutPage from '../pages/AboutPage.vue'
import ProjectsPage from '../pages/ProjectsPage.vue'

const routes = [
  { path: '/', component: IndexPage, redirect: 'about' },
  { path: '/about', component: AboutPage },
  { path: '/projects', component: ProjectsPage },
]

export default  createRouter({
  history: createWebHistory(),
  routes,
})