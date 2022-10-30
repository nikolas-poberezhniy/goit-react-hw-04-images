import { Backdrop, ModalField } from './Modal.styled';
import { Component } from 'react';
import { createPortal } from 'react-dom';

const modalRoot = document.querySelector('#modal-root');

export class Modal extends Component {
  componentDidMount() {
    window.addEventListener('keydown', this.onEscape);
  }

  componentWillUnmount() {
    window.removeEventListener('keydown', this.onEscape);
  }

  onEscape = ({ key }) => {
    if (key === 'Escape') {
      this.props.onClose();
    }
  };

  handleBackdropClick = ({ currentTarget, target }) => {
    if (currentTarget === target) {
      this.props.onClose();
    }
  };

  render() {
    return createPortal(
      <Backdrop onClick={this.handleOverlayClick}>
        <ModalField>
          <img src={this.props.image} alt="big" />
        </ModalField>
      </Backdrop>,
      modalRoot
    );
  }
}
