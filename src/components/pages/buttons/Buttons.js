import React from "react";
import Layout from "../../base-components/layout/Layout";
import btnCode from "./btnCode";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { atomDark } from "react-syntax-highlighter/dist/esm/styles/prism";
import { Container } from "react-bootstrap";
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
        <br></br>
        <h1 class="display-6 text-center">Importing Buttons</h1>
        <SyntaxHighlighter language="javascript" style={atomDark}>
          {btnCode}
        </SyntaxHighlighter>
        <br></br>
        <p className="lead">Predefined button styles include:</p>
        <SolidButtons />
        <br></br>
        <br></br>
        <p className="lead">
          For outline buttons, variants are defined as outline-*
        </p>
        <OutlineButton />
      </Container>
    </Layout>
  );
};

export default Buttons;
