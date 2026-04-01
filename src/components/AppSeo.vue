<script setup lang="ts">
import { computed } from 'vue'
import { useRoute } from 'vue-router'
import { useHead, useSeoMeta } from '@unhead/vue'
import { spaces } from '@/data/spaces'
import { absoluteUrl, defaultDescription, defaultOgImage, siteName, siteUrl } from '@/config/site'

const route = useRoute()

const page = computed(() => {
  if (route.name === 'space') {
    const slug = route.params.slug as string
    const space = spaces[slug]
    if (!space) {
      return {
        title: siteName,
        description: defaultDescription,
        ogImage: defaultOgImage,
        path: route.path,
      }
    }
    return {
      title: `${space.name} — ${siteName}`,
      description: space.description,
      ogImage: space.heroImage,
      path: `/espaces/${slug}`,
    }
  }

  const seo = route.meta.seo
  if (seo?.title && seo?.description) {
    return {
      title: seo.title,
      description: seo.description,
      ogImage: seo.ogImage ?? defaultOgImage,
      path: route.path,
    }
  }

  return {
    title: siteName,
    description: defaultDescription,
    ogImage: defaultOgImage,
    path: route.path,
  }
})

const canonical = computed(() => absoluteUrl(page.value.path))

const organizationJsonLd = computed(() =>
  JSON.stringify({
    '@context': 'https://schema.org',
    '@type': 'EventVenue',
    name: 'Centre de Conférences International Ivato',
    alternateName: siteName,
    description: defaultDescription,
    url: siteUrl,
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Antananarivo',
      addressCountry: 'MG',
    },
    telephone: '+261-32-03-623-00',
    email: 'commercial.cci@madeco.mg',
  }),
)

useSeoMeta({
  title: () => page.value.title,
  description: () => page.value.description,
  ogTitle: () => page.value.title,
  ogDescription: () => page.value.description,
  ogImage: () => page.value.ogImage,
  ogUrl: () => canonical.value,
  ogType: 'website',
  ogLocale: 'fr_MG',
  ogSiteName: siteName,
  twitterCard: 'summary_large_image',
  twitterTitle: () => page.value.title,
  twitterDescription: () => page.value.description,
  twitterImage: () => page.value.ogImage,
})

useHead({
  link: () => [{ rel: 'canonical', href: canonical.value }],
  script: () => [
    {
      type: 'application/ld+json',
      key: 'ld-org',
      innerHTML: organizationJsonLd.value,
    },
  ],
})
</script>

<template>
  <span class="seo-root" aria-hidden="true" />
</template>

<style scoped>
.seo-root {
  display: none;
}
</style>
