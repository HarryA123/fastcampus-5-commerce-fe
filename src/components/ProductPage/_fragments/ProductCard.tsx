import Link from 'next/link';
import React from 'react';

import { CLIENT_RENEG_LIMIT } from 'tls';

import { Highlight } from '@chakra-ui/layout';
import { Box, BoxProps, Flex, Image, Text } from '@chakra-ui/react';

import { useGetProductQuery } from '@apis/Product/ProductApi.query';

import RatioStar from '@components/common/@Icons/System/RatioStar';
import LinkButton from '@components/common/LinkButton';

interface ProductCardProps extends BoxProps {
  name: string;
  capacity: number;
  price: number;
  description: string;
  reviewCount: number;
  avgRate: number;
  thumbnail: string;
  tag: JSX.Element[] | Array<string>;
}

function ProductCard({
  tag,
  avgRate,
  reviewCount,
  description,
  capacity,
  thumbnail,
  price,
  name,
}: ProductCardProps) {
  const { data, isLoading } = useGetProductQuery();
  console.log(data);
  console.log(tag);

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
        <Flex mb="10px" gap="5px" alignItems="center">
          <Text fontWeight="bold" textStyle="lg">
            {name}
          </Text>
          <Text fontWeight="normal" color="gray.700">
            {capacity}ml
          </Text>
        </Flex>
        <Flex alignItems="center">
          <Text color="primary.500" textStyle="textLargeBold">
            {price?.toLocaleString('en-US')}
          </Text>
          <Text textStyle="textLarge">원</Text>
        </Flex>
        <Flex alignItems="center">
          <RatioStar />
          <Text textStyle="lg">{avgRate}</Text>
          <Text ml="3px" textStyle="md" color="gray.700">
            (리뷰 {reviewCount}개)
          </Text>
        </Flex>
        <Text textStyle="md" color="gray.700" p="25px 0 20px">
          {tag}
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
