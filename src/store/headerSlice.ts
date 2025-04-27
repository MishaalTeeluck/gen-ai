import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import UserIcon from '../assets/user.png';

interface UserDetails {
  name: string;
  position: string;
  avatar: string;
}

interface HeaderState {
  searchValue: string;
  userDetails: UserDetails;
}

const initialState: HeaderState = {
  searchValue: '',
  userDetails: {
    name: 'User name',
    position: 'Position',
    avatar: UserIcon,
  },
};

const headerSlice = createSlice({
  name: 'header',
  initialState,
  reducers: {
    setSearchValue: (state, action: PayloadAction<string>) => {
      state.searchValue = action.payload;
    },
    setUserDetails: (state, action: PayloadAction<UserDetails>) => {
      state.userDetails = action.payload;
    },
  },
});

export const { setSearchValue, setUserDetails } = headerSlice.actions;

export default headerSlice.reducer;
