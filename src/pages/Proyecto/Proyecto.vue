
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

        <div class="mt-20 mx-auto cuadrado bg-purple-950/40 p-6 rounded-xl shadow-md">

            <p class="times-new-roman text-justify mt-5">
            "Toda esta historia comienza con un texto que redacté a los 17 años,
            para recuperar una asignatura en el instituto. Me pidieron escribir una narración
            de unas cuantas páginas. Escribí en forma de diario, la historia de una chica que
            pasaba varios días sin dormir inspirándome en una experiencia personal. Unos meses
            antes, tuve un episodio grave de insomnio que me llevó a sufrir varias disociaciones
            y micro sueños despierta. Acabé desmayandome en el hombro de una señora en el tren,
            me llevaron a urgencias con fiebre y pasé varios días en mi casa enferma. Hace varios
            meses recuperé el texto y decidí escribir un cortometraje basándome en él, pero 
            cambiando varias cosas.  Con esta historia pretendo mostrar la realidad de muchos
            jóvenes que sienten que ya no hay futuro para ellos. Especialmente viniendo de
            contextos menos privilegiados y migrantes. Tener que esforzarse el triple que el resto,
            sentir que no puedes descansar sin echar tu futuro a la basura, que una carrera artística
            no tiene apenas salidas en el contexto actual y que nadie te entiende, son situaciones por
            las que muchas hemos pasado.  Este corto está planteado de forma que cada persona lo pueda
            interpretar a su manera y conectar con la situación de la protagonista desde su propia 
            realidad."
            </p>

            <h1 class="times-new-roman font-semibold mt-4 text-1xl">
            Eliana Valentina Flores 2026
            </h1>
        </div> 

        <div class="mt-30 mx-auto flex justify-center text-4xl">
            <button class="font-satoshi font-bold text-purple-900 bg-purple-900/20 px-4 py-4 rounded-xl hover:text-white transition-colors">
            Más información
            </button>

        </div> 
    </div>

    <Footer class="mt-auto"/>

</template>

<style scoped>

.times-new-roman {
    font-family: 'Times New Roman', Times, serif;
}

.cuadrado {
    width: 90%;
    display: flex;
    flex-direction: column;
    align-items: center;
}


</style>
