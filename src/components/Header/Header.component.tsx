import { LuLogOut, LuSearch } from 'react-icons/lu';
import { TextField } from '../../shared/components/TextField/TextField.component';
import {
  Avatar,
  Box,
  Button,
  Container,
  Flex,
  HStack,
  Image,
  Stack,
  Text,
} from '@chakra-ui/react';
import { NotificationMenu } from '../../shared/components/Notification/Notification.component';
import { HeaderContainer } from './Header.container';
import vinciLogo from '../../assets/vinci-logo.png';
import languageIcon from '../../assets/language-changer.png';
import './Header.component.css';

const Header = () => {
  const headerHandler = HeaderContainer();
  const userDetails = headerHandler.userDetails;

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
            <Box width='400px'>
              {location.pathname === '/app' ? (
                <TextField
                  value={headerHandler.searchValue}
                  setValue={headerHandler.handleSearchChange}
                  hasIcon
                  icon={<LuSearch />}
                  placeholder='Search your tool'
                  className='gray-textfield'
                />
              ) : (
                <Flex align='center' gap={2}>
                  <Text fontWeight='light' fontSize='xl'>
                    |
                  </Text>
                  <Text fontWeight='bold'>{headerHandler.headerTitle}</Text>
                </Flex>
              )}
            </Box>
          </HStack>
          <HStack>
            <Image
              src={languageIcon}
              alt='vinci-language-translator'
              width='20px'
            />
            <NotificationMenu />
            <HStack minWidth='150px' maxWidth='250px'>
              <Avatar.Root>
                <Avatar.Fallback name={userDetails.firstName} />
                <Avatar.Image src={userDetails.avatar} width='30px' />
              </Avatar.Root>
              <Stack align='flex-start'>
                <Text fontWeight='medium' fontSize='sm'>
                  {userDetails.firstName} {userDetails.lastName}
                </Text>
                <Text color='gray.500' fontSize='xs'>
                  {userDetails.roleName}
                </Text>
              </Stack>
            </HStack>
            <Button
              size='sm'
              colorScheme='red'
              variant='outline'
              onClick={headerHandler.handleLogout}
            >
              <LuLogOut /> Logout
            </Button>
          </HStack>
        </Flex>
      </Container>
    </header>
  );
};

export default Header;
