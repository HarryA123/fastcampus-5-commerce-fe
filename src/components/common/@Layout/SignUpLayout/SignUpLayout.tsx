import React from 'react';

import { Container, ContainerProps } from '@chakra-ui/react';

import { LAYOUT } from '@constants/layout';

import SignUpHeader from './_fragments/SignUpHeader';

interface SignUpLayoutProps {
  header?: JSX.Element;
  footer?: JSX.Element;
  content?: JSX.Element;
  containerProps?: ContainerProps;
}

const SignUpLayout = ({
  header = <SignUpHeader />,
  footer,
  containerProps,
  content,
}: SignUpLayoutProps) => {
  return (
    <>
      {header}
      <Container pt={LAYOUT.HEADER.HEIGHT} {...containerProps}>
        {content}
      </Container>
      {footer}
    </>
  );
};

export default SignUpLayout;
