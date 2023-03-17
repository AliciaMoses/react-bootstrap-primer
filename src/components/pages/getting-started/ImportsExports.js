import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { atomDark } from "react-syntax-highlighter/dist/esm/styles/prism";
import { Container } from "react-bootstrap";

const ImportExportPage = () => {
  return (
    <div>
      <h1 className="display-6 text-center">Imports and Exports</h1>
      <Container>
        <p>
          React-Bootstrap is a library of React components, so you'll need to
          import the components you want to use in your application.
        </p>
        <p>
          Here's an example of how to import the Button component from
          React-Bootstrap:
        </p>
        <SyntaxHighlighter language="javascript" style={atomDark}>
          {`// importing a single component
import { Button } from 'react-bootstrap';

// importing multiple components
import { Button, Modal, Navbar } from 'react-bootstrap';

// importing the entire library
import ReactBootstrap from 'react-bootstrap';

// using a component from a specific library
import { Button } from 'react-bootstrap';
import { Button } from 'reactstrap';
`}
        </SyntaxHighlighter>
        <p>Here's an example of how to export a component:</p>
        <SyntaxHighlighter language="javascript" style={atomDark}>
          {`// exporting a component as the default
export default function MyComponent() {
  return <div>Hello, world!</div>;
}

// exporting multiple components
export function MyComponent() {
  return <div>Hello, world!</div>;
}

export function MyOtherComponent() {
  return <div>Hello again, world!</div>;
}
`}
        </SyntaxHighlighter>
        <p>Here's an example of how to use an imported component:</p>
        <SyntaxHighlighter language="javascript" style={atomDark}>
          {`import { Button } from 'react-bootstrap';

function MyPage() {
  return (
    <div>
      <Button>Click me</Button>
    </div>
  );
}`}
        </SyntaxHighlighter>
        <h2>Naming Components</h2>
        <p>
          When naming your React components, it's important to follow a few
          conventions to ensure that your code is easy to read and maintain.
        </p>
        <ul>
          <li>Component names should be capitalized.</li>
          <li>
            Use descriptive, meaningful names that reflect the purpose of the
            component.
          </li>
          <li>
            Use PascalCase (also known as upper camel case) to name your
            components. For example, MyComponent instead of myComponent or
            my_component.
          </li>
          <li>
            Avoid generic names like Container, Wrapper, or Panel. These names
            don't provide any context about what the component does.
          </li>
          <li>
            Use shorter names for common UI elements like Button or Input.
          </li>
          <li>
            Use longer names for more complex components that encapsulate
            multiple UI elements.
          </li>
        </ul>
      </Container>
    </div>
  );
};

export default ImportExportPage;
