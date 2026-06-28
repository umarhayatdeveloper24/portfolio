<script setup>
import { personal, skills } from '../data/portfolio'
</script>

<template>
  <section id="skills" class="relative py-24 sm:py-32">
    <div class="absolute inset-0 bg-gradient-to-b from-transparent via-accent/[0.04] to-transparent" />

    <div class="relative mx-auto max-w-6xl px-6">
      <div class="reveal-on-scroll mb-16 text-center">
        <p class="section-label mb-3">Technical Expertise</p>
        <h2 class="text-3xl font-bold text-white sm:text-4xl">
          {{ personal.skillsHeadline }}
        </h2>
        <p class="mx-auto mt-4 max-w-xl text-slate-400">
          {{ personal.skillsSubheadline }}
        </p>
      </div>

      <div class="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        <div
          v-for="group in skills"
          :key="group.category"
          class="glass card-hover rounded-2xl p-6"
          :class="
            group.featured
              ? group.aiFeatured
                ? 'featured-ai-card sm:col-span-2 lg:col-span-1'
                : 'featured-skill-card sm:col-span-2 lg:col-span-1'
              : ''
          "
        >
          <div class="mb-4 flex items-center gap-3">
            <span
              class="flex h-10 w-10 items-center justify-center rounded-xl text-lg"
              :class="group.featured ? (group.aiFeatured ? 'bg-gold/20 text-gold' : 'bg-accent/20 text-accent-light') : 'bg-accent/10 text-accent-light'"
            >
              {{ group.icon }}
            </span>
            <div>
              <h3 class="font-semibold text-white">{{ group.category }}</h3>
              <p v-if="group.featured" class="font-mono text-xs" :class="group.aiFeatured ? 'text-gold' : 'text-accent-light'">
                {{ group.aiFeatured ? 'AI-Enabled Development' : 'Primary Expertise' }}
              </p>
            </div>
          </div>
          <div class="flex flex-wrap gap-2">
            <span
              v-for="(item, index) in group.items"
              :key="item"
              class="skill-tag rounded-lg border px-3 py-1.5 font-mono text-xs"
              :class="
                group.featured && index === 0
                  ? group.aiFeatured
                    ? 'ai-tag'
                    : 'skill-tag-primary'
                  : group.aiFeatured
                    ? 'ai-tag'
                    : 'border-white/8 bg-white/3 text-slate-400'
              "
            >
              {{ item }}
            </span>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
