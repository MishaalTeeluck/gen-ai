import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../../store';
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import { setToken } from '../../../store/headerSlice';
import { toast } from 'react-toastify';
import axios, { AxiosError } from 'axios';

export const LoginContainer = () => {
  const token = useSelector((state: RootState) => state.header.token);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    if (token) {
      navigate('/app');
    }
  }, [token, navigate]);

  const handleLogin = async (email: string, password: string) => {
    try {
      const response = await axios.post(
        `${import.meta.env.VITE_APIPORT}/auth/login`,
        { email, password }
      );

      const { accessToken, message } = response.data;

      if (accessToken) {
        toast.success(message ?? 'Successful login');

        dispatch(setToken(accessToken));
        navigate('/app');
      } else {
        toast.error('Invalid credentials');
      }
    } catch (error) {
      const axiosError = error as AxiosError;
      if (axiosError.response?.status === 401) {
        toast.error('Invalid credentials');
      } else {
        toast.error('An error occurred during login.');
      }
    }
  };


  return {
    handleLogin,
  };
};
