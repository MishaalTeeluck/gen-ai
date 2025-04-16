import { Stack } from '@chakra-ui/react';
import { GenAICardComponent } from '../../shared/components/GenAIToolCard/GenAIToolCard.component';
import { MainContainer } from './Main.container';

export const MainComponent = () => {
  const mainState = MainContainer();

  return (
    <Stack direction={{ base: 'column', md: 'row' }} gap='3' wrap='wrap'>
      {mainState.map((item, index) => (
        <GenAICardComponent
          key={index}
          toolName={item.name}
          description={item.description}
          queue={item.queue}
          eta={item.eta}
          link={item.link !== undefined || '' ? item.link : '#' }
        />
      ))}
    </Stack>
  );
};
