import React from "react";
import img1 from "./logo.png";
import "./success.css";
import { useNavigate } from "react-router-dom";

const Success = () => {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate("/customers");
  };
  return (
    <div
      className="row mt-4"
      style={{ display: "flex", justifyContent: "center" }}
    >
      <div className="col-12 ">
        <div
          className="card text-center"
          style={{ width: "22rem", margin: "auto" }}
        >
          <img src={img1} className="card-img-top" alt="..." />
          <div className="card-body">
            <h4 className="card-title ">CONGRUTALATIONS !</h4>
            <p className="card-text">You have been added on the waiting list </p>
            <button onClick={handleClick} className="btn sucessBtn px-5">
              <h5 className="tag">Done</h5>
            </button>
          </div>
        </div>
      </div>

 
    </div>
  );
};

export default Success;
