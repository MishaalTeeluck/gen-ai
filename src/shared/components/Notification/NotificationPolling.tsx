import axios from 'axios';
import store from '../../../store';
import { addNotification } from '../../../store/notificationSlice';
import { NotificationInterface } from './Notification.interface';

export const startNotificationPolling = (token: string) => {
  const fetchNotifications = async () => {
    try {
      const response = await axios.get<NotificationInterface[]>(
        `${import.meta.env.VITE_APIPORT}/notifications/me`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      const notifications = response.data;

      if (Array.isArray(notifications)) {
        notifications.forEach((notif) => {
          store.dispatch(addNotification(notif));
        });
      }
    } catch (error) {
      console.error('Failed to fetch notifications:', error);
    }
  };

  fetchNotifications();
  setInterval(fetchNotifications, 4 * 60 * 1000);
};
