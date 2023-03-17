import React from "react";
import "./Layout.css";
import AppNavbar from "../app-navbar/AppNavbar";
import BottomNavigation from "../BottomNavigation";

const Layout = ({ children }) => (
  <>
    <AppNavbar />

    <main className="main-content">{children}</main>
    <BottomNavigation />
  </>
);

export default Layout;
