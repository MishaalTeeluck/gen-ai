import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import UserIcon from '../assets/user.png';

interface UserDetails {
  id: string;
  firstName: string;
  lastName: string;
  roleName: string;
  email: string;
  avatar: string;
}

interface HeaderState {
  searchValue: string;
  userDetails: UserDetails;
  token: string | null;
  headerTitle: string;
}

function getInitialState(): HeaderState {
  const storedToken = localStorage.getItem('token');

  if (storedToken) {
    return {
      searchValue: '',
      userDetails: {
        id: '',
        firstName: '',
        lastName: '',
        roleName: '',
        email: '',
        avatar: UserIcon,
      },
      token: storedToken,
      headerTitle: '',
    };
  }

  localStorage.removeItem('token');
  return {
    searchValue: '',
    userDetails: {
      id: '',
      firstName: '',
      lastName: '',
      roleName: '',
      email: '',
      avatar: UserIcon,
    },
    token: null,
    headerTitle: '',
  };
}

const headerSlice = createSlice({
  name: 'header',
  initialState: getInitialState(),
  reducers: {
    setSearchValue: (state, action: PayloadAction<string>) => {
      state.searchValue = action.payload;
    },
    setUserDetails: (state, action: PayloadAction<UserDetails>) => {
      state.userDetails = action.payload;
    },
    setToken: (state, action: PayloadAction<string | null>) => {
      state.token = action.payload;

      if (action.payload) {
        localStorage.setItem('token', action.payload);
      } else {
        localStorage.removeItem('token');
        state.token = null;
      }
    },
    setHeaderTitle: (state, action: PayloadAction<string>) => {
      state.headerTitle = action.payload;
    },
  },
});

export const { setSearchValue, setUserDetails, setToken, setHeaderTitle } = headerSlice.actions;
export default headerSlice.reducer;
