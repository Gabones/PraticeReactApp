import Card from './Card.jsx';
import Button from './Button.jsx';
import './ErrorModal.css';

const ErrorModal = (props) => {
    return(
    <div>
        <div className="backdrop" onClick={props.onDismiss}></div>
        <Card className="modal">
            <header className="header">
                <h2>{props.title}</h2>
            </header>
            <div className="content">
                <p>{props.message}</p>
            </div>
            <footer className="actions">
                <Button onClick={props.onDismiss}>OK</Button>
            </footer>
        </Card>
    </div>
    )
};

export default ErrorModal;