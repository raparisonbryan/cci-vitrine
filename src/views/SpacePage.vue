<script setup lang="ts">
import { computed, ref, watch } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import {
  Calendar,
  MoveDown,
  ChevronLeft,
  ChevronRight,
  X,
  ArrowUpRight,
  Maximize2,
  Users,
  Ruler,
  Presentation,
  Armchair,
  LayoutGrid,
  SlidersHorizontal,
  ArrowUpDown,
  Car,
  Shield,
  Crown,
  Lock,
  Sofa,
} from 'lucide-vue-next'
import type { FunctionalComponent } from 'vue'
import AppButton from '@/components/AppButton.vue'
import { spaces, type SpacePhoto } from '@/data/spaces'

const specIcons: Record<string, FunctionalComponent> = {
  Maximize2,
  Users,
  Ruler,
  Presentation,
  Armchair,
  LayoutGrid,
  SlidersHorizontal,
  ArrowUpDown,
  Car,
  Shield,
  Crown,
  Lock,
  Sofa,
}

const route = useRoute()
const router = useRouter()
const space = computed(() => spaces[route.params.slug as string])
const hasMultipleRooms = computed(() => space.value && space.value.rooms.length > 1)

const activeRoomKey = ref('')

watch(
  () => route.params.slug,
  () => {
    const firstRoom = space.value?.rooms[0]
    if (firstRoom) activeRoomKey.value = firstRoom.key
  },
  { immediate: true },
)

const activeRoom = computed(
  () => space.value?.rooms.find((r) => r.key === activeRoomKey.value) ?? space.value?.rooms[0],
)

const lightbox = ref<SpacePhoto | null>(null)

function openLightbox(photo: SpacePhoto) {
  lightbox.value = photo
  document.body.style.overflow = 'hidden'
}

function closeLightbox() {
  lightbox.value = null
  document.body.style.overflow = ''
}

function navigateLightbox(dir: 1 | -1) {
  if (!lightbox.value || !activeRoom.value) return
  const list = activeRoom.value.photos
  const idx = list.findIndex((p) => p.id === lightbox.value!.id)
  const next = (idx + dir + list.length) % list.length
  lightbox.value = list[next] ?? null
}

function navigateTo(path: string) {
  void router.push(path)
}
</script>

