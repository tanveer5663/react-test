import React from "react";
import { useState, useEffect } from "react";
import "./App.css";

function Home() {
  const [color, setColor] = useState("red");
//   console.log(window.navigator.pdfViewerEnabled.valueOf())

  useEffect(() => {
    const sequence = ["red", "yellow", "green"];
    let index = 0;

    const interval = setInterval(() => {
      index = (index + 1) % sequence.length;
        // console.log(index);

      setColor(sequence[index]);
    }, 3000);                                         

    return () => {
      console.log("hii"), clearInterval(interval);
    };
  }, []);

  return (
    <div className="dflex">
      <div className={`light ${color == "red" ? "red" : ""}`}></div>

      <div className={`light ${color == "yellow" ? "yellow" : ""}`}></div>
      <div className={`light ${color == "green" ? "green" : ""}`}></div>
    </div>
  );
}

export default Home;
