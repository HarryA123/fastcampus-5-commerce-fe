import { Flex, Text } from '@chakra-ui/react';

const HomeFooter = () => {
  return (
    <Flex
      color="white"
      direction="column"
      gap="40px"
      bg="gray.800"
      p="35px 16px 55px"
    >
      <Flex direction="column" gap="30px">
        <Text textStyle="lg">INCOURSE.RUN</Text>
        <Flex direction="column" gap="10px" textStyle="sub">
          {/* {[
            FOOTER_TEXT.map((item, idx) => {
              return (
                <Text textStyle="sub" key={idx}>
                  {item}
                </Text>
              );
            }),
          ]} */}
          <Text>팀명 | 인코스런</Text>
          <Text>구성원 | 홍길동, 홍길동, 홍길동, 홍길동 </Text>
          <Text>이메일 | incourse.run@gmail.com</Text>
        </Flex>
      </Flex>
      <Text textStyle="sub">ⓒINCOURSE.RUN All Right Reserved.</Text>
    </Flex>
  );
};

export default HomeFooter;
