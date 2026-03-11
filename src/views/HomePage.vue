<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { animate, stagger } from 'motion'
import AppButton from '@/components/AppButton.vue'

const heroRef = ref<HTMLElement | null>(null)
const heroVisible = ref(false)

const services = [
  {
    icon: '🏛️',
    title: 'Conférences',
    desc: 'Des salles modulables équipées des dernières technologies audiovisuelles pour vos conférences internationales.',
  },
  {
    icon: '📋',
    title: 'Séminaires',
    desc: 'Des espaces dédiés à la formation et aux séminaires professionnels, dans un cadre propice à la concentration.',
  },
  {
    icon: '🎉',
    title: 'Événements',
    desc: "Accueillez vos galas, réceptions et événements d'envergure dans un lieu prestigieux et accessible.",
  },
  {
    icon: '🤝',
    title: "Réunions d'affaires",
    desc: 'Des salles de réunion équipées et un service sur mesure pour vos rencontres professionnelles.',
  },
]

const stats = [
  { value: '5 000', label: "m² d'espaces" },
  { value: '3', label: 'Salles de conférence' },
  { value: '500+', label: 'Événements accueillis' },
  { value: '1 200', label: 'Places assises' },
]

onMounted(() => {
  heroVisible.value = true

  requestAnimationFrame(() => {
    const heroContent = heroRef.value?.querySelector('.hero__content')
    if (heroContent) {
      const children = Array.from(heroContent.children)
      animate(
        children,
        { opacity: [0, 1], y: [30, 0] },
        {
          duration: 0.8,
          delay: stagger(0.15),
        },
      )
    }
  })
})
</script>

<template>
  <main>
    <!-- Hero -->
    <section id="hero" ref="heroRef" class="hero" :class="{ 'hero--visible': heroVisible }">
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
            <AppButton href="#contact" variant="primary"> Réserver un espace </AppButton>
            <AppButton href="#about" variant="secondary" class="btn--on-dark">
              Découvrir
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
              src="https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=800&q=80"
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

        <div class="services__grid">
          <div
            v-for="(service, i) in services"
            :key="service.title"
            class="services__card"
            v-motion-fade="{ delay: i * 0.1 }"
          >
            <span class="services__icon">{{ service.icon }}</span>
            <h3 class="services__card-title">{{ service.title }}</h3>
            <p class="services__card-desc">{{ service.desc }}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- CTA -->
    <section id="contact" class="cta">
      <div class="container cta__container" v-motion-scale>
        <div class="cta__inner">
          <h2 class="cta__title">Prêt à organiser votre événement ?</h2>
          <p class="cta__desc">
            Contactez-nous pour discuter de votre projet et réserver votre espace au CCI Ivato.
          </p>
          <div class="cta__actions">
            <AppButton href="mailto:contact@cci-ivato.mg" variant="primary">
              Nous contacter
            </AppButton>
            <AppButton href="tel:+261000000000" variant="secondary"> +261 00 000 00 00 </AppButton>
          </div>
        </div>
      </div>
    </section>
  </main>
</template>

<style scoped>
/* Hero */
.hero {
  position: relative;
  min-height: 100vh;
  display: flex;
  align-items: center;
  background: url('https://images.unsplash.com/photo-1587825140708-dfaf18c15b78?w=1920&q=80')
    center/cover no-repeat;
  overflow: hidden;
}

.hero__overlay {
  position: absolute;
  inset: 0;
  background: rgba(0, 0, 0, 0.5);
}

.hero--visible .hero__overlay {
  animation: heroOverlayIn 1.2s ease forwards;
}

@keyframes heroOverlayIn {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}

.hero__container {
  position: relative;
  z-index: 2;
}

.hero__content {
  max-width: 680px;
}

.hero__content > * {
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
  font-size: clamp(3rem, 8vw, 5rem);
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
s .hero__actions {
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
  border-radius: 12px;
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

.section-label {
  display: inline-block;
  font-weight: 700;
  text-transform: uppercase;
  color: var(--color-primary);
  margin-bottom: 12px;
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

.services__grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 24px;
}

.services__card {
  padding: 36px 28px;
  border: 1px solid var(--color-border);
  border-radius: 12px;
  transition: all 0.3s ease;
}

.services__card:hover {
  border-color: var(--color-primary);
  box-shadow: 0 8px 30px rgba(24, 83, 79, 0.08);
  transform: translateY(-4px);
}

.services__icon {
  font-size: var(--font-size-xl);
  display: block;
  margin-bottom: 20px;
}

.services__card-title {
  font-weight: 700;
  margin-bottom: 12px;
  color: var(--color-text);
}

.services__card-desc {
  color: var(--color-text-muted);
}

/* CTA */
.cta {
  padding: var(--section-padding);
  background: var(--color-bg-subtle);
}

.cta__inner {
  text-align: center;
  padding: 80px 40px;
  border-radius: 16px;
  background: var(--color-primary);
}

.cta__title {
  font-size: var(--font-size-xl);
  font-weight: 700;
  color: #fff;
  margin-bottom: 16px;
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
  color: var(--color-primary);
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

/* Responsive */
@media (max-width: 1024px) {
  .services__grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (max-width: 768px) {
  .about__grid {
    grid-template-columns: 1fr;
    gap: 40px;
  }

  .stats__grid {
    grid-template-columns: repeat(2, 1fr);
    gap: 24px;
  }

  .services__grid {
    grid-template-columns: 1fr;
  }

  .hero__title {
    font-size: var(--font-size-xl);
  }

  .cta__inner {
    padding: 48px 24px;
  }
}
</style>
