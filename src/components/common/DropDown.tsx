import {
  Button,
  ButtonProps,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
} from '@chakra-ui/react';

import ArrowDownIcon from './@Icons/System/ArrowDown';

interface DropDownProps {
  listName: string;
  list_1: string;
  list_2: string;
  list_3: string;
}
const DropDown = ({
  listName,
  list_1,
  list_2,
  list_3,
  ...props
}: DropDownProps) => {
  return (
    <Menu>
      {({ isOpen }) => (
        <>
          <MenuButton
            borderRadius="5px"
            bg="gray.200"
            h="30px"
            isActive={isOpen}
            as={Button}
            rightIcon={<ArrowDownIcon />}
            {...props}
          >
            {listName}
          </MenuButton>
          <MenuList p={0} minW="0" textStyle="sm">
            <MenuItem value={list_1}>{list_1}</MenuItem>
            <MenuItem value={list_2}>{list_2}</MenuItem>
            <MenuItem value={list_3}>{list_3}</MenuItem>
          </MenuList>
        </>
      )}
    </Menu>
  );
};

export default DropDown;
