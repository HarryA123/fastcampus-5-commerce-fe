import React from 'react';

import HomeHeader from './_fragments/HomeHeader';
import HomeFooter from './_fragments/HomeHeader/HomeFooter';

interface HomeLayoutProps {
  header?: JSX.Element;
  footer?: JSX.Element;
  content?: JSX.Element;
}

const HomeLayout = ({
  //
  header = <HomeHeader />,
  footer = <HomeFooter />,
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
