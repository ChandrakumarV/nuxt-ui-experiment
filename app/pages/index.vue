<template>
  <UMain>
    <UContainer class="py-8">
      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        <UCard variant="soft" :ui="{ root: 'bg-orange-500/5 ring-1 ring-orange-500/10' }">
          <div class="flex flex-col gap-1">
            <span class="text-[10px] font-bold text-orange-500 uppercase tracking-widest">
              Klik Pending
            </span>
            <span class="text-3xl font-bold text-orange-600">5</span>
          </div>
        </UCard>

        <UCard variant="soft" :ui="{ root: 'bg-teal-500/5 ring-1 ring-teal-500/10' }">
          <div class="flex flex-col gap-1">
            <span class="text-[10px] font-bold text-teal-500 uppercase tracking-widest">
              GA Flagged
            </span>
            <span class="text-3xl font-bold text-teal-600">4</span>
          </div>
        </UCard>

        <UCard variant="soft" :ui="{ root: 'bg-green-500/5 ring-1 ring-green-500/10' }">
          <div class="flex flex-col gap-1">
            <span class="text-[10px] font-bold text-green-500 uppercase tracking-widest">
              Approved
            </span>
            <span class="text-3xl font-bold text-green-600">0</span>
          </div>
        </UCard>

        <UCard variant="soft" :ui="{ root: 'bg-teal-500/5 ring-1 ring-teal-500/10' }">
          <div class="flex flex-col gap-1">
            <span class="text-[10px] font-bold text-teal-500 uppercase tracking-widest">
              Active Season
            </span>
            <div class="flex items-center gap-2 mt-1">
              <span class="text-lg">🌸</span>
              <span class="text-lg font-bold text-teal-600">Spring 2026</span>
            </div>
          </div>
        </UCard>
      </div>
    </UContainer>
  </UMain>
</template>

<script lang="ts" setup>
definePageMeta({
  layout: 'private'
});
</script>
