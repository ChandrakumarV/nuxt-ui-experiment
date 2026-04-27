<template>
  <UApp>
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

      <template #right v-if="isLoggedIn != undefined">
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
    </UHeader>
    <slot />
  </UApp>
</template>

<script setup lang="ts">
const { isLoggedIn, logout } = useAuth();
</script>
