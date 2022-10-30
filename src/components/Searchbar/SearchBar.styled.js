import styled from 'styled-components';
export const Head = styled.header`
  top: 0;
  left: 0;
  position: sticky;
  z-index: 99;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 20px;
  color: #fff;
  background-color: #0288d1;
`;

export const Form = styled.form`
  display: flex;
  align-items: center;
  width: 500px;
  background-color: #fff;
  border-radius: 5px;
  overflow: hidden;
`;

export const FormBtn = styled.button`
  display: inline-block;
  width: 50px;
  height: 50px;
  border: 0;
  border-radius: 5px;
  cursor: pointer;
  :hover {
    opacity: 1;
  }
`;

export const Input = styled.input`
  line-height: 1.5;
  display: inline-block;
  width: 100%;
  font-size: 22px;
  border: none;
  outline: none;
  padding: 5px;
  ::placeholder {
    font-size: 20px;
  }
`;
