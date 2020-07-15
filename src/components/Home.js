import React from "react";
import "../App.css";
import { Breadcrumb, BreadcrumbItem } from "reactstrap";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div className="container">
      <Breadcrumb>
        <BreadcrumbItem active>
          <Link to="/">
            <span>home</span>
          </Link>
        </BreadcrumbItem>
        <BreadcrumbItem> </BreadcrumbItem>
      </Breadcrumb>
      <hr />
      <div className="about">
        <h1>Student System</h1>
      </div>
    </div>
  );
}
