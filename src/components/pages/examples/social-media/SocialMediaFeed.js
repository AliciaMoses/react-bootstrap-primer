import React from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import SiteTemplate from "./SocialMedia";

const SocialMediaFeed = () => {
  const posts = [
    {
      id: 1,
      username: "AliceSmith",
      content: "This is my first post!",
      timestamp: "2 hours ago",
      likes: 10,
    },
    {
      id: 2,
      username: "BobSmith",
      content: "Check out this cute dog!",
      timestamp: "3 hours ago",
      likes: 25,
    },
    {
      id: 3,
      username: "CarolSmith",
      content: "Just finished my morning run!",
      timestamp: "5 hours ago",
      likes: 7,
    },
  ];

  return (
    <SiteTemplate>
    <Container fluid>
      <Row>
        <Col xs={12} sm={8} md={6} className="mx-auto">
          {posts.map((post) => (
            <Card key={post.id} className="my-3">
              <Card.Header>
                <strong>{post.username}</strong> posted {post.timestamp}
              </Card.Header>
              <Card.Body>
                <Card.Text>{post.content}</Card.Text>
                <Button variant="primary">Like ({post.likes})</Button>
              </Card.Body>
            </Card>
          ))}
        </Col>
      </Row>
    </Container>
    </SiteTemplate>
  );
};

export default SocialMediaFeed;