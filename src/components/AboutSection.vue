<script setup>
import { personal, expertiseAreas } from '../data/portfolio'

const initials = personal.name
  .split(' ')
  .map((n) => n[0])
  .join('')

const accentClass = (accent) => ({
  accent: 'bg-accent/15',
  cyan: 'bg-cyan/10',
  rose: 'bg-rose/10',
  gold: 'bg-gold/10',
})[accent] || 'bg-accent/15'
</script>

<template>
  <section id="about" class="relative py-24 sm:py-32">
    <div class="absolute inset-0 bg-gradient-to-b from-transparent via-accent/[0.04] to-transparent" />

    <div class="relative mx-auto max-w-6xl px-6">
      <div class="reveal-on-scroll mb-16 text-center">
        <p class="section-label mb-3">About Me</p>
        <h2 class="text-3xl font-bold text-white sm:text-4xl">
          {{ personal.aboutHeadline }}
        </h2>
      </div>

      <div class="grid items-start gap-12 lg:grid-cols-5">
        <div class="lg:col-span-2">
          <div class="glass relative overflow-hidden rounded-3xl p-8">
            <div class="absolute -right-10 -top-10 h-40 w-40 rounded-full bg-accent/15 blur-3xl" />
            <div class="absolute -bottom-10 -left-10 h-32 w-32 rounded-full bg-cyan/10 blur-3xl" />

            <div class="monogram-badge relative mx-auto mb-8 flex h-36 w-36 items-center justify-center rounded-3xl">
              <span class="text-5xl font-extrabold gradient-text">{{ initials }}</span>
            </div>

            <div class="space-y-4">
              <div class="flex items-center gap-3 text-sm text-slate-400">
                <span class="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-accent/15 text-accent-bright">
                  <svg class="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </span>
                {{ personal.location }}
              </div>
              <div class="flex items-center gap-3 text-sm text-slate-400">
                <span class="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-accent/15 text-accent-bright">
                  <svg class="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </span>
                {{ personal.email }}
              </div>
              <div class="flex items-center gap-3 text-sm text-slate-400">
                <span class="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-accent/15 text-accent-bright">
                  <svg class="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </span>
                {{ personal.phone }}
              </div>
              <a
                :href="personal.social.linkedin"
                target="_blank"
                rel="noopener noreferrer"
                class="group flex items-center gap-3 text-sm text-slate-400 transition-colors hover:text-[#70b5f9]"
              >
                <span class="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-[#0A66C2]/15 text-[#70b5f9] transition-colors group-hover:bg-[#0A66C2]/25">
                  <svg class="h-4 w-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                  </svg>
                </span>
                LinkedIn Profile
              </a>
            </div>

            <div class="mt-8 space-y-3 rounded-2xl border border-accent/20 bg-accent/5 p-4">
              <p class="text-center font-mono text-xs text-slate-500">Primary Stack</p>
              <div>
                <p class="mb-2 text-center font-mono text-[10px] uppercase tracking-wider text-accent-bright">Backend</p>
                <div class="flex flex-wrap justify-center gap-2">
                  <span
                    v-for="tech in personal.primaryStack.backend"
                    :key="tech"
                    class="skill-tag-primary rounded-lg border px-3 py-1 font-mono text-xs"
                  >
                    {{ tech }}
                  </span>
                </div>
              </div>
              <div>
                <p class="mb-2 text-center font-mono text-[10px] uppercase tracking-wider text-cyan">Frontend</p>
                <div class="flex flex-wrap justify-center gap-2">
                  <span
                    v-for="tech in personal.primaryStack.frontend"
                    :key="tech"
                    class="frontend-tag rounded-lg border px-3 py-1 font-mono text-xs"
                  >
                    {{ tech }}
                  </span>
                </div>
              </div>
              <div>
                <p class="mb-2 text-center font-mono text-[10px] uppercase tracking-wider text-gold">AI</p>
                <div class="flex flex-wrap justify-center gap-2">
                  <span
                    v-for="tech in personal.primaryStack.ai"
                    :key="tech"
                    class="ai-tag rounded-lg border px-3 py-1 font-mono text-xs"
                  >
                    {{ tech }}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="lg:col-span-3">
          <p class="mb-8 text-lg leading-relaxed text-slate-400">
            {{ personal.profile }}
          </p>

          <div class="mb-8 flex flex-wrap gap-2">
            <span
              v-for="(item, index) in personal.expertise"
              :key="item"
              class="skill-tag rounded-lg border px-3 py-1.5 font-mono text-xs"
              :class="index < 2 ? 'skill-tag-primary' : index === personal.expertise.length - 1 ? 'ai-tag' : 'frontend-tag'"
            >
              {{ item }}
            </span>
          </div>

          <div class="grid gap-4 sm:grid-cols-2">
            <div
              v-for="area in expertiseAreas"
              :key="area.title"
              class="glass card-hover rounded-2xl p-6"
            >
              <div
                class="mb-3 flex h-10 w-10 items-center justify-center rounded-xl text-lg"
                :class="accentClass(area.accent)"
              >
                {{ area.icon }}
              </div>
              <h3 class="mb-2 font-semibold text-white">{{ area.title }}</h3>
              <p class="text-sm leading-relaxed text-slate-500">
                {{ area.description }}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
