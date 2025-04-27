import {
  Center,
  Box,
  HStack,
  Button,
  VStack,
  Icon,
  Text,
} from '@chakra-ui/react';
import { LuFileText, LuClock } from 'react-icons/lu';
import { BackButtonComponent } from '../../../../shared/components/BackButton/BackButton.component';
import { DropzoneComponent } from '../../../../shared/components/Dropzone/Dropzone.component';
import { UploadFileContainer } from './UploadFile.container';

export const UploadFileComponent = () => {
  const handler = UploadFileContainer();

  return (
    <>
      <BackButtonComponent />
      <Center
        flexDirection='column'
        minH='calc(100vh - 350px)'
        justifyContent='center'
      >
        <Box width='100%' maxW='lg'>
          <DropzoneComponent setUploadedFile={handler.setUploadedFile} />
        </Box>

        <HStack mt='8' width='100%' maxW='md' justify='space-between'>
          <Button
            onClick={handler.handleGenerateClick}
            boxShadow='md'
            borderRadius='xl'
            p={4}
            bg='white'
            width='100%'
            maxW='40%'
            height='auto'
            _hover={{ bg: 'gray.100' }}
          >
            <VStack>
              <Icon as={LuFileText} boxSize={6} color='black' />
              <Text color='black'>Generate Test Plan</Text>
            </VStack>
          </Button>

          <Button
            onClick={handler.navigateToHistory}
            boxShadow='md'
            borderRadius='xl'
            p={4}
            bg='white'
            width='100%'
            maxW='40%'
            height='auto'
            _hover={{ bg: 'gray.100' }}
          >
            <VStack>
              <Icon as={LuClock} boxSize={6} color='black' />
              <Text color='black'>History</Text>
            </VStack>
          </Button>
        </HStack>
      </Center>
    </>
  );
};
