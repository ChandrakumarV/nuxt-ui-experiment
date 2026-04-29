<script setup lang="ts">
import type { NavigationMenuItem } from '@nuxt/ui';
const { isLoggedIn, logout } = useAuth();

const items = ref<NavigationMenuItem[]>([
  {
    label: 'Home',
    to: '/'
  },

  {
    label: 'SSR',
    to: '/ssr'
  },
  {
    label: 'CSR',
    to: '/csr'
  },
  {
    label: 'SSG',
    to: '/ssg'
  },
  {
    label: 'ISR',
    to: '/isr'
  }
]);
</script>

<template>
  <UHeader>
    <template #left>
      <div class="flex items-center gap-3">
        <UAvatar icon="i-lucide-bot" size="xl" />
        <div class="flex flex-col text-left">
          <h1 class="font-semibold">Agent Echo</h1>
          <p class="text-xs text-gray-600 dark:text-gray-400">
            Product Search Enrichment · Merchandising View
          </p>
        </div>
      </div>
    </template>
    <UNavigationMenu :items="items" />
    <template #right>
      <div class="flex items-center gap-2">
        <UColorModeButton />

        <template v-if="isLoggedIn != undefined">
          <template v-if="!isLoggedIn">
            <UButton
              label="Signin"
              size="sm"
              variant="soft"
              v-on:click="
                () => {
                  navigateTo('/signin', {});
                }
              "
            />
            <UButton
              label="Signup"
              size="sm"
              v-on:click="
                () => {
                  navigateTo('/signup', {});
                }
              "
            />
          </template>
          <template v-else>
            <UBadge
              color="warning"
              variant="subtle"
              icon="i-lucide-zap"
              label="Power User"
              size="sm"
            />
            <UButton label="Sign Out" size="sm" @click="logout" />
          </template>
        </template>
      </div>
    </template>
  </UHeader>
  <div class="p-8">
    <slot />
  </div>
</template>
