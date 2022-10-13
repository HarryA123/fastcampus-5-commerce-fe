import React from 'react';

import { Box, BoxProps, Flex, Input } from '@chakra-ui/react';

import FormHelper from '@components/common/FormHelper';

interface SignUpPageContentProps extends BoxProps {}

function SignUpPageContent({ ...basisProps }: SignUpPageContentProps) {
  return (
    <>
      <Flex {...basisProps} justifyContent="center" w="100%" h="100vh">
        <Box mt="100px" h="100px" bg="red">
          회원가입 완료!
        </Box>
      </Flex>
    </>
  );
}

export default SignUpPageContent;
