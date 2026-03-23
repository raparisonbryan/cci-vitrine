<script setup lang="ts">
import { ref, computed } from 'vue'
import { ArrowUpRight, ChevronLeft, ChevronRight, X } from 'lucide-vue-next'
import { allGalleryPhotos, galleryFilters, type GalleryPhoto } from '@/data/spaces'

const activeFilter = ref('all')

const filtersListRef = ref<HTMLDivElement | null>(null)

function scrollFilters(dir: 1 | -1) {
  const el = filtersListRef.value
  if (!el) return
  el.scrollBy({ left: dir * 220, behavior: 'smooth' })
}

const filtered = computed<GalleryPhoto[]>(() =>
  activeFilter.value === 'all'
    ? allGalleryPhotos
    : allGalleryPhotos.filter((p) => p.category === activeFilter.value),
)

const lightbox = ref<GalleryPhoto | null>(null)

function openLightbox(photo: GalleryPhoto) {
  lightbox.value = photo
  document.body.style.overflow = 'hidden'
}

function closeLightbox() {
  lightbox.value = null
  document.body.style.overflow = ''
}

function navigate(dir: 1 | -1) {
  if (!lightbox.value) return
  const list = filtered.value
  const idx = list.findIndex((p) => p.id === lightbox.value!.id)
  const next = (idx + dir + list.length) % list.length
  lightbox.value = list[next] ?? null
}
</script>

<template>
  <main class="gallery-page">
    <!-- Header -->
    <section class="gallery-hero">
      <div class="container">
        <div class="gallery-hero__content" v-motion-fade>
          <span class="section-label">Galerie</span>
          <h1 class="gallery-hero__title">Nos espaces en images</h1>
          <p class="gallery-hero__sub">
            Découvrez l'atmosphère et le cachet de chacun de nos espaces à travers notre galerie
            photo.
          </p>
        </div>
      </div>
    </section>

    <!-- Filters -->
    <div class="gallery-filters" v-motion-fade="{ delay: 0.1 }">
      <div class="container">
        <div class="gallery-filters__row">
          <button
            class="gallery-filters__arrow gallery-filters__arrow--left"
            aria-label="Faire défiler vers la gauche"
            type="button"
            @click="scrollFilters(-1)"
          >
            <ChevronLeft class="icon" />
          </button>

          <div class="gallery-filters__list" ref="filtersListRef">
            <button
              v-for="f in galleryFilters"
              :key="f.key"
              class="gallery-filter"
              :class="{ 'gallery-filter--active': activeFilter === f.key }"
              @click="activeFilter = f.key"
            >
              {{ f.label }}
            </button>
          </div>

          <button
            class="gallery-filters__arrow gallery-filters__arrow--right"
            aria-label="Faire défiler vers la droite"
            type="button"
            @click="scrollFilters(1)"
          >
            <ChevronRight class="icon" />
          </button>
        </div>
      </div>
    </div>

    <!-- Grid -->
    <section class="gallery-grid-wrap">
      <div class="container">
        <div class="gallery-grid">
          <div
            v-for="photo in filtered"
            :key="photo.id"
            class="gallery-item"
            :class="{
              'gallery-item--wide': photo.span === 'wide',
              'gallery-item--tall': photo.span === 'tall',
              'gallery-item--large': photo.span === 'large',
            }"
            v-motion-fade
            @click="openLightbox(photo)"
          >
            <img :src="photo.src" :alt="photo.alt" loading="lazy" />
            <div class="gallery-item__overlay">
              <span class="gallery-item__zoom">
                <ArrowUpRight class="icon" />
              </span>
              <p class="gallery-item__caption">{{ photo.alt }}</p>
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
          <button class="lightbox__nav lightbox__nav--prev" @click="navigate(-1)">
            <ChevronLeft class="icon" />
          </button>
          <div class="lightbox__img-wrap">
            <img :src="lightbox.src" :alt="lightbox.alt" />
            <p class="lightbox__caption">{{ lightbox.alt }}</p>
          </div>
          <button class="lightbox__nav lightbox__nav--next" @click="navigate(1)">
            <ChevronRight class="icon" />
          </button>
        </div>
      </Transition>
    </Teleport>
  </main>
</template>

<style scoped>
/* Hero */
.gallery-page {
  padding-top: var(--nav-height);
}

.gallery-hero {
  padding: 80px 0 48px;
  text-align: center;
}

