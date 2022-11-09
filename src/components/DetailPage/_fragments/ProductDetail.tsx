import React from 'react';

import { Highlight } from '@chakra-ui/layout';
import { Box, BoxProps, Button, Flex, Image, Text } from '@chakra-ui/react';

import RatioStar from '@components/common/@Icons/System/RatioStar';
import LinkButton from '@components/common/LinkButton';

interface ProductCardProps extends BoxProps {}

function ProductDetail({ ...basisProps }: ProductCardProps) {
  return (
    <>
      <Flex
        borderTopRadius="20px"
        direction="column"
        // border="1px solid gray"
        bg="white"
        // dropShadow="md"
        // boxShadow="lg"
        // filter="black"
        {...basisProps}
      >
        <Box
          w="50px"
          h="5px"
          m="10px auto 0"
          borderRadius="full"
          bg="gray.200"
        ></Box>
        <Flex direction="column" px="16px" mt="30px">
          <Text fontWeight="bold" textStyle="lg" mb="10px">
            <Highlight
              query="300ml"
              styles={{
                py: '1',
                fontWeight: 'normal',
                color: 'gray.700',
                textStyles: 'md',
              }}
            >
              바스 & 샴푸 300ml
            </Highlight>
          </Text>
          <Text textStyle="md">
            <Highlight
              query="27,000"
              styles={{
                py: '1',
                color: 'primary.500',
                textStyles: 'textLargeBold',
              }}
            >
              27,000원
            </Highlight>
          </Text>
          <Text textStyle="sm" color="gray.800">
            <Highlight
              query="무료배송"
              styles={{
                py: '1',
                color: 'primary.500',
              }}
            >
              3만원 이상 구매시 무료배송
            </Highlight>
          </Text>
          <Text textStyle="md" py="10px">
            순하고 마일드한 안심 처방으로 피부가 민감하고 연약한 우리 아이를
            위한 고보습 로션
          </Text>
          <Flex alignItems="center" mb="15px">
            <RatioStar />
            <Text textStyle="lg">4.3</Text>
            <Text ml="3px" textStyle="md" color="gray.700">
              (리뷰 125개)
            </Text>
          </Flex>
          <Flex direction="column" gap="10px" p="6px 0 4px">
            <Button
              _hover={{ bg: 'gray.300' }}
              w="100%"
              h="50px"
              borderRadius="full"
              color="primary.500"
              fontSize="16px"
              border="1px"
              bg="white"
              borderColor="primary.500"
            >
              장바구니
            </Button>
            <Button
              as="a"
              _hover={{ bg: 'primary.700' }}
              w="100%"
              h="50px"
              borderRadius="full"
              color="white"
              fontSize="16px"
              cursor="pointer"
              bg="primary.500"
            >
              바로 구매
            </Button>
          </Flex>
        </Flex>
      </Flex>
    </>
  );
}

export default ProductDetail;
