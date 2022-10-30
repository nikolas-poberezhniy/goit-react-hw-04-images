import { ImageGalleryList } from './ImageGallery.styled';
import { ImageGalleryItem } from 'components/ImageGalleryItem/ImageGalleryItem';
import PropTypes from 'prop-types';
export const ImageGallery = ({ arrResponse, onClick }) => {
  return (
    <ImageGalleryList>
      {arrResponse.map(({ id, largeImageURL, webformatURL }) => {
        return (
          <ImageGalleryItem
            key={id}
            src={webformatURL}
            onClick={onClick}
            alt={id}
            largeImageURL={largeImageURL}
          />
        );
      })}
    </ImageGalleryList>
  );
};

ImageGallery.propTypes = {
  onClick: PropTypes.func.isRequired,
  arrResponse: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      largeImageURL: PropTypes.string.isRequired,
      webformatURL: PropTypes.string.isRequired,
    })
  ),
};
