import { Fragment } from 'react';
import AddUser from './Components/User/AddUser';
import UsersList from './Components/User/UsersList';

const App = () => {
    return (
        <Fragment>
            <AddUser/>
            <UsersList users={[]} />
        </Fragment>
    )
}

export default App