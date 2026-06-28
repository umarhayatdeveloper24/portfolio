<script setup>
import { personal, stats } from '../data/portfolio'

const scrollTo = (id) => {
  document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
}
</script>

<template>
  <section id="home" class="relative min-h-screen overflow-hidden">
    <div class="glow-orb -left-40 top-10 h-[28rem] w-[28rem] bg-accent/25" />
    <div class="glow-orb -right-40 top-32 h-80 w-80 bg-cyan/20" style="animation-delay: 2s" />
    <div class="glow-orb left-1/2 bottom-0 h-64 w-96 -translate-x-1/2 bg-rose/10" style="animation-delay: 4s" />
    <div class="grid-bg absolute inset-0 opacity-70" />

    <div class="relative mx-auto flex min-h-screen max-w-4xl flex-col items-center justify-center px-6 pt-24 pb-16 text-center">
      <div class="mb-6 inline-flex w-fit items-center gap-2 rounded-full border border-cyan/30 bg-cyan/10 px-4 py-1.5 opacity-0-start animate-fade-up">
        <span class="relative flex h-2 w-2">
          <span class="absolute inline-flex h-full w-full animate-ping rounded-full bg-cyan opacity-75" />
          <span class="relative inline-flex h-2 w-2 rounded-full bg-cyan" />
        </span>
        <span class="font-mono text-xs text-cyan">{{ personal.badge }}</span>
      </div>

      <p class="mb-4 font-mono text-sm uppercase tracking-[0.15em] text-accent-bright opacity-0-start animate-fade-up delay-100 sm:tracking-[0.2em]">
        {{ personal.heroRoleAbove }}
      </p>

      <h1 class="mb-2 max-w-3xl text-4xl font-extrabold leading-tight tracking-tight text-white opacity-0-start animate-fade-up delay-200 sm:text-5xl lg:text-6xl">
        {{ personal.name }}
      </h1>

      <p class="mb-2 font-mono text-sm uppercase tracking-[0.15em] text-cyan opacity-0-start animate-fade-up delay-200 sm:tracking-[0.2em]">
        {{ personal.heroRoleBelow }}
      </p>

      <div class="hero-accent-line my-6 w-24 opacity-0-start animate-fade-up delay-300" />

      <div class="mb-8 max-w-2xl opacity-0-start animate-fade-up delay-300">
        <h2 class="text-3xl font-bold leading-snug text-white sm:text-4xl lg:text-5xl">
          {{ personal.headline }}
        </h2>
        <h2 class="mt-1 text-3xl font-bold leading-snug gradient-text sm:text-4xl lg:text-5xl">
          {{ personal.headlineAccent }}
        </h2>
      </div>

      <p class="mb-10 max-w-2xl text-base leading-relaxed text-slate-400 opacity-0-start animate-fade-up delay-400 sm:text-lg">
        {{ personal.intro }}
      </p>

      <div class="mb-8 flex flex-wrap justify-center gap-2 opacity-0-start animate-fade-up delay-400">
        <span
          v-for="tech in personal.primaryStack.backend"
          :key="tech"
          class="skill-tag-primary rounded-lg border px-3 py-1.5 font-mono text-xs"
        >
          {{ tech }}
        </span>
        <span
          v-for="tech in personal.primaryStack.frontend"
          :key="tech"
          class="frontend-tag rounded-lg border px-3 py-1.5 font-mono text-xs"
        >
          {{ tech }}
        </span>
        <span
          v-for="tech in personal.primaryStack.ai"
          :key="tech"
          class="ai-tag rounded-lg border px-3 py-1.5 font-mono text-xs"
        >
          {{ tech }}
        </span>
      </div>

      <div class="mb-14 flex flex-wrap justify-center gap-4 opacity-0-start animate-fade-up delay-500">
        <button
          class="btn-primary group flex items-center gap-2 rounded-xl px-7 py-3.5 text-sm font-semibold text-white"
          @click="scrollTo('projects')"
        >
          View Projects
          <svg class="h-4 w-4 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
          </svg>
        </button>
        <button
          class="rounded-xl border border-white/10 px-7 py-3.5 text-sm font-semibold text-slate-300 transition-all hover:border-accent/50 hover:bg-accent/10 hover:text-white"
          @click="scrollTo('contact')"
        >
          Get In Touch
        </button>
        <a
          :href="personal.social.linkedin"
          target="_blank"
          rel="noopener noreferrer"
          class="inline-flex items-center gap-2 rounded-xl border border-[#0A66C2]/40 bg-[#0A66C2]/10 px-7 py-3.5 text-sm font-semibold text-[#70b5f9] transition-all hover:border-[#0A66C2]/60 hover:bg-[#0A66C2]/20 hover:text-white"
        >
          <svg class="h-4 w-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
            <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
          </svg>
          LinkedIn Profile
        </a>
      </div>

      <div class="grid w-full max-w-3xl grid-cols-2 gap-4 sm:grid-cols-4 opacity-0-start animate-fade-up delay-500">
        <div
          v-for="stat in stats"
          :key="stat.label"
          class="glass card-hover rounded-2xl p-4 text-center sm:p-5"
        >
          <div class="text-2xl font-bold gradient-text sm:text-3xl">{{ stat.value }}</div>
          <div class="mt-1 text-xs text-slate-500 sm:text-sm">{{ stat.label }}</div>
        </div>
      </div>
    </div>

    <div class="absolute bottom-8 left-1/2 -translate-x-1/2 animate-float">
      <button
        class="flex flex-col items-center gap-2 text-slate-500 transition-colors hover:text-accent-bright"
        @click="scrollTo('about')"
        aria-label="Scroll down"
      >
        <span class="font-mono text-xs">scroll</span>
        <svg class="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </button>
    </div>
  </section>
</template>
