import React from 'react';
import ReactDOM from 'react-dom/client';
import './styles/main.scss';
import App from './App';
import { UserProvider } from "./context/UserConext"

ReactDOM.createRoot(document.getElementById('app') as HTMLElement).render(
    <React.StrictMode>
        <UserProvider>
            <App />
        </UserProvider>
    </React.StrictMode>
);