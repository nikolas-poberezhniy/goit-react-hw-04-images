import { Button } from './Button.styled';

export const ButtonTempl = ({ onClick, children }) => {
  return <Button onClick={onClick}>{children}</Button>;
};
