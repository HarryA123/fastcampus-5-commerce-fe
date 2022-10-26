import React, { useState } from 'react';

import { Highlight } from '@chakra-ui/layout';
import {
  Box,
  BoxProps,
  Button, // Center,
  Collapse,
  Drawer,
  DrawerBody, // DrawerCloseButton,
  DrawerContent, // DrawerFooter,
  // DrawerHeader,
  DrawerOverlay,
  Flex,
  HStack, // IconButton,
  Image,
  Input,
  Text,
  useDisclosure,
  useNumberInput,
} from '@chakra-ui/react';

import ArrowDownIcon from '@components/common/@Icons/System/ArrowDown';
import ArrowRightIcon from '@components/common/@Icons/System/ArrowRight';
import ArrowUpIcon from '@components/common/@Icons/System/ArrowUp';
import LinkButton from '@components/common/LinkButton';

// import BuyorCartDrawer from './_fragments/BuyorCartDrawer';
import PhotoReviewCard from './_fragments/PhotoReviewCard';
import ProductDetail from './_fragments/ProductDetail';
import ReviewCard from './_fragments/ReviewCard';
import ReviewTop from './_fragments/ReviewTop';
import SellerAnswer from './_fragments/SellerAnswer';

interface DetailPageContentProps extends BoxProps {}

function DetailPageContent({ ...basisProps }: DetailPageContentProps) {
  const [showDeliver, setShowDeliver] = useState(false);
  const [showDetail, setShowDetail] = useState(false);
  const handleDeliverToggle = () => setShowDeliver(!showDeliver);
  const handleDetailToggle = () => setShowDetail(!showDetail);
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { getInputProps, getIncrementButtonProps, getDecrementButtonProps } =
    useNumberInput({
      step: 1,
      defaultValue: 1,
      min: 1,
      max: 100,
      precision: 0,
    });

  const inc = getIncrementButtonProps();
  const dec = getDecrementButtonProps();
  const input = getInputProps();

  return (
    <Flex direction="column" mt="80px">
      <Flex
        id="container_1"
        h="calc(100vh-80px)"
        direction="column"
        pos="relative"
      >
        <Box overflow="hidden">
          <Image
            m="auto"
            transform="translateY(40px)"
            src="images/product_1.png"
          />
        </Box>
        <ProductDetail onClick={onOpen} />
        {/* <BuyorCartDrawer onClose={onClose} isOpen={isOpen} /> */}
        <Drawer placement="bottom" onClose={onClose} isOpen={isOpen}>
          <DrawerOverlay />
          <DrawerContent h="280px" borderTopRadius="20px">
            <DrawerBody p="20px 16px">
              <Flex direction="column">
                <Flex direction="column" bg="gray.200" p="10px" gap="4px">
                  <Text>바스&샴푸</Text>
                  <Flex justifyContent="space-between" alignItems="center">
                    <HStack maxW="140px">
                      <Button {...dec}>-</Button>
                      <Input {...input} h="40px" />
                      <Button {...inc}>+</Button>
                    </HStack>
                    <Text color="gray.600" textStyle="lg">
                      27,000원
                    </Text>
                  </Flex>
                </Flex>
                <Flex justifyContent="space-between" my="5px">
                  <Text textStyle="md">
                    <Highlight
                      query="1"
                      styles={{
                        py: '1',
                        color: 'primary.500',
                        textStyles: 'textLargeBold',
                      }}
                    >
                      총 수량 1 개
                    </Highlight>
                  </Text>
                  <Text textStyle="">
                    <Highlight
                      query="27,000원"
                      styles={{
                        py: '1',
                        // color: 'primary.500',
                        textStyle: 'lg',
                      }}
                    >
                      합계 27,000원
                    </Highlight>
                  </Text>
                </Flex>
              </Flex>
              <Flex gap="13px" p="10px 0 30px">
                <LinkButton
                  href="cart"
                  color="primary.500"
                  border="1px"
                  borderColor="primary.500"
                >
                  장바구니
                </LinkButton>
                <LinkButton href="buy" bg="primary.500">
                  바로구매
                </LinkButton>
              </Flex>
            </DrawerBody>
          </DrawerContent>
        </Drawer>
      </Flex>
      <Flex direction="column" id="container_2">
        <Flex
          h="80px"
          gap="20px"
          w="100%"
          justifyContent="center"
          alignItems="center"
        >
          {INNER_MENU.map((item, idx) => {
            return (
              <Text cursor="pointer" p="26px 15px" key={idx}>
                {item}
              </Text>
            );
          })}
        </Flex>
        <Collapse startingHeight={475} in={showDetail}>
          <Image m="0 auto" src="images/detail/detail_01.png" />
        </Collapse>
        <Button
          w="auto"
          h="50px"
          borderRadius="full"
          border="1px solid black"
          mx="16px"
          mb="60px"
          onClick={handleDetailToggle}
        >
          <Text textStyle="lg">상세정보 펼쳐보기</Text>
          {!showDetail ? <ArrowDownIcon boxSize="18px" /> : <ArrowUpIcon />}
        </Button>
      </Flex>
      <Flex direction="column" id="container_3">
        <Flex
          textStyle="lg"
          w="100%"
          px="16px"
          h="60px"
          onClick={handleDeliverToggle}
          alignItems="center"
          justifyContent="space-between"
          borderBottom="1px"
          borderBottomColor="gray.200"
        >
          <Text textStyle="lg">주문 및 배송 안내</Text>
          {!showDeliver ? <ArrowDownIcon boxSize="18px" /> : <ArrowUpIcon />}
        </Flex>
        <Collapse in={showDeliver}>
          <Box w="343px" m="0 auto" pb="20px">
            <Text textStyle="lg" p="14px 0 20px">
              [주문 및 배송 안내]
            </Text>
            <Text mb="10px">배송방법 : 인코스런 택배</Text>
            <Text mb="10px">배송지역 : 전국</Text>
            <Text>배송비용 : 단품 상품 구매 시 3,000배송비 발생</Text>
            <Text w="272px" ml="auto">
              그외 단품 묶음 구매의 경우 30,000원 이상 구매 시 무료배송
            </Text>
          </Box>
        </Collapse>
        <ReviewTop />
        <PhotoReviewCard />
        <SellerAnswer />
        <ReviewCard />
        <PhotoReviewCard />
        <SellerAnswer />
        <ReviewCard />
        <ReviewCard />
        <Flex
          gap="30px"
          alignItems="center"
          justifyContent="center"
          h="30px"
          p="50px 0 80px"
        >
          {[1, 2, 3, 4, 5].map((item, idx) => {
            return (
              <Text textStyle="lg" color="black" key={idx}>
                {item}
              </Text>
            );
          })}
          <ArrowRightIcon />
        </Flex>
      </Flex>
    </Flex>
  );
}

export default DetailPageContent;

const INNER_MENU = ['상세정보', '구매정보', '리뷰(89)'];
