import React from "react";
import { Container } from "react-bootstrap";

const Introduction = () => {
  return (
    <Container>
      <h1 className="display-4 text-center">Getting Started</h1>
      <br></br>
      <h2>Welcome!</h2>
      <p>
        Welcome to your interactive tour of essential React Bootstrap
        components! This app not only covers the basics but also demonstrates
        advanced and practical implementations using React Hooks.
      </p>
      <p>This app is comprised of:</p>
      <ul>
        <li>
          <b>Component Demonstrations</b>: Interactive examples showcasing how
          the React Bootstrap component works.
        </li>
        <li>
          <b>Code Snippets</b>: Reusable code examples for integrating the
          components into your projects.
        </li>
        <li>
          <b>Tips, Lists, Pointers, and Shortcuts</b>: Additional info that may
          may help you understand and use react-bootstrap components more
          efficiently
        </li>
      </ul>

      <h2>Core Concepts</h2>
      <p>
        This application covers key concepts that are essential when working
        with React and React Bootstrap:
      </p>
      <ul>
        <li>
          <b>JSX:</b> JSX is a syntax extension for JavaScript that allows you
          to write HTML-like code within your JavaScript code. It makes it
          easier to create and manage the structure of your UI components.
        </li>
        <li>
          <b>Using CSS:</b> Styling components is an important aspect of
          building user interfaces. You can use both inline styles and external
          CSS files to apply styles to your React components.
        </li>
        <li>
          <b>Bootstrap Classes:</b> React Bootstrap is built on top of the
          popular Bootstrap CSS framework. You can use Bootstrap classes to
          style and manage the layout of your components easily.
        </li>
      </ul>
      <p>
        The "Getting Started" section provides further context and examples of
        these concepts in action, helping you better understand how to use React
        and React Bootstrap effectively.
      </p>

      <h2>How to Navigate the App</h2>
      <p>
        Use the dropdown menu in the top navigation bar or the previous and next
        buttons in the footer to navigate between sections.
      </p>

      <h2>Additional Resources</h2>
      <p>
        For more information, visit the official{" "}
        <a
          href="https://react-bootstrap.github.io/"
          target="_blank"
          rel="noopener noreferrer"
        >
          React Bootstrap documentation
        </a>{" "}
        and explore other relevant resources.
      </p>
    </Container>
  );
};

export default Introduction;
