import { Box } from '@chakra-ui/react';
import { Footer } from '../Footer/Footer.component';
import Header from '../Header/Header.component';
import './App.component.css';
import { MainComponent } from '../Main/Main.component';

function App() {
  return (
    <>
      <Header />
      <Box as='main' flex='1' padding='12'>
        <MainComponent />
      </Box>
      <Footer />
    </>
  );
}

export default App;
