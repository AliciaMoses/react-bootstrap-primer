import React from 'react';
import Layout from './layout/Layout';
import BottomNavigation from './BottomNavigation';

const WithBottomNav = ({ children }) => (
    <>
        <Layout>{ children }</Layout>
        <BottomNavigation />
    </>
);

export default WithBottomNav;