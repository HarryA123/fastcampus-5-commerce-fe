import React from 'react';

import { Box, BoxProps, Flex, Text } from '@chakra-ui/react';

import CheckLineIcon from '@components/common/@Icons/System/CheckLine';
import Main_1Icon from '@components/common/@Icons/System/Main_1';
import Main_2Icon from '@components/common/@Icons/System/Main_2';
import Main_3Icon from '@components/common/@Icons/System/Main_3';
import Main_4Icon from '@components/common/@Icons/System/Main_4';

interface StepsProps extends BoxProps {}

function Steps({ ...basisProps }: StepsProps) {
  return (
    <Box h="auto">
      <Flex direction="column" w="280px" gap="40px" ml="15%" pos="relative">
        <Box bg="gray.400" pos="absolute" h="100%" w="2px" left="27%"></Box>
        {ICON_Box.map((item, idx) => {
          return (
            <Flex key={idx} zIndex={2}>
              <Flex
                boxSize="150px"
                bg={
                  item.title === 'STEP2' || item.title === 'STEP3'
                    ? 'white'
                    : 'primary.500'
                }
                border={
                  item.title === 'STEP2' || item.title === 'STEP3'
                    ? '2px'
                    : 'none'
                }
                borderColor={
                  item.title === 'STEP2' || item.title === 'STEP3'
                    ? 'gray.400'
                    : 'black'
                }
                borderRadius="full"
                justifyContent="center"
                alignItems="center"
              >
                {item.content}
              </Flex>
              <Flex
                alignItems="center"
                justifyContent="center"
                direction="column"
                w="120px"
                ml="10px"
              >
                <Flex alignItems="center">
                  {item.title === 'STEP2' || item.title === 'STEP3' ? (
                    <>
                      <Text textStyle="lg" color="gray.400">
                        {item.title}
                      </Text>
                    </>
                  ) : (
                    <>
                      <CheckLineIcon color="primary.500" />
                      <Text textStyle="lg" color="gray.800">
                        {item.title}
                      </Text>
                    </>
                  )}
                </Flex>
                <Text
                  textAlign="center"
                  color={
                    item.title === 'STEP2' || item.title === 'STEP3'
                      ? 'gray.400'
                      : 'gray.800'
                  }
                >
                  {item.title === 'STEP1' ? (
                    <>
                      제조공장의
                      <br />
                      제조 및 개발비용
                    </>
                  ) : (
                    item.text
                  )}
                </Text>
              </Flex>
            </Flex>
          );
        })}
      </Flex>
    </Box>
  );
}

export default Steps;

const ICON_Box = [
  {
    title: 'STEP1',
    content: <Main_1Icon />,
    text: `제조공장의 제조 및 개발비용`,
  },
  {
    title: 'STEP2',
    content: <Main_2Icon />,
    text: `물류 및 운송비용`,
  },
  {
    title: 'STEP3',
    content: <Main_3Icon />,
    text: `결제 수수료`,
  },
  {
    title: 'STEP4',
    content: <Main_4Icon />,
    text: `소비자 가격`,
  },
];
