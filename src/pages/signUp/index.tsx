// import { useRouter } from 'next/dist/client/router';
import Head from 'next/head';
import React from 'react';

import FormPage from '@components/FormPage';
import SignUpPage from '@components/SignUpPage';
import SignUpLayout from '@components/common/@Layout/SignUpLayout';

function SignUp() {
  return (
    <>
      <Head>
        <title>똑똑한 개발자 | 회원가입</title>
      </Head>
      <SignUpLayout content={<FormPage />} />
    </>
  );
}

export default SignUp;
