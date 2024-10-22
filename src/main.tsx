import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { UserProvider } from "./context/UserConext"
import {ThemeProvider} from "./context/ThemeContext";

ReactDOM.createRoot(document.getElementById('app') as HTMLElement).render(
    <React.StrictMode>
        <ThemeProvider>
            <UserProvider>
                <App />
            </UserProvider>
        </ThemeProvider>
    </React.StrictMode>
);