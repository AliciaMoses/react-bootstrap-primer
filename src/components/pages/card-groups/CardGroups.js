import React from "react";
import Layout from "../../base-components/layout/Layout";
import { Container, Row } from "react-bootstrap";
import CardGrid from "../../demo-components/card/CardGrid";

const CardGroups = () => {
  return (
    <Layout>
      <h1 className="display-4 text-center">Card Groups</h1>

      <Container style={{ maxWidth: "750px", paddingBottom: "30px" }}>
        <Row className="justify-content-center">
          <p className="lead text-center">
            Card groups in React Bootstrap provide a clean and consistent way to
            display multiple items in a uniform format, making it easy to
            compare and analyze the items. They are particularly useful when
            displaying an unknown amount of items with a similar structure, as
            they can adapt to the size of the content and still maintain their
            consistency.
          </p>
          <CardGrid />
          <h1 className="display-6 text-center" style={{ paddingTop: "20px" }}>Card Grid Example</h1>
          <p className="lead text-center" style={{ paddingTop: "20px" }}>
            In this example, we're using the Row and Col components to create a
            grid of cards. We're using the xs={1} md={2} lg={3} props on the Row
            component to specify that we want the grid to have 1 column on
            extra-small screens, 2 columns on medium screens, and 3 columns on
            large screens.
          </p>
          <p className="lead text-center" style={{ paddingTop: "20px" }}>
            Then, we're using a JavaScript Array method to create
            an array of 6 elements, and using the map method to create a Col
            component for each element in the array. Finally, we're using the
            Card component from React Bootstrap to create a card for each column
            in the grid.
          </p>
        </Row>
      </Container>
    </Layout>
  );
};

export default CardGroups;
