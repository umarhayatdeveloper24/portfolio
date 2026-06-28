<script setup>
import { experience } from '../data/portfolio'
</script>

<template>
  <section id="experience" class="relative py-24 sm:py-32">
    <div class="mx-auto max-w-6xl px-6">
      <div class="reveal-on-scroll mb-16 text-center">
        <p class="section-label mb-3">Career Journey</p>
        <h2 class="text-3xl font-bold text-white sm:text-4xl">
          Professional Experience
        </h2>
      </div>

      <div class="relative space-y-12">
        <div class="absolute left-6 top-0 hidden h-full w-px bg-gradient-to-b from-accent/50 via-accent/20 to-transparent md:block" />

        <article
          v-for="(job, index) in experience"
          :key="job.company"
          class="relative md:pl-16"
        >
          <div
            class="timeline-dot absolute left-4 top-8 hidden h-4 w-4 rounded-full bg-accent md:block"
            :style="{ top: index === 0 ? '2rem' : '2rem' }"
          />

          <div class="glass card-hover rounded-2xl p-6 sm:p-8">
            <div class="mb-6 flex flex-col gap-2 sm:flex-row sm:items-start sm:justify-between">
              <div>
                <h3 class="text-xl font-bold text-white">{{ job.role }}</h3>
                <p class="mt-1 text-accent-light">{{ job.company }}</p>
              </div>
              <div class="text-right">
                <span class="inline-block rounded-full border border-white/10 bg-white/5 px-3 py-1 font-mono text-xs text-slate-400">
                  {{ job.period }}
                </span>
                <p class="mt-1 text-xs text-slate-500">{{ job.location }}</p>
              </div>
            </div>

            <ul class="space-y-3">
              <li
                v-for="(point, i) in job.highlights"
                :key="i"
                class="flex gap-3 text-sm leading-relaxed text-slate-400"
              >
                <span class="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-accent-light" />
                {{ point }}
              </li>
            </ul>
          </div>
        </article>
      </div>
    </div>
  </section>
</template>