<template>
  <main v-if="space && activeRoom">
    <!-- Hero -->
    <section class="space-hero" :style="{ backgroundImage: `url(${space.heroImage})` }">
      <div class="space-hero__overlay" />
      <div class="container space-hero__container">
        <div class="space-hero__content">
          <span class="space-hero__badge">{{ space.card.rooms }}</span>
          <h1 class="space-hero__title">{{ space.name }}</h1>
          <p class="space-hero__subtitle">{{ space.description }}</p>
          <div class="space-hero__actions">
            <AppButton href="#contact" variant="primary">
              Réserver cet espace
              <Calendar class="icon" />
            </AppButton>
            <AppButton href="#availability" variant="secondary" class="btn--on-dark">
              Fiche technique
              <MoveDown class="icon" />
            </AppButton>
          </div>
        </div>
      </div>
    </section>

    <!-- Room selector -->
    <section v-if="hasMultipleRooms" class="room-selector">
      <div class="container">
        <div class="room-selector__header" v-motion-fade>
          <span class="section-label">Nos salles</span>
          <h2 class="section-title">Choisissez une salle</h2>
        </div>
        <div class="room-selector__grid">
          <button
            v-for="(room, i) in space.rooms"
            :key="room.key"
            class="room-card"
            :class="{ 'room-card--active': activeRoomKey === room.key }"
            v-motion-fade="{ delay: i * 0.1 }"
            @click="activeRoomKey = room.key"
          >
            <div class="room-card__img">
              <img :src="room.photos[0]?.src" :alt="room.label" />
            </div>
            <div class="room-card__overlay" />
            <div class="room-card__body">
              <h3 class="room-card__title">{{ room.label }}</h3>
            </div>
          </button>
        </div>
      </div>
    </section>

    <!-- Fiche technique + CTA -->
    <section id="availability" class="space-specs">
      <div class="container">
        <div class="space-specs__layout">
          <div class="space-specs__left">
            <div class="space-specs__header" v-motion-fade>
              <span class="section-label">Fiche technique</span>
              <h2 class="section-title">La salle en chiffres</h2>
            </div>
            <div class="space-specs__grid" v-motion-fade>
              <div
                v-for="(spec, i) in activeRoom.specs"
                :key="spec.title"
                class="spec-item"
                :style="{ animationDelay: `${i * 0.08}s` }"
              >
                <div class="spec-item__icon">
                  <component :is="specIcons[spec.icon]" />
                </div>
                <div class="spec-item__text">
                  <span class="spec-item__title">{{ spec.title }}</span>
                  <span class="spec-item__subtitle">{{ spec.subtitle }}</span>
                </div>
              </div>
            </div>
          </div>

          <div class="space-specs__right" v-motion-fade="{ delay: 0.2 }">
            <div class="space-specs__cta">
              <h3 class="space-specs__cta-title">Prêt à réserver ?</h3>
              <p class="space-specs__cta-desc">
                Contactez-nous pour discuter de votre projet et réserver votre espace au CCI Ivato.
              </p>
              <div class="space-specs__cta-actions">
                <AppButton @click="navigateTo('/contact')" variant="primary">
                  Réserver un espace
                  <Calendar class="cta__icon" />
                </AppButton>
                <AppButton href="tel:+261320362300" variant="secondary">
                  +261 32 03 623 00
                </AppButton>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Gallery -->
    <section class="space-gallery">
      <div class="container">
        <div class="space-gallery__header" v-motion-fade>
          <span class="section-label">Galerie</span>
          <h2 class="section-title">{{ activeRoom.label }} en images</h2>
          <p class="section-subtitle">Découvrez cet espace à travers notre sélection de photos.</p>
        </div>

        <div class="space-gallery__grid">
          <div
            v-for="photo in activeRoom.photos"
            :key="photo.id"
            class="space-gallery__item"
            :class="{
              'space-gallery__item--wide': photo.span === 'wide',
              'space-gallery__item--tall': photo.span === 'tall',
              'space-gallery__item--large': photo.span === 'large',
            }"
            v-motion-fade
            @click="openLightbox(photo)"
          >
            <img :src="photo.src" :alt="photo.alt" loading="lazy" />
            <div class="space-gallery__overlay">
              <span class="space-gallery__zoom">
                <ArrowUpRight class="icon" />
              </span>
              <p class="space-gallery__caption">{{ photo.alt }}</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Lightbox -->
    <Teleport to="body">
      <Transition name="lb">
        <div v-if="lightbox" class="lightbox" @click.self="closeLightbox">
          <button class="lightbox__close" @click="closeLightbox">
            <X class="icon" />
          </button>
          <button class="lightbox__nav lightbox__nav--prev" @click="navigateLightbox(-1)">
            <ChevronLeft class="icon" />
          </button>
          <div class="lightbox__img-wrap">
            <img :src="lightbox.src" :alt="lightbox.alt" />
            <p class="lightbox__caption">{{ lightbox.alt }}</p>
          </div>
          <button class="lightbox__nav lightbox__nav--next" @click="navigateLightbox(1)">
            <ChevronRight class="icon" />
          </button>
        </div>
      </Transition>
    </Teleport>
  </main>
</template>

<style scoped>
/* Hero */
.space-hero {
  position: relative;
  min-height: 100vh;
  display: flex;
  align-items: center;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  overflow: hidden;
}

.space-hero__overlay {
  position: absolute;
  inset: 0;
  background: rgba(0, 0, 0, 0.7);
}

.space-hero__container {
  position: relative;
  z-index: 2;
}

.space-hero__content {
  max-width: 680px;
}

