<script setup lang="ts">
import AppButton from '@/components/AppButton.vue'
import {
  Building2,
  Users,
  Globe,
  Plane,
  Hotel,
  Route,
  Car,
  TrendingUp,
  MapPin,
  Calendar,
  CheckCircle,
} from 'lucide-vue-next'

const spaces = [
  {
    icon: Building2,
    title: 'Salle plénière',
    desc: "Grande capacité pour conférences, banquets d'exception, sorties de promotion et sommets internationaux",
  },
  {
    icon: Users,
    title: 'Amphithéâtre',
    desc: 'Pour spectacles, sorties de promotion, concerts, conférences et présentations',
  },
  {
    icon: Building2,
    title: 'Salles de réunion',
    desc: 'Pour ateliers, réunions professionnelles et sessions parallèles',
  },
  {
    icon: Globe,
    title: "Espaces d'exposition",
    desc: 'Pour salons, foires, expositions et forums',
  },
]

const events = [
  'Sommets régionaux et internationaux',
  'Forums économiques',
  'Rencontres institutionnelles',
  'Manifestations professionnelles et culturelles',
]

const commodites = [
  {
    icon: Plane,
    title: 'Aéroport à 5 minutes',
    desc: "L'aéroport international d'Ivato se trouve à environ cinq minutes : arrivées et départs des délégations internationales sont particulièrement simples.",
  },
  {
    icon: Hotel,
    title: 'Hôtels aux alentours',
    desc: "Des hébergements à proximité permettent de loger confortablement participants, intervenants et équipes pendant toute la durée de l'événement.",
  },
  {
    icon: Route,
    title: 'Rocades Est et Ouest',
    desc: 'Le CCI est proche des deux rocades Est et Ouest, qui relient rapidement le centre-ville et les principaux axes de circulation.',
  },
  {
    icon: Car,
    title: 'Parking',
    desc: 'Deux vastes parkings sécurisés à proximité immédiate du centre pour accueillir vos véhicules, des salons extérieurs, des foires et des expositions.',
  },
]

const ambitions = [
  'Renforcer la position de Madagascar sur la scène internationale',
  'Attirer des événements de plus grande envergure',
  'Offrir un cadre à la hauteur des exigences des partenaires institutionnels et privés',
]
</script>

