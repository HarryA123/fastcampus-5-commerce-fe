import { Flex, IconButton, Image } from '@chakra-ui/react';
import { useDisclosure } from '@chakra-ui/react';

import CartIcon from '@components/common/@Icons/System/Cart';
import MenuIcon from '@components/common/@Icons/System/Menu';

import { LAYOUT } from '@constants/layout';

import { HOME_HEADER_VARIANTS, HomeHeaderVariantType } from './HomeHeader.data';
import HomeHeaderDrawer from './_fragments/HomeHeaderDrawer';

interface HomeHeaderProps {
  variant?: HomeHeaderVariantType;
}

const HomeHeader = ({ variant = 'transparent' }: HomeHeaderProps) => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  const cssByVariant = HOME_HEADER_VARIANTS[variant];

  return (
    <>
      <Flex //
        as="header"
        px={{ base: '16px', md: '80px' }}
        alignItems="center"
        justifyContent="space-between"
        position="fixed"
        zIndex="sticky"
        transition="all 0.3s"
        w="100%"
        h={LAYOUT.HEADER.HEIGHT}
        {...cssByVariant.header}
      >
        <IconButton //
          color={cssByVariant.pointColor}
          icon={<MenuIcon w="24px" h="24px" />}
          onClick={onOpen}
          cursor="pointer"
          bg="transparent"
          aria-label="btn-toggle-drawer"
        />
        <Image src="/images/logo_center.png" />
        <IconButton //
          color={cssByVariant.pointColor}
          icon={<CartIcon w="24px" h="24px" />}
          onClick={onOpen}
          cursor="pointer"
          bg="transparent"
          aria-label="btn-toggle-drawer"
        />
      </Flex>
      <HomeHeaderDrawer
        isOpen={isOpen}
        onClose={onClose}
        bodyProps={cssByVariant.drawer}
      />
    </>
  );
};

export default HomeHeader;
