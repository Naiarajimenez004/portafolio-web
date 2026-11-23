
<script setup lang="ts">

import { MenuIcon } from '@lucide/vue';
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuList,
  navigationMenuTriggerStyle,
} from '@/components/ui/Navegador/navigation-menu'
import { Button } from '@/components/ui/button'
import { onMounted, onUnmounted, ref } from 'vue';

interface menuItem {
  label: string
  href: string
}

interface props {
  items: menuItem[]
  homeRoute?: string 
}

withDefaults(defineProps<props>(), {
  homeRoute: '/',
}) 

 const videreMenu = ref<boolean>(true)

  const handleResize = () => {
    if (window.innerWidth <= 640) {
      videreMenu.value = false
    } else { 
      videreMenu.value = true
    }
  }

  onMounted(() => {
    handleResize()
    window.addEventListener('resize', handleResize)
  })
  
  onUnmounted(() => {
    window.removeEventListener('resize', handleResize)
  })



</script>

<template>

    <div>
    <Button
      type="button"
      class="fixed top-6 right-2 z-50 p-2 text-white "
      :aria-expanded="videreMenu"
      :aria-label="videreMenu ? 'Cerrar menú' : 'Abrir menú'"
      @click="videreMenu = !videreMenu"
    >
      <MenuIcon aria-hidden="true" />
    </Button>


      <nav v-if="videreMenu" class="fixed right-4 top-14 z-40 flex w-56 flex-col  bg-white p-3 shadow-lg sm:static sm:w-auto sm:flex-row sm:bg-transparent sm:p-0 sm:shadow-none">
      <RouterLink :to="homeRoute">
        
      </RouterLink>

        <NavigationMenu>
          <NavigationMenuList class="flex flex-col sm:flex-row">

            <NavigationMenuItem v-for="items in items" key="items.label" class="right-10">
              <RouterLink
                :to="items.href"
                :class="[navigationMenuTriggerStyle(), 'text-md hover:text-gray-300 transition-colors']"
              >
              
                {{ items.label }}
              </RouterLink>

            </NavigationMenuItem>

          </NavigationMenuList>
        </NavigationMenu>
      </nav>
    </div>

</template>


<style scoped>

</style>