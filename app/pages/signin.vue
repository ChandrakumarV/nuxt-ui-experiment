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
  },
  {
    name: 'password',
    label: 'Password',
    type: 'password',
    placeholder: 'Enter your password',
    required: true
  },
  {
    name: 'remember',
    label: 'Remember me',
    type: 'checkbox'
  }
];

const providers = [
  {
    label: 'Google',
    // icon: 'i-simple-icons-google',
    icon: 'logos:google-icon',
    onClick: () => {
      toast.add({ title: 'Google', description: 'Login with Google' });
    }
  },
  {
    label: 'GitHub',
    icon: 'i-simple-icons-github',
    onClick: () => {
      toast.add({ title: 'GitHub', description: 'Login with GitHub' });
    }
  }
];

const schema = z.object({
  email: z.email('Invalid email'),
  password: z.string('Password is required').min(8, 'Must be at least 8 characters')
});

type Schema = z.output<typeof schema>;

const { login } = useAuth();

function onSubmit(payload: FormSubmitEvent<Schema>) {
  console.log('Submitted', payload);
  toast.add({ title: 'Success', description: 'Logged in successfully!', color: 'success' });
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
    title="Welcome back!"
    icon="i-lucide-lock"
    @submit="onSubmit"
  >
    <template #leading><UIcon name="fluent-emoji-flat:blackbird" class="size-12" /></template>
    <template #description>
      Don't have an account?
      <ULink to="/signup" class="text-primary font-medium">Sign up</ULink>
      .
    </template>
    <template #password-hint>
      <ULink to="/forgot-password" class="text-primary font-medium" tabindex="-1">
        Forgot password?
      </ULink>
    </template>
    <template #validation>
      <UAlert color="error" variant="subtle" icon="i-lucide-info" title="Error signing in" />
    </template>
    <template #footer>
      By signing in, you agree to our
      <ULink to="#" class="text-primary font-medium">Terms of Service</ULink>
      .
    </template>
  </UAuthForm>
</template>
