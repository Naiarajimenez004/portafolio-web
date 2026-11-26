
<script setup lang="ts">
import { PhoneCallIcon, Mail, MapPinIcon, MessageCircleAlert, X, } from '@lucide/vue';
import { Icon } from '@iconify/vue';

</script>

<template>

<div>
    <footer class="w-full bg-blue-950 text-gray-200 py-12">
        <div class="flex flex-col md:flex-row gap-8 w-full px-6 justify-between">

            <div class="space-y-4 text-left md.text-left">
                <h3 class="text-xl font-bold text-gray-200">Contáctanos</h3>
                <div class="space-y-2">
                    <p class="flex items-center gap-2 justify-start">
                        <PhoneCallIcon class="w-5 h-5"/>
                        +34 697-216-851
                    </p>
                    <p class="flex items-center gap-2 justify-start">
                        <Mail class="w-5 h-5"/>
                        RaicesyMareas@gmail.com
                    </p>
                    <p class="flex items-center gap-2 justify-start">
                        <MapPinIcon class="w-5 h-5"/>
                        Espacio Raro Hairlab
                    </p>
                </div>
            </div> 

            <div class="space-y-4 text-center md:text-left text-gray-200">
                <h3 class="text-xl font-bold text-gray-200">Síguenos</h3>
                <div class="flex gap-8 justify-center">
                    
                    <X class="w-10 h-10 hover:text-gray-500"/>
                    <Icon icon="mdi:instagram" class="w-10 h-10 hover:text-gray-500"/>
                    <MessageCircleAlert class="w-10 h-10 hover:text-gray-500"/>
                </div>
            </div>
        </div>
    </footer>
</div>


</template>

<style scoped>

</style>