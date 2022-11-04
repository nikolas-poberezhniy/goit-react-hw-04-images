import { Component, useState } from 'react';
import { Input, Form, FormBtn, Head } from './SearchBar.styled';
import { HiMagnifyingGlass } from 'react-icons/hi2';
import PropTypes from 'prop-types';

export function Searchbar({ onSubmit }) {
  const [inputField, setInputField] = useState('');

  const onInputChange = ({ target: { value } }) => {
    setInputField(value);
  };

  const stateReset = () => {
    setInputField('');
  };

  const handleSubmit = e => {
    e.preventDefault();
    onSubmit(inputField);
    stateReset();
  };

  return (
    <Head className="searchbar">
      <Form onSubmit={handleSubmit}>
        <FormBtn type="submit">
          <HiMagnifyingGlass color="#0288d1" size={22} />
        </FormBtn>

        <Input
          value={inputField}
          onChange={onInputChange}
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

Searchbar.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};
