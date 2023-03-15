import React from 'react';
import { Card, CardGroup, Button, Container, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import PageList from '../../base-components/PageList';
import styles from './OverviewGrid.module.css';


const SectionCard = ({ path, label, description }) => (
  <Col xs={12} sm={6} md={4} lg={3} >
  <Card className={styles.card}>
      <Card.Body className={styles.cardContent}>
      <Card.Title>{label}</Card.Title>
        <Card.Text>{description}</Card.Text>
      </Card.Body>
      <Card.Footer>
        <Button as={Link} to={path} variant="outline-dark" className="rounded-1">
          View
        </Button>
      </Card.Footer>
    </Card>
  </Col>
);

const OverviewGrid = () => {
  return (
    <Container>
      <h1 className="display-2 text-center">Explore the Sections</h1>
      <CardGroup>
        {PageList.filter((section) => section.path !== "/").map((section) => (
          <SectionCard
            key={section.path}
            path={section.path}
            label={section.label}
            description={section.description}
          />
        ))}
        </CardGroup>
      
    </Container>
  );
};

export default OverviewGrid;