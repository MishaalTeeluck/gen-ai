import { Flex, IconButton } from '@chakra-ui/react';
import { IoArrowBackSharp } from 'react-icons/io5';
import { useNavigate } from 'react-router-dom';

export const BackButtonComponent = () => {
  const navigate = useNavigate();

  return (
    <Flex maxW='container.xl' mx='auto'>
      <IconButton
        aria-label='Go back'
        variant='ghost'
        onClick={() => navigate(-1)}
        position='absolute'
      >
        <IoArrowBackSharp />
      </IconButton>
    </Flex>
  );
};
