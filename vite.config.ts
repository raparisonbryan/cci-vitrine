import fs from 'node:fs'
import path from 'node:path'
import { fileURLToPath, URL } from 'node:url'

import { defineConfig, loadEnv, type Plugin } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'
import vueDevTools from 'vite-plugin-vue-devtools'

import { spacesList } from './src/data/spaces'

function escapeXml(s: string) {
  return s
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
}

function seoStaticFilesPlugin(siteUrl: string): Plugin {
  const base = siteUrl.replace(/\/$/, '')
  const staticPaths = [
    '/',
    '/galerie',
    '/a-propos',
    '/contact',
    '/mentions-legales',
    '/informations',
    '/politique-confidentialite',
  ]
  const spacePaths = spacesList.map((s) => `/espaces/${s.slug}`)
  const allPaths = [...staticPaths, ...spacePaths]

  return {
    name: 'seo-static-files',
    apply: 'build',
    closeBundle() {
      const outDir = path.resolve(fileURLToPath(new URL('.', import.meta.url)), 'dist')
      const lastmod = new Date().toISOString().split('T')[0] ?? ''

      const urlEntries = allPaths
        .map((p) => {
          const loc = p === '/' ? base : `${base}${p}`
          const priority =
            p === '/'
              ? '1.0'
              : p.startsWith('/espaces/')
                ? '0.85'
                : p.includes('legales') || p.includes('politique')
                  ? '0.35'
                  : '0.8'
          return `  <url>
    <loc>${escapeXml(loc)}</loc>
    <lastmod>${lastmod}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>${priority}</priority>
  </url>`
        })
        .join('\n')

      const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urlEntries}
</urlset>
`

      fs.writeFileSync(path.join(outDir, 'sitemap.xml'), sitemap, 'utf8')
      fs.writeFileSync(
        path.join(outDir, 'robots.txt'),
        `User-agent: *
Allow: /

Sitemap: ${base}/sitemap.xml
`,
        'utf8',
      )
    },
  }
}

// https://vite.dev/config/
export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), '')
  const siteUrl = env.VITE_SITE_URL?.replace(/\/$/, '') || 'https://cci-ivato.com'

  return {
    plugins: [vue(), vueJsx(), vueDevTools(), seoStaticFilesPlugin(siteUrl)],
    resolve: {
      alias: {
        '@': fileURLToPath(new URL('./src', import.meta.url)),
      },
    },
  }
})
