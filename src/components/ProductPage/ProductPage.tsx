import React from 'react';

import {
  Box,
  BoxProps,
  Circle,
  Flex,
  IconButton,
  Image,
  Text,
} from '@chakra-ui/react';

import ProductCard from './_fragments/ProductCard';

interface ProductPageContentProps extends BoxProps {}

function ProductPageContent({ ...basisProps }: ProductPageContentProps) {
  return (
    <Box m="0 auto">
      <Flex
        direction="column"
        // border="1px solid red"
        // bg="gray.100"
        mt="120px"
        gap="30px"
      >
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
      </Flex>
    </Box>
  );
}

export default ProductPageContent;
