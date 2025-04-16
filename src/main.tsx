import { createRoot } from 'react-dom/client';
import './index.css';
import { ChakraProvider, defaultSystem } from '@chakra-ui/react';
import React from 'react';
import { RouterProvider } from 'react-router-dom';
import router from './routes/route.config';

createRoot(document.getElementById('root')!).render(
  <ChakraProvider value={defaultSystem}>
    <React.StrictMode>
        <RouterProvider router={router} />
    </React.StrictMode>
  </ChakraProvider>
);
