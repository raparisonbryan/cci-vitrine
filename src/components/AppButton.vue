<script setup lang="ts">
import { computed } from 'vue'

type Variant = 'primary' | 'secondary'
type Target = '_blank' | '_self'

const props = withDefaults(
  defineProps<{
    variant?: Variant
    href?: string
    target?: Target
    type?: 'button' | 'submit' | 'reset'
  }>(),
  {
    variant: 'primary',
    type: 'button',
    target: '_self',
  },
)

const isLink = computed(() => !!props.href)
</script>

<template>
  <a v-if="isLink" :href="href" :target="target" class="btn" :class="`btn-${variant}`">
    <slot />
  </a>
  <button v-else :type="type" class="btn" :class="`btn-${variant}`">
    <slot />
  </button>
</template>