.gallery-hero__title {
  font-family: var(--font-title);
  font-size: var(--font-size-h1);
  color: var(--color-text);
  margin-bottom: 16px;
}

.gallery-hero__sub {
  color: var(--color-text-muted);
  max-width: 500px;
  margin: 0 auto;
}

/* Filters */
.gallery-filters {
  padding-bottom: 48px;
}

.gallery-filters__row {
  position: relative;
}

.gallery-filters__list {
  display: flex;
  gap: 10px;
  flex-wrap: wrap;
  justify-content: center;
}

.gallery-filters__arrow {
  display: none;
}

@media (max-width: 640px) {
  .gallery-filters {
    padding-bottom: 32px;
  }

  .gallery-filters__arrow {
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    width: 36px;
    height: 36px;
    border-radius: 999px;
    border: 1px solid rgba(0, 0, 0, 0.08);
    background: rgba(255, 255, 255, 0.85);
    backdrop-filter: blur(8px);
    cursor: pointer;
    z-index: 2;
    transition:
      transform 0.2s ease,
      background 0.2s ease;
  }

  .gallery-filters__arrow:hover {
    background: rgba(255, 255, 255, 1);
  }

  .gallery-filters__arrow--left {
    left: 0;
  }

  .gallery-filters__arrow--right {
    right: 0;
  }

  .gallery-filters__list {
    flex-wrap: nowrap;
    overflow-x: auto;
    justify-content: flex-start;
    scroll-snap-type: x mandatory;
    -webkit-overflow-scrolling: touch;
    scrollbar-width: none;
  }

  .gallery-filters__list::-webkit-scrollbar {
    display: none;
  }

  .gallery-filter {
    flex-shrink: 0;
    scroll-snap-align: start;
  }
}

.gallery-filter {
  padding: 6px 12px;
  border-radius: 100px;
  border: 1.5px solid var(--color-border);
  background: transparent;
  font-size: var(--font-size-sm);
  color: var(--color-text-muted);
  cursor: pointer;
  transition: all 0.2s ease;
}

.gallery-filter:hover {
  border-color: var(--color-primary);
  color: var(--color-primary);
}

.gallery-filter--active {
  background: var(--color-primary);
  border-color: var(--color-primary);
  color: #fff;
}

.gallery-filter--active:hover {
  background: var(--color-primary-light);
  border-color: var(--color-primary-light);
  color: #fff;
}

/* Grid */
.gallery-grid-wrap {
  padding-bottom: 100px;
}

.gallery-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-auto-rows: 260px;
  gap: 12px;
}

.gallery-item {
  position: relative;
  overflow: hidden;
  border-radius: 10px;
  cursor: zoom-in;
}

.gallery-item--wide {
  grid-column: span 2;
}
.gallery-item--tall {
  grid-row: span 2;
}
.gallery-item--large {
  grid-column: span 2;
  grid-row: span 2;
}

.gallery-item img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94);
}

.gallery-item__overlay {
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

.gallery-item__zoom {
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
  align-self: flex-end;
}

.gallery-item__caption {
  font-size: var(--font-size-xs);
  color: rgba(255, 255, 255, 0.85);
  text-align: right;
  opacity: 0;
  transform: translateY(6px);
  transition: all 0.25s ease 0.05s;
  max-width: 300px;
}

.gallery-item:hover img {
  transform: scale(1.06);
}

.gallery-item:hover .gallery-item__overlay {
  background: rgba(0, 0, 0, 0.35);
}

.gallery-item:hover .gallery-item__zoom {
  opacity: 1;
  transform: scale(1);
}

.gallery-item:hover .gallery-item__caption {
  opacity: 1;
  transform: translateY(0);
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

/* Icons */
.icon {
  width: 16px;
  height: 16px;
}

/* Lightbox transition */
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
  .gallery-grid {
    grid-template-columns: repeat(2, 1fr);
  }
  .gallery-item--wide,
  .gallery-item--large {
    grid-column: span 2;
  }
}

@media (max-width: 640px) {
  .gallery-grid {
    grid-template-columns: 1fr;
    grid-auto-rows: 220px;
  }
  .gallery-item--wide,
  .gallery-item--tall,
  .gallery-item--large {
    grid-column: span 1;
    grid-row: span 1;
  }

  .lightbox__nav {
    display: none;
  }
  .lightbox__img-wrap {
    max-width: 95vw;
  }
}
</style>
