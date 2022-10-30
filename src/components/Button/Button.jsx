import { Button } from './Button.styled';
import PropTypes from 'prop-types';

export const ButtonTempl = ({ onClick, children }) => {
  return <Button onClick={onClick}>{children}</Button>;
};

ButtonTempl.propTypes = {
  onClick: PropTypes.func.isRequired,
  children: PropTypes.string.isRequired,
};
