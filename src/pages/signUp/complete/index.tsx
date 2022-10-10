// import { useRouter } from 'next/dist/client/router';
import Head from 'next/head';
import React from 'react';

import SignUpCompletePage from '@components/SignUpCompletePage';

function Complete() {
  return (
    <>
      <Head>
        <title>똑똑한 개발자 | 회원가입 완료</title>
      </Head>
      <SignUpCompletePage />
    </>
  );
}

export default Complete;