<template>
  <main class="apropos-page">
    <!-- Hero -->
    <section class="gallery-hero">
      <div class="container">
        <div class="gallery-hero__content" v-motion-fade>
          <span class="section-label">À propos</span>
          <h1 class="gallery-hero__title">Centre de Conférences International d'Ivato</h1>
          <p class="gallery-hero__sub">
            Découvrez la mission du CCI, ses espaces et son rôle dans l'accueil d'événements majeurs
            à Madagascar.
          </p>
        </div>
      </div>
    </section>

    <!-- Intro -->
    <section class="apropos-intro">
      <div class="container apropos-intro__grid">
        <div class="apropos-intro__image-wrap" v-motion-fade-left>
          <div class="apropos-intro__image">
            <img
              src="https://res.cloudinary.com/dwwjauice/image/upload/w_1440,c_limit,f_auto,q_auto/v1773934739/CCI/salles/rubis-emeraude/rubis_1_l6mvsv.jpg"
              alt="Vue extérieure du CCI Ivato"
            />
          </div>
        </div>
        <div class="apropos-intro__text" v-motion-fade>
          <h2 class="section-title">Un lieu stratégique dédié aux grands événements</h2>
          <p class="section-subtitle">
            Le Centre de Conférences International d'Ivato (CCI) est une infrastructure stratégique
            dédiée à l'accueil d'événements de portée nationale et internationale à Madagascar.
          </p>
          <p class="apropos-intro__detail">
            Pensé pour répondre aux standards internationaux, le CCI constitue aujourd'hui un lieu
            de référence pour l'organisation de sommets, conférences, forums économiques et
            événements institutionnels majeurs.
          </p>
          <p class="apropos-intro__detail">
            Situé à proximité immédiate de l'aéroport international d'Ivato, il bénéficie d'une
            accessibilité optimale pour les délégations et participants venus du monde entier.
          </p>
        </div>
      </div>
    </section>

    <!-- Spaces -->
    <section class="apropos-spaces">
      <div class="container">
        <div class="apropos-spaces__header" v-motion-fade>
          <span class="section-label">Capacité d'accueil</span>
          <h2 class="section-title">Des espaces adaptés aux grands événements</h2>
          <p class="section-subtitle">
            Le CCI propose des espaces modulables conçus pour s'adapter à tous types d'événements.
          </p>
        </div>

        <div class="apropos-spaces__grid">
          <div
            v-for="(space, i) in spaces"
            :key="space.title"
            class="apropos-space-card"
            v-motion-fade="{ delay: i * 0.1 }"
          >
            <div class="apropos-space-card__icon">
              <component :is="space.icon" />
            </div>
            <h3 class="apropos-space-card__title">{{ space.title }}</h3>
            <p class="apropos-space-card__desc">{{ space.desc }}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Events -->
    <section class="apropos-events">
      <div class="container apropos-events__grid">
        <div class="apropos-events__text" v-motion-fade>
          <span class="section-label">Événements</span>
          <h2 class="section-title">Un acteur clé des événements internationaux</h2>
          <p class="section-subtitle">
            Depuis sa mise en service, le CCI a accueilli plusieurs événements de grande envergure,
            confirmant son positionnement comme infrastructure de référence.
          </p>
          <ul class="apropos-events__list">
            <li v-for="event in events" :key="event">
              <CheckCircle class="apropos-events__check" />
              <span>{{ event }}</span>
            </li>
          </ul>
          <p class="apropos-events__highlight">
            Le centre joue un rôle central dans la dynamisation de l'attractivité de Madagascar en
            tant que destination d'événements internationaux.
          </p>
        </div>
        <div class="apropos-events__image-wrap" v-motion-fade-left>
          <div class="apropos-events__image">
            <img
              src="https://res.cloudinary.com/dwwjauice/image/upload/w_1440,c_limit,f_auto,q_auto/v1773934763/CCI/salles/amphi/amphi_2_raqzt5.jpg"
              alt="Événement au CCI Ivato"
            />
          </div>
        </div>
      </div>
    </section>

    <!-- Commodités -->
    <section class="apropos-commodites">
      <div class="container">
        <div class="apropos-commodites__header" v-motion-fade>
          <span class="section-label">Commodités</span>
          <h2 class="section-title">Un emplacement pensé pour vos participants</h2>
          <p class="section-subtitle">
            Au-delà des salles, le CCI Ivato bénéficie d'un cadre pratique pour les déplacements, le
            séjour et les liaisons vers le centre-ville.
          </p>
        </div>
        <div class="apropos-commodites__grid">
          <div
            v-for="(item, i) in commodites"
            :key="item.title"
            class="apropos-commodite-card"
            v-motion-fade="{ delay: i * 0.1 }"
          >
            <div class="apropos-commodite-card__icon">
              <component :is="item.icon" />
            </div>
            <h3 class="apropos-commodite-card__title">{{ item.title }}</h3>
            <p class="apropos-commodite-card__desc">{{ item.desc }}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Vision -->
    <section class="apropos-vision">
      <div class="container apropos-vision__grid">
        <div class="apropos-vision__image-wrap" v-motion-fade-left>
          <div class="apropos-vision__image">
            <img
              src="https://res.cloudinary.com/dwwjauice/image/upload/w_1440,c_limit,f_auto,q_auto/v1773935153/CCI/cci_lfvega.png"
              alt="Vision du CCI Ivato"
            />
          </div>
        </div>
        <div class="apropos-vision__text" v-motion-fade>
          <span class="section-label">Notre vision</span>
          <h2 class="section-title">Une vision tournée vers l'excellence</h2>
          <p class="section-subtitle">
            Le Centre de Conférences International d'Ivato s'inscrit dans une dynamique de
            modernisation et d'amélioration continue.
          </p>
          <p class="apropos-vision__detail">
            À travers ses infrastructures et ses services, il ambitionne de :
          </p>
          <ul class="apropos-vision__list">
            <li v-for="a in ambitions" :key="a">
              <TrendingUp class="apropos-vision__icon" />
              <span>{{ a }}</span>
            </li>
          </ul>
        </div>
      </div>
    </section>

    <!-- Statement -->
    <section class="apropos-statement">
      <div class="container" v-motion-scale>
        <div class="apropos-statement__inner">
          <MapPin class="apropos-statement__icon" />
          <h2 class="apropos-statement__title">Le lieu des grands événements à Madagascar</h2>
          <p class="apropos-statement__desc">
            Le CCI est aujourd'hui bien plus qu'un centre de conférences : c'est un symbole
            d'ouverture, de dialogue et de coopération internationale.
          </p>
          <div class="apropos-statement__actions">
            <AppButton href="/contact" variant="primary">
              Réserver un espace
              <Calendar class="icon" />
            </AppButton>
            <AppButton href="tel:+261320362300"> +261 32 03 623 00 </AppButton>
          </div>
        </div>
      </div>
    </section>
  </main>