@keyframes fadeIn {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}

.space-hero__badge {
  display: inline-block;
  padding: 8px 20px;
  background: rgba(255, 255, 255, 0.12);
  backdrop-filter: blur(8px);
  border: 1px solid rgba(255, 255, 255, 0.2);
  border-radius: 100px;
  color: #fff;
  font-weight: 500;
  margin-bottom: 24px;
  animation: fadeIn 0.2s ease forwards;
  animation-delay: 0.1s;
  opacity: 0;
}

.space-hero__title {
  font-size: var(--font-size-hero);
  font-family: var(--font-title);
  font-weight: 800;
  color: #fff;
  margin-bottom: 20px;
  animation: fadeIn 0.2s ease forwards;
  animation-delay: 0.2s;
  opacity: 0;
}

.space-hero__subtitle {
  font-size: var(--font-size-md);
  color: rgba(255, 255, 255, 0.8);
  max-width: 520px;
  margin-bottom: 36px;
  animation: fadeIn 0.2s ease forwards;
  animation-delay: 0.3s;
  opacity: 0;
}

.space-hero__actions {
  display: flex;
  gap: 16px;
  flex-wrap: wrap;
  animation: fadeIn 0.4s ease forwards;
  animation-delay: 0.4s;
  opacity: 0;
}

.btn--on-dark {
  border-color: rgba(255, 255, 255, 0.4);
  color: #fff;
}

.btn--on-dark:hover {
  background: #fff;
  border-color: #fff;
  color: var(--color-primary);
}

/* Room selector */
.room-selector {
  padding: var(--section-padding);
}

.room-selector__header {
  text-align: center;
  margin-bottom: 48px;
}

.room-selector__grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
  gap: 20px;
}

.room-card {
  position: relative;
  border-radius: var(--radius-lg);
  overflow: hidden;
  aspect-ratio: 16/10;
  cursor: pointer;
  transition: all 0.35s ease;
  padding: 0;
  border: none;
  background: none;
  font-family: var(--font-family);
  text-align: left;
}

.room-card__img {
  position: absolute;
  inset: 0;
}

.room-card__img img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  filter: grayscale(100%);
  opacity: 0.5;
  transition:
    transform 0.6s cubic-bezier(0.25, 0.46, 0.45, 0.94),
    filter 0.4s ease,
    opacity 0.4s ease;
}

.room-card--active .room-card__img img {
  filter: grayscale(0%);
  opacity: 1;
}

.room-card:hover .room-card__img img {
  filter: grayscale(0%);
  opacity: 1;
}

.room-card__overlay {
  position: absolute;
  inset: 0;
  background: linear-gradient(
    to top,
    rgba(0, 0, 0, 0.8) 0%,
    rgba(0, 0, 0, 0.2) 60%,
    rgba(0, 0, 0, 0.05) 100%
  );
  transition: background 0.4s ease;
}

.room-card__body {
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  padding: 20px;
  display: flex;
  flex-direction: column;
  gap: 4px;
}

.room-card__title {
  font-family: var(--font-title);
  font-size: var(--font-size-md);
  font-weight: 700;
  color: #fff;
  line-height: 1.2;
}

.room-card__meta {
  font-size: var(--font-size-xs);
  font-weight: 600;
  color: rgba(255, 255, 255, 0.6);
  text-transform: uppercase;
  letter-spacing: 0.08em;
}

.room-card:hover .room-card__img img {
  transform: scale(1.06);
}

.room-card:hover .room-card__overlay {
  background: linear-gradient(
    to top,
    rgba(0, 0, 0, 0.9) 0%,
    rgba(0, 0, 0, 0.4) 60%,
    rgba(0, 0, 0, 0.1) 100%
  );
}

.room-card--active .room-card__meta {
  color: rgba(255, 255, 255, 0.85);
}

/* Gallery */
.space-gallery {
  padding: var(--section-padding);
}

.space-gallery__header {
  text-align: center;
  margin-bottom: 60px;
}

