import { Stack } from '@chakra-ui/react';
import { GenAICardComponent } from '../../shared/components/GenAIToolCard/GenAIToolCard.component';
import { genAITools } from './Main.constants';
import { useSelector } from 'react-redux';
import { RootState } from '../../store';

export const MainComponent = () => {

  const searchValue = useSelector((state: RootState) => state.header.searchValue);

  const filteredTools = genAITools.filter((tool) =>
    (tool.name + tool.description)
      .toLowerCase()
      .includes(searchValue.toLowerCase())
  );

  return (
    <Stack direction={{ base: 'column', md: 'row' }} gap='3' wrap='wrap'>
      {filteredTools.map((item, index) => (
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
