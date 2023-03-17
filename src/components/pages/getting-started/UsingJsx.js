import React from "react";
import { Container } from "react-bootstrap";

const UsingJsx = () => {
  return (
    <>
      <h1 className="display-6 text-center">Using JSX</h1>
      <Container>
        <p className="lead text-center">
          JSX is a syntax extension for JavaScript that allows you to write
          HTML-like syntax within your JavaScript code. It's used extensively in
          React, and is a core part of using React-Bootstrap.
        </p>
        <p>Here are some key points to keep in mind when working with JSX:</p>

        <ul style={{ paddingLeft: "1.5rem" }}>
          <li style={{ marginBottom: "1rem" }}>
            JSX tags must always be enclosed in a single outer tag.
          </li>

          <li style={{ marginBottom: "1rem" }}>
            Use className instead of class to apply CSS classes to an element in
            JSX. This is because class is a reserved keyword in JavaScript.
          </li>

          <li style={{ marginBottom: "1rem" }}>
            JSX expressions must be enclosed in curly braces{" "}
            <strong>&#123; &#125;</strong>.
          </li>

          <li style={{ marginBottom: "1rem" }}>
            If you want to include a JavaScript expression in your JSX, you can
            use curly braces <strong>&#123; &#125;</strong> to enclose the
            expression.
          </li>

          <li style={{ marginBottom: "1rem" }}>
            To use a JavaScript variable in JSX, you can include the variable in
            the curly braces. For example,
            <strong>&lt;h1&#123;title&#125;&gt;Hello&lt;/h1&gt;</strong> would
            display the value of the title variable in a level 1 heading.
          </li>

          <li style={{ marginBottom: "1rem" }}>
            You can use JavaScript conditionals in JSX by enclosing the
            conditional expression in curly braces{" "}
            <strong>&#123; &#125;</strong>. For example,
            <strong>
              &#123; isLoggedIn ? &lt;UserProfile /&gt; : &lt;LoginForm /&gt;
              &#125;
            </strong>
            .
          </li>

          <li style={{ marginBottom: "1rem" }}>
            Use self-closing tags for elements that don't have a closing tag,
            such as <strong>&lt;br /&gt;</strong>.
          </li>

          <li style={{ marginBottom: "1rem" }}>
            Comments in JSX are enclosed in curly braces{" "}
            <strong>&#123;/* comment here */&#125;</strong>.
          </li>
        </ul>
      </Container>
    </>
  );
};

export default UsingJsx;
