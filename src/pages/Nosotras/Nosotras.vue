<script setup lang="ts">

import Navigation from '@/components/ui/Navegador/Navigation/Navigation.vue';
import { Home, } from '@lucide/vue';
import Footer from '@/components/ui/footer/footer.vue';

 const menuItems = [
  { label: 'Proyecto', href: '/Proyecto'},
  { label: 'Nosotras', href: '/Nosotras'},
  { label: 'Contacto', href: '/Contacto'}
]

</script>

<template class="bg-gray-400">
    <div class="min-h-screen flex flex-col">
    <nav class="flex items-center gap-6 p-6 bg-blue-950 justify-between">
        <router-link class="flex items-center justify-between text-2xl"
        to="/"
        >       
            <Home class="h-8 w-8 text-white hover:text-gray-500" /> 
        </router-link> 

        <Navigation :items="menuItems"/> 

    </nav>   
    </div>
  
  <Footer class="mt-auto"/>

</template>

<style scoped>

</style>