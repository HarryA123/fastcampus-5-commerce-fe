import React from 'react';

import { ContainerProps } from '@chakra-ui/react';

interface LoginLayoutProps {
  content?: JSX.Element;
  containerProps?: ContainerProps;
}

const LoginLayout = ({ content }: LoginLayoutProps) => {
  return <>{content}</>;
};

export default LoginLayout;
