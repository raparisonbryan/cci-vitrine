<script setup lang="ts">
import { ref, computed } from 'vue'
import { useRoute } from 'vue-router'
import AppNavbar from '@/components/AppNavbar.vue'
import AppFooter from '@/components/AppFooter.vue'
import SplashScreen from '@/components/SplashScreen.vue'

const route = useRoute()
const splashDone = ref(false)

const showSplash = computed(() => route.path === '/' && !splashDone.value)
</script>

<template>
  <SplashScreen v-if="showSplash" @complete="splashDone = true" />
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
