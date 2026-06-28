import { onMounted } from 'vue'
import { seo, structuredData } from '../data/seo'

function setMeta(name, content, isProperty = false) {
  if (!content) return
  const attr = isProperty ? 'property' : 'name'
  let el = document.querySelector(`meta[${attr}="${name}"]`)
  if (!el) {
    el = document.createElement('meta')
    el.setAttribute(attr, name)
    document.head.appendChild(el)
  }
  el.setAttribute('content', content)
}

function setJsonLd() {
  const id = 'portfolio-jsonld'
  let script = document.getElementById(id)
  if (!script) {
    script = document.createElement('script')
    script.id = id
    script.type = 'application/ld+json'
    document.head.appendChild(script)
  }
  script.textContent = JSON.stringify(structuredData)
}

export function useSeo() {
  onMounted(() => {
    document.title = seo.title
    setMeta('description', seo.description)
    setMeta('keywords', seo.keywords.join(', '))
    setMeta('author', seo.author)
    setMeta('robots', 'index, follow, max-image-preview:large')
    setMeta('googlebot', 'index, follow')

    setMeta('og:title', seo.title, true)
    setMeta('og:description', seo.description, true)
    setMeta('og:type', 'website', true)
    setMeta('og:locale', seo.locale, true)
    setMeta('og:site_name', seo.siteName, true)

    setMeta('twitter:card', seo.twitterCard)
    setMeta('twitter:title', seo.title)
    setMeta('twitter:description', seo.description)
    setMeta('og:url', import.meta.env.VITE_SITE_URL || 'https://umarhayat.dev', true)

    const canonical = document.querySelector('link[rel="canonical"]')
    const url = import.meta.env.VITE_SITE_URL || 'https://umarhayat.dev'
    if (canonical) canonical.setAttribute('href', `${url}/`)

    setJsonLd()
  })
}
