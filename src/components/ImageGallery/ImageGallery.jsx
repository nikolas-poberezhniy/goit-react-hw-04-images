import { ImageGalleryList } from './ImageGallery.styled';
import { ImageGalleryItem } from 'components/ImageGalleryItem/ImageGalleryItem';
export const ImageGallery = ({ arrResponse }) => {
  return (
    <ImageGalleryList>
      {arrResponse.map(({ id, largeImageURL, webformatURL, onClick }) => {
        console.log(webformatURL);
        return <ImageGalleryItem key={id} src={webformatURL} onClick={onClick} alt={id} />;
      })}
    </ImageGalleryList>
  );
};
