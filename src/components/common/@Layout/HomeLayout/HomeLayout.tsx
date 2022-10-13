import React from 'react';

import { Box, Container, ContainerProps } from '@chakra-ui/react';

import { LAYOUT } from '@constants/layout';

import HomeHeader from './_fragments/HomeHeader';

interface HomeLayoutProps {
  header?: JSX.Element;
  footer?: JSX.Element;
  content?: JSX.Element;
}

const HomeLayout = ({
  //
  header = <HomeHeader />,
  footer,
  content,
}: HomeLayoutProps) => {
  return (
    <>
      {header}
      {content}
      {footer}
    </>
  );
};

export default HomeLayout;
