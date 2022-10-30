import { ImageGalleryItemStyle } from './ImageGalleryItem.styled';
import PropTypes from 'prop-types';

export const ImageGalleryItem = ({ src, alt, onClick, largeImageURL }) => {
  return (
    <ImageGalleryItemStyle>
      <img src={src} alt={alt} onClick={() => onClick(largeImageURL)} />
    </ImageGalleryItemStyle>
  );
};

ImageGalleryItem.propTypes = {
  onClick: PropTypes.func.isRequired,
  src: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
  largeImageURL: PropTypes.string.isRequired,
};
