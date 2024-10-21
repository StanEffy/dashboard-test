import React from 'react';
import {User} from "../types/context/UserContext";
import styles from './UserCard.module.scss';

const UserCard: React.FC<{ user: User }> = ({ user }) => {
    const { name, email, phone, website, address } = user;

    return (
        <li className={styles.userCard}>
            <h2>{name}</h2>
            <p><strong>Email:</strong> {email}</p>
            <p><strong>Phone:</strong> {phone}</p>
            <p><strong>Website:</strong> <a href={`https://${website}`} target="_blank" rel="noopener noreferrer">{website}</a></p>
            <p><strong>Address:</strong> {address.street}, {address.suite}, {address.city}, {address.zipcode}</p>
        </li>
    );
};

export default UserCard;