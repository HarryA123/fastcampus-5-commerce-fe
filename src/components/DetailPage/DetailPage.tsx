import Link from 'next/link';
import React, { useState } from 'react';

import { Highlight } from '@chakra-ui/layout';
import {
  Box,
  BoxProps,
  Button,
  Center,
  Collapse,
  Flex,
  IconButton,
  Image,
  Text,
} from '@chakra-ui/react';

import ArrowDownIcon from '@components/common/@Icons/System/ArrowDown';
import ArrowUpIcon from '@components/common/@Icons/System/ArrowUp';

import PhotoReviewCard from './_fragments/PhotoReviewCard';
import ProductDetail from './_fragments/ProductDetail';
import ReviewCard from './_fragments/ReviewCard';
import ReviewTop from './_fragments/ReviewTop';
import SellerAnswer from './_fragments/SellerAnswer';

interface DetailPageContentProps extends BoxProps {}

function DetailPageContent({ ...basisProps }: DetailPageContentProps) {
  const [show, setShow] = useState(false);
  const handleToggle = () => setShow(!show);
  return (
    <Flex direction="column" mt="80px">
      <Flex
        // justifyContent="center"
        id="container_1"
        w="375px"
        h="100vh"
        // bg="blue"
        m="0 auto"
        direction="column"
        // border="1px solid red"
        pos="relative"
      >
        <Box overflow="hidden">
          <Image m="0 auto" src="images/product_1.png"></Image>
        </Box>
        <ProductDetail pos="absolute" bottom="0" />
      </Flex>
      <Flex
        m="0 auto"
        direction="column"
        id="container_2"
        w="375px"
        h="100vh"
        bg="pink.400"
      >
        <Flex
          h="80px"
          gap="20px"
          w="100%"
          justifyContent="center"
          alignItems="center"
          bg="red"
        >
          {INNER_MENU.map((item, idx) => {
            return (
              <Text cursor="pointer" p="26px 15px" key={idx}>
                {item}
              </Text>
            );
          })}
        </Flex>
        <Flex
          // justifyContent="center"
          direction="column"
          mt="0px"
          w="100%"
          // h="700px"
          bg="yellow"
        >
          <Flex
            justifyContent="center"
            direction="column"
            bg="green"
            gap="10px"
            mt="50px"
            py="50px"
          >
            <Text
              // pt="50px"
              color="primary.500"
              textStyle="sm"
              textAlign="center"
            >
              KEY POINT
            </Text>
            <Text textStyle="xl" textAlign="center">
              <Highlight
                query="우리 아이를 위한 고보습 로션"
                styles={{
                  py: '1',
                  fontWeight: 'black',
                }}
              >
                순하고 마일드한 안심 처방으로 피부가 민감하고 연약한 우리 아이를
                위한 고보습 로션
              </Highlight>
            </Text>
          </Flex>
          <Flex direction="column" gap="10px" bg="green.400">
            <Text m="0 auto" textStyle="md" textAlign="center" w="309px">
              <Highlight
                query={['쌀추출물 적용', '·', '천연유래성분 89%']}
                styles={{
                  py: '1',
                  textStyle: 'lg',
                }}
              >
                · 천연유래성분 89% 이상 함유로 마일드하고 자극없는 사용감을
                부여하고 쌀추출물 적용으로 수분공급 및 피부결을 부드럽게
                케어합니다.
              </Highlight>
            </Text>
            <Text m="0 auto" textStyle="md" textAlign="center" w="323px">
              <Highlight
                query={['·', '(COSMOS인증)']}
                styles={{
                  py: '1',
                  textStyle: 'lg',
                }}
              >
                · 천연 올리브(COSMOS인증) & 팜 유래 유화제 적용 - 풍부하고 밀도
                있는 영양감과 뛰어난 보습감, 밀착력을 부여합니다.
              </Highlight>
            </Text>
            <Text m="0 auto" textStyle="md" textAlign="center" w="311px">
              <Highlight
                query={['·', 'Multi lamellar 유화']}
                styles={{
                  py: '1',
                  textStyle: 'lg',
                }}
              >
                · 피부와 유사한 Multi lamellar 유화를 통해 보습 밀착감을 높이고
                리치한 사용감을 구현했습니다.
              </Highlight>
            </Text>
          </Flex>
        </Flex>
      </Flex>
      <Flex
        m="0 auto"
        direction="column"
        id="container_3"
        w="375px"
        // h="100vh"
        // bg="pink.200"
      >
        <Flex
          textStyle="lg"
          w="343px"
          h="60px"
          onClick={handleToggle}
          alignItems="center"
          justifyContent="space-between"
          m="0 auto"
          borderBottom="1px"
          borderBottomColor="gray.200"
        >
          주문 및 배송 안내{' '}
          {show ? <ArrowDownIcon boxSize="18px" /> : <ArrowUpIcon />}
        </Flex>
        <Collapse in={show}>
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
        {/* 주문 및 배송 안내 컴포넌트 자리 collapse 사용! */}
      </Flex>
      <Flex
        m="0 auto"
        direction="column"
        id="container_4"
        w="375px"
        h="100vh"
        bg="pink.100"
      >
        {/* 리뷰 자리 */}
      </Flex>
    </Flex>
    // </Flex>
  );
}

export default DetailPageContent;

const INNER_MENU = ['상세정보', '구매정보', '리뷰(89)'];
