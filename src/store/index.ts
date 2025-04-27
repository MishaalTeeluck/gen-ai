import { configureStore } from '@reduxjs/toolkit';
import headerReducer from './headerSlice';
import notificationsReducer from './notificationSlice';

// Define the RootState type
export type RootState = ReturnType<typeof store.getState>;

const store = configureStore({
  reducer: {
    header: headerReducer,
    notification: notificationsReducer,
  },
});

export default store;