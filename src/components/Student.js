import React from "react";
import "../App.css";

export default function Student({ datas }) {
  return (
    <div className="carousel">
      <div className="boxes">
        {datas.map((data) => {
          return (
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
          );
        })}
      </div>
    </div>
  );
}
