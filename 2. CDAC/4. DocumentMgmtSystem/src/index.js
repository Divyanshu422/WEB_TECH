import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import SideBarToggleProvider from './context/SideBarToggleContext';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <SideBarToggleProvider>
        <App />
    </SideBarToggleProvider>
    
);
