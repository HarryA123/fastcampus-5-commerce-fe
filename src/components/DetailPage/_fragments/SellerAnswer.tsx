import React from 'react';

import { Highlight } from '@chakra-ui/layout';
import {
  Box,
  BoxProps,
  Button,
  Divider,
  Flex,
  Image,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Text,
} from '@chakra-ui/react';

import ChatLineIcon from '@components/common/@Icons/System/ChatLine';
import RatioStar from '@components/common/@Icons/System/RatioStar';

interface PhotoReviewCardProps extends BoxProps {}

function SellerAnswer({ ...basisProps }: PhotoReviewCardProps) {
  return (
    <>
      <Flex {...basisProps} p="5px 16px 30px" w="100%" gap="8px">
        <ChatLineIcon boxSize="20px" color="primary.500" />
        <Flex direction="column">
          <Flex direction="column" mb="20px">
            <Text textStyle="sm" mb="2px">
              인코스런 관계자
            </Text>
            <Text textStyle="sub" color="gray.600">
              2022.20.22
            </Text>
          </Flex>
          <Flex direction="column">
            <Text>감사해요!</Text>
          </Flex>
          <Divider w="50px" />
        </Flex>
      </Flex>
      <Box m="auto" w="343px" h="1px" bg="gray.200" />
    </>
  );
}

export default SellerAnswer;
