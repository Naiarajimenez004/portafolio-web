<script setup lang="ts">

</script>

<template>
  <div class="min-h-screen flex flex-col">

      <nav class="flex justify-center gap-6 p-6 bg-blue-950 text-2xl">
      
      <router-link class="text-white hover:text-gray-400 shadow-lg" to="/proyecto">
      <h1>Proyecto</h1>
      </router-link>

      <router-link class="text-white hover:text-gray-400 shadow-lg" to="/nosotras">
      <h1>Nosotras</h1>
      </router-link>

      <router-link class="text-white hover:text-gray-400 shadow-lg" to="/contacto">
      <h1>Contacto</h1>
      </router-link> 
      
      </nav>

     <main class="home-page flex-1">
      <h1 class="text-center text-8xl pt-50 font-Satoshi font-bold text-gray-400">
      RAÍCES Y MAREAS
      </h1>

      <p class="text-center p-10 pl-20 pr-20 font-Satoshi font-medium text-2xl text-gray-400">
      Atrapada en la ambición y la presión una joven estudiante de instituto que sueña con ser diseñadora, 
      se pasa tres noches sin dormir.
      </p>
     </main>     
      
    </div>


</template>

<style scoped>

.home-page {
  background-image: url('/public/imagenes/fondoo.jpg');
  background-size: cover;
  background-position: center;
  background-position: bottom;
  background-repeat: no-repeat;

}

</style>