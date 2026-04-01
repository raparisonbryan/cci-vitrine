/** Public site URL */
export const siteUrl = (import.meta.env.VITE_SITE_URL ?? 'https://cci-ivato.com').replace(/\/$/, '')

export const siteName = 'CCI Ivato'

export const defaultDescription =
  "Centre de Conférences International Ivato — Votre espace d'exception pour conférences, séminaires et événements à Madagascar."

/** Image par défaut pour Open Graph (Cloudinary). */
export const defaultOgImage =
  'https://res.cloudinary.com/dwwjauice/image/upload/w_1200,h_630,c_fill,f_auto,q_auto/v1773934763/CCI/salles/amphi/amphi_2_raqzt5.jpg'

export function absoluteUrl(path: string) {
  const p = path.startsWith('/') ? path : `/${path}`
  return `${siteUrl}${p === '/' ? '' : p}`
}
