<template>
  <header class="text-blue-900 border border-solid border-red-500 text-9xl grid place-items-center mb-10">{{ date.now.toLocaleTimeString() }}</header>
  <div class="px-[25%] grid">
    <button @click="date.sayHello('John')" class="font-bold py-2 px-4 rounded bg-blue-500 text-white hover:bg-blue-700">Say hello!</button>
    <Example />
  </div>
</template>

<script setup lang="ts">
import Example from './components/Example.vue'

import { useDateStore } from './stores/date'
const date = useDateStore()
</script>
