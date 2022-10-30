import { Component } from 'react';
import { Searchbar } from './Searchbar/Searchbar';
import { getImages } from 'api/getImages';
import { ButtonTempl } from './Button/Button';
import { MagnifyingGlass } from 'react-loader-spinner';
import { ImageGallery } from './ImageGallery/ImageGallery';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export class App extends Component {
  state = { currentPage: 1, api: [], isLoading: false };

  querySubmit = query => {
    const newQueryState = { searchQuery: query, currentPage: 1, api: [] };

    this.state.searchQuery !== query ? this.setState(newQueryState) : toast.error('Same request');
  };

  pageIncrement = () => {
    this.setState(({ currentPage: prevPage }) => ({
      currentPage: prevPage + 1,
    }));
  };

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
          api: api.length ? [...receivedImages] : [...prevApi, ...receivedImages],
          totalHits,
        });
      } catch (e) {
        return toast.error('Something go wrong');
      } finally {
        this.setState({
          isLoading: false,
        });
      }
    }
  }

  render() {
    const { api, isLoading, totalHits } = this.state;

    return (
      <>
        <Searchbar onSubmit={this.querySubmit} />
        {api.length > 0 && <ImageGallery arrResponse={api} />}
        {isLoading && <MagnifyingGlass />}
        {api.length > 0 && api.length < totalHits && (
          <ButtonTempl onClick={this.pageIncrement}>Load more</ButtonTempl>
        )}
        <ToastContainer />
      </>
    );
  }
}
