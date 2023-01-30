<template>
  <div class="example">
    <span class="now">{{ now.toISOString() }}</span>
    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
  </div>
</template>

<script setup lang="ts">
// Using data from store:
import { storeToRefs } from 'pinia'
import { useDateStore } from '@/stores/date'
const { now } = storeToRefs(useDateStore())

// Using composable directly
// import { useDate } from '@/composables/date'
// const { now } = useDate()
</script>

<style lang="postcss">
.example {
  @apply text-5xl line-clamp-4;

  .now {
    @apply border border-red-100 content-auto;
    @apply font-extrabold;
    @apply bg-red-400;
  }
}

/* This class will NOT be included */
.test-example {
  @apply text-blue-900 border border-solid border-red-500;
}
</style>
