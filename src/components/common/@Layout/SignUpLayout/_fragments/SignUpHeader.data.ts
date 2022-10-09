import { ChakraProps } from '@chakra-ui/react';

export type SignUpHeaderVariantType = 'light';
export const SignUp_HEADER_VARIANTS: Record<
  SignUpHeaderVariantType,
  {
    header: ChakraProps;
    drawer: ChakraProps;
    pointColor: ChakraProps['color'];
    subColor: ChakraProps['color'];
  }
> = {
  light: {
    header: { bg: 'white' },
    drawer: { bg: 'white' },
    pointColor: 'white',
    subColor: 'secondary.500',
  },
};
