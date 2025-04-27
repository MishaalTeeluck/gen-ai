import { MenuItem } from './Dropdown.interface';

export const DropdownContainer = (
  items: MenuItem[],
  setValue: (value: string) => void
) => {
  return (value: string) => {
    setValue(value);

    const selectedItem = items.find((item) => item.value === value);
    if (selectedItem?.action) {
      selectedItem.action();
    }
  };
};
