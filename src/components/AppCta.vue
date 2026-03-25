<script setup lang="ts">
import AppButton from '@/components/AppButton.vue'
import { useRouter } from 'vue-router'
import { Calendar } from 'lucide-vue-next'

withDefaults(
  defineProps<{
    title?: string
    description?: string
    id?: string
  }>(),
  {
    title: 'Prêt à organiser votre événement ?',
    description:
      'Contactez-nous pour discuter de votre projet et réserver votre espace au CCI Ivato.',
    id: 'contact',
  },
)

const router = useRouter()

function navigateTo(path: string) {
  void router.push(path)
}
</script>

<template>
  <section :id="id" class="cta">
    <div class="container cta__container" v-motion-scale>
      <div class="cta__inner">
        <h2 class="cta__title">{{ title }}</h2>
        <p class="cta__desc">{{ description }}</p>
        <div class="cta__actions">
          <AppButton @click="navigateTo('/contact')" variant="primary">
            Réserver un espace
            <Calendar class="cta__icon" />
          </AppButton>
          <AppButton href="tel:+261320362300" variant="secondary"> +261 32 03 623 00 </AppButton>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.cta {
  padding: var(--section-padding);
  background: var(--color-bg-subtle);
}

.cta__inner {
  text-align: center;
  padding: 80px 40px;
  border-radius: var(--radius-lg);
  background: var(--color-secondary);
}

.cta__title {
  font-size: var(--font-size-xl);
  font-family: var(--font-title);
  font-weight: 700;
  color: #fff;
  margin-bottom: 16px;
}

.cta__icon {
  color: var(--color-secondary);
  width: var(--font-size-sm);
  height: var(--font-size-sm);
}

.cta__desc {
  color: rgba(255, 255, 255, 0.75);
  max-width: 480px;
  margin: 0 auto 32px;
}

.cta__actions {
  display: flex;
  gap: 16px;
  justify-content: center;
  flex-wrap: wrap;
}

.cta__actions .btn-primary {
  background: #fff;
  color: var(--color-secondary);
  border-color: #fff;
}

.cta__actions .btn-primary:hover {
  background: rgba(255, 255, 255, 0.9);
}

.cta__actions .btn-secondary {
  border-color: rgba(255, 255, 255, 0.4);
  color: #fff;
}

.cta__actions .btn-secondary:hover {
  background: rgba(255, 255, 255, 0.1);
  border-color: rgba(255, 255, 255, 0.6);
}

@media (max-width: 768px) {
  .cta__inner {
    padding: 48px 24px;
  }
}
</style>
