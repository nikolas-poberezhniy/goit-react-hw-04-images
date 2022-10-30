import { Component } from 'react';
import { Searchbar } from './Searchbar/Searchbar';
import { getImages } from 'api/getImages';
import { ButtonTempl } from './Button/Button';
import { MagnifyingGlass } from 'react-loader-spinner';
import { ImageGallery } from './ImageGallery/ImageGallery';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Modal } from './Modal/Modal';

export class App extends Component {
  state = { currentPage: 1, api: [], isLoading: false, modalShow: false };

  async componentDidUpdate(_, { searchQuery: prevQuery, currentPage: prevPage, api: prevApi }) {
    const { searchQuery, currentPage, api } = this.state;

    if (prevQuery !== searchQuery || prevPage !== currentPage) {
      this.setState({ isLoading: true });

      try {
        const { hits: receivedImages, totalHits } = await getImages({
          q: searchQuery,
          page: currentPage,
        });

        if (!receivedImages.length) {
          return toast.error('Image not found');
        }

        this.setState({
          api: api.length === 0 ? [...receivedImages] : [...prevApi, ...receivedImages],
          totalHits,
        });
      } catch (e) {
        return toast.error('Something go wrong');
      } finally {
        this.setState({ isLoading: false });
      }
    }
  }

  querySubmit = query => {
    if (query) {
      const newQueryState = { searchQuery: query, currentPage: 1, api: [] };
      this.state.searchQuery !== query ? this.setState(newQueryState) : toast.error('Same request');
      return;
    }
    toast.error('Input empty');
  };

  pageIncrement = () => {
    this.setState(({ currentPage: prevPage }) => ({
      currentPage: prevPage + 1,
    }));
  };

  showModal = image => {
    this.setState({ modalImage: image });
    this.toggleModal();
  };

  toggleModal = () => {
    this.setState(({ modalShow }) => ({
      modalShow: !modalShow,
    }));
  };

  render() {
    const { api, isLoading, totalHits, modalShow } = this.state;

    return (
      <>
        <Searchbar onSubmit={this.querySubmit} />
        {api.length > 0 && <ImageGallery arrResponse={api} onClick={this.showModal} />}
        {isLoading && <MagnifyingGlass wrapperStyle={{ marginLeft: '50%' }} />}
        {api.length > 0 && api.length < totalHits && (
          <ButtonTempl onClick={this.pageIncrement}>Load more</ButtonTempl>
        )}
        {modalShow && <Modal onClose={this.toggleModal} image={this.state.modalImage} />}
        <ToastContainer />
      </>
    );
  }
}
