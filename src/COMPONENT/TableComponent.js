import React from "react";
import { Table, Button } from "react-bootstrap";
import "../COMPONENT/tablestyle.css";
function TableComponent() {
  return (
    <div className="item">
      <Table className="table table-border table-hover  table-responsive">
      <table>

     
        <thead>
          <tr>
            <th>Name</th>
            <th>UserName</th>
            <th>Mobile Number</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Kodiyarasu</td>
            <td>abc@virtusa.com</td>
            <td>1234567892</td>
            <td>
              <button className="btn btn-secondary">Edit</button>
              <button className="btn btn-danger">Delete</button>
            </td>
          </tr>
          <tr>
            <td>Vicky</td>
            <td>payment@virtusa.com</td>
            <td>1234567892</td>
            <td>
              <button className="btn btn-secondary">Edit</button>
              <button className="btn btn-danger">Delete</button>
            </td>
          </tr>
          <tr>
            <td>Vishwa</td>
            <td>Sales@virtusa.com</td>
            <td>1234567892</td>
            <td>
              <button className="btn btn-secondary">Edit</button>
              <button className="btn btn-danger">Delete</button>
            </td>
          </tr>
        </tbody>
         </table>
      </Table>
    </div>
  );
}

export default TableComponent;
