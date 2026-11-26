<script setup lang="ts">

</script>

<template>
  <div class="bg-gray-400 h-screen">

    <main 
      class="home-page"
    >
      <nav class="flex justify-center gap-6 p-6 bg-blue-950">

      <router-link class="text-white hover:text-gray-400" to="/proyecto">
      <h1>Proyecto</h1>
      </router-link>

      <router-link class="text-white hover:text-gray-400" to="/nosotras">
      <h1>Nosotras</h1>
      </router-link>

      <router-link class="text-white hover:text-gray-400" to="/contacto">
      <h1>Contacto</h1>
      </router-link> 
      
      </nav>

      <h1 class="text-center text-5xl pt-50 font-Satoshi font-bold text-white">
      RAÍCES Y MAREAS
      </h1>

      <p class="text-center p-10 font-Satoshi font-light text-3xl text-white">
      Un proyecto que va más allá del mar
      </p>
  </main>
    </div>


</template>

<style scoped>

.home-page {
  min-height: 100vh;
  background-image: url('/public/imagenes/fondo.jpg');
  background-size: cover;
  background-position: top;
  background-position: bottom;
  background-repeat: no-repeat;
}

.imagen {
  transform: rotate(90deg);
  transform-origin: center;
}




</style>