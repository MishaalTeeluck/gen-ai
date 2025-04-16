import { Alert, Box, Card, Flex, HStack, Text } from '@chakra-ui/react';
import { TbClockCog, TbListDetails } from 'react-icons/tb';
import { GenAIToolCardProps } from './GenAIToolCard.interface';

export const GenAICardComponent = (props: GenAIToolCardProps) => {
  return (
    <Card.Root
      maxW='275px'
      minH='235px'
      variant='elevated'
      boxShadow='md'
      borderRadius='xl'
    >
      <Card.Body gap='2'>
        <Card.Title mb='2'>{props.toolName}</Card.Title>
        <Card.Description fontSize='sm'>{props.description}</Card.Description>
      </Card.Body>
      <Card.Footer>
        <Flex align='center' justify='space-between'>
          <HStack align='center'>
            <Box display='inline-flex'>
              <Alert.Root
                status={props.eta === '0' ? 'neutral' : 'warning'}
                size='sm'
                style={{ padding: '5px', width: 'fit-content' }}
              >
                <Alert.Indicator>
                  <TbClockCog />
                </Alert.Indicator>
                <Alert.Title>
                  {props.eta === '0' ? 'Nil' : `${props.eta} minute left`}
                </Alert.Title>
              </Alert.Root>
            </Box>

            <HStack align='center'>
              <TbListDetails size={16} />
              <Text fontWeight='medium' fontSize='sm'>
                Queue:
              </Text>
              <Text fontWeight='bold' fontSize='sm'>
                {props.queue}
              </Text>
            </HStack>
          </HStack>
        </Flex>
      </Card.Footer>
    </Card.Root>
  );
};
