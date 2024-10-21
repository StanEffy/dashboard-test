import React, { useState } from 'react';
import styles from './UserFilters.module.scss'

interface UserFiltersProps {
    onFilterChange: (filterText: string) => void;
    onSortChange: (sortKey: string, sortOrder: 'asc' | 'desc') => void;
}

const UserFilters: React.FC<UserFiltersProps> = ({ onFilterChange, onSortChange }) => {
    const [filterText, setFilterText] = useState('');
    const [sortOrder, setSortOrder] = useState<'asc' | 'desc'>('asc');
    const [sortKey, setSortKey] = useState<string>('name');

    const handleFilterChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setFilterText(e.target.value);
        onFilterChange(e.target.value);
    };

    const handleSortChange = (key: string) => {
        const order = sortOrder === 'asc' ? 'desc' : 'asc';
        setSortKey(key);
        setSortOrder(order);
        onSortChange(key, order);
    };

    return (
        <div className={styles.userFilters}>
            <input
                type="text"
                placeholder="Filter users by name or email..."
                value={filterText}
                onChange={handleFilterChange}
            />

            <div className={styles.sortButtons}>
                <button onClick={() => handleSortChange('name')}>
                    Sort by Name ({sortOrder === 'asc' && sortKey === 'name' ? '▲' : '▼'})
                </button>
                <button onClick={() => handleSortChange('email')}>
                    Sort by Email ({sortOrder === 'asc' && sortKey === 'email' ? '▲' : '▼'})
                </button>
            </div>
        </div>
    );
};

export default UserFilters;