<script setup lang="ts">
import * as z from 'zod';
import type { FormSubmitEvent, AuthFormField } from '@nuxt/ui';

const toast = useToast();

const fields: AuthFormField[] = [
  {
    name: 'email',
    type: 'email',
    label: 'Email',
    placeholder: 'Enter your email',
    required: true
  }
];

const schema = z.object({
  email: z.email('Invalid email')
});

type Schema = z.output<typeof schema>;

function onSubmit(payload: FormSubmitEvent<Schema>) {
  console.log('Submitted', payload);
  toast.add({
    title: 'Success',
    description: 'If an account exists for this email, you will receive a reset link shortly.',
    color: 'success'
  });
}

definePageMeta({
  middleware: 'auth',
  layout: 'auth'
});
</script>

<template>
  <UAuthForm
    :schema="schema"
    :fields="fields"
    title="Forgot password?"
    description="Enter your email address and we'll send you a link to reset your password."
    align="top"
    icon="i-lucide-key-round"
    :submit-button="{ label: 'Send reset link' }"
    @submit="onSubmit"
  >
    <template #leading>
      <UIcon name="fluent-emoji-flat:blackbird" class="size-12" />
    </template>
    <template #footer>
      Remember your password?
      <ULink to="/signin" class="text-primary font-medium">Sign in</ULink>
      .
    </template>
  </UAuthForm>
</template>
