<script setup lang="ts">
import * as z from 'zod';
import type { FormSubmitEvent, AuthFormField } from '@nuxt/ui';

const toast = useToast();

const fields: AuthFormField[] = [
  {
    name: 'name',
    type: 'text',
    label: 'Name',
    placeholder: 'Enter your name',
    required: true
  },
  {
    name: 'email',
    type: 'email',
    label: 'Email',
    placeholder: 'Enter your email',
    required: true
  },
  {
    name: 'password',
    label: 'Password',
    type: 'password',
    placeholder: 'Create a password',
    required: true
  }
];

const providers = [
  {
    label: 'Google',
    icon: 'i-simple-icons-google',
    onClick: () => {
      toast.add({ title: 'Google', description: 'Sign up with Google' });
    }
  },
  {
    label: 'GitHub',
    icon: 'i-simple-icons-github',
    onClick: () => {
      toast.add({ title: 'GitHub', description: 'Sign up with GitHub' });
    }
  }
];

const schema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters'),
  email: z.email('Invalid email'),
  password: z.string().min(8, 'Must be at least 8 characters')
});

type Schema = z.output<typeof schema>;

const { login } = useAuth();

function onSubmit(payload: FormSubmitEvent<Schema>) {
  console.log('Submitted', payload);
  toast.add({ title: 'Success', description: 'Account created successfully!', color: 'success' });
  login();
  navigateTo('/');
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
    :providers="providers"
    title="Create an account"
    align="top"
    icon="i-lucide-user-plus"
    @submit="onSubmit"
  >
    <template #leading>
      <UIcon name="fluent-emoji-flat:blackbird" class="size-12" />
    </template>
    <template #description>
      Already have an account?
      <ULink to="/signin" class="text-primary font-medium">Sign in</ULink>
      .
    </template>
    <template #footer>
      By signing up, you agree to our
      <ULink to="#" class="text-primary font-medium">Terms of Service</ULink>
      and
      <ULink to="#" class="text-primary font-medium">Privacy Policy</ULink>
      .
    </template>
  </UAuthForm>
</template>
