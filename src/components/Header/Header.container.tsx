import { useState } from 'react';
import UserIcon from '../../assets/user.png';

export const HeaderContainer = () => {
  const [searchValue, setSearchValue] = useState('');

  const userDetails = {
    name: 'User name',
    position: 'Position',
    avatar: UserIcon,
  };

  return {
    searchValue,
    setSearchValue,
    userDetails,
  };
};
