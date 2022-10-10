import React from 'react';

import { Box, BoxProps, Flex, Image } from '@chakra-ui/react';

interface SignUpPageContentProps extends BoxProps {}

function SignUpPageContent({ ...basisProps }: SignUpPageContentProps) {
  return (
    <>
      <Flex {...basisProps} justifyContent="center" w="100%" h="100vh">
        <Box mt="100px" h="100px" bg="red">
          signUp page
        </Box>
      </Flex>
    </>
  );
}

export default SignUpPageContent;
