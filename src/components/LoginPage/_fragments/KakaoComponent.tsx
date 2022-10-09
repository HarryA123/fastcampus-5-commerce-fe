import React from 'react';

import { Box, BoxProps, Flex, Image, Text } from '@chakra-ui/react';

import { Brand } from '@theme/foundations/colors';

interface LoginPageContentProps extends BoxProps {}

function KakaoComponent({ ...basisProps }: LoginPageContentProps) {
  return (
    <Flex
      {...basisProps}
      borderRadius="4px"
      w="310px"
      h="45px"
      bg={Brand.kakao[500]}
    >
      <Image m="auto 25px" w="24px" h="24px" src="/icons/social/kakao.png" />
      <Text m="auto 13px" textStyle="md">
        카카오 계정으로 로그인
      </Text>
    </Flex>
  );
}

export default KakaoComponent;
