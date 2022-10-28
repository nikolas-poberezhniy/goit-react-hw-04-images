import { Component } from 'react';

export class App extends Component {
  state = {};

  async componentDidMount() {
    fetch(
      'https://pixabay.com/api/?key=29483810-e73a753bafa1cfe0ffde3d090&q=dog&page=1&per_page=12'
    )
      .then(e => {
        return e.json();
      })
      .then(e => {
        this.setState({ api: [e.hits] });
      });
  }

  componentDidUpdate() {}
  render() {
    const { api } = this.state;

    return (
      <div>
        {api &&
          api[0].map(({ id, previewURL }) => {
            return <img key={id} src={previewURL} alt={id}></img>;
          })}
      </div>
    );
  }
}
