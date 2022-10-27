import { Icon, IconProps } from '@chakra-ui/react';

const MinusIcon = ({ ...props }: IconProps) => {
  return (
    <Icon w="25px" h="25px" viewBox="0 0 25 25" fill="none" {...props}>
      <path d="M17 12H8V13H17V12Z" fill="#4A4D55" />
    </Icon>
  );
};

export default MinusIcon;
