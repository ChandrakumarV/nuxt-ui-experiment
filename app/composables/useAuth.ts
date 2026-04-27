import { ref } from 'vue';

const AUTH_KEY = 'auth';

// shared state
const isLoggedIn = ref<boolean>();

export function useAuth() {
  const syncFromCookie = () => {
    isLoggedIn.value = getCookie(AUTH_KEY) === 'true';
  };

  const login = () => {
    setCookie(AUTH_KEY, 'true');
    isLoggedIn.value = true;
  };

  const logout = () => {
    removeCookie(AUTH_KEY);
    isLoggedIn.value = false;
  };

  const getAuth = () => {
    return getCookie(AUTH_KEY) === 'true';
  };

  // sync immediately (SSR + client safe)
  syncFromCookie();

  return {
    isLoggedIn,
    login,
    logout,
    getAuth
  };
}
