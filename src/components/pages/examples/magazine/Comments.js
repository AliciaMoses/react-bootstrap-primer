import React, { useState } from 'react';
import { Form, Button, ListGroup } from 'react-bootstrap';

const CommentsSection = () => {
  const [comments, setComments] = useState([]);
  const [newComment, setNewComment] = useState('');

  const handleCommentSubmit = (event) => {
    event.preventDefault();
    setComments([...comments, newComment]);
    setNewComment('');
  };

  return (
    <div>
      <h3>Comments:</h3>
      <ListGroup>
        {comments.map((comment, index) => (
          <ListGroup.Item key={index}>{comment}</ListGroup.Item>
        ))}
      </ListGroup>
      <Form onSubmit={handleCommentSubmit} style={{ paddingBottom: '20px' }}>
        <Form.Group controlId="newComment">
          <Form.Label>Add a Comment:</Form.Label>
          <Form.Control
            as="textarea"
            rows={3}
            value={newComment}
            onChange={(event) => setNewComment(event.target.value)}
            required
          />
        </Form.Group>
        <br></br>
        <Button variant="dark" type="submit">
          Submit
        </Button>
      </Form>
    </div>
  );
};

export default CommentsSection;