import React from "react";
import Layout from "../../base-components/layout/Layout";
import { Container, Row } from "react-bootstrap";
import LargeCard from "../../demo-components/card/WideCard";
import SmallCard from "../../demo-components/card/SmallCard";

const Cards = () => {
  return (
    <Layout>
      <h1 className="display-4 text-center">Cards</h1>

      <Container style={{ maxWidth: "750px", paddingBottom: "30px" }}>
        <Row className="justify-content-center">
          <p className="lead text-center">
            Card components in React-Bootstrap are versatile and flexible
            elements that can be used to display a wide range of content,
            including text, images, and buttons. They provide a convenient way
            to organize and present information on a page.
          </p>
          <p className="lead">Small card example:</p>
          <SmallCard />
          <p className="lead">Wide card example:</p>
          <LargeCard />
        </Row>
      </Container>
    </Layout>
  );
};

export default Cards;
