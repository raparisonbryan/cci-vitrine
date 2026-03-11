<script setup lang="ts">
import { computed } from 'vue'

type Variant = 'primary' | 'secondary'

const props = withDefaults(
  defineProps<{
    variant?: Variant
    href?: string
    type?: 'button' | 'submit' | 'reset'
  }>(),
  {
    variant: 'primary',
    type: 'button',
  },
)

const isLink = computed(() => !!props.href)
</script>

<template>
  <a v-if="isLink" :href="href" class="btn" :class="`btn-${variant}`">
    <slot />
  </a>
  <button v-else :type="type" class="btn" :class="`btn-${variant}`">
    <slot />
  </button>
</template>
