import React from "react";

import { Container } from "react-bootstrap";
import CheckboxForm from "../../demo-components/form/Checkbox";

const CheckboxForms = () => {
  return (
    <>
      <br></br>
      <h1 className="display-5 text-center">Checkbox Form</h1>
      <br></br>
      <Container className="d-flex justify-content-center align-items-center">
        <CheckboxForm />
      </Container>
      <br></br>
      <p className="lead text-center">
        The form allows users to select one or more items from a list of
        options, including an "Other" option that allows users to input a custom
        value. If the "Other" option is selected, a text input field is
        displayed where the user can enter their custom value.
      </p>
      <p className="lead text-center">
        {" "}
        When the form is submitted, the selected items are displayed in an alert
        message. The code uses the useState hook to manage the selected items,
        the "Other" input value, and whether or not to display the input field.
        The handleOtherInputChange function is used to update the "Other" input
        value, and the handleSubmit function is used to validate the form and
        display the selected items in an alert message.
      </p>
    </>
  );
};

export default CheckboxForms;
