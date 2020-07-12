import React, { Component } from "react";
import "../App.css";
import MUIDataTable from "mui-datatables";

class Tables extends Component {
  render() {
    console.log(this.props.details);

    const columns = [
      {
        name: "id",
        label: "Id",
        options: {
          filter: true,
          sort: true,
        },
      },
      {
        name: "fname",
        label: "First name",
        options: {
          filter: true,
          sort: true,
        },
      },
      {
        name: "lname",
        label: "Last name",
        options: {
          filter: true,
          sort: false,
        },
      },
      {
        name: "address",
        label: "Address",
        options: {
          filter: true,
          sort: false,
        },
      },
      {
        name: "contact",
        label: "Phone no",
        options: {
          filter: true,
          sort: false,
        },
      },
      {
        name: "college",
        label: "College",
        options: {
          filter: true,
          sort: false,
        },
      },
    ];

    const data = this.props.details;

    const options = {
      filterType: "checkbox",
    };

    return (
      <>
        <div className="table">
          <MUIDataTable
            title={"Employee List"}
            data={data}
            columns={columns}
            options={options}
          />
        </div>
      </>
    );
  }
}

export default Tables;
