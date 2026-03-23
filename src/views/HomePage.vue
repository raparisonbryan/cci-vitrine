<script setup lang="ts">
import { useRouter } from 'vue-router'
import AppButton from '@/components/AppButton.vue'
import AppCta from '@/components/AppCta.vue'
import { spacesList } from '@/data/spaces'
import { Calendar, MoveDown } from 'lucide-vue-next'

const router = useRouter()

const logos = [
  { abbr: 'UA', name: 'Union Africaine' },
  { abbr: 'ONU', name: 'Nations Unies' },
  { abbr: 'COLAS', name: 'Colas Madagascar' },
  { abbr: 'BNI', name: 'BNI Madagascar' },
  { abbr: 'AIR', name: 'Air Madagascar' },
  { abbr: 'OMNIS', name: 'OMNIS' },
  { abbr: 'OIF', name: 'Francophonie' },
  { abbr: 'AXIAN', name: 'Axian Group' },
]

const stats = [
  { value: '6', label: "Types d'espaces" },
  { value: '4', label: 'Salles de conférence' },
  { value: '500+', label: 'Événements accueillis' },
  { value: '5 minutes', label: "Distance de l'aéroport" },
]

function goToSpace(slug: string) {
  void router.push({ name: 'space', params: { slug } })
}
</script>

<template>
  <main>
    <!-- Hero -->
    <section id="hero" class="hero">
      <div class="hero__overlay" />
      <div class="container hero__container">
        <div class="hero__content">
          <span class="hero__badge">Centre de Conférences International</span>
          <h1 class="hero__title">CCI Ivato</h1>
          <p class="hero__subtitle">
            Un espace d'exception au cœur de Madagascar pour vos conférences, séminaires et
            événements internationaux.
          </p>
          <div class="hero__actions">
            <AppButton href="#contact" variant="primary">
              Réserver un espace
              <Calendar class="icon" />
            </AppButton>
            <AppButton href="#about" variant="secondary" class="btn--on-dark">
              Découvrir
              <MoveDown class="icon" />
            </AppButton>
          </div>
        </div>
      </div>
    </section>

    <!-- About -->
    <section id="about" class="about">
      <div class="container about__grid">
        <div class="about__image-wrap" v-motion-fade-left>
          <div class="about__image">
            <img
              src="https://res.cloudinary.com/dwwjauice/image/upload/w_1440,c_limit,f_auto,q_auto/v1773934763/CCI/salles/amphi/amphi_2_raqzt5.jpg"
              alt="Intérieur du CCI Ivato"
            />
          </div>
        </div>
        <div class="about__text" v-motion-fade>
          <span class="section-label">À propos</span>
          <h2 class="section-title">Un lieu prestigieux dédié à l'excellence</h2>
          <p class="section-subtitle">
            Le Centre de Conférences International d'Ivato est un espace moderne et polyvalent,
            idéalement situé à proximité de l'aéroport international d'Antananarivo. Conçu pour
            accueillir des événements de toute envergure, il offre des infrastructures de premier
            plan et un service irréprochable.
          </p>
          <p class="about__detail">
            Que vous organisiez une conférence internationale, un séminaire d'entreprise ou une
            réception privée, notre équipe vous accompagne à chaque étape pour faire de votre
            événement une réussite.
          </p>
          <AppButton href="#services" variant="primary" style="margin-top: 24px">
            Voir nos espaces
            <MoveDown class="icon" />
          </AppButton>
        </div>
      </div>
    </section>

    <!-- Stats -->
    <section class="stats">
      <div class="container">
        <div class="stats__grid">
          <div
            v-for="(stat, i) in stats"
            :key="stat.label"
            class="stats__item"
            v-motion-fade="{ delay: i * 0.1 }"
          >
            <span class="stats__value">{{ stat.value }}</span>
            <span class="stats__label">{{ stat.label }}</span>
          </div>
        </div>
      </div>
    </section>

    <!-- Services -->
    <section id="services" class="services">
      <div class="container">
        <div class="services__header" v-motion-fade>
          <span class="section-label">Nos espaces</span>
          <h2 class="section-title">Des espaces adaptés à chaque besoin</h2>
          <p class="section-subtitle">
            Découvrez nos différents espaces et services pensés pour garantir le succès de vos
            événements.
          </p>
        </div>

        <div class="spaces__grid">
          <div
            v-for="(space, i) in spacesList"
            :key="space.slug"
            class="space-card"
            role="link"
            tabindex="0"
            v-motion-fade="{ delay: i * 0.1 }"
            @click="goToSpace(space.slug)"
            @keydown.enter.prevent="goToSpace(space.slug)"
            @keydown.space.prevent="goToSpace(space.slug)"
          >
            <div class="space-card__img">
              <img :src="space.card.image" :alt="space.name" />
            </div>
            <div class="space-card__overlay" />
            <div class="space-card__body">
              <span class="space-card__capacity">{{ space.card.rooms }}</span>
              <h3 class="space-card__title">{{ space.name }}</h3>
              <p class="space-card__desc">{{ space.card.desc }}</p>
              <span class="space-card__cta">Découvrir →</span>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Trusted by -->
    <section class="trusted">
      <div class="container">
        <div class="trusted__header" v-motion-fade>
          <span class="section-label">Ils nous font confiance</span>
          <h2 class="section-title">Des organisations de référence</h2>
        </div>
        <div class="trusted__marquee" v-motion-fade="{ delay: 0.2 }">
          <div class="trusted__track">
            <div
              v-for="logo in [...logos, ...logos]"
              :key="logo.name + Math.random()"
              class="trusted__logo"
            >
              <span class="trusted__logo-abbr">{{ logo.abbr }}</span>
              <span class="trusted__logo-name">{{ logo.name }}</span>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- CTA -->
    <AppCta />
  </main>
