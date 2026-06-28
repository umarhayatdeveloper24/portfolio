<script setup>
import { projects } from '../data/portfolio'
</script>

<template>
  <section id="projects" class="relative py-24 sm:py-32">
    <div class="absolute inset-0 bg-gradient-to-b from-transparent via-accent/[0.05] to-transparent" />

    <div class="relative mx-auto max-w-6xl px-6">
      <div class="reveal-on-scroll mb-16 text-center">
        <p class="section-label mb-3">Portfolio</p>
        <h2 class="text-3xl font-bold text-white sm:text-4xl">
          Featured Projects
        </h2>
        <p class="mx-auto mt-4 max-w-xl text-slate-400">
          Full-stack SaaS platforms built with Ruby on Rails — scalable APIs, polished UIs, and production delivery for global teams.
        </p>
      </div>

      <div class="grid gap-6 lg:grid-cols-2">
        <article
          v-for="project in projects"
          :key="project.name"
          class="group glass card-hover overflow-hidden rounded-2xl"
        >
          <div
            class="relative h-2 bg-gradient-to-r"
            :class="project.gradient"
          />
          <div class="p-6 sm:p-8">
            <div class="mb-4 flex flex-wrap items-start justify-between gap-3">
              <div>
                <h3 class="text-xl font-bold text-white transition-colors group-hover:text-accent-bright">
                  {{ project.name }}
                </h3>
                <p class="mt-1 text-sm text-slate-500">{{ project.subtitle }}</p>
              </div>
              <div class="flex flex-wrap gap-2">
                <span
                  v-for="tag in project.highlights"
                  :key="tag"
                  class="rounded-full bg-accent/15 px-2.5 py-0.5 font-mono text-xs text-accent-bright"
                >
                  {{ tag }}
                </span>
              </div>
            </div>

            <p class="mb-6 text-sm leading-relaxed text-slate-400">
              {{ project.description }}
            </p>

            <div class="space-y-3">
              <div>
                <p class="mb-2 font-mono text-xs uppercase tracking-wider text-accent-bright">Backend</p>
                <div class="flex flex-wrap gap-2">
                  <span
                    v-for="tech in project.backend"
                    :key="tech"
                    class="backend-tag rounded-lg border px-2.5 py-1 font-mono text-xs"
                  >
                    {{ tech }}
                  </span>
                </div>
              </div>
              <div>
                <p class="mb-2 font-mono text-xs uppercase tracking-wider text-slate-500">Frontend</p>
                <div class="flex flex-wrap gap-2">
                  <span
                    v-for="tech in project.frontend"
                    :key="tech"
                    class="frontend-tag rounded-lg border px-2.5 py-1 font-mono text-xs"
                  >
                    {{ tech }}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </article>
      </div>
    </div>
  </section>
</template>
