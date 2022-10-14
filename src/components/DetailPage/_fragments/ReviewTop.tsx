import React from 'react';

import { Highlight } from '@chakra-ui/layout';
import {
  Box,
  BoxProps,
  Button,
  Divider,
  Flex,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Text,
} from '@chakra-ui/react';

// import RatioStar from '@components/common/@Icons/System/RatioStar';
import ArrowDownIcon from '@components/common/@Icons/System/ArrowDown';
import RatioStar from '@components/common/@Icons/System/RatioStar';
import RatioStarHalf from '@components/common/@Icons/System/RatioStarHalf';

interface ProductCardProps extends BoxProps {}

function ReviewTop({ ...basisProps }: ProductCardProps) {
  return (
    <>
      <Flex
        {...basisProps}
        w="100%"
        p="50px 16px 30px"
        justifyContent="space-between"
      >
        <Text textStyle="lg">
          <Highlight
            query="78"
            styles={{
              py: '1',
              color: 'primary.500',
            }}
          >
            리뷰 78건
          </Highlight>
        </Text>
        <Flex gap="10px">
          <Menu>
            {({ isOpen }) => (
              <>
                <MenuButton
                  bgColor="gray.200"
                  borderRadius="5px"
                  h="30px"
                  isActive={isOpen}
                  as={Button}
                  rightIcon={<ArrowDownIcon />}
                >
                  최신순
                </MenuButton>
                <MenuList p={0} minW="0">
                  <MenuItem value="오래된순">오래된순</MenuItem>
                  <MenuItem value="최신순">최신순</MenuItem>
                  <MenuItem value="인기순">인기순</MenuItem>
                </MenuList>
              </>
            )}
          </Menu>
          <Menu>
            {({ isOpen }) => (
              <>
                <MenuButton
                  bgColor="gray.200"
                  borderRadius="5px"
                  h="30px"
                  isActive={isOpen}
                  as={Button}
                  rightIcon={<ArrowDownIcon />}
                >
                  전체보기
                </MenuButton>
                <MenuList p={0} minW="0">
                  <MenuItem value="오래된순">오래된순</MenuItem>
                  <MenuItem value="최신순">최신순</MenuItem>
                  <MenuItem value="인기순">인기순</MenuItem>
                </MenuList>
              </>
            )}
          </Menu>
        </Flex>
      </Flex>
      <Flex w="100%" p="50px 16px 30px" gap="20px">
        <Flex gap="9px" alignItems="center">
          <Flex
            alignItems="center"
            justifyContent="center"
            px="4px"
            borderRadius="15px"
            bg="primary.500"
            color="white"
            w="39px"
            textStyle="lg"
            h="20px"
          >
            4.5
          </Flex>
          <Flex alignItems="center" gap="3px">
            <RatioStar />
            <RatioStar />
            <RatioStar />
            <RatioStar />
            <RatioStarHalf />
          </Flex>
        </Flex>
        <Divider orientation="vertical" />
        <Flex gap="15px" w="151px" h="67px" justifyContent="center">
          {[5, 4, 3, 2, 1].map((item, idx) => {
            return (
              <Flex key={idx} direction="column" w="18px">
                <Box
                  h="45px"
                  w="10px"
                  m="auto"
                  bg="secondary.500"
                  borderTopRadius="full"
                />
                <Text color="gray.600" textStyle="sub" textAlign="center">
                  {item}점
                </Text>
              </Flex>
            );
          })}
        </Flex>
      </Flex>
    </>
  );
}

export default ReviewTop;