</template>

<style scoped>
/* Hero */
.hero {
  position: relative;
  min-height: 100vh;
  display: flex;
  align-items: center;
  background: url('https://res.cloudinary.com/dwwjauice/image/upload/w_1440,c_limit,f_auto,q_auto/v1773935153/CCI/cci_lfvega.png')
    center/cover no-repeat;
  overflow: hidden;
}

.hero__overlay {
  position: absolute;
  inset: 0;
  background: rgba(0, 0, 0, 0.7);
}

.hero__container {
  position: relative;
  z-index: 2;
}

.hero__content {
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

.hero__badge {
  animation: fadeIn 0.2s ease forwards;
  animation-delay: 0.1s;
  opacity: 0;
}

.hero__title {
  animation: fadeIn 0.2s ease forwards;
  animation-delay: 0.2s;
  opacity: 0;
}

.hero__subtitle {
  animation: fadeIn 0.2s ease forwards;
  animation-delay: 0.3s;
  opacity: 0;
}

.hero__actions {
  animation: fadeIn 0.4s ease forwards;
  animation-delay: 0.4s;
  opacity: 0;
}

.hero__badge {
  display: inline-block;
  padding: 8px 20px;
  background: rgba(255, 255, 255, 0.12);
  backdrop-filter: blur(8px);
  border: 1px solid rgba(255, 255, 255, 0.2);
  border-radius: 100px;
  color: #fff;
  font-weight: 500;
  margin-bottom: 24px;
}

.hero__title {
  font-size: var(--font-size-hero);
  font-family: var(--font-title);
  font-weight: 800;
  color: #fff;
  margin-bottom: 20px;
}

.hero__subtitle {
  font-size: var(--font-size-md);
  color: rgba(255, 255, 255, 0.8);
  max-width: 520px;
  margin-bottom: 36px;
}

.hero__actions {
  display: flex;
  gap: 16px;
  flex-wrap: wrap;
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

/* About */
.about {
  padding: var(--section-padding);
}

.about__grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 64px;
  align-items: center;
}

.about__image {
  border-radius: var(--radius-lg);
  overflow: hidden;
  aspect-ratio: 4/3;
}

.about__image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.6s ease;
}

.about__image:hover img {
  transform: scale(1.03);
}

.about__detail {
  color: var(--color-text-muted);
  margin-top: 16px;
}

/* Stats */
.stats {
  padding: 60px 0;
  background: var(--color-bg-subtle);
}

.stats__grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 32px;
  text-align: center;
}

.stats__item {
  display: flex;
  flex-direction: column;
  gap: 4px;
}

.stats__value {
  font-size: var(--font-size-xl);
  font-weight: 800;
  color: var(--color-primary);
}

.stats__label {
  color: var(--color-text-muted);
  font-weight: 500;
}

/* Services */
.services {
  padding: var(--section-padding);
}

.services__header {
  text-align: center;
  margin-bottom: 60px;
}

.services__header .section-subtitle {
  margin: 0 auto;
}

.spaces__grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 20px;
}

.space-card {
  position: relative;
  border-radius: var(--radius-lg);
  overflow: hidden;
  aspect-ratio: 1/1;
  cursor: pointer;
}

.space-card:focus-visible {
  outline: 2px solid var(--color-primary);
  outline-offset: 3px;
}

.space-card--full {
  grid-column: 1 / -1;
  aspect-ratio: 1/0.5;
}

.space-card__img {
  position: absolute;
  inset: 0;
}

