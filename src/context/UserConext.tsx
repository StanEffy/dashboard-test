import React, { createContext, useState, useEffect, ReactNode } from 'react';
import {User, UserContextProps} from "../types/context/UserContext";
export const UserContext = createContext<UserContextProps | undefined>(undefined);

// Create a provider component
interface UserProviderProps {
    children: ReactNode;
}

export const UserProvider: React.FC<UserProviderProps> = ({ children }) => {
    const [users, setUsers] = useState<User[]>([]);
    const [isLoading, setIsLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const fetchUsers = async () => {
            try {
                const response = await fetch('https://jsonplaceholder.typicode.com/users');
                if (!response.ok) {
                    throw new Error('Failed to fetch users');
                }
                const data = await response.json();
                setUsers(data);
            } catch (err) {
                setError(err.message);
            } finally {
                setIsLoading(false);
            }
        };

        fetchUsers();
    }, []);

    return (
        <UserContext.Provider value={{ users, isLoading, error }}>
            {children}
        </UserContext.Provider>
    );
};