import { Icon, IconProps } from '@chakra-ui/react';

const UploadIcon = ({ ...props }: IconProps) => {
  return (
    <Icon width="50" height="50" viewBox="0 0 50 50" fill="none" {...props}>
      <path
        d="M25 16V34"
        stroke="#FF710B"
        strokeWidth="2"
        strokeLinecap="round"
      />
      <path
        d="M34 25H16"
        stroke="#FF710B"
        strokeWidth="2"
        strokeLinecap="round"
      />
    </Icon>
  );
};

export default UploadIcon;

{
  /* <svg
  width="50"
  height="50"
  viewBox="0 0 50 50"
  fill="none"
  xmlns="http://www.w3.org/2000/svg"
> */
}
