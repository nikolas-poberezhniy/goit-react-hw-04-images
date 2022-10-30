import { ImageGalleryItemStyle } from './ImageGalleryItem.styled';

export const ImageGalleryItem = ({ src, alt }) => {
  return (
    <ImageGalleryItemStyle>
      <img src={src} alt={alt} />
    </ImageGalleryItemStyle>
  );
};
