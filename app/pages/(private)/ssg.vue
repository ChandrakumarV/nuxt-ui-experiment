<template>
  <h1 class="font-bold text-2xl">SSG</h1>

  <ul class="space-y-2">
    <li
      v-for="item in data"
      :key="item.id"
      class="p-2 border rounded border-gray-200 dark:border-gray-800"
    >
      {{ item.title }}
    </li>
  </ul>
</template>

<script setup lang="ts">
const { data } = useFetch<{ id: number; title: string; body: string; userId: number }[]>(
  'https://jsonplaceholder.typicode.com/posts',
  {
    lazy: true,
    onRequest: () => {
      console.log(
        'SSG API called',
        import.meta.server ? 'Server' : import.meta.client ? 'Client' : '-'
      );
    }
  }
);

useHead({
  title: 'SSG'
});

definePageMeta({
  layout: 'private'
});
</script>
