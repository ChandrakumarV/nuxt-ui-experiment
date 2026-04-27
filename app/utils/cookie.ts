export const setCookie = (
  key: string,
  value: string,
  options?: {
    maxAge?: number;
    path?: string;
    sameSite?: 'lax' | 'strict' | 'none';
    secure?: boolean;
  }
) => {
  const cookie = useCookie<string>(key, {
    maxAge: options?.maxAge ?? 60 * 60 * 24 * 7, // 7 days
    path: options?.path ?? '/',
    sameSite: options?.sameSite ?? 'lax',
    secure: options?.secure ?? false
  });

  cookie.value = value;
};

export const getCookie = (key: string) => {
  const cookie = useCookie<string | null>(key);
  return cookie.value;
};

export const removeCookie = (key: string) => {
  const cookie = useCookie<string | null>(key);
  cookie.value = null;
};

export const updateCookie = (key: string, value: string) => {
  const cookie = useCookie<string | null>(key);
  cookie.value = value;
};
