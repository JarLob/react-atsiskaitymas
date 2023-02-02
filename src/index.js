import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import { PostProvider } from './contexts/PostContext';
import { UserProvider } from './contexts/UserContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <BrowserRouter>
        <UserProvider>
        <PostProvider>
            <App />
        </PostProvider>
        </UserProvider>
    </BrowserRouter>
);

