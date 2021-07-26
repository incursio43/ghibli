import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import DetallePelicula from '../components/DetallePelicula'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Estudios Ghibli',
    component: Home
  },
  {
    path: '/pelicula/:id',
    name: 'Pelicula',
    component: DetallePelicula
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
