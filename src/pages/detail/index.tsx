import { useRouter } from 'next/dist/client/router';
import Head from 'next/head';
import React from 'react';

import DetailPage from '@components/DetailPage';
import HomeLayout from '@components/common/@Layout/HomeLayout';

function detail() {
  return (
    <>
      <Head>
        <title>똑똑한 개발자 | 상세보기</title>
      </Head>
      <HomeLayout content={<DetailPage />} />
    </>
  );
}

export default detail;
