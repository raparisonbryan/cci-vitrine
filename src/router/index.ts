import { createRouter, createWebHistory } from 'vue-router'
import HomePage from '@/views/HomePage.vue'
import GalleryPage from '@/views/GalleryPage.vue'
import SpacePage from '@/views/SpacePage.vue'
import { spaces } from '@/data/spaces'
import AProposPage from '@/views/AProposPage.vue'
import ContactPage from '@/views/ContactPage.vue'
import MentionsLegalesPage from '@/views/MentionsLegalesPage.vue'
import InformationsPage from '@/views/InformationsPage.vue'
import PolitiqueConfidentialitePage from '@/views/PolitiqueConfidentialitePage.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomePage,
      meta: {
        seo: {
          title: 'CCI Ivato — Centre de Conférences International',
          description:
            "Centre de Conférences International Ivato — Votre espace d'exception pour conférences, séminaires et événements à Madagascar.",
        },
      },
    },
    {
      path: '/galerie',
      name: 'gallery',
      component: GalleryPage,
      meta: {
        seo: {
          title: 'Galerie — CCI Ivato',
          description:
            'Découvrez en images les espaces du Centre de Conférences International Ivato : salles, halls et extérieurs.',
        },
      },
    },
    {
      path: '/a-propos',
      name: 'a-propos',
      component: AProposPage,
      meta: {
        seo: {
          title: 'À propos — CCI Ivato',
          description:
            'Le Centre de Conférences International Ivato : un lieu d’exception pour vos événements professionnels et culturels à Antananarivo.',
        },
      },
    },
    {
      path: '/contact',
      name: 'contact',
      component: ContactPage,
      meta: {
        seo: {
          title: 'Contact et réservation — CCI Ivato',
          description:
            'Contactez le CCI Ivato pour réserver une salle ou organiser votre conférence, séminaire ou événement à Antananarivo.',
        },
      },
    },
    {
      path: '/mentions-legales',
      name: 'mentions-legales',
      component: MentionsLegalesPage,
      meta: {
        seo: {
          title: 'Mentions légales — CCI Ivato',
          description: 'Mentions légales du site du Centre de Conférences International Ivato.',
        },
      },
    },
    {
      path: '/informations',
      name: 'informations',
      component: InformationsPage,
      meta: {
        seo: {
          title: 'Informations pratiques — CCI Ivato',
          description:
            'Informations pratiques, documents et ressources utiles pour votre événement au CCI Ivato.',
        },
      },
    },
    {
      path: '/politique-confidentialite',
      name: 'politique-confidentialite',
      component: PolitiqueConfidentialitePage,
      meta: {
        seo: {
          title: 'Politique de confidentialité — CCI Ivato',
          description:
            'Politique de confidentialité et traitement des données personnelles — Centre de Conférences International Ivato.',
        },
      },
    },
    {
      path: '/espaces/:slug',
      name: 'space',
      component: SpacePage,
      meta: { transparentNav: true },
      beforeEnter(to) {
        if (!((to.params.slug as string) in spaces)) {
          return { name: 'home' }
        }
      },
    },
  ],
  scrollBehavior(to) {
    if (to.hash) {
      return { el: to.hash, behavior: 'smooth' }
    }
    return { top: 0, behavior: 'smooth' }
  },
})

export default router
