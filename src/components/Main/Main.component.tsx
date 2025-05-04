import { Stack } from '@chakra-ui/react';
import { GenAICardComponent } from '../../shared/components/GenAIToolCard/GenAIToolCard.component';
import { MainContainer } from './Main.container';

export const MainComponent = () => {
  const mainHandler = MainContainer();

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
