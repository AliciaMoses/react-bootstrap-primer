import React from "react";
import Layout from "../../base-components/layout/Layout";
import ListSections from "./ListSections";

const Home = () => {
  return (
    <Layout>
      <h1 className="display-5 text-center">React-Bootstrap Primer</h1>
      <br></br>
      <ListSections />
    </Layout>
  );
};

export default Home;
