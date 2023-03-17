import React from "react";
import Layout from "../../base-components/layout/Layout";
import ListSections from "./ListSections";
import { Container } from "react-bootstrap";

const Home = () => {
  return (
    <Layout>
      <h1 className="text-center">Welcome!</h1>
      <Container>
        <p className="lead text-center">
          This app serves as a guide to React Bootstrap, designed to help you
          understand the functionality of various components, explore their use
          cases, and learn how to implement them in your projects.
        </p>
        <p className="lead text-center">
          Feel free to dive into any of the sections below. If you would like a
          more comprehensive introduction to using React with Bootstrap, check
          out the 'Getting Started' section for helpful explainers and tips.
        </p>
      </Container>
      <Container style={{ maxWidth: "70%", paddingTop: "15px" }}>
        <ListSections />
      </Container>
    </Layout>
  );
};

export default Home;