</template>

<style scoped>
.apropos-page {
  padding-top: var(--nav-height);
}

/* Hero */
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

/* Intro */
.apropos-intro {
  padding: var(--section-padding);
}

.apropos-intro__grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 64px;
  align-items: center;
}

.apropos-intro__image {
  border-radius: var(--radius-lg);
  overflow: hidden;
  aspect-ratio: 4/3;
}

.apropos-intro__image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.6s ease;
}

.apropos-intro__image:hover img {
  transform: scale(1.03);
}

.apropos-intro__detail {
  color: var(--color-text-muted);
  margin-top: 16px;
  line-height: 1.7;
}

/* Spaces */
.apropos-spaces {
  padding: var(--section-padding);
  background: var(--color-bg-subtle);
}

.apropos-spaces__header {
  text-align: center;
  margin-bottom: 60px;
}

.apropos-spaces__header .section-subtitle {
  margin: 0 auto;
}

.apropos-spaces__grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 24px;
  margin-bottom: 48px;
}

.apropos-space-card {
  background: #fff;
  border: 1px solid var(--color-border);
  border-radius: var(--radius-lg);
  padding: 32px 24px;
  text-align: center;
  transition: all 0.3s ease;
}

.apropos-space-card:hover {
  border-color: var(--color-primary);
  box-shadow: 0 8px 32px rgba(24, 83, 79, 0.08);
  transform: translateY(-4px);
}

.apropos-space-card__icon {
  width: 48px;
  height: 48px;
  margin: 0 auto 16px;
  background: rgba(24, 83, 79, 0.08);
  border-radius: var(--radius-lg);
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--color-primary);
}

.apropos-space-card__icon svg {
  width: 22px;
  height: 22px;
}

.apropos-space-card__title {
  font-size: var(--font-size-sm);
  font-weight: 700;
  color: var(--color-text);
  margin-bottom: 8px;
}

.apropos-space-card__desc {
  font-size: var(--font-size-xs);
  color: var(--color-text-muted);
  line-height: 1.6;
}

/* Equipment */
.apropos-equipment {
  background: #fff;
  border: 1px solid var(--color-border);
  border-radius: var(--radius-lg);
  padding: 40px;
}

.apropos-equipment__title {
  font-family: var(--font-title);
  font-size: var(--font-size-md);
  font-weight: 700;
  color: var(--color-text);
  margin-bottom: 24px;
  text-align: center;
}

.apropos-equipment__list {
  display: flex;
  justify-content: center;
  gap: 40px;
  flex-wrap: wrap;
}

.apropos-equipment__item {
  display: flex;
  align-items: center;
  gap: 12px;
  color: var(--color-text);
  font-weight: 500;
}

.apropos-equipment__icon {
  width: 40px;
  height: 40px;
  background: rgba(24, 83, 79, 0.08);
  border-radius: var(--radius);
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--color-primary);
  flex-shrink: 0;
}

.apropos-equipment__icon svg {
  width: 18px;
  height: 18px;
}

/* Events */
.apropos-events {
  padding: var(--section-padding);
}

.apropos-events__grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 64px;
  align-items: center;
}

.apropos-events__list {
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: 16px;
  margin-top: 24px;
}

.apropos-events__list li {
  display: flex;
  align-items: center;
  gap: 12px;
  font-weight: 500;
  color: var(--color-text);
}

.apropos-events__check {
  width: 18px;
  height: 18px;
  color: var(--color-primary);
  flex-shrink: 0;
}

.apropos-events__highlight {
  margin-top: 24px;
  padding: 20px 24px;
  background: rgba(24, 83, 79, 0.04);
  border-left: 3px solid var(--color-primary);
  border-radius: 0 var(--radius) var(--radius) 0;
  color: var(--color-text-muted);
  font-style: italic;
  line-height: 1.7;
}

.apropos-events__image {
  border-radius: var(--radius-lg);
  overflow: hidden;
  aspect-ratio: 4/3;
}

.apropos-events__image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.6s ease;
}

.apropos-events__image:hover img {
  transform: scale(1.03);
}

/* Commodités */
.apropos-commodites {
  padding: var(--section-padding);
  background: var(--color-bg-subtle);
}

.apropos-commodites__header {
  text-align: center;
  margin-bottom: 48px;
}

