<script setup lang="ts">
import { ref, computed } from 'vue'
import { ArrowUpRight, ChevronLeft, ChevronRight, X } from 'lucide-vue-next'

type Category = 'all' | 'pleniere' | 'amphi' | 'reunion' | 'expo'

interface Photo {
  id: number
  src: string
  alt: string
  category: Exclude<Category, 'all'>
  span?: 'wide' | 'tall' | 'large'
}

const activeFilter = ref<Category>('all')

const filters: { key: Category; label: string }[] = [
  { key: 'all', label: 'Tous les espaces' },
  { key: 'pleniere', label: 'Salle plénière' },
  { key: 'amphi', label: 'Amphithéâtre' },
  { key: 'reunion', label: 'Salles de réunion' },
  { key: 'expo', label: 'Espaces exposition' },
]

const photos: Photo[] = [
  // Salle plénière
  {
    id: 1,
    src: 'https://images.unsplash.com/photo-1509824227185-9c5a01ceba0d?w=800&q=80',
    alt: 'Salle plénière — vue générale',
    category: 'pleniere',
    span: 'wide',
  },
  {
    id: 2,
    src: 'https://images.unsplash.com/photo-1515187029135-18ee286d815b?w=800&q=80',
    alt: 'Salle plénière — scène',
    category: 'pleniere',
  },
  {
    id: 3,
    src: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=800&q=80',
    alt: 'Salle plénière — audience',
    category: 'pleniere',
  },
  {
    id: 4,
    src: 'https://images.unsplash.com/photo-1505373877841-8d25f7d46678?w=800&q=80',
    alt: 'Salle plénière — conférence',
    category: 'pleniere',
    span: 'wide',
  },

  // Amphithéâtre
  {
    id: 5,
    src: 'https://images.unsplash.com/photo-1571624436279-b272aff752b5?w=1200&q=80',
    alt: "Amphithéâtre — vue d'ensemble",
    category: 'amphi',
    span: 'wide',
  },
  {
    id: 6,
    src: 'https://images.unsplash.com/photo-1581574919402-5b7d733224d6?w=800&q=80',
    alt: 'Amphithéâtre — gradins',
    category: 'amphi',
  },
  {
    id: 7,
    src: 'https://images.unsplash.com/photo-1509824227185-9c5a01ceba0d?w=800&q=80',
    alt: 'Amphithéâtre — scène',
    category: 'amphi',
  },

  // Salles de réunion
  {
    id: 8,
    src: 'https://images.unsplash.com/photo-1497366216548-37526070297c?w=1200&q=80',
    alt: 'Salle de réunion — table',
    category: 'reunion',
    span: 'large',
  },
  {
    id: 9,
    src: 'https://images.unsplash.com/photo-1497366811353-6870744d04b2?w=800&q=80',
    alt: 'Salle de réunion — vue globale',
    category: 'reunion',
  },
  {
    id: 10,
    src: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&q=80',
    alt: 'Salle de réunion — séminaire',
    category: 'reunion',
  },
  {
    id: 11,
    src: 'https://images.unsplash.com/photo-1524178232363-1fb2b075b655?w=800&q=80',
    alt: 'Salle de réunion — présentation',
    category: 'reunion',
    span: 'large',
  },

  // Espaces exposition
  {
    id: 12,
    src: 'https://images.unsplash.com/photo-1561489413-985b06da5bee?w=1200&q=80',
    alt: 'Espace exposition — vue générale',
    category: 'expo',
  },
  {
    id: 13,
    src: 'https://images.unsplash.com/photo-1551818255-e6e10975bc17?w=800&q=80',
    alt: 'Espace exposition — stands',
    category: 'expo',
    span: 'wide',
  },
  {
    id: 14,
    src: 'https://images.unsplash.com/photo-1475721027785-f74eccf877e2?w=800&q=80',
    alt: 'Espace exposition — salon',
    category: 'expo',
  },
  {
    id: 15,
    src: 'https://images.unsplash.com/photo-1531058020387-3be344556be6?w=800&q=80',
    alt: 'Espace exposition — foire',
    category: 'expo',
  },
]

const filtered = computed<Photo[]>(() =>
  activeFilter.value === 'all' ? photos : photos.filter((p) => p.category === activeFilter.value),
)

const lightbox = ref<Photo | null>(null)

function openLightbox(photo: Photo) {
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
        <div class="gallery-filters__list">
          <button
            v-for="f in filters"
            :key="f.key"
            class="gallery-filter"
            :class="{ 'gallery-filter--active': activeFilter === f.key }"
            @click="activeFilter = f.key"
          >
            {{ f.label }}
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

.gallery-filters__list {
  display: flex;
  gap: 10px;
  flex-wrap: wrap;
  justify-content: center;
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
  max-width: 220px;
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
