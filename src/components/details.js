import React from "react";
import { Breadcrumb, BreadcrumbItem } from "reactstrap";
import { Link } from "react-router-dom";
import "../App.css";

function App({ data, stdid }) {
  return (
    <div className="container">
      <Breadcrumb>
        <BreadcrumbItem>
          <Link to="/">
            <span>home</span>
          </Link>
        </BreadcrumbItem>
        <BreadcrumbItem active>
          <Link to="/student">
            <span>student</span>
          </Link>
        </BreadcrumbItem>
        <BreadcrumbItem>
          <span>details</span>
        </BreadcrumbItem>
      </Breadcrumb>
      <div className="information">
        {data
          .filter((student) => student.id === stdid)
          .map((inform) => (
            <div className="box">
              <div className="img">
                <img src={`.${inform.url}`} alt="student-pic" />
              </div>
              <div className="info">
                <p>
                  <b>Name:</b> {inform.name}
                </p>
                <p>
                  <b>Phone no:</b> {inform.contact}
                </p>
                <p>
                  <b>Address:</b> {inform.address}
                </p>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
}

export default App;
