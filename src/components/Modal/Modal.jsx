import { Component } from "react";
import { createPortal } from 'react-dom';

import { Overlay, ModalStyles } from './Modal.styled';

const modalRoot = document.querySelector('#modal-root');

class Modal extends Component {

    componentDidMount() {
        document.addEventListener('keydown', this.handleKeyEsc);
    }

    componentWillUnmount() {
        document.removeEventListener('keydown', this.handleKeyEsc);
    }

    handleKeyEsc = (e) => {
        if (e.code === 'Escape') this.props.toogleModal();
    }

    render() {
        const { url, alt, toogleModal } = this.props;
        return createPortal(
            <Overlay onClick={toogleModal}>
                <ModalStyles>
                    <img src={url} alt={alt} />
                </ModalStyles>
            </Overlay>
            , modalRoot)
    }
}

export default Modal;
