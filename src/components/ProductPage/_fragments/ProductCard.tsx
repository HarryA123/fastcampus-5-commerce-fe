import Link from 'next/link';
import React from 'react';

import { Highlight } from '@chakra-ui/layout';
import { Box, BoxProps, Flex, Image, Text } from '@chakra-ui/react';

import RatioStar from '@components/common/@Icons/System/RatioStar';
import LinkButton from '@components/common/LinkButton';

interface ProductCardProps extends BoxProps {}

function ProductCard({ ...basisProps }: ProductCardProps) {
  return (
    <Flex
      w="343px"
      h="528px"
      borderRadius="20px"
      direction="column"
      bg="white"
      boxShadow="md"
    >
      <Link href="/detail">
        <Box
          cursor="pointer"
          h="250px"
          overflow="hidden"
          borderTopRadius="20px"
        >
          <Image src="images/product_image.png" transform="scale(1.1)"></Image>
        </Box>
      </Link>
      <Flex p="30px 16px" direction="column">
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
        <Flex alignItems="center">
          <RatioStar />
          <Text textStyle="lg">4.3</Text>
          <Text ml="3px" textStyle="md" color="gray.700">
            (리뷰 125개)
          </Text>
        </Flex>
        <Text textStyle="md" color="gray.700" p="25px 0 20px">
          #올인원 #올인원 #올인원 #올인원
        </Text>
        <Flex gap="20px">
          <LinkButton href="/buy" bg="primary.500">
            바로 구매
          </LinkButton>
          <LinkButton
            href="/cart"
            border="1px"
            color="primary.500"
            borderColor="primary.500"
            _hover={{ bg: 'gray.300' }}
          >
            장바구니
          </LinkButton>
        </Flex>
      </Flex>
    </Flex>
  );
}

export default ProductCard;
