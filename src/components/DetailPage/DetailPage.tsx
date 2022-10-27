import React, { useState } from 'react';

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
  HStack,
  IconButton, // IconButton,
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
import MinusIcon from './_fragments/Minus';
import PhotoReviewCard from './_fragments/PhotoReviewCard';
import PlusIcon from './_fragments/Plus';
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
  const {
    getInputProps,
    getIncrementButtonProps,
    getDecrementButtonProps,
    valueAsNumber,
  } = useNumberInput({
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
        <Drawer placement="bottom" onClose={onClose} isOpen={isOpen}>
          <DrawerOverlay />
          <DrawerContent h="250px" borderTopRadius="20px">
            <DrawerBody p="20px 16px">
              <Flex direction="column">
                <Flex direction="column" bg="gray.200" p="10px" gap="4px">
                  <Text color="gray.600">바스&샴푸</Text>
                  <Flex justifyContent="space-between" alignItems="center">
                    <Flex>
                      <IconButton
                        {...dec}
                        variant="outline"
                        bg="white"
                        borderColor="gray.300"
                        borderRightRadius="0px"
                        aria-label="Minus"
                        size="25px"
                        icon={<MinusIcon color="gray.800" />}
                      />
                      <Input
                        {...input}
                        textStyle="sub"
                        textAlign="center"
                        p="0"
                        size="25px"
                        w="25px"
                        borderY="1px"
                        bg="white"
                        _focus={{
                          boxShadow: 'none',
                          borderColor: 'transparent',
                        }}
                        borderTopColor="gray.300"
                        borderBottomColor="gray.300"
                      />
                      <IconButton
                        {...inc}
                        variant="outline"
                        borderLeftRadius="0px"
                        aria-label="Plus"
                        bg="white"
                        borderColor="gray.300"
                        size="25px"
                        icon={<PlusIcon color="gray.800" />}
                      />
                    </Flex>
                    <Text color="gray.600" textStyle="lg">
                      {(27000 * valueAsNumber).toLocaleString('en-US')} 원
                    </Text>
                  </Flex>
                </Flex>
                <Flex justifyContent="space-between" my="5px">
                  <Flex gap="4px" alignItems="center">
                    <Text textStyle="md">총 수량 </Text>
                    <Text
                      textStyle="lg"
                      color="primary.500"
                      display="inline-block"
                    >
                      {valueAsNumber}
                    </Text>
                    <Text>개</Text>
                  </Flex>
                  <Flex gap="4px" alignItems="center">
                    <Text textStyle="md">합계</Text>
                    <Text color="primary.500" display="inline-block">
                      {(27000 * valueAsNumber).toLocaleString('en-US')}
                    </Text>
                    <Text>원</Text>
                  </Flex>
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
