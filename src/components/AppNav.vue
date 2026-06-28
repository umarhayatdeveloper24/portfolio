<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import { navLinks } from '../data/portfolio'

const isScrolled = ref(false)
const isMobileOpen = ref(false)
const activeSection = ref('home')

const handleScroll = () => {
  isScrolled.value = window.scrollY > 40

  const sections = navLinks.map((link) => link.id)
  for (const id of [...sections].reverse()) {
    const el = document.getElementById(id)
    if (el && el.getBoundingClientRect().top <= 120) {
      activeSection.value = id
      break
    }
  }
}

const scrollTo = (id) => {
  isMobileOpen.value = false
  document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
}

onMounted(() => window.addEventListener('scroll', handleScroll))
onUnmounted(() => window.removeEventListener('scroll', handleScroll))
</script>

<template>
  <header
    class="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
    :class="isScrolled ? 'glass shadow-lg shadow-black/20' : 'bg-transparent'"
  >
    <nav class="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
      <button
        class="font-mono text-lg font-bold tracking-tight text-white transition-colors hover:text-accent-bright"
        @click="scrollTo('home')"
      >
        UH<span class="text-accent-bright">.</span>
      </button>

      <ul class="hidden items-center gap-1 md:flex">
        <li v-for="link in navLinks" :key="link.id">
          <button
            class="rounded-lg px-4 py-2 text-sm font-medium transition-all duration-200"
            :class="
              activeSection === link.id
                ? 'bg-accent/15 text-accent-bright'
                : 'text-slate-400 hover:text-white'
            "
            @click="scrollTo(link.id)"
          >
            {{ link.label }}
          </button>
        </li>
      </ul>

      <button
        class="btn-primary hidden rounded-lg px-5 py-2 text-sm font-semibold text-white md:block"
        @click="scrollTo('contact')"
      >
        Hire Me
      </button>

      <button
        class="flex h-10 w-10 items-center justify-center rounded-lg border border-white/10 text-white md:hidden"
        @click="isMobileOpen = !isMobileOpen"
        aria-label="Toggle menu"
      >
        <svg v-if="!isMobileOpen" class="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
        </svg>
        <svg v-else class="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
        </svg>
      </button>
    </nav>

    <div
      v-if="isMobileOpen"
      class="glass border-t border-white/5 px-6 py-4 md:hidden"
    >
      <ul class="flex flex-col gap-1">
        <li v-for="link in navLinks" :key="link.id">
          <button
            class="w-full rounded-lg px-4 py-3 text-left text-sm font-medium transition-colors"
            :class="activeSection === link.id ? 'text-accent-bright' : 'text-slate-400'"
            @click="scrollTo(link.id)"
          >
            {{ link.label }}
          </button>
        </li>
        <li>
          <button
            class="btn-primary mt-2 w-full rounded-lg py-3 text-sm font-semibold text-white"
            @click="scrollTo('contact')"
          >
            Hire Me
          </button>
        </li>
      </ul>
    </div>
  </header>
</template>
