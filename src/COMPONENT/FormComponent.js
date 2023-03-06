import React from "react";
import "../COMPONENT/formstyle.css";
import TableComponent from "./TableComponent";
import {
  Container,
  Row,
  Col,
  Form,
  Input,
  Button,
  Navbar,
  Nav,
  NavbarBrand,
  NavLink,
  NavItem,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
} from "react-bootstrap";

function FormComponent() {
  return (
    <>
      <div>
        <h1 className="header">CRUD OPERATION IN REACT JS</h1>
      </div>
      <Row>
             
        <Col className="col-md-4">
          <form  className="form" style={{ marginLeft: 40 }}>
            <div className="item">
              <label for="name" className="label">
                Name
              </label>
              <input
                type="text"
                id="name"
                className="form-control"
                placeholder="Enter your name"
              ></input>
            </div>

            <div className="item">
              <label for="username" className="label">
                UserName
              </label>
              <input
                type="email"
                id="username"
                className="form-control"
                placeholder="Eg:abc@virtus.com"
              ></input>
            </div>

            <div className="item">
              <label for="number" className="label">
                Mobile Number
              </label>
              <input
                type="number"
                id="number"
                className="form-control"
                placeholder="Eg:+91 *********"
              ></input>
            </div>
            <div className="mt-4">
              <button className="btn btn-primary">Add to Item</button>
            </div>
          </form>
        </Col>
        <Col className="col-md-1">

        </Col>
        <Col className="col-md-7">
<TableComponent />
          
        </Col>
      </Row>
    </>
  );
}

export default FormComponent;
