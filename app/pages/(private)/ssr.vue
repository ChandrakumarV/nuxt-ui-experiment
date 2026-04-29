<template>
  <h1 class="font-bold text-2xl mb-2">SSR</h1>
  <div v-if="pending">Loading...</div>

  <ul v-else class="space-y-2">
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
const { data, pending } = useFetch<{ id: number; title: string; body: string; userId: number }[]>(
  'https://jsonplaceholder.typicode.com/posts',
  {
    onResponse: async () => {
      console.log(
        'SSR API called',
        import.meta.server ? 'Server' : import.meta.client ? 'Client' : '-'
      );
      await new Promise((resolve) => setTimeout(resolve, 2000));
    }
  }
);

useHead({
  title: 'SSR'
});
definePageMeta({
  layout: 'private'
});
</script>
