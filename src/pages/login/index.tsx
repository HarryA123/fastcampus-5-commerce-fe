import { useRouter } from 'next/dist/client/router';
import Head from 'next/head';
import React from 'react';

import LoginPage from '@components/LoginPage';
import LoginLayout from '@components/common/@Layout/LoginLayout';

function Login() {
  return (
    <>
      <Head>
        <title>똑똑한 개발자 | 메인</title>
      </Head>
      <LoginLayout content={<LoginPage />} />
    </>
  );
}

export default Login;
