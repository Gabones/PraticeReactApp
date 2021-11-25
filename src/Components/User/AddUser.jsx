import { useState } from "react";
import Button from "../UI/Button";
import Card from "../UI/Card";
import ErrorModal from "../UI/ErrorModal";
import './AddUser.css'

const AddUser = (props) => {
    const [enteredUsername, setUsername] = useState('');
    const [enteredAge, setAge] = useState('');
    const [error, setError] = useState();

    const AddUserHandler = (event) => {
        event.preventDefault();
        if (enteredUsername.trim().length === 0 || enteredAge.trim().length === 0) {
            setError({
                title: 'Invalid input',
                message: 'Please enter a valid name and age (non-empty values).'
            });
            return;
        }
        if (+enteredAge < 0) {
            setError({
                title: 'Invalid Age',
                message: 'Please enter a valid age (greater than zero).'
            });
            return;
        }
        console.log(`chamou: ${enteredUsername}, ${enteredAge}`);
        props.onAddUser(enteredUsername, enteredAge);
        setUsername('');
        setAge('');
    };

    const InputUsernameHandler = (event) => {
        setUsername(event.target.value);
    };

    const InputAgeHandler = (event) => {
        setAge(event.target.value);
    };

    const errorHandler = () => {
        setError(null);
    };

    return (
        <div>
            {error && <ErrorModal title={error.title} message={error.message} onDismiss={errorHandler}/>}
            <Card className="input">
                <form onSubmit={AddUserHandler}>
                    <label htmlFor="username">Username</label>
                    <input id="username" type="text" value={enteredUsername} onChange={InputUsernameHandler} />
                    <label htmlFor="age">Age</label>
                    <input id="age" type="number" value={enteredAge} onChange={InputAgeHandler} />
                    <Button type="submit">Add User</Button>
                </form>
            </Card>
        </div>
    );
};

export default AddUser