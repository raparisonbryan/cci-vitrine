<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { animate, stagger } from 'motion'

const splashRef = ref<HTMLElement | null>(null)
const done = ref(false)

const emit = defineEmits<{
  complete: []
}>()

onMounted(() => {
  const el = splashRef.value
  if (!el) return

  const line = el.querySelector('.splash__line') as HTMLElement
  const letters = Array.from(el.querySelectorAll('.splash__letter'))
  const sub = el.querySelector('.splash__sub') as HTMLElement

  animate(line, { transform: ['scaleX(0)', 'scaleX(1)'] }, { duration: 0.6 })

  animate(letters, { opacity: [0, 1], y: [40, 0] }, { duration: 0.5, delay: stagger(0.08) })

  animate(sub, { opacity: [0, 1], y: [15, 0] }, { duration: 0.5, delay: 1.2 })

  setTimeout(() => {
    animate(el, { opacity: [1, 0] }, { duration: 0.5 }).then(() => {
      done.value = true
      emit('complete')
    })
  }, 2200)
})
</script>

<template>
  <div v-if="!done" ref="splashRef" class="splash">
    <div class="splash__content">
      <div class="splash__line" />
      <h1 class="splash__title">
        <span class="splash__letter">C</span>
        <span class="splash__letter">C</span>
        <span class="splash__letter">I</span>
      </h1>
      <p class="splash__sub">Centre de Conférences International d'Ivato</p>
    </div>
  </div>
</template>

<style scoped>
.splash {
  position: fixed;
  inset: 0;
  z-index: 9999;
  display: flex;
  align-items: center;
  justify-content: center;
  background: var(--color-primary);
}

.splash__content {
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  gap: 16px;
}

.splash__line {
  width: 60px;
  height: 2px;
  background: rgba(255, 255, 255, 0.5);
  margin-bottom: 8px;
  transform: scaleX(0);
}

.splash__title {
  display: flex;
  gap: 12px;
}

.splash__letter {
  font-family: var(--font-title);
  font-size: clamp(4rem, 12vw, 7rem);
  font-weight: 800;
  color: #fff;
  letter-spacing: 0.05em;
  opacity: 0;
  line-height: 1;
}

.splash__sub {
  font-size: var(--font-size-sm);
  color: rgba(255, 255, 255, 0.6);
  letter-spacing: 0.15em;
  text-transform: uppercase;
  opacity: 0;
}
</style>
