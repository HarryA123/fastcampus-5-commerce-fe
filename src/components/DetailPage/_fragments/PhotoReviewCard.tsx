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

import RatioStar from '@components/common/@Icons/System/RatioStar';

interface PhotoReviewCardProps extends BoxProps {}

function PhotoReviewCard({ ...basisProps }: PhotoReviewCardProps) {
  return (
    <>
      <Flex
        {...basisProps}
        p="25px 16px"
        w="100%"
        // bg="orange"
        direction="column"
        pos="relative"
      >
        {/* PhotoReviewCard */}
        <Flex direction="column" mb="17px">
          <Text textStyle="lg" mb="2px">
            gaga simpson
          </Text>
          <Text textStyle="sub" color="gray.600">
            2022.20.22
          </Text>
        </Flex>
        <Flex
          alignItems="center"
          pos="absolute"
          top="25px"
          right="16px"
          gap="3px"
        >
          <RatioStar />
          <RatioStar />
          <RatioStar />
          <RatioStar />
          <RatioStar />
        </Flex>
        <Flex direction="column">
          <Text>아이 피부에도 좋아요</Text>
          <Flex gap="10px" mt="10px">
            <Box
              cursor="pointer"
              borderRadius="5px"
              boxSize="80px"
              overflow="hidden"
            >
              <Image
                src="images/product_image.png"
                transform="scale(2.2)"
              ></Image>
            </Box>
            <Box
              cursor="pointer"
              borderRadius="5px"
              boxSize="80px"
              overflow="hidden"
            >
              <Image
                src="images/product_image.png"
                transform="scale(2.2)"
              ></Image>
            </Box>
            <Box
              cursor="pointer"
              borderRadius="5px"
              boxSize="80px"
              overflow="hidden"
            >
              <Image
                src="images/product_image.png"
                transform="scale(2.2)"
              ></Image>
            </Box>
          </Flex>
        </Flex>
      </Flex>
    </>
  );
}

export default PhotoReviewCard;
