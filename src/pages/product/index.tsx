import { useRouter } from 'next/dist/client/router';
import Head from 'next/head';
import React from 'react';

import ProductPage from '@components/ProductPage';
import HomeLayout from '@components/common/@Layout/HomeLayout';

ProductPage;

function Login() {
  return (
    <>
      <Head>
        <title>똑똑한 개발자 | 상품 보기</title>
      </Head>
      <HomeLayout content={<ProductPage />} />
    </>
  );
}

export default Login;
