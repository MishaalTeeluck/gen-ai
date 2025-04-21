import { Outlet } from 'react-router-dom';
import { Box } from '@chakra-ui/react';
import { Footer } from '../components/Footer/Footer.component';
import Header from '../components/Header/Header.component';

function Layout() {
  return (
    <>
      <Header />
      <Box as="main" flex="1" padding="12">
        <Outlet />
      </Box>
      <Footer />
    </>
  );
}

export default Layout;
