import ReactDOM from 'react-dom';
import { Fragment } from 'react';
import Card from './Card.jsx';
import Button from './Button.jsx';
import classes from './ErrorModal.module.css';

const Backdrop = (props) => {
    return <div className={classes.backdrop} onClick={props.onDismiss} />;
};

const ModalOverlay = (props) => {
    return (
        <Card className={classes.modal}>
            <header className={classes.header}>
                <h2>{props.title}</h2>
            </header>
            <div className={classes.content}>
                <p>{props.message}</p>
            </div>
            <footer className={classes.actions}>
                <Button onClick={props.onDismiss}>OK</Button>
            </footer>
        </Card>
    );
};

const ErrorModal = (props) => {
    return (
        <Fragment>
            {ReactDOM.createPortal(<Backdrop onDismiss={props.onDismiss}/>, document.getElementById('backdrop-root'))}
            {ReactDOM.createPortal(<ModalOverlay title={props.title} message={props.message} onDismiss={props.onDismiss}/>, document.getElementById('overlay-root'))}
        </Fragment>
    )
};

export default ErrorModal;