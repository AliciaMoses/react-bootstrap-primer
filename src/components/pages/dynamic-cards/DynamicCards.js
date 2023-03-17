import React from "react";
import Layout from "../../base-components/layout/Layout";
import { Container, Row } from "react-bootstrap";
import ContentChangeCard from "../../demo-components/card/ContentChangeCard";
import ToggleCard from "../../demo-components/card/ToggleCard";
import TextInput from "../../demo-components/card/TextInputCard";

const DynamicCards = () => {
  return (
    <Layout>
      <h1 className="display-4 text-center">Dynamic Cards</h1>

      <Container style={{ maxWidth: "750px", paddingBottom: "30px" }}>
        <Row className="justify-content-center">
          <p className="lead text-center">
            Using cards with dynamic elements in user input forms can provide an
            intuitive and visually appealing interface for users. This can make
            the process of inputting information more engaging and increase user
            satisfaction with the overall experience.
          </p>
          <p className="lead text-center"><strong>Dynamic Content</strong></p>
          
          <ContentChangeCard />
          <p className="lead"  style={{ paddingTop: '20px', paddingBottom: '10px' }}>
            This component employs React Hooks, specifically the useState Hook,
            to manage the state of the title and text content. A similar
            component could be used in a task management application or a quiz
            app. In a task management application, the user could check off
            completed tasks or update task details, while in a quiz app, users
            could reveal the correct answers by clicking a button. In both
            cases, the interactive nature of the component allows for immediate
            updates and feedback, enhancing the user experience.
          </p>
          <p className="lead text-center"><strong>Toggling Content</strong></p>
          <ToggleCard />

          <p className="lead" style={{ paddingTop: '20px', paddingBottom: '10px' }}>
            This component is a simple yet interactive demonstration
            of a card using React Bootstrap. It features an image at the top,
            followed by a title, description, and a button. When the button is
            clicked, it toggles the visibility of additional content within the
            card. This component utilizes React Hooks, specifically the useState
            Hook, to manage the state of the content's visibility.
          </p>
          <p className="lead text-center"><strong>Text input</strong></p>
          <TextInput />
          <p className="lead" style={{ paddingTop: '20px', paddingBottom: '10px' }}>
            This component demonstrates how to create an
            interactive card that updates its content based on user input. It
            uses a combination of React state, form handling, and
            React-Bootstrap components such as Card, Form, and Button to create
            a seamless user experience.</p> 
            <p className="lead">In this component, a form with a single
            text input field is used to capture user input. When the user
            submits the form, the handleSubmit function updates the card's
            content with the new text. The initial state is set to "Hello,
            world!" as the default text. A real-life application of such a
            component could be seen in a note-taking app, where users can update
            the content of a note directly on the card.
          </p>
        </Row>
      </Container>
    </Layout>
  );
};

export default DynamicCards;
