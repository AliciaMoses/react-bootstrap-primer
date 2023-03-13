import React from "react";
import Layout from "../../base-components/layout/Layout";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { atomDark } from "react-syntax-highlighter/dist/esm/styles/prism";
import { Container } from "react-bootstrap";
import formCode from "./forrmCode";
import Login from "../../demo-components/form/Login";
import Register from "../../demo-components/form/Register";

const Forms = () => {
  return (
    <Layout>
      <h1 className="display-4 text-center">Forms</h1>

      <Container style={{ maxWidth: "750px" }}>
        <p className="lead text-center">
        Forms are a crucial component of many web applications, and allow users to submit information to a server, update data, or complete various actions. In React, building forms can be a powerful tool for creating interactive and dynamic user experiences. Bootstrap provides a set of pre-built form components that can help you quickly create beautiful and functional forms with ease. 
        </p>
        <br></br>
        <h1 class="display-6 text-center">Importing Forms</h1>
        <SyntaxHighlighter language="javascript" style={atomDark}>
          {formCode}
        </SyntaxHighlighter>
        <br></br>
        <p className="lead">A basic example of a login form:</p>
        <Login/>
        <br></br>
        <p className="lead">
          An example of a registration form with validation:
        </p>
       <Register />
      </Container>
    </Layout>
  );
};

export default Forms;
