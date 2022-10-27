import { Icon, IconProps } from '@chakra-ui/react';

const PlusIcon = ({ ...props }: IconProps) => {
  return (
    <Icon w="25px" h="25px" viewBox="0 0 25 25" fill="none" {...props}>
      <path d="M17 12H8V13H17V12Z" fill="currentColor" />
      <path d="M13 17V8H12V17H13Z" fill="currentColor" />
    </Icon>
  );
};

export default PlusIcon;
