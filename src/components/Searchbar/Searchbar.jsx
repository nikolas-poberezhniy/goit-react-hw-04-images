import { Component } from 'react';
import { Input, Form, FormBtn, Head } from './SearchBar.styled';
import { HiMagnifyingGlass } from 'react-icons/hi2';
import PropTypes from 'prop-types';
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
      <Head className="searchbar">
        <Form onSubmit={this.handleSubmit} value={this.state.inputField}>
          <FormBtn type="submit">
            <HiMagnifyingGlass color="#0288d1" size={22} />
          </FormBtn>

          <Input
            value={this.state.inputField}
            onChange={this.onInputChange}
            name="inputField"
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
          />
        </Form>
      </Head>
    );
  }
}

Searchbar.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};
