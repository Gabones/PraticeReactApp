import { useState } from "react";
import Button from "../UI/Button";
import Card from "../UI/Card";
import './AddUser.css'

const AddUser = (props) => {
    const [enteredUsername, setUsername] = useState('');
    const [enteredAge, setAge] = useState('');

    const AddUserHandler = (event) => {
        event.preventDefault();
        if(enteredUsername.trim().length > 0 || enteredAge.trim().length > 0) {
            return;
        }
        if(+enteredAge < 0){
            return;
        }
        console.log(enteredUsername, enteredAge);
        setUsername('');
        setAge('');
    }

    const InputUsernameHandler = (event) => {
        setUsername(event.target.value);
    }

    const InputAgeHandler = (event) => {
        setAge(event.target.value);
    }

    return (
        <Card className="input">
            <form onSubmit={AddUserHandler}>
                <label htmlFor="username">Username</label>
                <input id="username" type="text" value={enteredUsername} onChange={InputUsernameHandler}/>
                <label htmlFor="age">Age</label>
                <input id="age" type="number" value={enteredAge} onChange={InputAgeHandler}/>
                <Button type="submit">Add User</Button>
            </form>
        </Card>
    )
};

export default AddUser