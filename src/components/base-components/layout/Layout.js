import React from 'react';
import './Layout.css';
import AppNavbar from '../app-navbar/AppNavbar';

const Layout = ({ children }) => (
    <>
        <AppNavbar />
        <main>{children}</main>
    </>
);

export default Layout;