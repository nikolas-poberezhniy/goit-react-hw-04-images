import { Component } from 'react';
import { Searchbar } from './Searchbar/Searchbar';
export class App extends Component {
  state = {};

  querySubmit = e => {
    e.preventDefault();
    const searchQuery = e.target.inputField.value;
    this.setState({ searchQuery });
  };

  componentDidUpdate(_, prevState) {
    fetch(
      `https://pixabay.com/api/?key=29483810-e73a753bafa1cfe0ffde3d090&q=${this.state.searchQuery}&page=1&per_page=12`
    )
      .then(e => {
        return e.json();
      })
      .then(e => {
        this.setState({ api: [e.hits] });
      });
  }

  render() {
    const { api } = this.state;
    console.clear();
    return (
      <>
        <Searchbar onSubmit={this.querySubmit} />
        {api && (
          <div>
            {api[0].map(({ id, previewURL }) => {
              return <img key={id} src={previewURL} alt={id}></img>;
            })}
          </div>
        )}
      </>
    );
  }
}
