import { Stack } from '@chakra-ui/react';
import { GenAICardComponent } from '../../shared/components/GenAIToolCard/GenAIToolCard.component';
import { MainContainer } from './Main.container';

export const MainComponent = () => {
  const mainHandler = MainContainer();

  return (
    <Stack direction={{ base: 'column', md: 'row' }} gap='3' wrap='wrap'>
      {mainHandler.filteredTools.map((item, index) => (
        <GenAICardComponent
          key={index}
          name={item.toolDetail.name}
          description={item.toolDetail.description}
          numOfQueues={item.toolDetail.numOfQueues}
          eta={item.toolDetail.eta}
          link={
            item.routeLocation !== undefined || '' ? item.routeLocation : '#'
          }
          status={item.toolDetail.status}
        />
      ))}
    </Stack>
  );
};
