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
  faUpload,
  faCloudUploadAlt,
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

// https://programmingwithmosh.com/javascript/react-file-upload-proper-server-side-nodejs-easy/

function Upload() {
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
            <NavDropdown.Item href="#action/3.2">Settings</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item href="/">Signout</NavDropdown.Item>
          </NavDropdown>
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
      <FontAwesomeIcon icon={faCloudUploadAlt} />
      <div className="upload_section">
        <p> Select Video or Image files to upload</p>
        <Button href="/upload" variant="success">
          Upload Videos
        </Button>{" "}
        <Button href="/upload" variant="success">
          Upload Images
        </Button>{" "}
      </div>
    </div>
  );
}

export default Upload;
