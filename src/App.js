import React, { Component } from "react";
import { Button, Form, FormGroup, Label, Input } from "reactstrap";
import Tables from "./components/table";
import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      info: [],
      id: 1,
      fname: "",
      lname: "",
      address: "",
      contact: "",
      college: "",
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChangefname = this.handleChangefname.bind(this);
    this.handleChangelname = this.handleChangelname.bind(this);
    this.handleChangeaddress = this.handleChangeaddress.bind(this);
    this.handleChangecontact = this.handleChangecontact.bind(this);
    this.handleChangecollege = this.handleChangecollege.bind(this);
  }

  handleChangefname(e) {
    this.setState({
      fname: e.target.value,
    });
  }
  handleChangelname(e) {
    this.setState({
      lname: e.target.value,
    });
  }
  handleChangeaddress(e) {
    this.setState({
      address: e.target.value,
    });
  }
  handleChangecontact(e) {
    this.setState({
      contact: e.target.value,
    });
  }
  handleChangecollege(e) {
    this.setState({
      college: e.target.value,
    });
  }

  handleSubmit(e) {
    e.preventDefault();

    console.log(this.state.fname);
    const datas = {
      id: this.state.id,
      fname: this.state.fname,
      lname: this.state.lname,
      address: this.state.address,
      contact: this.state.contact,
      college: this.state.college,
    };

    this.setState({
      id: this.state.id + 1,
      info: this.state.info.concat(datas),
    });
  }
  render() {
    return (
      <div className="container">
        <div className="App container">
          <button
            type="button"
            className="btn btn-primary"
            data-toggle="modal"
            data-target="#exampleModal"
            id="btn"
          >
            Add Person
          </button>

          <div
            className="modal fade"
            id="exampleModal"
            tabIndex="-1"
            role="dialog"
            aria-labelledby="exampleModalLabel"
            aria-hidden="true"
          >
            <div className="modal-dialog" role="document">
              <div className="modal-content">
                <div className="modal-header">
                  <h5 className="modal-title" id="exampleModalLabel">
                    Add Book
                  </h5>
                  <button
                    type="button"
                    className="close"
                    data-dismiss="modal"
                    aria-label="Close"
                  >
                    <span aria-hidden="true">&times;</span>
                  </button>
                </div>
                <div className="container">
                  <Form onSubmit={this.handleSubmit}>
                    <FormGroup>
                      <Label for="exampleFname">First name*</Label>
                      <Input
                        type="text"
                        name="Fname"
                        id="exampleFname"
                        placeholder="Enter First Name"
                        onChange={this.handleChangefname}
                        value={this.state.fname}
                      />
                    </FormGroup>
                    <FormGroup>
                      <Label for="exampleLname">Last name*</Label>
                      <Input
                        type="text"
                        name="Lname"
                        id="exampleLname"
                        placeholder="Enter Last Name"
                        onChange={this.handleChangelname}
                        value={this.state.lname}
                      />
                    </FormGroup>
                    <FormGroup>
                      <Label for="exampleAddress">Address*</Label>
                      <Input
                        type="text"
                        name="address"
                        id="exampleAddress"
                        placeholder="Enter Address Name"
                        onChange={this.handleChangeaddress}
                        value={this.state.address}
                      />
                    </FormGroup>
                    <FormGroup>
                      <Label for="exampleContact">Phone number*</Label>
                      <Input
                        type="number"
                        name="contact"
                        id="exampleContact"
                        placeholder="Enter Phone number"
                        onChange={this.handleChangecontact}
                        value={this.state.contact}
                      />
                    </FormGroup>
                    <FormGroup>
                      <Label for="exampleCollege">College*</Label>
                      <Input
                        type="text"
                        name="College"
                        id="exampleCollege"
                        placeholder="Enter your College"
                        onChange={this.handleChangecollege}
                        value={this.state.college}
                      />
                    </FormGroup>

                    <Button color="success" size="sm" className="mt-100">
                      Submit
                    </Button>
                    <hr />
                  </Form>
                </div>
              </div>
            </div>
          </div>
        </div>
        <hr />
        <Tables details={this.state.info} />
      </div>
    );
  }
}

export default App;
