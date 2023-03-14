import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import styled from 'styled-components';

const H1 = styled.h1`
  font-size: 3.5rem;
  font-weight: 600;
  line-height: 1.2;
  margin-bottom: 1rem;
`;

const H2 = styled.h2`
  font-size: 2.5rem;
  font-weight: 600;
  line-height: 1.2;
  margin-bottom: 1rem;
`;

const H3 = styled.h3`
  font-size: 1.75rem;
  font-weight: 600;
  line-height: 1.2;
  margin-bottom: 1rem;
`;

const H4 = styled.h4`
  font-size: 1.5rem;
  font-weight: 600;
  line-height: 1.2;
  margin-bottom: 1rem;
`;

const H5 = styled.h5`
  font-size: 1.25rem;
  font-weight: 600;
  line-height: 1.2;
  margin-bottom: 1rem;
`;

const H6 = styled.h6`
  font-size: 1rem;
  font-weight: 600;
  line-height: 1.2;
  margin-bottom: 1rem;
`;

const Paragraph = styled.p`
  font-size: 1rem;
  font-weight: 400;
  line-height: 1.5;
  margin-bottom: 1rem;
`;

const Lead = styled.p`
  font-size: 1.25rem;
  font-weight: 300;
  line-height: 1.5;
  margin-bottom: 2rem;
`;

const Small = styled.small`
  font-size: 0.875rem;
  font-weight: 400;
`;

const Emphasis = styled.em`
  font-style: italic;
`;

const Strong = styled.strong`
  font-weight: 600;
`;

const Underline = styled.u`
  text-decoration: underline;
`;

const Strike = styled.s`
  text-decoration: line-through;
`;

const Blockquote = styled.blockquote`
  border-left: 0.25rem solid #ddd;
  color: #777;
  font-size: 1.25rem;
  font-style: italic;
  margin-bottom: 1.5rem;
  margin-top: 1.5rem;
  padding: 0.5rem 1rem;
`;

const TypographyList = () => {
  return (
    <Container>
      <Row>
        <Col>
          <H1>Heading 1</H1>
          <H2>Heading 2</H2>
          <H3>Heading 3</H3>
          <H4>Heading 4</H4>
          <H5>Heading 5</H5>
          <H6>Heading 6</H6>
        </Col>
      </Row>
      <Row>
        <Col>
          <Lead>This is a lead paragraph.</Lead>
          <Paragraph>This is a normal paragraph.</Paragraph>
          <Small>This is small text.</Small>
        </Col>
      </Row>
      <Row>
        <Col>
          <Emphasis>This text is emphasized.</Emphasis>
          <Strong>This text is strong.</Strong>
          <Underline>This text is underlined.</Underline>
          <Strike>This text is struck through.</Strike>
        </Col>
      </Row>
      <Row>
        <Col>
          <Blockquote>
            This is a blockquote
            </Blockquote>
        </Col>
        </Row>
        </Container>
  );
};

export default TypographyList;