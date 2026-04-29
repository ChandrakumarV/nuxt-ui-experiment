<template>
  <h1 class="font-bold text-2xl mb-2">CSR</h1>
  <div
    v-if="status == 'pending'"
    class="w-full flex items-center justify-center h-[calc(100vh-var(--ui-header-height)-100px)]"
  >
    <UIcon name="i-lucide-loader-2" class="animate-spin size-12 text-primary" />
  </div>

  <div
    v-else-if="status === 'error'"
    class="w-full flex items-center justify-center text-error h-[calc(100vh-var(--ui-header-height)-100px)]"
  >
    <p>Error loading data</p>
  </div>

  <div v-else>
    <ul class="space-y-2">
      <li
        v-for="item in data"
        :key="item.id"
        class="p-2 border rounded border-gray-200 dark:border-gray-800"
      >
        {{ item.title }}
      </li>
    </ul>
  </div>
</template>

<script setup lang="ts">
const { data, status } = useFetch<{ id: number; title: string; body: string; userId: number }[]>(
  'https://jsonplaceholder.typicode.com/posts?limit=10',
  {
    lazy: true,
    onRequest: () => {
      console.log(
        'SSR API called',
        import.meta.server ? 'Server' : import.meta.client ? 'Client' : '-'
      );
    }
  }
);

useHead({
  title: 'CSR'
});

definePageMeta({
  layout: 'private'
});
</script>
