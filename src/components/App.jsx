import { Component, useState, useEffect } from 'react';
import { Searchbar } from './Searchbar/Searchbar';
import { getImages } from 'api/getImages';
import { ButtonTempl } from './Button/Button';
import { MagnifyingGlass } from 'react-loader-spinner';
import { ImageGallery } from './ImageGallery/ImageGallery';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Modal } from './Modal/Modal';

export function App() {
  const [currentPage, setCurrentPage] = useState(1);
  const [api, setApi] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [modalShow, setModalShow] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [totalHits, setTotalHits] = useState('');
  const [modalImage, setModalImage] = useState('');

  useEffect(() => {
    searchQuery &&
      (async () => {
        try {
          setIsLoading(true);
          const { hits: receivedImages, totalHits } = await getImages({
            q: searchQuery,
            page: currentPage,
          });
          console.log(receivedImages);

          if (!receivedImages.length) {
            return toast.error('Image not found');
          }

          setApi(prev => [...prev, ...receivedImages]);
          setTotalHits(totalHits);
        } catch (e) {
          console.log(e);
          return toast.error('Something go wrong');
        } finally {
          setIsLoading(false);
        }
      })();
  }, [currentPage, searchQuery]);

  const querySubmit = query => {
    if (query) {
      const newQueryState = () => {
        setSearchQuery(query);
        setCurrentPage(1);
        setApi([]);
      };
      searchQuery !== query ? newQueryState() : toast.error('Same request');
      setApi([]);
      return;
    }
    toast.error('Input empty');
  };

  const pageIncrement = () => {
    setCurrentPage(prev => prev + 1);
  };

  const showModal = image => {
    setModalImage(image);
    toggleModal();
  };

  const toggleModal = () => {
    setModalShow(prev => !prev);
  };

  return (
    <>
      <Searchbar onSubmit={querySubmit} />
      {api.length > 0 && <ImageGallery arrResponse={api} onClick={showModal} />}
      {isLoading && <MagnifyingGlass wrapperStyle={{ marginLeft: '50%' }} />}
      {api.length > 0 && api.length < totalHits && (
        <ButtonTempl onClick={pageIncrement}>Load more</ButtonTempl>
      )}
      {modalShow && <Modal onClose={toggleModal} image={modalImage} />}
      <ToastContainer />
    </>
  );
}
