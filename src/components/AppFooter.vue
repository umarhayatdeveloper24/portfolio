<script setup>
import { personal } from '../data/portfolio'
const year = new Date().getFullYear()
</script>

<template>
  <footer class="border-t border-white/5 py-8">
    <div class="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-6 sm:flex-row">
      <p class="font-mono text-sm text-slate-500">
        &copy; {{ year }} {{ personal.name }}. Built with Vue.js
      </p>
      <p class="text-sm text-slate-600">
        {{ personal.title }} · {{ personal.location }}
      </p>
    </div>
  </footer>
</template>
