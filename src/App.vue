<template>
  <header class="header">{{ date.now.toLocaleTimeString() }}</header>
  <div class="container">
    <button @click="date.sayHello('John')" class="hello">Say hello!</button>
    <Example />
  </div>
</template>

<script setup lang="ts">
import Example from './components/Example.vue'

import { useDateStore } from './stores/date'
const date = useDateStore()
</script>

<style lang="postcss" scoped>
header {
  @apply text-blue-900 border border-solid border-red-500;
}

.header {
  @apply text-9xl;
  @apply grid place-items-center;
  @apply mb-10;
}

.container {
  @apply px-[25%];
  @apply grid;
}

.hello {
  @apply font-bold py-2 px-4 rounded;
  @apply bg-blue-500 text-white;
}
.hello:hover {
  @apply bg-blue-700;
}

/* This class will NOT be included */
.app-scoped {
  @apply text-blue-900 border border-solid border-red-500;
}
</style>