.apropos-commodites__header .section-subtitle {
  margin: 0 auto;
}

.apropos-commodites__grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 24px;
}

.apropos-commodite-card {
  background: #fff;
  border: 1px solid var(--color-border);
  border-radius: var(--radius-lg);
  padding: 32px 24px;
  text-align: center;
  transition: all 0.3s ease;
}

.apropos-commodite-card:hover {
  border-color: var(--color-primary);
  box-shadow: 0 8px 32px rgba(24, 83, 79, 0.08);
  transform: translateY(-4px);
}

.apropos-commodite-card__icon {
  width: 48px;
  height: 48px;
  margin: 0 auto 16px;
  background: rgba(24, 83, 79, 0.08);
  border-radius: var(--radius-lg);
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--color-primary);
}

.apropos-commodite-card__icon svg {
  width: 22px;
  height: 22px;
}

.apropos-commodite-card__title {
  font-size: var(--font-size-sm);
  font-weight: 700;
  color: var(--color-text);
  margin-bottom: 10px;
}

.apropos-commodite-card__desc {
  font-size: var(--font-size-xs);
  color: var(--color-text-muted);
  line-height: 1.65;
}

/* Vision */
.apropos-vision {
  padding: var(--section-padding);
}

.apropos-vision__grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 64px;
  align-items: center;
}

.apropos-vision__image {
  border-radius: var(--radius-lg);
  overflow: hidden;
  aspect-ratio: 4/3;
}

.apropos-vision__image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.6s ease;
}

.apropos-vision__image:hover img {
  transform: scale(1.03);
}

.apropos-vision__detail {
  color: var(--color-text-muted);
  margin-top: 16px;
  line-height: 1.7;
}

.apropos-vision__list {
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: 16px;
  margin-top: 20px;
}

.apropos-vision__list li {
  display: flex;
  align-items: flex-start;
  gap: 12px;
  font-weight: 500;
  color: var(--color-text);
  line-height: 1.5;
}

.apropos-vision__icon {
  width: 18px;
  height: 18px;
  color: var(--color-primary);
  flex-shrink: 0;
  margin-top: 3px;
}

/* Statement */
.apropos-statement {
  padding: 0 0 100px;
}

.apropos-statement__actions {
  display: flex;
  gap: 12px;
  justify-content: center;
  flex-wrap: wrap;
}

.apropos-statement__inner {
  text-align: center;
  padding: 80px 40px;
  background: var(--color-primary);
  border-radius: var(--radius-lg);
}

.apropos-statement__icon {
  width: 40px;
  height: 40px;
  color: rgba(255, 255, 255, 0.6);
  margin-bottom: 24px;
  stroke-width: 1.5;
}

.apropos-statement__title {
  font-size: var(--font-size-xl);
  font-family: var(--font-title);
  font-weight: 700;
  color: #fff;
  margin-bottom: 16px;
}

.apropos-statement__desc {
  color: rgba(255, 255, 255, 0.75);
  max-width: 540px;
  margin: 0 auto 32px;
  line-height: 1.7;
}

.apropos-statement__inner .btn-primary {
  background: #fff;
  color: var(--color-primary);
  border-color: #fff;
}

.apropos-statement__inner .btn-primary:hover {
  background: rgba(255, 255, 255, 0.9);
}

/* Responsive */
@media (max-width: 1024px) {
  .apropos-spaces__grid {
    grid-template-columns: repeat(2, 1fr);
  }

  .apropos-commodites__grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (max-width: 768px) {
  .apropos-intro__grid,
  .apropos-events__grid,
  .apropos-vision__grid {
    grid-template-columns: 1fr;
    gap: 40px;
  }

  .apropos-spaces__grid {
    grid-template-columns: repeat(2, 1fr);
  }

  .apropos-commodites__grid {
    grid-template-columns: repeat(2, 1fr);
  }

  .apropos-equipment__list {
    flex-direction: column;
    align-items: center;
    gap: 20px;
  }

  .apropos-events__image-wrap {
    order: -1;
  }
}

@media (max-width: 576px) {
  .apropos-spaces__grid {
    grid-template-columns: 1fr;
  }

  .apropos-commodites__grid {
    grid-template-columns: 1fr;
  }

  .apropos-spaces__header {
    text-align: left;
  }

  .apropos-equipment {
    padding: 24px;
  }

  .apropos-equipment__title {
    text-align: left;
  }

  .apropos-equipment__list {
    align-items: flex-start;
  }

  .apropos-statement__inner {
    padding: 48px 24px;
  }
}
</style>
