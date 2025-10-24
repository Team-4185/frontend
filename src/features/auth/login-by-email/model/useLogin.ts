import { useState } from 'react';
import { endpoints } from '../../../../shared/api/endpoints';
import { http } from '../../../../shared/api/http';
import type { AuthRequestLogin, AuthResponse } from '../../../../shared/types/auth';
import { useSession } from '../../../../entities/session/model/session';

export const useLogin = () => {
  const { setAuth } = useSession();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const login = async (payload: AuthRequestLogin) => {
    setLoading(true);
    setError(null);
    try {
      const { data } = await http.client.post<AuthResponse>(endpoints.login, payload);
      setAuth(data);
      return data;
    } catch (e: any) {
      console.log(e?.response);
      setError(e?.response?.data?.body?.detail ?? 'Login failed');
      throw e;
    } finally {
      setLoading(false);
    }
  };

  return { login, loading, error };
};
