import { Alert, Box, Card, Flex, HStack, Text } from '@chakra-ui/react';
import { TbClockCog, TbListDetails } from 'react-icons/tb';
import { GenAIToolCardProps } from './GenAIToolCard.interface';
import { Link } from 'react-router-dom';
import { LuConstruction } from 'react-icons/lu';

export const GenAICardComponent = (props: GenAIToolCardProps) => {
  const cursorStyle = props.status ? 'pointer' : 'not-allowed';
  return (
    <Link to={props.link} style={{ textDecoration: 'none' }}>
      <Card.Root
        maxW='275px'
        minH='235px'
        variant='elevated'
        boxShadow='md'
        borderRadius='xl'
        cursor={cursorStyle}
      >
        <Card.Body gap='2'>
          <Card.Title mb='2'>{props.name}</Card.Title>
          <Card.Description fontSize='sm'>{props.description}</Card.Description>
        </Card.Body>
        <Card.Footer>
          <Flex align='center' justify='space-between'>
            <HStack align='center'>
              {props.status ? (
                <>
                  <Box display='inline-flex'>
                    <Alert.Root
                      status={props.eta === 0 ? 'neutral' : 'warning'}
                      size='sm'
                      style={{ padding: '5px', width: 'fit-content' }}
                    >
                      <Alert.Indicator>
                        <TbClockCog />
                      </Alert.Indicator>
                      <Alert.Title>
                        {props.eta === 0 ? 'Nil' : `${props.eta} minute left`}
                      </Alert.Title>
                    </Alert.Root>
                  </Box>

                  <HStack align='center'>
                    <TbListDetails size={16} />
                    <Text fontWeight='medium' fontSize='sm'>
                      Queue:
                    </Text>
                    <Text fontWeight='bold' fontSize='sm'>
                      {props.numOfQueues}
                    </Text>
                  </HStack>
                </>
              ) : (
                <Box display='inline-flex'>
                  <Alert.Root
                    status='error'
                    size='sm'
                    style={{ padding: '5px', width: 'fit-content' }}
                  >
                    <Alert.Indicator>
                      <LuConstruction />
                    </Alert.Indicator>
                    <Alert.Title>This tool is under construction</Alert.Title>
                  </Alert.Root>
                </Box>
              )}
            </HStack>
          </Flex>
        </Card.Footer>
      </Card.Root>
    </Link>
  );
};
