import React from "react";
import Layout from "../../base-components/layout/Layout";
import btnCode from "./btnCode";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { atomDark } from "react-syntax-highlighter/dist/esm/styles/prism";
import { Container, ButtonGroup, Button } from "react-bootstrap";
import SolidButtons from "../../demo-components/button/Solid";
import OutlineButton from "../../demo-components/button/Outline";

const Buttons = () => {
  return (
    <Layout>
      <h1 className="display-4 text-center">Buttons</h1>

      <Container style={{ maxWidth: "750px" }}>
        <p className="lead text-center">
          Buttons are one of the most important components in a user interface,
          as they allow users to interact with the application and trigger
          various events. React-Bootstrap provides a flexible Button component
          that can be customized with various styles and functionalities,
          allowing developers to create interactive elements that align with the
          design and functionality of their application.
        </p>
        <br />
        <h1 className="display-6 text-center">Importing Buttons</h1>
        <SyntaxHighlighter language="javascript" style={atomDark}>
          {btnCode}
        </SyntaxHighlighter>
        <br />
        <p className="lead">Predefined button styles include:</p>
        <SolidButtons />
        <br />
        <br />
        <p className="lead">
          For outline buttons, variants are defined as outline-*
        </p>
        <OutlineButton />
        <br />
        <h1 className="display-6 text-center">Button Groups</h1>
        <p className="lead">
          Button groups are used to group a series of buttons together on a
          single line. To create a button group, import the ButtonGroup
          component from React-Bootstrap.
        </p>
        <ButtonGroup aria-label="Example button group">
          <Button variant="primary">Left</Button>
          <Button variant="primary">Middle</Button>
          <Button variant="primary">Right</Button>
        </ButtonGroup>
        <br />
        <br />
        <h1 className="display-6 text-center">Customizing Buttons</h1>
        <p className="lead">
          You can customize buttons using Bootstrap classes or your own custom
          CSS. Here's an example of customizing a button using Bootstrap
          utility classes:
        </p>
        <Button
          variant="primary"
          className="text-uppercase font-weight-bold px-4 py-2"
        >
          Custom Button
        </Button>
        <br />
        <br />
      </Container>
    </Layout>
  );
};

export default Buttons;