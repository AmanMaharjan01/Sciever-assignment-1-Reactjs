import React, { Component } from "react";
import PostData from "./students.json";
import Home from "./components/Home";
import Student from "./components/Student";
import { Breadcrumb, BreadcrumbItem } from "reactstrap";
import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);
    console.log("component construtor");

    this.state = {
      showHome: true,
      showStudent: false,
    };

    this.showMe = this.showMe.bind(this);
  }

  showMe() {
    this.setState({
      showHome: !this.state.showHome,
      showStudent: !this.state.showStudent,
    });
  }

  render() {
    let home;
    if (this.state.showHome) {
      home = <Home />;
    }

    let student;
    if (this.state.showStudent) {
      student = <Student datas={PostData.information} />;
    }
    return (
      <div className="container">
        <Breadcrumb>
          <BreadcrumbItem>
            <a onClick={this.showMe}>Home</a>
          </BreadcrumbItem>
          <BreadcrumbItem>
            <a onClick={this.showMe}>Student</a>
          </BreadcrumbItem>
        </Breadcrumb>
        {home}
        {student}
      </div>
    );
  }
}

export default App;
