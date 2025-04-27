import { configureStore } from '@reduxjs/toolkit';
import headerReducer from './headerSlice';

// Define the RootState type
export type RootState = ReturnType<typeof store.getState>;

const store = configureStore({
  reducer: {
    header: headerReducer,
  },
});

export default store;