import {
  Container,
  VStack,
  Input,
  Box,
  Center,
  Flex,
  IconButton,
  EmptyState,
} from '@chakra-ui/react';
import { DataGrid } from 'react-data-grid';
import { ExcelViewerContainer } from './ExcelViewer.container';
import 'react-data-grid/lib/styles.css';
import { BackButtonComponent } from '../../../../shared/components/BackButton/BackButton.component';
import { IoIosSave } from 'react-icons/io';
import './ExcelViewer.component.css';
import { LuDatabase } from 'react-icons/lu';

export const ExcelViewerComponent = () => {
  const excelViewerHandler = ExcelViewerContainer();
  return (
    <>
      <BackButtonComponent />
      {excelViewerHandler.loaded && (
        <Flex position='relative' w='full' maxW='container.xl'>
          <IconButton
            aria-label='Save'
            variant='ghost'
            position='absolute'
            right='1rem'
            onClick={excelViewerHandler.handleExport}
          >
            <IoIosSave />
          </IconButton>
        </Flex>
      )}

      <Center
        flexDirection='column'
        minH='calc(100vh - 450px)'
        justifyContent='center'
        mt='4rem'
      >
        <Box
          w='100%'
          height={excelViewerHandler.loaded ? '600px' : '300px'}
          borderRadius='md'
          background='white'
        >
          {excelViewerHandler.loaded ? (
            <DataGrid
              className='rdg-light custom-grid'
              columns={excelViewerHandler.columns}
              rows={excelViewerHandler.rows}
              rowKeyGetter={excelViewerHandler.rowKeyGetter}
              onRowsChange={excelViewerHandler.handleRowsChange}
              enableVirtualization
              defaultColumnOptions={{
                resizable: true,
                sortable: true,
                minWidth: 200,
                draggable: true,
              }}
            />
          ) : (
            <Flex
              height='100%'
              align='center'
              justify='center'
              direction='column'
              textAlign='center'
            >
              <EmptyState.Root>
                <EmptyState.Content>
                  <EmptyState.Indicator>
                    <LuDatabase />
                  </EmptyState.Indicator>
                  <VStack>
                    <EmptyState.Title>No Data Available</EmptyState.Title>
                    <EmptyState.Description>
                      Data is currently unavailable. Please check back later or
                      refresh the page.
                    </EmptyState.Description>
                  </VStack>
                </EmptyState.Content>
              </EmptyState.Root>
            </Flex>
          )}
        </Box>

        <Container maxW='container.xl' py={8}>
          <Input
            type='file'
            accept='.xlsx'
            onChange={excelViewerHandler.handleFileUpload}
            w='300px'
            bg='white'
          />
        </Container>
      </Center>
    </>
  );
};
