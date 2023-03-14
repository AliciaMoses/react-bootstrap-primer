import React from "react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { atomDark } from "react-syntax-highlighter/dist/esm/styles/prism";
import { Container } from "react-bootstrap";
import DropdownForm from "../../demo-components/form/Dropdown";
import dropdownCode from "./dropdownCode";

const DropdownForms = () => {
  return (
    <>
      <br></br>
      <h1 className="display-5 text-center">Dropdown Form</h1>
      <Container className="d-flex justify-content-center align-items-center">
        <DropdownForm />
      </Container>
      <br></br>
      <h1 class="display-6 text-center">React Hooks</h1>
      <p className="lead text-center">
        In react it is possible to handle user selection as well as user
        submission. Dropdown menus are often used in this context.
      </p>
      <p className="lead text-center">
        The useState hook is used to manage the selected option, with 'Select
        One' set as the default value.
      </p>
      <p className="lead text-center">
        The onSelect prop of the DropdownButton is then used to update the
        selected option whenever a new option is selected from the dropdown
        menu, with the handleSelect function passing the eventKey of the
        selected option to the setSelectedOption function.
      </p>

      <br></br>
      <h1 class="display-6 text-center">The Code</h1>
      <SyntaxHighlighter language="javascript" style={atomDark}>
        {dropdownCode}
      </SyntaxHighlighter>
    </>
  );
};

export default DropdownForms;
