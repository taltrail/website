import React from "react";
import logo from "./assets/img/logos/logo.jpg";
import Iframe from "react-iframe";
import Button from "react-bootstrap/Button";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import FormControl from "react-bootstrap/FormControl";
import Image from "react-bootstrap/Image";
import Card from "react-bootstrap/Card";
import CardGroup from "react-bootstrap/CardGroup";
import ListGroup from "react-bootstrap/ListGroup";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faLinkedin,
  faGithub,
  faInstagram,
  faTwitter,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";
import {
  faHome,
  faSearch,
  faPaintBrush,
  faTools,
  faMusic,
  faMedkit,
  faBlog,
  faVolleyballBall,
  faCamera,
  faCar,
  faDatabase,
  faArrowAltCircleRight,
  faFire,
  faStar,
  faHourglassEnd,
  faClock,
  faColumns,
} from "@fortawesome/free-solid-svg-icons";

import Carousel from "react-multi-carousel";
// import Carousel from "react-bootstrap/Carousel";
import "react-multi-carousel/lib/styles.css";

import Login from "./login";
import "../src/css/App.css";
import "../src/css/animate.min.css";
import "../src/css/bootstrap.min.css";
// import "bootstrap/dist/css/bootstrap.min.css";
import "../src/css/style.css";

