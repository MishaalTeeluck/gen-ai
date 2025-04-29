import { Navigate, Outlet } from 'react-router-dom';
import { useSelector } from 'react-redux';

interface RootState {
  header: {
    token: string | null;
  };
}

export const PrivateRoute = () => {
  const token = useSelector((state: RootState) => state.header.token);

  return token ? <Outlet /> : <Navigate to="/" replace />;
};