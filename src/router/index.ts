import Home from "@/pages/home/Home.vue";
import { createRouter, createWebHashHistory } from "vue-router";
import Proyecto from "@/pages/Proyecto/Proyecto.vue";
import Nosotras from "@/pages/Nosotras/Nosotras.vue";
import Contacto from "@/pages/Contacto/Contacto.vue";

export const router = createRouter({
  history: createWebHashHistory(import.meta.env.BASE_URL),

  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/:patchMatch(.*)',
      redirect: '/'
    },
    {
      path: '/Proyecto',
      name: 'proyecto',
      component: Proyecto 
    },
    {
      path: '/Contacto',
      name: 'contacto',
      component: Contacto 
    },
    {
      path: '/Nosotras',
      name: 'nosotras',
      component: Nosotras
    }

  ]
})