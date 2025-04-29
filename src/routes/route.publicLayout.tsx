import { Box } from '@chakra-ui/react';
import { Outlet } from 'react-router-dom';
import { Bounce, ToastContainer } from 'react-toastify';

export const PublicLayout = () => {
  return (
    <>
      <Box as='main'>
        <Outlet />
      </Box>
      <ToastContainer
        position='bottom-right'
        autoClose={5000}
        theme='light'
        transition={Bounce}
      />
    </>
  );
};