.space-gallery__header .section-subtitle {
  margin: 0 auto;
}

.space-gallery__grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-auto-rows: 260px;
  gap: 12px;
}

.space-gallery__item {
  position: relative;
  overflow: hidden;
  border-radius: 10px;
  cursor: zoom-in;
}

.space-gallery__item--wide {
  grid-column: span 2;
}

.space-gallery__item--tall {
  grid-row: span 2;
}

.space-gallery__item--large {
  grid-column: span 2;
  grid-row: span 2;
}

.space-gallery__item img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94);
}

.space-gallery__overlay {
  position: absolute;
  inset: 0;
  background: rgba(0, 0, 0, 0);
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  justify-content: flex-end;
  padding: 16px;
  gap: 6px;
  transition: background 0.3s ease;
}

.space-gallery__zoom {
  color: #fff;
  background: rgba(255, 255, 255, 0.15);
  backdrop-filter: blur(6px);
  border: 1px solid rgba(255, 255, 255, 0.25);
  width: 36px;
  height: 36px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  opacity: 0;
  transform: scale(0.7);
  transition: all 0.25s ease;
}

.space-gallery__caption {
  font-size: var(--font-size-xs);
  color: rgba(255, 255, 255, 0.85);
  text-align: right;
  opacity: 0;
  transform: translateY(6px);
  transition: all 0.25s ease 0.05s;
  max-width: 300px;
}

.space-gallery__item:hover img {
  transform: scale(1.06);
}

.space-gallery__item:hover .space-gallery__overlay {
  background: rgba(0, 0, 0, 0.35);
}

.space-gallery__item:hover .space-gallery__zoom {
  opacity: 1;
  transform: scale(1);
}

.space-gallery__item:hover .space-gallery__caption {
  opacity: 1;
  transform: translateY(0);
}

/* Specs */
.space-specs {
  padding: var(--section-padding);
  background: var(--color-bg-subtle);
}

.space-specs__layout {
  display: grid;
  grid-template-columns: 1fr 380px;
  gap: 60px;
  align-items: start;
}

.space-specs__header {
  margin-bottom: 40px;
}

.space-specs__header .section-title {
  text-transform: uppercase;
}

.space-specs__grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 0;
}

