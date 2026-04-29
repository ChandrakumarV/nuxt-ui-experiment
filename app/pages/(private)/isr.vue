<template>
  <h1 class="font-bold text-2xl">ISR</h1>
  <p>{{ a }}</p>
</template>

<script setup lang="ts">
const a = useState('a', () => new Date().getMilliseconds());

useHead({
  title: 'ISR'
});
definePageMeta({
  layout: 'private'
});
</script>
