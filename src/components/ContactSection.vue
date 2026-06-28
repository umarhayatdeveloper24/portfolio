<script setup>
import { ref } from 'vue'
import { personal, education } from '../data/portfolio'

const form = ref({ name: '', email: '', message: '' })
const submitted = ref(false)

const handleSubmit = () => {
  const subject = encodeURIComponent(`Portfolio Contact from ${form.value.name}`)
  const body = encodeURIComponent(
    `Name: ${form.value.name}\nEmail: ${form.value.email}\n\n${form.value.message}`
  )
  window.location.href = `mailto:${personal.email}?subject=${subject}&body=${body}`
  submitted.value = true
  setTimeout(() => {
    submitted.value = false
    form.value = { name: '', email: '', message: '' }
  }, 3000)
}
</script>

<template>
  <section id="contact" class="relative py-24 sm:py-32">
    <div class="glow-orb left-1/2 top-0 h-64 w-96 -translate-x-1/2 bg-accent/10" />

    <div class="relative mx-auto max-w-6xl px-6">
      <div class="reveal-on-scroll mb-16 text-center">
        <p class="section-label mb-3">Get In Touch</p>
        <h2 class="text-3xl font-bold text-white sm:text-4xl">
          Let's Build Something Great
        </h2>
        <p class="mx-auto mt-4 max-w-xl text-slate-400">
          Open to full-time roles, contract work, and projects with teams anywhere in the world.
        </p>
      </div>

      <div class="grid gap-8 lg:grid-cols-5">
        <div class="space-y-6 lg:col-span-2">
          <div class="glass rounded-2xl p-6">
            <h3 class="mb-4 font-semibold text-white">Contact Info</h3>
            <ul class="space-y-4">
              <li>
                <a
                  :href="`mailto:${personal.email}`"
                  class="group flex items-center gap-3 text-sm text-slate-400 transition-colors hover:text-accent-light"
                >
                  <span class="flex h-10 w-10 items-center justify-center rounded-xl bg-accent/10 text-accent-light transition-colors group-hover:bg-accent/20">
                    <svg class="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </span>
                  {{ personal.email }}
                </a>
              </li>
              <li>
                <a
                  :href="`tel:${personal.phone.replace(/\s/g, '')}`"
                  class="group flex items-center gap-3 text-sm text-slate-400 transition-colors hover:text-accent-light"
                >
                  <span class="flex h-10 w-10 items-center justify-center rounded-xl bg-accent/10 text-accent-light">
                    <svg class="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  </span>
                  {{ personal.phone }}
                </a>
              </li>
              <li>
                <a
                  :href="personal.social.linkedin"
                  target="_blank"
                  rel="noopener noreferrer"
                  class="group flex items-center gap-3 text-sm text-slate-400 transition-colors hover:text-[#70b5f9]"
                >
                  <span class="flex h-10 w-10 items-center justify-center rounded-xl bg-[#0A66C2]/10 text-[#70b5f9] transition-colors group-hover:bg-[#0A66C2]/20">
                    <svg class="h-4 w-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                    </svg>
                  </span>
                  LinkedIn Profile
                </a>
              </li>
              <li class="flex items-center gap-3 text-sm text-slate-400">
                <span class="flex h-10 w-10 items-center justify-center rounded-xl bg-accent/10 text-accent-light">
                  <svg class="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  </svg>
                </span>
                {{ personal.location }}
              </li>
            </ul>
          </div>

          <div class="glass rounded-2xl p-6">
            <h3 class="mb-2 font-semibold text-white">Education</h3>
            <p class="text-sm font-medium text-accent-light">{{ education.degree }}</p>
            <p class="text-sm text-slate-500">{{ education.institution }}</p>
            <p class="text-xs text-slate-600">{{ education.location }} · {{ education.year }}</p>
          </div>
        </div>

        <form
          class="glass rounded-2xl p-6 sm:p-8 lg:col-span-3"
          @submit.prevent="handleSubmit"
        >
          <div class="mb-5">
            <label class="mb-2 block text-sm font-medium text-slate-300">Name</label>
            <input
              v-model="form.name"
              type="text"
              required
              placeholder="Your name"
              class="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white placeholder-slate-600 outline-none transition-colors focus:border-accent/50 focus:ring-1 focus:ring-accent/30"
            />
          </div>
          <div class="mb-5">
            <label class="mb-2 block text-sm font-medium text-slate-300">Email</label>
            <input
              v-model="form.email"
              type="email"
              required
              placeholder="you@example.com"
              class="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white placeholder-slate-600 outline-none transition-colors focus:border-accent/50 focus:ring-1 focus:ring-accent/30"
            />
          </div>
          <div class="mb-6">
            <label class="mb-2 block text-sm font-medium text-slate-300">Message</label>
            <textarea
              v-model="form.message"
              required
              rows="5"
              placeholder="Tell me about your project or opportunity..."
              class="w-full resize-none rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white placeholder-slate-600 outline-none transition-colors focus:border-accent/50 focus:ring-1 focus:ring-accent/30"
            />
          </div>
          <button
            type="submit"
            class="w-full rounded-xl btn-primary py-3.5 text-sm font-semibold text-white"
          >
            {{ submitted ? 'Opening email client...' : 'Send Message' }}
          </button>
        </form>
      </div>
    </div>
  </section>
</template>
