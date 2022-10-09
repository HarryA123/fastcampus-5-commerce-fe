import React from 'react';

import { Box, BoxProps, Flex, Image } from '@chakra-ui/react';

import KakaoComponent from './_fragments/KakaoComponent';

interface LoginPageContentProps extends BoxProps {}

function LoginPageContent({ ...basisProps }: LoginPageContentProps) {
  return (
    <>
      <Flex
        {...basisProps}
        justifyContent="center"
        w="100%"
        h="100vh"
        bg="primary.500"
      >
        <Box mt="364px" pos="absolute">
          <Image src="/images/LOGO.png" color="white"></Image>
        </Box>
        <KakaoComponent pos="absolute" bottom="50px" />
      </Flex>
    </>
  );
}

export default LoginPageContent;
