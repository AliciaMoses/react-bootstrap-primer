import React from "react";
import Layout from "../../base-components/layout/Layout";
import { Container, Card, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import PageList from "../../base-components/PageList";

const ExamplesPage = () => {
    // Filter pagelist to only include examples paths
    const examples = PageList.filter((page) => page.path.startsWith("/examples/"));
  
    // Map over examples to create array of objects with corresponding heading
    const exampleHeadings = examples.map((example) => {
      const heading = example.label.replace("Example: ", "");
      return { path: example.path, heading };
    });
  
    return (
    <Layout>
      <Container style={{ maxWidth: '500px'}}>
        <h1 className="display-1 text-center">Examples</h1>
        <p className="lead text-center">Here are some examples of React-Bootstrap components being used to create layouts.</p>
        <p className="lead text-center">Whilst they have limited functionality, they serve as pointers for creating simple, user-friendly designs for various use-cases.</p>
        {exampleHeadings.map((example) => (
         <Card key={example.path} className="my-3 p-2 text-center" >
         <Card.Body>
           <Card.Title>{example.heading}</Card.Title>
           <Link to={example.path}>
             <Button variant="dark rounded-1">Take a Look</Button>
           </Link>
         </Card.Body>
       </Card>
        ))}
      </Container>
      </Layout>
    );
  };
  
  export default ExamplesPage;