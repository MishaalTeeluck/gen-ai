import { Menu, Button, Portal } from '@chakra-ui/react';
import { DropdownProps } from './Dropdown.interface';

export const DropdownComponent = (props: DropdownProps) => {
  return (
    <Menu.Root>
      <Menu.Trigger asChild className={props.className}>
        <Button variant='subtle' size={props.size} w='100%' h='40px'>
          {props.hasIcon && props.icon}
          {props.title}
        </Button>
      </Menu.Trigger>
      <Portal>
        <Menu.Positioner>
          <Menu.Content minW='10rem'>
            <Menu.RadioItemGroup
              value={props.value}
              onValueChange={(e) => props.setValue(e.value)}
            >
              {props.items.map((item) => (
                <Menu.RadioItem key={item.value} value={item.value}>
                  {item.label}
                  <Menu.ItemIndicator />
                </Menu.RadioItem>
              ))}
            </Menu.RadioItemGroup>
          </Menu.Content>
        </Menu.Positioner>
      </Portal>
    </Menu.Root>
  );
};
