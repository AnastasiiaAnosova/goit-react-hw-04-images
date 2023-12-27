import { Component } from "react";
import { fetchImagesWithQuery } from '../services/api';
import Loader from '../Loader/Loader';
import Searchbar from "components/Searchbar/Searchbar";
import { Notify } from 'notiflix/build/notiflix-notify-aio';
import Button from "components/Button/Button";
import ImageGallery from "components/ImageGallery/ImageGallery";
import { AppContainer } from "./App.styled";
import Modal from "components/Modal/Modal";

class App extends Component {

  state = {
    images: null,
    searchQuery: '',
    isLoading: false,
    page: 1,
    error: null,
    showLoadMore: false,
    showModal: false,
    largeImageURL: '',
    alt: '',
  }

  handleSetSearchQuery = (searchQuery) => {
    this.setState({
      searchQuery,
      images: null,
      page: 1,
      showLoadeMore: false
    });
  }

  componentDidUpdate(_, prevState) {
    if (
      this.state.searchQuery !== prevState.searchQuery ||
      this.state.page !== prevState.page
    ) this.fetchImages();
  }

  fetchImages = async () => {
    const { searchQuery, page } = this.state;
    try {
      this.setState({ isLoading: true });
      const { hits, totalHits } = await fetchImagesWithQuery(searchQuery, page);
      console.log("images-hits after query:", hits);
      if (hits.length === 12) {
        page === 1 && Notify.success(`Hooray! We found ${totalHits} images.`, {
          timeout: 6000,
        },);
      } else if (hits.length < 12) {
        Notify.warning(`Hm! We found only ${hits.length} images.`, {
          timeout: 6000,
        },);
      } else {
        Notify.failure('Sorry, there are no images matching your search query. Please try again.', {
          timeout: 6000,
        },);
      }
      this.setState((prev) => ({
        images: prev.images ? [...prev.images, ...hits] : hits,
        showLoadMore: page < Math.ceil(totalHits / 12),
      }))
    } catch (error) {
      this.setState({ error });
      Notify.failure('Sorry, some error occurred. Please try again.', {
        timeout: 6000,
      },);
    } finally {
      this.setState({ isLoading: false });
    }
  }

  handleLoadNextImages = () => {
    this.setState(prev => ({ page: prev.page + 1 }));
  }

  handleToogleModal = (url, alt) => {
    this.setState(prev => ({
      showModal: !prev.showModal,

      largeImageURL: prev.showModal ? '' : url,
      alt: prev.showModal ? '' : alt,
    }))
    // this.setUrltoModal(url, alt);
  }

  // setUrltoModal = (url, alt) => {
  //   this.state.showModal ? this.setState({ largeImageURL: url, alt }) : this.setState({ largeImageURL: '', alt: '' });
  // }

  render() {
    const { isLoading, showLoadMore, images, showModal, largeImageURL, alt } = this.state;
    console.log("large image url: ", largeImageURL, "alt: ", alt, "show modal: ", showModal);
    return (
      <AppContainer>
        <Searchbar submit={this.handleSetSearchQuery} />
        {isLoading && <Loader />}
        {images && (<ImageGallery images={images} toogleModal={this.handleToogleModal} />)}
        {showLoadMore && <Button loadMoreClick={this.handleLoadNextImages} />}
        {showModal && <Modal url={largeImageURL} alt={alt} toogleModal={this.handleToogleModal} />}

      </AppContainer>
    );
  }
}

export default App;

