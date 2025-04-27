import { LuSearch } from 'react-icons/lu';
import { TextField } from '../../shared/components/TextField/TextField.component';
import {
  Avatar,
  Box,
  Container,
  Flex,
  HStack,
  Image,
  Stack,
  Text,
} from '@chakra-ui/react';
import { useSelector, useDispatch } from 'react-redux';
import { setSearchValue } from '../../store/headerSlice'; // Import the action to update searchValue
import { NotificationMenu } from '../../shared/components/Notification/Notification.component';
import vinciLogo from '../../assets/vinci-logo.png';
import languageIcon from '../../assets/language-changer.png';
import './Header.component.css';
import { RootState } from '../../store';
import { useLocation } from 'react-router-dom';

const Header = () => {
  const dispatch = useDispatch();
  const location = useLocation();

  const searchValue = useSelector(
    (state: RootState) => state.header.searchValue
  );
  const userDetails = useSelector(
    (state: RootState) => state.header.userDetails
  );
  const handleSearchChange = (value: string) => {
    dispatch(setSearchValue(value));
  };

  return (
    <header className='lg-header'>
      <Container maxW='container.xl'>
        <Flex
          align='center'
          justify='space-between'
          paddingX='7'
          bg='white'
          boxShadow='sm'
          position='sticky'
          top='0'
          zIndex='10'
          height='70px'
          borderRadius='xl'
          mx='4'
        >
          <HStack>
            <Image src={vinciLogo} alt='vinci-logo' width='100px' />
            {location.pathname === '/' && (
              <Box width='400px'>
                <TextField
                  value={searchValue}
                  setValue={handleSearchChange}
                  hasIcon
                  icon={<LuSearch />}
                  placeholder='Search your tool'
                  className='gray-textfield'
                />
              </Box>
            )}
          </HStack>
          <HStack>
            <Image
              src={languageIcon}
              alt='vinci-language-translator'
              width='20px'
            />
            <NotificationMenu />
            <HStack width={'150px'}>
              <Avatar.Root>
                <Avatar.Fallback name={userDetails.name} />
                <Avatar.Image src={userDetails.avatar} width='30px' />
              </Avatar.Root>
              <Stack align='flex-start'>
                <Text fontWeight='medium' fontSize='sm'>
                  {userDetails.name}
                </Text>
                <Text color='gray.500' fontSize='xs'>
                  {userDetails.position}
                </Text>
              </Stack>
            </HStack>
          </HStack>
        </Flex>
      </Container>
    </header>
  );
};

export default Header;
