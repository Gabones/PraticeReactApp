import { Fragment, useState } from 'react';
import AddUser from './Components/User/AddUser';
import UsersList from './Components/User/UsersList';

const App = () => {
    const [userList, setUserList] = useState([]);

    const addUserHandler = (uName, uAge) => {
        setUserList((prevUserList) => 
            [...prevUserList, { name: uName, age: uAge , id: prevUserList.length + 1}]
        )
    };

    return (
        <Fragment>
            <AddUser onAddUser={addUserHandler}/>
            <UsersList users={userList} />
        </Fragment>
    );
}

export default App