import React, { useContext } from 'react';
import { UserContext } from './context/UserConext';

const App: React.FC = () => {
    const userContext = useContext(UserContext);

    if (!userContext) {
        return <div>Error: UserContext is undefined!</div>;
    }

    const { users, isLoading, error } = userContext;

    if (isLoading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div>Error: {error}</div>;
    }

    return (
        <div>
            <h1>Header and <span>span</span></h1>
            <ul>
                {users.map((user) => (
                    <li key={user.id}>
                        {user.name} ({user.username}) - {user.email}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default App;