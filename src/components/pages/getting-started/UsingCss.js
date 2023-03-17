import React from "react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { atomDark } from "react-syntax-highlighter/dist/esm/styles/prism";
import cssCode from "./code-snippets/cssFileCode";
import importCssCode from "./code-snippets/importCssCode";
import inlineCssCode from "./code-snippets/inlineStyleCode";
import cssModuleCode from "./code-snippets/moduleCssCode";
import importModuleCode from "./code-snippets/importModuleCode";
import CamelCssCode from "./code-snippets/camelCaseCssCode";
import { Container } from "react-bootstrap";
import bootstrapClassCode from "./code-snippets/boostrapClassCode";
import styles from "./code-snippets/codeSnippet.module.css";

const UsingCss = () => {
  return (
    <Container>
      <h1 className="display-6 text-center">Using CSS</h1>
      <p className="lead text-center">
        There are several ways to apply CSS styles to your React components.
        Here are some of the most common methods:
      </p>
      <p className="lead" style={{ fontWeight: "bold" }}>
        Importing a CSS file
      </p>
      <p className="lead">
        You can import an external CSS file and apply styles to your components
        using the className prop. This is the most traditional way of using CSS
        with React.
      </p>
      <p>
        To use a CSS file in a React component, create a new CSS file (e.g.,
        styles.css). Add your styles to this file, and then import the file into
        the component where you want to apply the styles:
      </p>
      <div className={styles.codeSnippetContainer}>
        <SyntaxHighlighter language="css" style={atomDark}>
          {cssCode}
        </SyntaxHighlighter>
      </div>
      <p>Import the css into the JavaScript file:</p>
      <div className={styles.codeSnippetContainer}>
        <SyntaxHighlighter language="javascript" style={atomDark}>
          {importCssCode}
        </SyntaxHighlighter>
      </div>
      <p>
        This method allows you to maintain a separation of concerns, keeping
        your styles in dedicated CSS files, and applying them to the components
        as needed
      </p>
      <hr></hr>
      <p className="lead" style={{ fontWeight: "bold" }}>
        Inline styles
      </p>
      <p className="lead">
        Inline CSS styling allows you to add styles directly to your JSX
        elements using the style attribute.
      </p>
      <p>
        Using double curly braces, you can directly style a JSX element. Note
        that rather than using hyphens to separate two words as is in CSS, in
        JSX is it necessary to use camelCase. For example, margin-left: 0px;
        would be marginLeft: '0px'
      </p>
      <div className={styles.codeSnippetContainer}>
        <SyntaxHighlighter language="javascript" style={atomDark}>
          {inlineCssCode}
        </SyntaxHighlighter>
      </div>
      <p>
        You can also define the styles as JavaScript objects, with the property
        names in camelCase:
      </p>
      <div className={styles.codeSnippetContainer}>
        <SyntaxHighlighter language="javascript" style={atomDark}>
          {CamelCssCode}
        </SyntaxHighlighter>
      </div>
      <p>
        This method can be helpful for quick styling or for cases when the
        styles are dynamic and based on some conditions or variables.
      </p>
      <hr></hr>

      <p className="lead" style={{ fontWeight: "bold" }}>
        Importing Modules
      </p>
      <p>
        With CSS module imports, you can scope styles to a specific component,
        this is achieved through defining a uniue class name.
      </p>
      <p>First, create a CSS module, *.module.css and define the styling:</p>
      <div className={styles.codeSnippetContainer}>
        <SyntaxHighlighter language="javascript" style={atomDark}>
          {cssModuleCode}
        </SyntaxHighlighter>
      </div>
      <p>
        Import the module and apply it to the required element by passing in the
        styling to its class name:
      </p>
      <div className={styles.codeSnippetContainer}>
        <SyntaxHighlighter language="javascript" style={atomDark}>
          {importModuleCode}
        </SyntaxHighlighter>
      </div>
      <p>
        This method ensures that your styles are scoped to the component and
        won't affect other components unintentionally.
      </p>
      <hr></hr>
      <p className="lead" style={{ fontWeight: "bold" }}>
        Bootstrap Classes
      </p>
      <p className="lead">
        with the react-bootstrap module, or the Bootstrap CDN, you can use
        Bootstrap's utility classes on react components.
      </p>
      <p>
        To define the styling, simply apply the class to the className attribute
        of the desired JSX element:
      </p>
      <div className={styles.codeSnippetContainer}>
        <SyntaxHighlighter language="javascript" style={atomDark}>
          {bootstrapClassCode}
        </SyntaxHighlighter>
      </div>
      <p className="lead">
        Throughout this application, a mixture of these techniques are used -
        this is to demonstrate how they work and how flexibly applications can
        be built and styled using React and Bootstrap in tandem.
      </p>
    </Container>
  );
};

export default UsingCss;
