import { useRouter } from 'next/dist/client/router';
import Head from 'next/head';
import React from 'react';

import CartPage from '@components/LoginPage';
import HomeLayout from '@components/common/@Layout/HomeLayout';

function Cart() {
  return (
    <>
      <Head>
        <title> 똑똑한 개발자 | 장바구니</title>
      </Head>
      <HomeLayout content={<CartPage />} />
    </>
  );
}

export default Cart;
