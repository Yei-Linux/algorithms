import { useEffect, useRef } from 'react';
import { authSpotify } from '../services/auth.service';

export const useAuth = () => {
  const isMounted = useRef(false);

  useEffect(() => {
    if (!isMounted.current) {
      isMounted.current = true;
      return;
    }
    handleFetchBearerToken();
  }, []);

  const handleFetchBearerToken = async () => {
    const storageToken = localStorage.getItem('SPOTI_TOKEN');
    if (!storageToken) return;

    try {
      const { access_token } = await authSpotify();

      localStorage.setItem('SPOTI_TOKEN', access_token);
    } catch (error) {}
  };

  return {};
};
