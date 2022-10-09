import { Flex, Image } from '@chakra-ui/react';
import { useDisclosure } from '@chakra-ui/react';

import { LAYOUT } from '@constants/layout';

import {
  SignUpHeaderVariantType,
  SignUp_HEADER_VARIANTS,
} from './SignUpHeader.data';

// import { SignUp_HEADER_VARIANTS } from './SignUpHeader.data';

interface SignUpHeaderProps {
  variant?: SignUpHeaderVariantType;
}

const SignUpHeader = ({ variant = 'light' }: SignUpHeaderProps) => {
  const { onOpen } = useDisclosure();

  const cssByVariant = SignUp_HEADER_VARIANTS[variant];

  return (
    <>
      <Flex
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
        <Image //
          src="/images/logo_left.png"
          cursor="pointer"
        />
      </Flex>
    </>
  );
};

export default SignUpHeader;
