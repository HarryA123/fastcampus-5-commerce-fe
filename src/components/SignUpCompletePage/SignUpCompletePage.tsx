import React from 'react';

import { Box, BoxProps, Center, Flex, Image, Text } from '@chakra-ui/react';

import LinkButton from '@components/common/LinkButton';

interface LoginPageContentProps extends BoxProps {}

function SignUpCompletePageContent({ ...basisProps }: LoginPageContentProps) {
  return (
    <>
      <Flex
        {...basisProps}
        px="16px"
        direction="column"
        justifyContent="center"
        w="100%"
        h="100vh"
      >
        <Box mt="80px">
          <Text textStyle="xl">
            회원가입이
            <br />
            완료되었습니다.
          </Text>
          <Text textStyle="sub" color="gray.600">
            관심사별로 자유롭게 소통해보세요!
          </Text>
        </Box>
        <Image
          m="auto"
          boxSize="216px"
          src="/images/form/hands-clapping 1.png"
        ></Image>
        <LinkButton href="/" bg="primary.500" mb="30px">
          시작하기
        </LinkButton>
      </Flex>
    </>
  );
}

export default SignUpCompletePageContent;
