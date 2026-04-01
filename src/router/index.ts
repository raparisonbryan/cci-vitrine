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
    },
    {
      path: '/galerie',
      name: 'gallery',
      component: GalleryPage,
    },
    {
      path: '/a-propos',
      name: 'a-propos',
      component: AProposPage,
    },
    {
      path: '/contact',
      name: 'contact',
      component: ContactPage,
    },
    {
      path: '/mentions-legales',
      name: 'mentions-legales',
      component: MentionsLegalesPage,
    },
    {
      path: '/informations',
      name: 'informations',
      component: InformationsPage,
    },
    {
      path: '/politique-confidentialite',
      name: 'politique-confidentialite',
      component: PolitiqueConfidentialitePage,
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
