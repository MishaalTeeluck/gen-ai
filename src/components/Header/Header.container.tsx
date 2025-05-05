import { useDispatch, useSelector } from 'react-redux';
import { useLocation } from 'react-router-dom';
import { RootState } from '../../store';
import { setSearchValue, setToken } from '../../store/headerSlice';

export const HeaderContainer = () => {
  const dispatch = useDispatch();
  const componentLocation = useLocation();

  const searchValue = useSelector(
    (state: RootState) => state.header.searchValue
  );
  const userDetails = useSelector(
    (state: RootState) => state.header.userDetails
  );
  const handleSearchChange = (value: string) => {
    dispatch(setSearchValue(value));
  };

  const headerTitle = useSelector(
    (state: RootState) => state.header.headerTitle
  );

  const handleLogout = () => {
    dispatch(setToken(null)); 
    window.location.href = '/'; 
  };

  return {
    location: componentLocation,
    searchValue,
    userDetails,
    handleSearchChange,
    headerTitle,
    handleLogout
  };
};
