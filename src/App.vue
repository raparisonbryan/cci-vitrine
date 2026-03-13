<script setup lang="ts">
import { ref } from 'vue'
import AppNavbar from '@/components/AppNavbar.vue'
import AppFooter from '@/components/AppFooter.vue'
import SplashScreen from '@/components/SplashScreen.vue'

const splashDone = ref(false)
</script>

<template>
  <SplashScreen v-if="!splashDone" @complete="splashDone = true" />
  <template v-else>
    <AppNavbar />
    <RouterView v-slot="{ Component }">
      <Transition name="page" mode="out-in">
        <component :is="Component" />
      </Transition>
    </RouterView>
    <AppFooter />
  </template>
</template>
