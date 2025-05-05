import { useSelector, useDispatch } from 'react-redux';
import { Button, IconButton, Menu, Portal, Box, Text } from '@chakra-ui/react';
import { LuBell } from 'react-icons/lu';
import { RootState } from '../../../store';
import { markAsRead } from '../../../store/notificationSlice';
import { useNavigate } from 'react-router-dom';

export const NotificationMenu = () => {
  const dispatch = useDispatch();
  const notifications = useSelector(
    (state: RootState) => state.notification.notifications
  );

  const handleMarkAsRead = (id: string) => {
    dispatch(markAsRead(id));
  };

  const navigate = useNavigate();

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
            {notifications.length === 0 ? (
              <Box p='4' textAlign='center'>
                <Text color='gray.500' fontSize='sm'>
                  No notifications
                </Text>
              </Box>
            ) : (
              <Menu.ItemGroup>
                {notifications.map((notif) => (
                  <Menu.Item
                    key={notif.id}
                    value={notif.job_id}
                    onClick={() => {
                      handleMarkAsRead(notif.id);
                      navigate(`/jobs/${notif.job_id}`);
                    }}
                    style={{
                      fontWeight: notif.read ? 'normal' : 'bold',
                    }}
                  >
                    {notif.title}
                    <Menu.ItemIndicator />
                  </Menu.Item>
                ))}
              </Menu.ItemGroup>
            )}
            <Menu.Separator />
          </Menu.Content>
        </Menu.Positioner>
      </Portal>
    </Menu.Root>
  );
};