function App() {
  return (
    <div className="App">
      <Navbar>
        <Navbar.Brand href="#home">
          <img
            alt=""
            src={logo}
            width="75"
            height="50"
            className="d-inline-block align-top"
          />{" "}
        </Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse className="justify-content-end">
          <Form inline>
            <FormControl type="text" placeholder="Search" />
            <Button variant="outline-primary">Search</Button>
          </Form>
        </Navbar.Collapse>
        <Navbar.Collapse className="justify-content-end">
          <Nav.Link href="https://www.youtube.com/embed/fa3Iczgh8Ok">
            Sign-up / Login
          </Nav.Link>
        </Navbar.Collapse>
      </Navbar>
      {/* <hr></hr> */}
      <div className="toolbar">
        <Nav
          activeKey="/home"
          onSelect={(selectedKey) => alert(`selected ${selectedKey}`)}
        >
          <Nav.Item>
            <Nav.Link href="/home">Go to: </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link eventKey="link-1">
              {" "}
              <div>
                <FontAwesomeIcon icon={faHome} />
              </div>{" "}
              Home{" "}
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link eventKey="link-2">
              {" "}
              <div>
                <FontAwesomeIcon icon={faColumns} />
              </div>
              Categories{" "}
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link href="/home">
              {" "}
              <div>
                <FontAwesomeIcon icon={faStar} />
              </div>
              Trails{" "}
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link href="/home">
              {" "}
              <div>
                <FontAwesomeIcon icon={faFire} />
              </div>{" "}
              Trending{" "}
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link href="/home">
              {" "}
              <div>
                <FontAwesomeIcon icon={faYoutube} />
              </div>
              Playlist{" "}
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link href="/home">
              {" "}
              <div>
                <FontAwesomeIcon icon={faHourglassEnd} />
              </div>
              History{" "}
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link href="/home">
              {" "}
              <div>
                <FontAwesomeIcon icon={faClock} />
              </div>
              Watch later{" "}
            </Nav.Link>
          </Nav.Item>
        </Nav>
      </div>
      {/* <hr></hr> */}
      <section className="card_group">
        <CardGroup>
          <Card>
            <Card.Img
              variant="top"
              src={require("./assets/img/logos/walmart_logo.jpeg")}
            />
            {/* <Card.Body>
              <Card.Title>Card title</Card.Title>
              <Card.Text>
                This card has supporting text below as a natural lead-in to
                additional content.
              </Card.Text>
            </Card.Body> */}
          </Card>
          <Card>
            <Card.Img
              variant="top"
              src={require("./assets/img/logos/amazon_logo.jpg")}
            />
          </Card>
          <Card>
            <Card.Img
              variant="top"
              src={require("./assets/img/logos/facebook_logo.png")}
            />
          </Card>
          <Card>
            <Card.Img
              variant="top"
              src={require("./assets/img/logos/mcdonalds_logo.png")}
            />
          </Card>
          <Card>
            <Card.Img
              variant="top"
              src={require("./assets/img/logos/microsoft_logo.jpg")}
            />
          </Card>
          <Card>
            <Card.Img
              variant="top"
              src={require("./assets/img/portfolio/1.png")}
            />
          </Card>
        </CardGroup>
      </section>
      <div className="intro_video">
        <div class="embed-responsive embed-responsive-16by9">
          <Iframe
            class="embed-responsive-item"
            url="https://www.youtube.com/embed/fa3Iczgh8Ok"
            style="height: 100%"
            allowfullscreen
          />
        </div>
      </div>
      {/* <Carousel>
        <Carousel.Item>
          <img
            className="d-block mx-auto"
            src={require("./assets/img/portfolio/3.png")}
            alt="First slide"
          />
          <Carousel.Caption>
            <h3>First slide label</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block mx-auto"
            src={require("./assets/img/portfolio/3.png")}
            alt="Third slide"
          />

          <Carousel.Caption>
            <h3>Second slide label</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block mx-auto"
            src={require("./assets/img/portfolio/3.png")}
            alt="Third slide"
          />

          <Carousel.Caption>
            <h3>Third slide label</h3>
            <p>
              Praesent commodo cursus magna, vel scelerisque nisl consectetur.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel> */}
      {/* </Container> */}

      {/* <Container> */}
      <div class="categories">
        <div class="row justify-content-left mb-0">
          <h3 className="category_header">Categories</h3>
        </div>
        <div class="col-12 category_group">
          <div class="row no-gutters">
            <div class="col-3">
              <div class="d-flex flex-row flex-wrap">
                <a
                  href="#alerts"
                  class="list-group-item list-group-item-action"
                >
                  Music <FontAwesomeIcon icon={faMusic} />
                </a>
                <a
                  href="#alerts"
                  class="list-group-item list-group-item-action"
                >
                  Art <FontAwesomeIcon icon={faPaintBrush} />
                </a>
                <a
                  href="#alerts"
                  class="list-group-item list-group-item-action"
                >
                  Dancing <FontAwesomeIcon icon={faHome} />
                </a>
                <a
                  href="#alerts"
                  class="list-group-item list-group-item-action"
                >
                  Engineering <FontAwesomeIcon icon={faTools} />
                </a>
              </div>
            </div>
            <div class="col-3">
              <div class="d-flex flex-row flex-wrap">
                <a
                  href="#alerts"
                  class="list-group-item list-group-item-action"
                >
                  Blogger <FontAwesomeIcon icon={faBlog} />
                </a>
                <a
                  href="#alerts"
                  class="list-group-item list-group-item-action"
                >
                  Medicine <FontAwesomeIcon icon={faMedkit} />
                </a>
                <a
                  href="#alerts"
                  class="list-group-item list-group-item-action"
                >
                  Sports <FontAwesomeIcon icon={faVolleyballBall} />
                </a>
                <a
                  href="#alerts"
                  class="list-group-item list-group-item-action"
                >
                  Photographer <FontAwesomeIcon icon={faCamera} />
                </a>
              </div>
            </div>
            <div class="col-3">
              <div class="d-flex flex-row flex-wrap">
                <a
                  href="#alerts"
                  class="list-group-item list-group-item-action"
                >
                  Freelancer <FontAwesomeIcon icon={faHome} />
                </a>
                <a
                  href="#alerts"
                  class="list-group-item list-group-item-action"
                >
                  Mechanic <FontAwesomeIcon icon={faCar} />
                </a>
                <a
                  href="#alerts"
                  class="list-group-item list-group-item-action"
                >
                  Developer <FontAwesomeIcon icon={faDatabase} />
                </a>
                <a
                  href="#alerts"
                  class="list-group-item list-group-item-action"
                >
                  More <FontAwesomeIcon icon={faArrowAltCircleRight} />
                </a>
              </div>
            </div>
            <div class="col-3">
              <div class="d-flex flex-row flex-wrap">
                <a
                  href="#alerts"
                  class="list-group-item list-group-item-action"
                >
                  Blogger <FontAwesomeIcon icon={faBlog} />
                </a>
                <a
                  href="#alerts"
                  class="list-group-item list-group-item-action"
                >
                  Medicine <FontAwesomeIcon icon={faMedkit} />
                </a>
                <a
                  href="#alerts"
                  class="list-group-item list-group-item-action"
                >
                  Sports <FontAwesomeIcon icon={faVolleyballBall} />
                </a>
                <a
                  href="#alerts"
                  class="list-group-item list-group-item-action"
                >
                  Photographer <FontAwesomeIcon icon={faCamera} />
                </a>
              </div>
            </div>
          </div>
        </div>
        {/* <h3 className="category_header">Featured Videos</h3> */}
        <div class="h5 row mb-30 video_group">
          <div class="col-lg-3 col-md-6">
            {/* <p class="h5 mb-4 text-center">Art</p> */}

            <div class="embed-responsive embed-responsive-16by9 z-depth-1">
              <Iframe
                class="embed-responsive-item"
                url="https://www.youtube.com/embed/fa3Iczgh8Ok"
                style="height: 100%"
                allowfullscreen
              />
            </div>
          </div>

          <div class="col-lg-3 col-md-6">
            {/* <p class="h5 mb-4 text-center">Music</p> */}

            <div class="embed-responsive embed-responsive-16by9 z-depth-1-half">
              <Iframe
                class="embed-responsive-item"
                url="https://www.youtube.com/embed/fa3Iczgh8Ok"
                style="height: 100%"
                allowfullscreen
              />
            </div>
          </div>

          <div class="col-lg-3 col-md-6">
            {/* <p class="h5 mb-4 text-center">Media</p> */}

            <div class="embed-responsive embed-responsive-16by9 z-depth-2">
              <Iframe
                class="embed-responsive-item"
                url="https://www.youtube.com/embed/fa3Iczgh8Ok"
                style="height: 100%"
                allowfullscreen
              />
            </div>
          </div>

          <div class="col-lg-3 col-md-6">
            {/* <p class="h5 mb-4 text-center">Developer</p> */}

            <div class="embed-responsive embed-responsive-16by9 z-depth-2">
              <Iframe
                class="embed-responsive-item"
                url="https://www.youtube.com/embed/fa3Iczgh8Ok"
                style="height: 100%"
                allowfullscreen
              />
            </div>
          </div>
        </div>
        <div class="row mb-5">
          <div class="col-lg-3 col-md-6">
            {/* <p class="h5 mb-4">Dancing</p> */}
            <div class="embed-responsive embed-responsive-16by9 z-depth-1">
              <Iframe
                class="embed-responsive-item"
                url="https://www.youtube.com/embed/fa3Iczgh8Ok"
                style="height: 100%"
                allowfullscreen
              />
            </div>
          </div>
          <div class="col-lg-3 col-md-6">
            {/* <p class="h5 mb-4 text-center">Engineering</p> */}
            <div class="embed-responsive embed-responsive-16by9 z-depth-1-half">
              <Iframe
                class="embed-responsive-item"
                src="https://www.youtube.com/embed/fa3Iczgh8Ok"
                style="height: 100%"
                allowfullscreen
              />
            </div>
          </div>

          <div class="col-lg-3 col-md-6">
            {/* <p class="h5 mb-4 text-center">.z-depth-2</p> */}
            <div class="embed-responsive embed-responsive-16by9 z-depth-2">
              <Iframe
                class="embed-responsive-item"
                src="https://www.youtube.com/embed/fa3Iczgh8Ok"
                style="height: 100%"
                allowfullscreen
              />
            </div>
          </div>

          <div class="col-lg-3 col-md-6">
            {/* <p class="h5 mb-4 text-center">.z-depth-2</p> */}
            <div class="embed-responsive embed-responsive-16by9 z-depth-2">
              <Iframe
                class="embed-responsive-item"
                src="https://www.youtube.com/embed/fa3Iczgh8Ok"
                style="height: 100%"
                allowfullscreen
              />
            </div>
          </div>
        </div>

        <div class="h5 row mb-30 image_group">
          <div class="col-lg-3 col-md-6">
            {/* <p class="h5 mb-4 text-center">Art</p> */}
            <Image src={require("./assets/img/portfolio/1.png")} fluid />
          </div>

          <div class="col-lg-3 col-md-6">
            {/* <p class="h5 mb-4 text-center">Art</p> */}
            <Image src={require("./assets/img/portfolio/1.png")} fluid />
          </div>

          <div class="col-lg-3 col-md-6">
            {/* <p class="h5 mb-4 text-center">Art</p> */}
            <Image src={require("./assets/img/portfolio/1.png")} fluid />
          </div>

          <div class="col-lg-3 col-md-6">
            {/* <p class="h5 mb-4 text-center">Art</p> */}
            <Image src={require("./assets/img/portfolio/1.png")} fluid />
          </div>
        </div>
        <div class="row mb-5">
          <div class="col-lg-3 col-md-6">
            {/* <p class="h5 mb-4 text-center">Art</p> */}
            <Image src={require("./assets/img/portfolio/1.png")} fluid />
          </div>
          <div class="col-lg-3 col-md-6">
            {/* <p class="h5 mb-4 text-center">Art</p> */}
            <Image src={require("./assets/img/portfolio/1.png")} fluid />
          </div>

          <div class="col-lg-3 col-md-6">
            {/* <p class="h5 mb-4 text-center">Art</p> */}
            <Image src={require("./assets/img/portfolio/1.png")} fluid />
          </div>

          <div class="col-lg-3 col-md-6">
            {/* <p class="h5 mb-4 text-center">Art</p> */}
            <Image src={require("./assets/img/portfolio/1.png")} fluid />
          </div>
        </div>
        {/* </Container> */}
        <footer class="footer text-center">
          <div class="footer_top">
            <div class="container">
              <div class="row align-items-center">
                <div class="col-lg-2 col-md-3">
                  <div
                    class="footer_logo wow fadeInRight"
                    data-wow-duration="1s"
                    data-wow-delay=".3s"
                  >
                    <a href="index.html">
                      <img src="img/logo.png" alt="" />
                    </a>
                  </div>
                </div>
                <div class="col-xl-7 col-lg-7 col-md-9">
                  <div class="menu_links">
                    <ul>
                      <li>
                        <a
                          class="wow fadeInDown"
                          data-wow-duration="1s"
                          data-wow-delay=".2s"
                          href="#"
                        >
                          About
                        </a>
                      </li>
                      <li>
                        <a
                          class="wow fadeInDown"
                          data-wow-duration="1s"
                          data-wow-delay=".4s"
                          href="#services"
                        >
                          Services
                        </a>
                      </li>
                      <li>
                        <a
                          class="wow fadeInDown"
                          data-wow-duration="1s"
                          data-wow-delay=".6s"
                          href="#categories"
                        >
                          Categories
                        </a>
                      </li>
                      <li>
                        <a
                          class="wow fadeInDown"
                          data-wow-duration="1s"
                          data-wow-delay="1.1s"
                          href="#"
                        >
                          Contact
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
                <div class="col-lg-3 col-md-12">
                  <div class="socail_links">
                    <ul>
                      <li>
                        <a
                          class="wow fadeInUp"
                          data-wow-duration="1s"
                          data-wow-delay=".3s"
                          href="#"
                        >
                          {" "}
                          <FontAwesomeIcon icon={faFacebook} />
                        </a>
                      </li>
                      <li>
                        <a
                          class="wow fadeInUp"
                          data-wow-duration="1s"
                          data-wow-delay=".4s"
                          href="#"
                        >
                          {" "}
                          <FontAwesomeIcon icon={faInstagram} />
                        </a>
                      </li>
                      <li>
                        <a
                          class="wow fadeInUp"
                          data-wow-duration="1s"
                          data-wow-delay=".5s"
                          href="#"
                        >
                          {" "}
                          <FontAwesomeIcon icon={faTwitter} />
                        </a>
                      </li>
                      <li>
                        <a
                          class="wow fadeInUp"
                          data-wow-duration="1s"
                          data-wow-delay=".5s"
                          href="#"
                        >
                          {" "}
                          <FontAwesomeIcon icon={faYoutube} />
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="copy-right_text text-center">
            <div class="container">
              <div class="footer_border"></div>
              <div class="row">
                <div class="col-xl-12">
                  <p
                    class="copy_right text-center wow fadeInUp"
                    data-wow-duration="1s"
                    data-wow-delay="1.3s"
                  >
                    Terms & Privacy . Copyrights 2017 Taltrail
                  </p>
                </div>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
}

export default App;
