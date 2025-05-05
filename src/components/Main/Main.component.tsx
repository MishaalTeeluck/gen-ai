import { Box, Center, Spinner, Stack, Text } from '@chakra-ui/react';
import { GenAICardComponent } from '../../shared/components/GenAIToolCard/GenAIToolCard.component';
import { MainContainer } from './Main.container';
import { motion } from 'framer-motion';

const MotionBox = motion(Box);
const MotionText = motion(Text);

export const MainComponent = () => {
  const mainHandler = MainContainer();

  if (mainHandler.loading) {
    return (
      <Center height='70vh' flexDirection='column'>
        <MotionBox
          animate={{ rotate: 360 }}
          transition={{ repeat: Infinity, duration: 1, ease: 'linear' }}
        >
          <Spinner size='xl' color='white' />
        </MotionBox>
        <MotionText
          mt={4}
          fontSize='xl'
          color='white'
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.6 }}
        >
          Loading your tools, please wait...
        </MotionText>
      </Center>
    );
  }

  return (
    <Stack direction={{ base: 'column', md: 'row' }} gap='3' wrap='wrap'>
      {mainHandler.filteredTools.map((item) => (
        <GenAICardComponent
          key={item.toolDetail.id}
          name={item.toolDetail.name}
          description={item.toolDetail.description}
          numOfQueues={item.toolDetail.job}
          eta={item.toolDetail.eta}
          link={
            item.routeLocation !== undefined || '' ? item.routeLocation : '#'
          }
          status={item.toolDetail.available}
        />
      ))}
    </Stack>
  );
};
