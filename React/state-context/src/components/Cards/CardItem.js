import React from "react";
import "./index.css";

const CardItem = () => {
  return (
    <div className="CardItem">
      <img src="img_avatar.png" alt="Avatar" width="100%" />
      <div className="container">
        <h4>
          <b>John Doe</b>
        </h4>
        <p>Architect & Engineer</p>
      </div>
    </div>
  );
};

export default CardItem;
