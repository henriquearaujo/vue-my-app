// src/router/index.js
import { createRouter, createWebHistory } from 'vue-router'

import Home from '../pages/Home.vue'
import Sobre from '../pages/Sobre.vue'
import Contato from '../pages/Contato.vue'
import Mensagens from '../pages/Mensagens.vue'
import NotFound from '../pages/NotFound.vue'

const routes = [
  { path: '/', name: 'home', component: Home },
  { path: '/sobre', name: 'sobre', component: Sobre },
  { path: '/contato', name: 'contato', component: Contato },
  { path: '/mensagens', name: 'mensagens', component: Mensagens },
  { path: '/:pathMatch(.*)*', name: 'notfound', component: NotFound },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior() {
    // Sempre leva ao topo ao navegar
    return { top: 0 }
  },
})

export default router
