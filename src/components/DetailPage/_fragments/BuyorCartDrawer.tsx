import React from 'react';

import {
  Drawer,
  DrawerBody,
  DrawerContent,
  DrawerOverlay,
  DrawerProps,
  Flex,
  IconButton,
  Input,
  Text,
  useNumberInput,
} from '@chakra-ui/react';

import LinkButton from '@components/common/LinkButton';

import MinusIcon from './Minus';
import PlusIcon from './Plus';

interface BuyorCartDrawerProps extends DrawerProps {
  valueAsNumber: number;
  onClose: () => void;
  isOpen: boolean;
}

const BuyorCartDrawer = ({
  valueAsNumber,
  ...basisProps
}: BuyorCartDrawerProps) => {
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
    <Drawer placement="bottom" {...basisProps}>
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
                <Text textStyle="lg" color="primary.500" display="inline-block">
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
  );
};

// Property 'children' is missing in type '{ valueAsNumber: number; onClose: () => void; isOpen: boolean; }' but required in type 'BuyorCartDrawerProps'.

export default BuyorCartDrawer;

{
  /* <Drawer placement="bottom" onClose={onClose} isOpen={isOpen}>
          <DrawerOverlay />
          <DrawerContent h="280px" borderTopRadius="20px">
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
                        // _active={{ bg: 'primary.700' }}
                        icon={<PlusIcon color="gray.800" />}
                      />
                    </Flex>
                    <Text color="gray.600" textStyle="lg">
                      {(27000 * valueAsNumber).toLocaleString('en-US')} 원
                    </Text>
                  </Flex>
                </Flex>
                <Flex justifyContent="space-between" my="5px">
                  <Text textStyle="md">
                    {/* <Highlight
                      query="1"
                      styles={{
                        py: '1',
                        color: 'primary.500',
                        textStyles: 'textLargeBold',
                      }}
                    > */
}
//           총 수량{' '}
//           <Text
//             textStyle="lg"
//             color="primary.500"
//             display="inline-block"
//           >
//             {valueAsNumber}
//           </Text>
//           개{/* </Highlight> */}
//         </Text>
//         <Text textStyle="md">
//           합계{' '}
//           <Text color="primary.500" display="inline-block">
//             {(27000 * valueAsNumber).toLocaleString('en-US')}
//           </Text>{' '}
//           원
//         </Text>
//       </Flex>
//     </Flex>
//     <Flex gap="13px" p="10px 0 30px">
//       <LinkButton
//         href="cart"
//         color="primary.500"
//         border="1px"
//         borderColor="primary.500"
//       >
//         장바구니
//       </LinkButton>
//       <LinkButton href="buy" bg="primary.500">
//         바로구매
//       </LinkButton>
//     </Flex>
//   </DrawerBody>
// </DrawerContent>
// </Drawer> */}
