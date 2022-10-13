import Link from 'next/link';

import { ChakraProps, DrawerProps } from '@chakra-ui/react';
import {
  Box,
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerOverlay,
  Flex,
  Text,
} from '@chakra-ui/react';

import ExitIcon from '@components/common/@Icons/System/Exit';

interface HomeHeaderDrawerProps extends Omit<DrawerProps, 'children'> {
  bodyProps?: ChakraProps;
}

const HomeHeaderDrawer = ({
  bodyProps,
  ...basisProps
}: HomeHeaderDrawerProps) => {
  return (
    <Drawer placement="left" size="xs" {...basisProps}>
      <DrawerOverlay />
      <DrawerContent>
        <DrawerBody {...bodyProps} p="0" position="relative">
          <Box h="80px" zIndex="sticky">
            <DrawerCloseButton
              w="40px"
              h="40px"
              top="20px"
              right={{ base: '16px', md: '80px' }}
              onClick={basisProps.onClose}
            />
          </Box>
          <Text mb="30px" textStyle="textLargeBold" ml="16px">
            카테고리
          </Text>
          <Box borderBottom="1px" borderColor="gray.400">
            {MENU.map((m, idx) => {
              return (
                <Link key={idx} href={m.link}>
                  <Flex
                    alignItems="center"
                    borderTop="1px"
                    borderColor="gray.400"
                  >
                    <Text m="16px" textStyle="lg">
                      {m.title}
                    </Text>
                  </Flex>
                </Link>
              );
            })}
          </Box>
          <Link href="/Logout">
            <Flex
              ml="16px"
              h="80px"
              pos="fixed"
              zIndex="sticky"
              bottom="0"
              gap="5px"
              alignItems="center"
            >
              <ExitIcon boxSize="24px" />
              <Text textStyle="textLargeBold">로그아웃</Text>
            </Flex>
          </Link>
        </DrawerBody>
      </DrawerContent>
    </Drawer>
  );
};

export default HomeHeaderDrawer;

const MENU = [
  { title: '홈', link: `/` },
  { title: '상품 보기', link: `/product` },
  { title: '마이페이지', link: `/my` },
];
