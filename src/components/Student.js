import React from "react";
import "../App.css";
import { Breadcrumb, BreadcrumbItem } from "reactstrap";
import { Link } from "react-router-dom";

export default function Student({ datas }) {
  return (
    <div className="container">
      <Breadcrumb>
        <BreadcrumbItem>
          <Link to="/">
            <span>home</span>
          </Link>
        </BreadcrumbItem>
        <BreadcrumbItem active>
          <Link to="/">
            <span>student</span>
          </Link>
        </BreadcrumbItem>
        <BreadcrumbItem></BreadcrumbItem>
      </Breadcrumb>
      <div className="carousel">
        <div className="boxes">
          {datas.map((data) => {
            return (
              <Link to={`student/${data.id}`}>
                <div className="box">
                  <div className="img">
                    <img src={data.url} alt="student-pic" />
                  </div>
                  <div className="info">
                    <p>
                      <b>Name:</b> {data.name}
                    </p>
                    <p>
                      <b>Phone no:</b> {data.contact}
                    </p>
                    <p>
                      <b>Address:</b> {data.address}
                    </p>
                  </div>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
}
