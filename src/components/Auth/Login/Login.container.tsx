import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../../store';
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import { setToken } from '../../../store/headerSlice';
import { toast } from 'react-toastify';

export const LoginContainer = () => {
  const token = useSelector((state: RootState) => state.header.token);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    if (token) {
      navigate('/app');
    }
  }, [token, navigate]);

  const handleLogin = async (username: string, password: string) => {
    try {
      const response = await fetch(
        `${import.meta.env.VITE_APIPORT}/auth/login`,
        {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ username, password }),
        }
      );

      const data = await response.json();
      if (response.ok && data.token) {
        toast.success('Successful login');
        dispatch(setToken(data.token));
        navigate('/app');
      } else {
        toast.error('Invalid credentials');
      }
    } catch (err) {
      console.error('Login error:', err);
    }
  };

  const dummyHandleLogin = async (username: string, password: string) => {
    if (username == 'admin' && password === 'admin') {
      toast.success('Successful login');
      const header = { alg: 'HS256', typ: 'JWT' };
      const payload = {
        username,
        role: 'admin',
        exp: Math.floor(Date.now() / 1000) + 60 * 60, // 1 hour expiry
      };

      const base64UrlEncode = (obj: object) =>
        btoa(JSON.stringify(obj))
          .replace(/\+/g, '-')
          .replace(/\//g, '_')
          .replace(/=+$/, '');

      const fakeToken = [
        base64UrlEncode(header),
        base64UrlEncode(payload),
        'dummy_signature',
      ].join('.');

      dispatch(setToken(fakeToken));
      setTimeout(() => {
        navigate('/app');
      }, 1000);
    } else {
      toast.error('Invalid credentials');
    }
  };

  return {
    handleLogin,
    dummyHandleLogin,
  };
};
