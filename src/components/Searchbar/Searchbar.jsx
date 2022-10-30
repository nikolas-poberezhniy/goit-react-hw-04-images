import { Component } from 'react';
export class Searchbar extends Component {
  state = { inputField: '' };

  onInputChange = event => {
    this.setState({ [event.target.name]: event.currentTarget.value });
  };
  stateReset = () => {
    this.setState({ inputField: '' });
  };

  handleSubmit = e => {
    e.preventDefault();
    this.props.onSubmit(this.state.inputField);
    this.stateReset();
  };

  render() {
    return (
      <header className="searchbar">
        <form
          onSubmit={this.handleSubmit}
          className="form"
          value={this.state.inputField}
        >
          <button type="submit" className="button">
            <span className="button-label">Search</span>
          </button>

          <input
            value={this.state.inputField}
            onChange={this.onInputChange}
            name="inputField"
            className="input"
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
          />
        </form>
      </header>
    );
  }
}
