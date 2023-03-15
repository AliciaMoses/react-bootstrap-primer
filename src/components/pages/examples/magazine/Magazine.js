import React from "react";
import "./Magazine.css";
import { Container, Row, Col, Image, ListGroup, Nav } from "react-bootstrap";
import CommentsSection from "./Comments";
import MagazineNav from "./MagazineNav"

const Magazine = () => {
  return (
    <>
    <MagazineNav />
      <body>
        <main>
          <Container>
            <Row>
              <Col md={9}>
                <Container className="text-center">
                  <h1 className="display-4">HEADLINE</h1>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco laboris nisi ut aliquip ex ea commodo consequat.{" "}
                  </p>
                </Container>

                <Image src="https://picsum.photos/1000/400" fluid />
                <figure className="text-end">
                  <blockquote className="blockquote">
                    <p>"An important quote from the article."</p>
                  </blockquote>
                  <figcaption className="blockquote-footer">
                    Person from <cite title="Source Title">Place</cite>
                  </figcaption>
                </figure>
                <a href="/#" >
                  <h5>
                    <strong>Author Name</strong>
                  </h5>
                </a>
                <p>date</p>
                <hr></hr>
                <p className="article-paragraph lead text-justify">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Fringilla phasellus faucibus scelerisque eleifend donec.
                  Ultricies mi eget mauris pharetra et ultrices neque ornare
                  aenean. Et egestas quis ipsum suspendisse ultrices gravida
                  dictum fusce ut. Tortor aliquam nulla facilisi cras fermentum
                  odio eu feugiat pretium.
                </p>

                <p className="lead text-justify">
                  Ultrices mi tempus imperdiet nulla. Nunc pulvinar sapien et
                  ligula ullamcorper. Velit euismod in pellentesque massa
                  placerat duis. Faucibus in ornare quam viverra orci sagittis
                  eu. A cras semper auctor neque. Quam quisque id diam vel quam
                  elementum pulvinar. Viverra vitae congue eu consequat ac felis
                  donec et. Porta nibh venenatis cras sed felis. Et sollicitudin
                  ac orci phasellus egestas tellus rutrum tellus pellentesque.
                </p>
                <figure class="text-center">
                  <blockquote class="blockquote">
                    <p>
                      <em>
                        "uam quisque id diam vel quam elementum pulvinar.
                        Viverra vitae congue eu consequat ac felis donec et."
                      </em>
                    </p>
                  </blockquote>
                  <figcaption class="blockquote-footer">
                    Someone famous in{" "}
                    <cite title="Source Title">Source Title</cite>
                  </figcaption>
                </figure>
                <p className="lead text-justify">
                  Arcu dictum varius duis at consectetur. Et pharetra pharetra
                  massa massa. Semper risus in hendrerit gravida rutrum quisque
                  non. Ut lectus arcu bibendum at varius vel pharetra vel.
                  Natoque penatibus et magnis dis. In aliquam sem fringilla ut
                  morbi tincidunt augue. Viverra maecenas accumsan lacus vel
                  facilisis. Habitant morbi tristique senectus et netus et
                  malesuada fames ac. Quis hendrerit dolor magna eget est lorem
                  ipsum. Nec feugiat in fermentum posuere urna nec tincidunt
                  praesent. Massa sed elementum tempus egestas sed sed risus.
                  Nascetur ridiculus mus mauris vitae ultricies leo integer.
                  Velit ut tortor pretium viverra suspendisse potenti.
                </p>
                <p className="lead">
                  Hendrerit dolor magna eget est lorem. Faucibus pulvinar
                  elementum integer enim neque volutpat ac tincidunt vitae.
                  Cursus turpis massa tincidunt dui ut ornare. Vitae purus
                  faucibus ornare suspendisse sed nisi lacus sed viverra. Massa
                  enim nec dui nunc mattis enim ut tellus. Non pulvinar neque
                  laoreet suspendisse interdum consectetur. Aliquam ultrices
                  sagittis orci a scelerisque purus semper eget. Massa vitae
                  tortor condimentum lacinia quis vel. Nunc eget lorem dolor sed
                  viverra ipsum nunc aliquet bibendum. Tellus rutrum tellus
                  pellentesque eu tincidunt tortor. Blandit libero volutpat sed
                  cras ornare arcu dui. Velit ut tortor pretium viverra. Nunc
                  mattis enim ut tellus. Est lorem ipsum dolor sit amet
                  consectetur.
                </p>
                <p>
                  <em>This is additional text for editorial purposes</em>
                </p>

                <hr></hr>

                <CommentsSection />
              </Col>

              <Col md={3} style={{ paddingTop: "40px" }}>
                <div className="d-flex flex-column align-items-center">
                  <h5>TRENDING</h5>
                  <div className="mb-4 text-center">
                    <Image src="https://picsum.photos/150/150" />

                    <p>Click to read more</p>
                  </div>
                  <div className="mb-4 text-center">
                    <Image src="https://picsum.photos/150/150" />

                    <p>Click to read more</p>
                  </div>
                  <div className="mb-4 text-center">
                    <Image src="https://picsum.photos/150/150" />

                    <p>Click to read more</p>
                  </div>
                </div>
                <hr />
                <div className="d-flex flex-column align-items-center">
                  <h5>RELATED ARTICLES</h5>
                  <ListGroup className="list-group-flush">
                    <ListGroup.Item className="list-group-item-action list-group-item-light">
                      <a href="/#" className="text-dark">
                        Article Title
                      </a>
                    </ListGroup.Item>
                    <ListGroup.Item>
                      <a href="/#" className="text-dark">
                        Article Title
                      </a>
                    </ListGroup.Item>
                    <ListGroup.Item>
                      <a href="/#" className="text-dark">
                        Article Title
                      </a>
                    </ListGroup.Item>
                    <ListGroup.Item>
                      <a href="/#" className="text-dark">
                        Article Title
                      </a>
                    </ListGroup.Item>
                    <ListGroup.Item>
                      <a href="/#" className="text-dark">
                        Article Title
                      </a>
                    </ListGroup.Item>
                  </ListGroup>
                </div>
              </Col>
            </Row>
          </Container>
        </main>
        <Nav aria-label="breadcrumb" style={{ paddingLeft: "20px" }}>
          <ol className="breadcrumb">
            <li className="breadcrumb-item">
              <a href="/#" className="text-dark">
                Home
              </a>
            </li>
            <li className="breadcrumb-item">
              <a href="/#" className="text-dark">
                Articles
              </a>
            </li>
            <li className="breadcrumb-item active" aria-current="page">
              Headline
            </li>
          </ol>
        </Nav>
      </body>
    </>
  );
};

export default Magazine;
