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

interface DetailPageContentProps extends BoxProps {}

function DetailPageContent({ ...basisProps }: DetailPageContentProps) {
  return <Box bg="gray.100">DetailPage</Box>;
}

export default DetailPageContent;
