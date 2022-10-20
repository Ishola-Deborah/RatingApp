import React from "react";
import resImg from "../src/assets/illustration-thank-you.svg";

const Response = ({ rateNo }) => {
  return (
    <div>
      <div className="responseContainer">
        <div className="resImg">
          <img src={resImg} alt="" />
        </div>
        <div className="orangeText">
          <p>You selected {rateNo} out of 5</p>
        </div>
        <div className="resContent">
          <h2>Thank you!</h2>
          <p>
            We appreciate you taking the time to give a rating. if you ever need
            more support, don't hesitate to get in touch!{" "}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Response;
