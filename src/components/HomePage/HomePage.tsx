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

import UploadButtonIcon from '@components/common/@Icons/System/UploadButton';
import UploadIcon from '@components/common/@Icons/System/UploadIcon';

import Steps from './_fragments/Steps';

interface HomePageContentProps extends BoxProps {}

function HomePageContent({ ...basisProps }: HomePageContentProps) {
  return (
    <Box bg="gray.100">
      <Box id="container_1" h="100vh" {...basisProps}>
        <Image w="100%" src="/images/main/background_1.png"></Image>
      </Box>
      <Box pos="relative" id="container_2" bg="#FFFCEF">
        <Image w="375px" h="782px" src="/images/main/background_2.png" />
        <Flex direction="column" pos="absolute" top="60%" right="12%">
          <Flex alignItems="end">
            <UploadIcon />
            <Text textStyle="xl">
              불합리한 유통구조
              <br /> 과도한 패키징
              <br /> 과장된 광고
            </Text>
          </Flex>
          <Text textStyle="textLarge" mt="40px">
            부풀려지는 가격은 이제 그만!
          </Text>
          <Text display="inline" color="primary.500" fontWeight="bold">
            인코스런은 가격거품을 제거한
          </Text>
          <Text textStyle="textLarge">착한소비를 위해 태어났습니다.</Text>
        </Flex>
      </Box>
      <Flex
        id="container_3"
        justifyContent="center"
        alignItems="center"
        pos="relative"
        bg="#FFFCEF"
        direction="column"
      >
        <Image
          py="60px"
          w="100%"
          h="auto"
          src="/images/main/background_3.png"
        />
        <Box pos="absolute">
          <Flex gap="15px" transform="translate(65px)">
            <Circle size="8px" bg="primary.500"></Circle>
            <Circle size="8px" bg="primary.500"></Circle>
            <Circle size="8px" bg="primary.500"></Circle>
          </Flex>
          <Text textStyle="xl">
            이제 합리적으로 <br />
            지갑을 지키세요!
          </Text>
        </Box>
      </Flex>
      <Flex
        id="container_4"
        // justifyContent="start"
        h="1960px"
        direction="column"
      >
        <Flex direction="column" justifyContent="center" m="80px auto 60px">
          <Text textStyle="xl" color="primary.500" m="auto">
            부풀려지는 가격 이제 그만!
          </Text>
          <Text textStyle="textLarge" m="auto">
            불합리한 중간 유통 거품을 제거한
          </Text>
          <Text textStyle="textLarge" m="auto">
            인코스런만의 투명한 유통혁신
          </Text>
        </Flex>
        <Steps />
      </Flex>
    </Box>
  );
}

export default HomePageContent;

// const ICON_Box = [
//   { title: 1, content: <Main_1Icon /> },
//   { title: 2, content: <Main_2Icon /> },
//   { title: 3, content: <Main_3Icon /> },
//   { title: 4, content: <Main_4Icon /> },
// ];
