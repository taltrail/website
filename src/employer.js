import React from "react";
import logo from "./assets/img/logos/taltrail.jpg";
import Iframe from "react-iframe";
import Button from "react-bootstrap/Button";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import NavDropdown from "react-bootstrap/NavDropdown";
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
  faFire,
  faStar,
  faHourglassEnd,
  faClock,
  faColumns,
  faDownload,
  faFlag,
  faShare,
  faPlus,
  faFileUpload,
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

function Employer() {
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
          <NavDropdown title="User name" id="basic-nav-dropdown">
            <NavDropdown.Item href="/profile">Profile</NavDropdown.Item>
            <NavDropdown.Item href="/settings">Settings</NavDropdown.Item>
            <NavDropdown.Item href="/">Something</NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item href="/">Signout</NavDropdown.Item>
          </NavDropdown>
        </Navbar.Collapse>
      </Navbar>
      {/* <hr></hr>
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
          <Button href="/upload" variant="success"><FontAwesomeIcon icon={faDownload} /></Button>{' '}
        </Nav>
      </div> */}
      <div className="profile_intro_video">
        <div class="row">
          <div class="col-8">
            <div class="embed-responsive embed-responsive-16by9 z-depth-1">
              <Iframe
                class="embed-responsive-item"
                url="https://www.youtube.com/embed/fa3Iczgh8Ok"
                style="height: 100%"
                allowfullscreen
              />
            </div>
          </div>
          <div class="col-4 justify-content-left">
            <h2 className="user_header">
              Video title and some description comes here
            </h2>
            <h4>About :</h4>
            <p> Nulla vitae elit libero, a pharetra augue mollis interdum </p>
            <h4>Category :</h4>
            <p> Nulla vitae elit libero, a pharetra augue mollis interdum </p>
            <h4>Trails :</h4>
            <p> Nulla vitae elit libero, a pharetra augue mollis interdum </p>
            <div className="user_picture">
              <img src={require("./assets/img/David.jpg")} />
              <p> David Gomez</p>
            </div>
            <div className="user_buttons">
              <Nav
                activeKey="/home"
                onSelect={(selectedKey) => alert(`selected ${selectedKey}`)}
              >
                <Nav.Item>
                  <Nav.Link eventKey="link-1">
                    {" "}
                    <div>
                      <FontAwesomeIcon icon={faShare} />
                    </div>{" "}
                    Share{" "}
                  </Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="link-2">
                    {" "}
                    <div>
                      <FontAwesomeIcon icon={faDownload} />
                    </div>
                    Download{" "}
                  </Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link href="/home">
                    {" "}
                    <div>
                      <FontAwesomeIcon icon={faPlus} />
                    </div>
                    Add to{" "}
                  </Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link href="/home">
                    {" "}
                    <div>
                      <FontAwesomeIcon icon={faStar} />
                    </div>{" "}
                    Trail{" "}
                  </Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link href="/home">
                    {" "}
                    <div>
                      <FontAwesomeIcon icon={faFlag} />
                    </div>
                    Report{" "}
                  </Nav.Link>
                </Nav.Item>
              </Nav>
            </div>
          </div>
        </div>
      </div>

      {/* <h3 className="category_header">Featured Videos</h3> */}
      <div class="h5 row mb-30 profile_videos">
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
  );
}

export default Employer;
