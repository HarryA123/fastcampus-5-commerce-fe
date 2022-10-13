import React from 'react';
import { Controller, UseFormReturn } from 'react-hook-form';

import { Select } from 'chakra-react-select';

import {
  Box,
  BoxProps,
  Button,
  Flex,
  IconButton,
  Image,
  Input,
  Radio,
  RadioGroup,
  Stack, // Select,
  Text,
} from '@chakra-ui/react';

import CheckLineRegularIcon from '@components/common/@Icons/System/CheckLineRegular';
import CheckedLineIcon from '@components/common/@Icons/System/CheckedLine';
import FormHelper from '@components/common/FormHelper';
import LinkButton from '@components/common/LinkButton';

import { FormDataType } from './_hooks/useExampleForm';

interface FormPageProps extends BoxProps {
  formData: UseFormReturn<FormDataType>;
}

const FormPageView = ({
  formData: {
    register,
    control,
    formState: { errors },
  },
  onSubmit,
  ...basisProps
}: FormPageProps) => {
  return (
    <>
      <Text textStyle="xl" mb="60px" color="gray.900" mt="10px">
        회원가입
      </Text>
      <Flex
        direction="column"
        gap="80px"
        as="form"
        onSubmit={onSubmit}
        {...basisProps}
        mb="50px"
      >
        <Flex direction="column" gap="50px">
          <Text color="gray.900" textStyle="lg" mb="40px">
            회원정보입력
          </Text>
          <Flex justifyContent="center" mb="40px">
            <Image src="/images/form/profilePhoto.png"></Image>
          </Flex>
          <FormHelper label="이름" errorText={errors.username?.message}>
            <Input
              {...register('username')}
              borderColor="black"
              borderRadius="full"
              autoComplete="off"
            />
          </FormHelper>
          <FormHelper label="닉네임" errorText={errors.nickname?.message}>
            <Input
              {...register('nickname')}
              borderColor="black"
              borderRadius="full"
              autoComplete="off"
            />
          </FormHelper>
          <FormHelper label="핸드폰 번호" errorText={errors.phone?.message}>
            <Input
              flexGrow={1}
              {...register('phone')}
              borderColor="black"
              borderRadius="full"
              autoComplete="off"
            />
          </FormHelper>
          <FormHelper label="이메일 주소" errorText={errors.email?.message}>
            <Input
              {...register('email')}
              borderColor="black"
              borderRadius="full"
              autoComplete="off"
            />
          </FormHelper>
        </Flex>
        <Flex direction="column" gap="50px">
          <Text color="gray.900" textStyle="lg">
            추가정보입력(선택)
          </Text>
          <Controller
            control={control}
            name="gender"
            render={({ field: { onChange } }) => (
              <FormHelper
                label="성별"
                errorText={errors.gender?.value?.message}
              >
                <Select
                  isSearchable={false}
                  onChange={onChange}
                  options={[
                    { value: 'men', label: '남자' },
                    { value: 'women', label: '여자' },
                  ]}
                  placeholder="성별을 선택하세요"
                />
              </FormHelper>
            )}
          />

          <Controller
            control={control}
            name="gender"
            render={({ field: { onChange } }) => (
              <FormHelper label="연령대" errorText={errors.age?.value?.message}>
                <Select
                  isSearchable={false}
                  onChange={onChange}
                  options={[
                    { value: '10', label: '10대' },
                    { value: '20', label: '20대' },
                    { value: '30', label: '30대' },
                    { value: '40', label: '40대' },
                    { value: '50', label: '50대' },
                    { value: '60', label: '60대' },
                  ]}
                  placeholder="연령대를 선택하세요"
                />
              </FormHelper>
            )}
          />
        </Flex>
        <Box>
          <Text color="gray.900" textStyle="lg" mb="40px">
            이용약관동의
          </Text>
          <Box h="230px">
            <Flex
              justifyContent="space-between"
              borderBottom="2px"
              borderBottomColor="primary.500"
              alignItems="center"
              h="40px"
            >
              <Text color="primary.500" textStyle="lg">
                아래 약관에 모두 동의합니다.
              </Text>
              <IconButton
                color="gray.400"
                aria-label="Call Sage"
                fontSize="24px"
                size="xl"
                icon={<CheckedLineIcon />}
              />
            </Flex>
            <Flex direction="column" gap="10px" mt="20px">
              {이용약관동의.map((item, idx) => {
                return (
                  <Flex
                    key={idx}
                    justifyContent="space-between"
                    alignItems="center"
                    h="50px"
                  >
                    <Text as="ins" color="gray.600" textStyle="sub">
                      {item.title}
                    </Text>
                    <IconButton
                      color="gray.400"
                      aria-label="Call Sage"
                      fontSize="24px"
                      size="xl"
                      icon={<CheckLineRegularIcon />}
                    />
                  </Flex>
                );
              })}
            </Flex>
          </Box>
        </Box>
        <LinkButton
          href={{
            pathname: '/signUp/[slug]',
            query: { slug: 'complete' },
          }}
          w="100%"
          h="50px"
          borderRadius="full"
          bg="primary.500"
          type="submit"
        >
          <Text textStyle="lg" color="white">
            회원가입 완료
          </Text>
        </LinkButton>
      </Flex>
    </>
  );
};

export default FormPageView;

const 이용약관동의 = [
  { title: '서비스 이용을 위한 필수약관 동의' },
  { title: '개인정보수집 및 이용, 제3자 제공 동의' },
  { title: '마케팅 정보 수신 및 맞춤형 광고 동의(선택)' },
];
