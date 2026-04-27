<template>
  <UAlert title="Heads up!" />
  <div class="max-w-[260px]">
    <UCalendar range v-model="value" />
  </div>
  <UBadge color="error" variant="soft">Badge</UBadge>

  <UTheme
    :ui="{
      button: {
        base: 'bg-amber-300'
      }
    }"
  >
    <div class="flex items-center gap-2">
      <UButton label="Themed" />
      <UButton label="Overridden" />
    </div>
  </UTheme>
</template>

<script setup lang="ts">
import { CalendarDate } from '@internationalized/date';

const value = shallowRef({
  start: new CalendarDate(2022, 2, 3),
  end: new CalendarDate(2022, 2, 20)
});
</script>

<style scoped></style>
