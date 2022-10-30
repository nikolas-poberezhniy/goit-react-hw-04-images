import { Backdrop, ModalField } from './Modal.styled';
import { Component } from 'react';
import { createPortal } from 'react-dom';
import PropTypes from 'prop-types';

const modalRoot = document.querySelector('#modal-root');

export class Modal extends Component {
  componentDidMount() {
    window.addEventListener('keydown', this.onEscape);
  }
  componentWillUnmount() {
    window.removeEventListener('keydown', this.onEscape);
  }
  handleBackdropClick = ({ currentTarget, target }) => {
    if (currentTarget === target) {
      this.props.onClose();
    }
  };
  onEscape = ({ key }) => {
    if (key === 'Escape') {
      this.props.onClose();
    }
  };

  render() {
    return createPortal(
      <Backdrop onClick={this.handleBackdropClick}>
        <ModalField>
          <img alt="modal view" src={this.props.image} />
        </ModalField>
      </Backdrop>,
      modalRoot
    );
  }
}

Modal.propTypes = {
  onClose: PropTypes.func.isRequired,
  image: PropTypes.string.isRequired,
};
