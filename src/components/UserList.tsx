import React from 'react';
import UserCard from './UserCard';
import {User} from "../types/context/UserContext";
import styles from './UserList.module.scss';


interface UserCardsProps {
    users: User[];
}

const UserList: React.FC<UserCardsProps> = ({ users }) => {
    return (
        <ul className={styles.userList}>
            {users.map((user) => (
                <UserCard key={user.id} user={user} />
            ))}
        </ul>
    );
};

export default UserList;