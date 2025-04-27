import { Flex, EmptyState, VStack } from '@chakra-ui/react';
import { EmptyTableProps } from './EmptyTableBox.interface';

export const EmptyTableBox = (props: EmptyTableProps) => {
  return (
    <Flex
      height='100%'
      align='center'
      justify='center'
      direction='column'
      textAlign='center'
    >
      <EmptyState.Root>
        <EmptyState.Content>
          <EmptyState.Indicator>{props.icon}</EmptyState.Indicator>
          <VStack>
            <EmptyState.Title>{props.title}</EmptyState.Title>
            <EmptyState.Description>{props.description}</EmptyState.Description>
          </VStack>
        </EmptyState.Content>
      </EmptyState.Root>
    </Flex>
  );
};
