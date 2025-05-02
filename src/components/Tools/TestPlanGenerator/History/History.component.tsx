import { Box, Center, Flex, HStack } from '@chakra-ui/react';
import { BackButtonComponent } from '../../../../shared/components/BackButton/BackButton.component';
import { DropdownComponent } from '../../../../shared/components/Dropdown/Dropdown.component';
import { HiSortAscending } from 'react-icons/hi';
import { HistoryContainer } from './History.container';
import { TextField } from '../../../../shared/components/TextField/TextField.component';
import { LuDatabase, LuSearch } from 'react-icons/lu';
import './History.component.css';
import { EmptyTableBox } from '../../../../shared/components/EmptyTableBox/EmptyTableBox.component';
import { DataGrid } from 'react-data-grid';
import {
  dropdownItems,
  historyTableColumns,
} from './History.constants';
import { useDispatch } from 'react-redux';
import { setHeaderTitle } from '../../../../store/headerSlice';
import { useEffect } from 'react';

export const HistoryComponent = () => {
  const historyHandlers = HistoryContainer();

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(setHeaderTitle('Test Plan Generator : History'));
  }, [dispatch]);

  const isLoaded = () => historyHandlers.filteredAndSortedRows.length > 0;
  return (
    <>
      <Flex
        position='relative'
        w='full'
        maxW='container.xl'
        mx='auto'
        align='center'
        justify='flex-end'
      >
        <Box position='absolute' left='0' top='0%' transform='translateY(-50%)'>
          <BackButtonComponent />
        </Box>

        <HStack ml='auto' gap='5' w='full' maxW='450px'>
          <Box w='40%'>
            <DropdownComponent
              hasIcon
              icon={<HiSortAscending />}
              items={dropdownItems}
              value={historyHandlers.sortOption}
              setValue={historyHandlers.setSortOption}
              title='Sorting'
              size='xl'
            />
          </Box>
          <Box w='60%'>
            <TextField
              value={historyHandlers.searchValue}
              setValue={historyHandlers.setSearchValue}
              hasIcon
              icon={<LuSearch />}
              placeholder='Search by FileName'
              className='gray-textfield'
            />
          </Box>
        </HStack>
      </Flex>
      <Center
        flexDirection='column'
        minH='calc(100vh - 450px)'
        justifyContent='center'
        mt='3rem'
      >
        <Box
          w='100%'
          height={isLoaded() ? '' : '300px'}
          borderRadius='xl'
          background='white'
        >
          {isLoaded() ? (
            <DataGrid
              className='rdg-light history-custom-grid'
              columns={historyTableColumns}
              rows={historyHandlers.filteredAndSortedRows}
              rowHeight={45}
              enableVirtualization
              defaultColumnOptions={{
                resizable: true,
                sortable: true,
                minWidth: 200,
              }}
            />
          ) : (
            <EmptyTableBox
              title='History is Empty'
              description='Start using the app to build your history.'
              icon={<LuDatabase />}
            />
          )}
        </Box>
      </Center>
    </>
  );
};
