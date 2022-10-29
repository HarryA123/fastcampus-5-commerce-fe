import React from 'react';

import {
  Box,
  BoxProps,
  Flex,
} from '@chakra-ui/react';

import { useGetProductQuery } from '@apis/Product/ProductApi.query';

import ProductCard from './_fragments/ProductCard';

interface ProductPageContentProps extends BoxProps {}

function ProductPageContent({ ...basisProps }: ProductPageContentProps) {
  console.log(useGetProductQuery());
  const { data } = useGetProductQuery();

  return (
    <Box m="0 auto">
      <Flex direction="column" mt="120px" gap="30px">
        {data?.map((item, idx) => {
          const tags = item.tag.map((item: any) => {
            return item.name;
          });
          return (
            <>
              <ProductCard
                key={idx}
                tag={tags}
                avgRate={item.avgRate}
                reviewCount={item.reviewCount}
                description={item.description}
                capacity={item.capacity}
                thumbnail={item.thumbnail}
                name={item.name}
                price={item.price}
              />
            </>
          );
        })}

        {/* <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard /> */}
      </Flex>
    </Box>
  );
}

export default ProductPageContent;
