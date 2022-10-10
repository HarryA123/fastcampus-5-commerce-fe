import { ChakraProps } from '@chakra-ui/react';

export type HomeHeaderVariantType = 'transparent';
export const HOME_HEADER_VARIANTS: Record<
  HomeHeaderVariantType,
  {
    header: ChakraProps;
    drawer: ChakraProps;
    pointColor: ChakraProps['color'];
    subColor: ChakraProps['color'];
  }
> = {
  transparent: {
    header: { bg: 'transparent' },
    drawer: { bg: 'white' },
    pointColor: 'black',
    subColor: 'gray.400',
  },
};
