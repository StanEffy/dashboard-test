import React from 'react';
import {User} from "../types/context/UserContext";
import styles from './UserCard.module.scss';

const UserCard: React.FC<{ user: User }> = ({ user }) => {
    const { name, email, phone, website, address } = user;

    return (
        <li
            className={styles.userCard}
            role="article"
            aria-labelledby={`user-name-${name.toLowerCase().replace(/\s+/g, '-')}`}
        >
            <h2
                id={`user-name-${name.toLowerCase().replace(/\s+/g, '-')}`}
                className={styles.userName}
            >
                {name}
            </h2>

            <dl className={styles.userDetails}>
                <div className={styles.detailGroup}>
                    <dt className={styles.detailLabel}>Email</dt>
                    <dd className={styles.detailValue}>
                        <a
                            href={`mailto:${email}`}
                            aria-label={`Send email to ${name}`}
                        >
                            {email}
                        </a>
                    </dd>
                </div>

                <div className={styles.detailGroup}>
                    <dt className={styles.detailLabel}>Phone</dt>
                    <dd className={styles.detailValue}>
                        <a
                            href={`tel:${phone.replace(/\D+/g, '')}`}
                            aria-label={`Call ${name}`}
                        >
                            {phone}
                        </a>
                    </dd>
                </div>

                <div className={styles.detailGroup}>
                    <dt className={styles.detailLabel}>Website</dt>
                    <dd className={styles.detailValue}>
                        <a
                            href={`https://${website}`}
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label={`Visit ${name}'s website (opens in new tab)`}
                        >
                            {website}
                        </a>
                    </dd>
                </div>

                <div className={styles.detailGroup}>
                    <dt className={styles.detailLabel}>Address</dt>
                    <dd className={styles.detailValue}>
                        {address.street}, {address.suite},<br />
                        {address.city}, {address.zipcode}
                    </dd>
                </div>
            </dl>
        </li>
    );
};

export default UserCard;