@keyframes specFadeIn {
  from {
    opacity: 0;
    transform: translateY(12px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.spec-item {
  display: flex;
  align-items: center;
  gap: 16px;
  padding: 24px 0;
  border-bottom: 1px solid var(--color-border);
  animation: specFadeIn 0.4s ease both;
}

.spec-item:nth-last-child(-n + 2) {
  border-bottom: none;
}

.spec-item__icon {
  flex-shrink: 0;
  width: 44px;
  height: 44px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--color-primary);
}

.spec-item__icon svg {
  width: 28px;
  height: 28px;
  stroke-width: 1.5;
}

.spec-item__text {
  display: flex;
  flex-direction: column;
  gap: 2px;
}

.spec-item__title {
  font-weight: 700;
  font-size: var(--font-size-base);
  color: var(--color-heading);
  letter-spacing: 0.02em;
}

.spec-item__subtitle {
  font-size: var(--font-size-sm);
  color: var(--color-text-muted);
}

/* CTA card */
.space-specs__cta {
  background: var(--color-secondary);
  border-radius: var(--radius-lg);
  padding: 48px 36px;
  text-align: center;
  position: sticky;
  top: 120px;
}

.cta__icon {
  color: var(--color-secondary);
  width: var(--font-size-sm);
  height: var(--font-size-sm);
}

.space-specs__cta-title {
  font-size: var(--font-size-lg);
  font-family: var(--font-title);
  font-weight: 700;
  color: #fff;
  margin-bottom: 12px;
}

.space-specs__cta-desc {
  color: rgba(255, 255, 255, 0.75);
  font-size: var(--font-size-sm);
  margin-bottom: 28px;
  line-height: 1.6;
}

.space-specs__cta-actions {
  display: flex;
  flex-direction: column;
  gap: 12px;
}

.space-specs__cta-actions .btn-primary {
  font-size: var(--font-size-sm);
  background: #fff;
  color: var(--color-secondary);
  border-color: #fff;
}

.space-specs__cta-actions .btn-primary:hover {
  background: rgba(255, 255, 255, 0.9);
}

.space-specs__cta-actions .btn-secondary {
  border-color: rgba(255, 255, 255, 0.4);
  color: #fff;
}

.space-specs__cta-actions .btn-secondary:hover {
  background: rgba(255, 255, 255, 0.1);
  border-color: rgba(255, 255, 255, 0.6);
}

@media (max-width: 1024px) {
  .space-specs__layout {
    grid-template-columns: 1fr;
    gap: 48px;
  }

  .space-specs__cta {
    position: static;
  }
}

@media (max-width: 600px) {
  .space-specs__grid {
    grid-template-columns: 1fr;
  }

  .spec-item:last-child {
    border-bottom: none;
  }

  .spec-item:nth-last-child(2) {
    border-bottom: 1px solid var(--color-border);
  }

  .space-specs__cta {
    padding: 36px 24px;
  }
}

/* Lightbox */
.lightbox {
  position: fixed;
  inset: 0;
  z-index: 9999;
  background: rgba(0, 0, 0, 0.92);
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 16px;
  padding: 24px;
}

.lightbox__img-wrap {
  max-width: 80vw;
  max-height: 85vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 12px;
}

.lightbox__img-wrap img {
  max-width: 100%;
  max-height: 80vh;
  border-radius: 8px;
  object-fit: contain;
}

.lightbox__caption {
  font-size: var(--font-size-xs);
  color: rgba(255, 255, 255, 0.55);
}

.lightbox__close {
  position: absolute;
  top: 20px;
  right: 24px;
  background: none;
  border: none;
  color: #fff;
  font-size: 1.4rem;
  cursor: pointer;
  opacity: 0.7;
  transition: opacity 0.2s;
}

.lightbox__close:hover {
  opacity: 1;
}

.lightbox__nav {
  background: rgba(255, 255, 255, 0.08);
  border: 1px solid rgba(255, 255, 255, 0.15);
  color: #fff;
  font-size: 2rem;
  width: 48px;
  height: 48px;
  border-radius: 50%;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  transition: background 0.2s ease;
}

.lightbox__nav:hover {
  background: rgba(255, 255, 255, 0.18);
}

.lb-enter-active,
.lb-leave-active {
  transition: opacity 0.25s ease;
}

.lb-enter-from,
.lb-leave-to {
  opacity: 0;
}

/* Responsive */
@media (max-width: 1024px) {
  .space-gallery__grid {
    grid-template-columns: repeat(2, 1fr);
  }

  .space-gallery__item--wide,
  .space-gallery__item--large {
    grid-column: span 2;
  }
}

@media (max-width: 768px) {
  .space-hero__title {
    font-size: var(--font-size-xl);
  }

  .space-avail__table-wrap {
    overflow-x: auto;
  }

  .space-avail__table {
    min-width: 600px;
  }
}

@media (max-width: 640px) {
  .space-gallery__grid {
    grid-template-columns: 1fr;
    grid-auto-rows: 220px;
  }

  .space-gallery__item--wide,
  .space-gallery__item--tall,
  .space-gallery__item--large {
    grid-column: span 1;
    grid-row: span 1;
  }

  .space-hero__badge {
    font-size: var(--font-size-xs);
  }

  .space-hero__subtitle {
    font-size: var(--font-size-sm);
  }

  .lightbox__nav {
    display: none;
  }

  .lightbox__img-wrap {
    max-width: 95vw;
  }

  .room-selector__grid {
    grid-template-columns: 1fr;
    gap: 12px;
  }

  .room-card {
    aspect-ratio: 2/1;
  }
}
</style>
