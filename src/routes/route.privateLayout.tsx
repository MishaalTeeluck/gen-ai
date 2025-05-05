import { Outlet } from 'react-router-dom';
import { Box } from '@chakra-ui/react';
import { Footer } from '../components/Footer/Footer.component';
import Header from '../components/Header/Header.component';
import { Bounce, ToastContainer } from 'react-toastify';
import { useEffect } from 'react';
import { startNotificationPolling } from '../shared/components/Notification/NotificationPolling';
import { useSelector } from 'react-redux';
import { RootState } from '../store';

export const PrivateLayout = () => {
  const token = useSelector((state: RootState) => state.header.token);

  useEffect(() => {
    startNotificationPolling(token!);
  }, [token]);

  return (
    <>
      <Header />
      <Box as='main' flex='1' padding='12'>
        <Outlet />
      </Box>
      <Footer />
      <ToastContainer
        position='bottom-right'
        autoClose={5000}
        theme='light'
        transition={Bounce}
      />
    </>
  );
};