.space-card__img img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.6s cubic-bezier(0.25, 0.46, 0.45, 0.94);
}

.space-card__overlay {
  position: absolute;
  inset: 0;
  background: linear-gradient(
    to top,
    rgba(0, 0, 0, 0.85) 0%,
    rgba(0, 0, 0, 0.3) 50%,
    rgba(0, 0, 0, 0.05) 100%
  );
  transition: background 0.4s ease;
}

.space-card__body {
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  padding: 28px 24px;
  display: flex;
  flex-direction: column;
  gap: 6px;
  transform: translateY(0);
  transition: transform 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94);
}

.space-card__capacity {
  font-size: var(--font-size-xs);
  font-weight: 600;
  color: rgba(255, 255, 255, 0.65);
  text-transform: uppercase;
  letter-spacing: 0.1em;
}

.space-card__title {
  font-family: var(--font-title);
  font-size: var(--font-size-lg);
  font-weight: 700;
  color: #fff;
  line-height: 1.2;
}

.space-card__desc {
  font-size: var(--font-size-xs);
  color: rgba(255, 255, 255, 0.75);
  line-height: 1.5;
  opacity: 0;
  transform: translateY(8px);
  transition:
    opacity 0.35s ease 0.05s,
    transform 0.35s ease 0.05s;
  display: -webkit-box;
  -webkit-line-clamp: 1;
  line-clamp: 1;
  -webkit-box-orient: vertical;
  overflow: hidden;
}

.space-card__cta {
  font-size: var(--font-size-xs);
  font-weight: 600;
  color: #fff;
  opacity: 0;
  transform: translateY(8px);
  transition:
    opacity 0.35s ease 0.1s,
    transform 0.35s ease 0.1s;
  margin-top: 4px;
}

.space-card:hover .space-card__img img {
  transform: scale(1.08);
}

.space-card:hover .space-card__overlay {
  background: linear-gradient(
    to top,
    rgba(0, 0, 0, 0.92) 0%,
    rgba(0, 0, 0, 0.5) 55%,
    rgba(0, 0, 0, 0.1) 100%
  );
}

.space-card:hover .space-card__desc,
.space-card:hover .space-card__cta {
  opacity: 1;
  transform: translateY(0);
}

/* Trusted by */
.trusted {
  padding: 0 0 100px 0;
  overflow: hidden;
}

.trusted__header {
  text-align: center;
  margin-bottom: 64px;
}

.trusted__marquee {
  position: relative;
  overflow: hidden;
  mask-image: linear-gradient(to right, transparent 0%, #000 12%, #000 88%, transparent 100%);
}

.trusted__track {
  display: flex;
  gap: 16px;
  width: max-content;
  animation: marquee 28s linear infinite;
}

.trusted__marquee:hover .trusted__track {
  animation-play-state: paused;
}

@keyframes marquee {
  from {
    transform: translateX(0);
  }
  to {
    transform: translateX(-50%);
  }
}

.trusted__logo {
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 20px 32px;
  border: 1px solid var(--color-border);
  border-radius: var(--radius-lg);
  white-space: nowrap;
  transition: all 0.25s ease;
  cursor: default;
  flex-shrink: 0;
}

.trusted__logo:hover {
  border-color: var(--color-primary);
  box-shadow: 0 4px 20px rgba(24, 83, 79, 0.08);
}

.trusted__logo-abbr {
  font-size: var(--font-size-sm);
  font-weight: 800;
  color: var(--color-primary);
  background: rgba(24, 83, 79, 0.08);
  padding: 6px 10px;
  border-radius: 6px;
  letter-spacing: 0.04em;
  line-height: 1;
}

.trusted__logo-name {
  font-size: var(--font-size-sm);
  font-weight: 600;
  color: var(--color-text-muted);
  letter-spacing: 0.01em;
}

/* Responsive */
@media (max-width: 768px) {
  .about__grid {
    grid-template-columns: 1fr;
    gap: 40px;
  }

  .stats__grid {
    grid-template-columns: repeat(2, 1fr);
    gap: 24px;
  }

  .spaces__grid {
    grid-template-columns: repeat(2, 1fr);
  }

  .space-card {
    aspect-ratio: 4/5;
  }

  .space-card__desc,
  .space-card__cta {
    opacity: 1;
    transform: translateY(0);
  }

  .hero__title {
    font-size: var(--font-size-xl);
  }
}

@media (max-width: 576px) {
  .hero__badge {
    font-size: var(--font-size-xs);
  }

  .hero__subtitle {
    font-size: var(--font-size-sm);
  }

  .services__header {
    text-align: left;
  }

  .spaces__grid {
    grid-template-columns: repeat(1, 1fr);
  }
}
</style>
