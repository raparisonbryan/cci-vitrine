import 'vue-router'

declare module 'vue-router' {
  interface RouteMeta {
    transparentNav?: boolean
    seo?: {
      title: string
      description: string
      ogImage?: string
    }
  }
}

export {}
