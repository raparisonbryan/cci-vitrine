<script setup lang="ts">
import { ref, computed } from 'vue'
import { ChevronLeft, ChevronRight } from 'lucide-vue-next'
import { documents, appelsOffre } from '@/data/informations'
import type { FinancialDocument } from '@/data/informations'

type TabKey = 'documents' | 'appels-offre'

const tabs = [
  { key: 'documents' as const, label: 'Documents' },
  { key: 'appels-offre' as const, label: "Appels d'offre" },
]

const activeTab = ref<TabKey>('documents')

const filtersListRef = ref<HTMLDivElement | null>(null)

function scrollFilters(dir: 1 | -1) {
  const el = filtersListRef.value
  if (!el) return
  el.scrollBy({ left: dir * 220, behavior: 'smooth' })
}

function groupFinancialDocsByYear(docs: FinancialDocument[]) {
  const byYear = new Map<number, FinancialDocument[]>()
  for (const doc of docs) {
    const list = byYear.get(doc.year) ?? []
    list.push(doc)
    byYear.set(doc.year, list)
  }
  for (const list of byYear.values()) {
    list.sort((a, b) => a.label.localeCompare(b.label, 'fr'))
  }
  return [...byYear.keys()].sort((a, b) => b - a).map((year) => ({ year, docs: byYear.get(year)! }))
}

const documentsByYear = computed(() => groupFinancialDocsByYear(documents))

const currentDocs = computed(() => (activeTab.value === 'documents' ? documents : appelsOffre))

const isEmpty = computed(() => currentDocs.value.length === 0)

const emptyMessage = computed(() =>
  activeTab.value === 'documents'
    ? "Aucun document n'est publié pour le moment."
    : "Aucun appel d'offre n'est publié pour le moment.",
)
</script>

<template>
  <main class="informations-page">
    <section class="gallery-hero">
      <div class="container">
        <div class="gallery-hero__content" v-motion-fade>
          <span class="section-label">Transparence</span>
          <h1 class="gallery-hero__title">Informations</h1>
          <p class="gallery-hero__sub">
            Consultez les documents et les appels d'offre publiés par le Centre de Conférences
            International d'Ivato.
          </p>
        </div>
      </div>
    </section>

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

          <div
            class="gallery-filters__list"
            ref="filtersListRef"
            role="tablist"
            aria-label="Type de documents"
          >
            <button
              v-for="t in tabs"
              :key="t.key"
              type="button"
              role="tab"
              :aria-selected="activeTab === t.key"
              class="gallery-filter"
              :class="{ 'gallery-filter--active': activeTab === t.key }"
              @click="activeTab = t.key"
            >
              {{ t.label }}
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

    <article class="informations-panel">
      <div class="container informations-panel__inner">
        <div v-motion-fade :key="activeTab" role="tabpanel">
          <p v-if="isEmpty" class="informations-panel__empty">
            {{ emptyMessage }}
          </p>

          <template v-else-if="activeTab === 'documents'">
            <section
              v-for="group in documentsByYear"
              :key="group.year"
              class="doc-year-group"
              :aria-labelledby="`year-heading-${group.year}`"
            >
              <h3 :id="`year-heading-${group.year}`" class="doc-year-group__title">
                {{ group.year }}
              </h3>
              <ul class="doc-list">
                <li v-for="doc in group.docs" :key="doc.href + doc.label" class="doc-list__item">
                  <a
                    :href="doc.href"
                    class="doc-list__link"
                    target="_blank"
                    rel="noopener noreferrer"
                    >{{ doc.label }}</a
                  >
                  <span v-if="doc.meta" class="doc-list__meta">{{ doc.meta }}</span>
                </li>
              </ul>
            </section>
          </template>

          <ul v-else class="doc-list">
            <li v-for="doc in appelsOffre" :key="doc.href + doc.label" class="doc-list__item">
              <a
                :href="doc.href"
                class="doc-list__link"
                target="_blank"
                rel="noopener noreferrer"
                >{{ doc.label }}</a
              >
              <span v-if="doc.meta" class="doc-list__meta">{{ doc.meta }}</span>
            </li>
          </ul>
        </div>
      </div>
    </article>
  </main>
</template>

<style scoped>
.informations-page {
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
  max-width: 560px;
  margin: 0 auto;
  line-height: 1.6;
}

/* Tabs — aligné sur GalleryPage */
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

.informations-panel {
  padding: 0 0 100px;
  background: var(--color-bg);
}

.informations-panel__inner {
  max-width: 720px;
  margin: 0 auto;
}

.informations-panel__empty {
  color: var(--color-text-muted);
  line-height: 1.75;
  margin: 0;
}

.doc-year-group {
  margin-bottom: 40px;
}

.doc-year-group:last-child {
  margin-bottom: 0;
}

.doc-year-group__title {
  font-family: var(--font-title);
  font-size: var(--font-size-md);
  font-weight: 700;
  color: var(--color-text);
  margin: 0 0 4px;
  padding-bottom: 12px;
  border-bottom: 1px solid var(--color-border);
}

.doc-list {
  list-style: none;
  margin: 0;
  padding: 0;
}

.doc-list__item {
  display: flex;
  flex-wrap: wrap;
  align-items: baseline;
  gap: 8px 16px;
  padding: 12px 0;
  border-bottom: 1px solid var(--color-border);
}

.doc-list__item:first-child {
  padding-top: 0;
}

.doc-list__item:last-child {
  border-bottom: none;
  padding-bottom: 0;
}

.doc-list__link {
  color: var(--color-primary);
  font-weight: 500;
  text-decoration: underline;
  text-underline-offset: 2px;
  flex: 1 1 200px;
  min-width: 0;
  cursor: pointer;
}

.doc-list__link:hover {
  color: var(--color-primary-light);
}

.doc-list__meta {
  font-size: 0.875rem;
  color: var(--color-text-muted);
  white-space: nowrap;
}

.icon {
  width: 16px;
  height: 16px;
}
</style>
