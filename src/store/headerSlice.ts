import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import UserIcon from '../assets/user.png';
import { jwtDecode } from 'jwt-decode';

interface UserDetails {
  name: string;
  position: string;
  avatar: string;
}

interface HeaderState {
  searchValue: string;
  userDetails: UserDetails;
  token: string | null;
  headerTitle: string;
}

interface JwtPayload {
  name?: string;
  username?: string;
  role?: string;
  exp?: number;
  [key: string]: unknown;
}

function isTokenExpired(token: string): boolean {
  try {
    const decoded = jwtDecode<JwtPayload>(token);
    if (!decoded.exp) return true;
    return decoded.exp * 1000 < Date.now();
  } catch {
    return true;
  }
}

function getInitialState(): HeaderState {
  const storedToken = localStorage.getItem('token');

  if (storedToken && !isTokenExpired(storedToken)) {
    try {
      const decoded = jwtDecode<JwtPayload>(storedToken);
      return {
        searchValue: '',
        userDetails: {
          name: decoded.name ?? 'Unknown',
          position: decoded.role ?? 'User',
          avatar: UserIcon,
        },
        token: storedToken,
        headerTitle: '',
      };
    } catch {
      localStorage.removeItem('token');
    }
  }

  localStorage.removeItem('token');
  return {
    searchValue: '',
    userDetails: {
      name: 'Username',
      position: 'Position',
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

      if (action.payload && !isTokenExpired(action.payload)) {
        localStorage.setItem('token', action.payload);
        try {
          const decoded = jwtDecode<JwtPayload>(action.payload);
          state.userDetails = {
            name: decoded.name ?? 'Unknown',
            position: decoded.role ?? 'User',
            avatar: UserIcon,
          };
        } catch (e) {
          console.error('Invalid token:', e);
          localStorage.removeItem('token');
          state.token = null;
        }
      } else {
        localStorage.removeItem('token');
        state.token = null;
        state.userDetails = {
          name: 'User name',
          position: 'Position',
          avatar: UserIcon,
        };
      }
    },
    setHeaderTitle: (state, action: PayloadAction<string>) => {
      state.headerTitle = action.payload;
    },
  },
});

export const { setSearchValue, setUserDetails, setToken, setHeaderTitle } = headerSlice.actions;
export default headerSlice.reducer;
