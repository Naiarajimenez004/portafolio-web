
<script setup lang="ts">

import Navigation from '@/components/ui/Navegador/Navigation/Navigation.vue';
import { Home } from '@lucide/vue';
import Footer from '@/components/ui/footer/footer.vue';

 const menuItems = [
  { label: 'Proyecto', href: '/Proyecto'},
  { label: 'Nosotras', href: '/Nosotras'},
  { label: 'Contacto', href: '/Contacto'}
]

</script>

<template >
    <div class="min-h-screen flex flex-col">
    <nav class="flex items-center gap-6 p-6 bg-blue-950 justify-between">
        <router-link class="flex items-center justify-between text-2xl"
        to="/"
        >       
            <Home class="h-8 w-8 text-white hover:text-gray-500" /> 
        </router-link> 

        <Navigation :items="menuItems"/>
    </nav>   

    <div class="block w-11/12 max-w-xs mx-auto sm:max-w-sm lg:max-w-md lg:ml-10 rounded-lg overflow-hidden shadow-lg mt-8 lg:mt-40 mb-40">
        <div class="aspect-square">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7443.153350007668!2d-0.3846400023953677!3d39.47101118642866!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd604f1cd49e59d1%3A0xd55b69f6fc2f1c6a!2sEspacio%20RARO%20Hairlab!5e1!3m2!1ses!2ses!4v1795681405637!5m2!1ses!2ses"
            class="w-full h-full rounded-lg"
            :style="{ border: 0 }"
            allowFullScreen
            referrerPolicy="no-referrer-when-downgrade"
          >
          </iframe>
        </div>
    </div>

    <Footer class="mt-auto"/>

    </div>

</template>

<style scoped>

</style>