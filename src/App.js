import React from "react";
import Carousel from "./components/carousel";
import PostData from "./students.json";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Carousel datas={PostData.information} />
    </div>
  );
}

export default App;
