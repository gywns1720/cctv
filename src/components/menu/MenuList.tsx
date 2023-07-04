import {
  Button,
  Menu,
  MenuButton,
  HStack,
  MenuList as List,
  MenuOptionGroup,
  MenuItemOption,
  Text,
} from '@chakra-ui/react';
import { AiFillProject } from 'react-icons/ai';

interface IProps {}
export function MenuList() {
  return (
    <Menu closeOnSelect={false}>
      <MenuButton as={Button} colorScheme={'blue'}>
        <HStack>
          <AiFillProject />
          <Text>메뉴</Text>
        </HStack>
      </MenuButton>
      <List minWidth={'240px'}>
        <MenuOptionGroup defaultValue={'asc'} title={'Dashboard'} type={'radio'}>
          <MenuItemOption value={'asc'}>입장하기</MenuItemOption>
        </MenuOptionGroup>
      </List>
    </Menu>
  );
}
