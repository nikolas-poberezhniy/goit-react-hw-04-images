import styled from 'styled-components';

export const ImageGalleryItemStyle = styled.li`
  list-style-type: none;
  flex: 1 0 21%; /* explanation below */
  margin: 10px;
  height: 200px;
  img {
    object-fit: cover;
    height: 100%;
    width: 100%;
    cursor: pointer;
  }
`;
