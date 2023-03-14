import React from "react";
import Layout from "../../base-components/layout/Layout";
import { Container, Row } from "react-bootstrap";
import ContentChangeCard from "../../demo-components/card/ContentChangeCard";
import ToggleCard from "../../demo-components/card/ToggleCard";
import TextInput from "../../demo-components/card/TextInputCard";

const DynamicCards = () => {
  return (
    <Layout>
      <h1 className="display-4 text-center">Dynamic Cards</h1>

      <Container style={{ maxWidth: "750px", paddingBottom: "30px" }}>
        <Row className="justify-content-center">
          <p className="lead text-center">
            Using cards with dynamic elements in user input forms can provide an
            intuitive and visually appealing interface for users. This can make
            the process of inputting information more engaging and increase user
            satisfaction with the overall experience.
          </p>
          <p className="lead"></p>
            <ContentChangeCard />
          <p className="lead"></p>
            <ToggleCard />
            <p className="lead"></p>
            <TextInput />

          <h1
            className="display-6 text-center"
            style={{ paddingTop: "20px" }}
          ></h1>

          <p className="lead text-center" style={{ paddingTop: "20px" }}></p>
        </Row>
      </Container>
    </Layout>
  );
};

export default DynamicCards;
