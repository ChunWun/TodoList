import React from "react";
import styles from "./Modal.module.css";
import ReactDOM from 'react-dom';

const BackDrop = (props) => {
    return <div className={styles.backdrop} onClick={props.onClick}></div>
}

const ModalOverlay = (props) => {
    return (
        <div className={styles.modal}>
            <div className={styles.content}>{props.children}</div>
        </div>
    );
};

// using portal to set this dom to outside
const portalElement = document.getElementById('overlays');

const Modal = (props) => {
    return (
        <React.Fragment>
            {ReactDOM.createPortal(<BackDrop onClick={props.onClick} />, portalElement)}
            {ReactDOM.createPortal(<ModalOverlay> {props.children}</ModalOverlay>, portalElement)}
        </React.Fragment>
    );
}


export default Modal;