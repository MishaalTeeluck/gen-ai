import { Button, IconButton, Menu, Portal } from '@chakra-ui/react';
import { LuBell } from 'react-icons/lu';

export const NotificationMenu = () => {
  return (
    <Menu.Root>
      <Menu.Trigger asChild>
        <Button as={IconButton} variant='ghost' aria-label='Notifications'>
          <LuBell size={20} />
        </Button>
      </Menu.Trigger>
      <Portal>
        <Menu.Positioner>
          <Menu.Content
            width='300px'
            maxH='400px'
            overflowY='auto'
            boxShadow='lg'
            borderRadius='md'
          >
            <Menu.ItemGroup>
              <Menu.Item value='bold'>New Notification</Menu.Item>
            </Menu.ItemGroup>
            <Menu.Separator />
          </Menu.Content>
        </Menu.Positioner>
      </Portal>
    </Menu.Root>
  );
};
