import React, {useContext, useEffect, useState} from 'react';
import { UserContext } from './context/UserConext';

import UserList from "./components/UserList";
import UserFilters from "./components/UserFilters";

const App: React.FC = () => {
    const userContext = useContext(UserContext);

    const [filteredUsers, setFilteredUsers] = useState(userContext?.users || []);
    const [filterText, setFilterText] = useState('');
    const [sortKey, setSortKey] = useState<string>('name');
    const [sortOrder, setSortOrder] = useState<'asc' | 'desc'>('asc');

    useEffect(() => {
        if (!userContext) return;

        //Not really effective but it is some 10 elements on the front side
        //I wouldnt do it this way in a real request
        let users = userContext.users.filter((user) =>
            [user.name, user.email, user.website, user.phone, user.address.street, user.address.city, user.address.zipcode].some((field) =>
                field.toLowerCase().includes(filterText.toLowerCase())
            )
        );

        users = users.sort((a, b) => {
            const fieldA = a[sortKey].toLowerCase();
            const fieldB = b[sortKey].toLowerCase();
            if (fieldA < fieldB) return sortOrder === 'asc' ? -1 : 1;
            if (fieldA > fieldB) return sortOrder === 'asc' ? 1 : -1;
            return 0;
        });

        setFilteredUsers(users);
    }, [userContext, filterText, sortKey, sortOrder]);

    const handleFilterChange = (filterText: string) => {
        setFilterText(filterText);
    };

    const handleSortChange = (key: string, order: 'asc' | 'desc') => {
        setSortKey(key);
        setSortOrder(order);
    };

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
            <UserFilters onFilterChange={handleFilterChange} onSortChange={handleSortChange} />
            <UserList  users={filteredUsers}/>
        </div>
    );
};

export default App;