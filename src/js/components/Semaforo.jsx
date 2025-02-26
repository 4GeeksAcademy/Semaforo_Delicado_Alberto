import React, { useState } from "react";
import "../../styles/index.css";

const Semaforo = () => {
  const [color, setColor] = useState("");

  

  return (
    <div className="semaforo">
      <ul>
        <li
          className={`light redLight ${color === "red" ? "active" : ""}`}
          onClick={() => setColor("red")}
        ></li>
        <li
          className={`light yellowLight ${color === "yellow" ? "active" : ""}`}
          onClick={() => setColor("yellow")}
        ></li>
        <li
          className={`light greenLight ${color === "green" ? "active" : ""}`}
          onClick={() => setColor("green")}
        ></li>
      </ul>
    </div>
  );
};

export default Semaforo;
