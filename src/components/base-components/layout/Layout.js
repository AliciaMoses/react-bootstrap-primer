import React from 'react';
import './Layout.css';
import AppNavbar from '../app-navbar/AppNavbar';


const Layout = ({ children }) => (
    <>
        <AppNavbar />

        <main style={{ paddingBottom: '80px', padding: '1px' }} >{children}</main>
    </>
);

export default Layout;