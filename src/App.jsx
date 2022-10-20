import { useState, useRef } from "react";
import img from "../src/assets/icon-star.svg";
import Response from "../src/Response";
import "./App.css";

const App = () => {
  const [rateNo, setRateNo] = useState(0);
  const [show, setShow] = useState(false);
  const listRef = useRef(null);

  const getRateNo = (e) => {
    setRateNo(e.target.value);
    const lists = listRef.current.children;
    for (let i = 0; i < lists.length; i++) {
      lists[i].style.backgroundColor = "";
    }
    e.target.style.backgroundColor = "gray";
  };

  const submitRateNo = () => {
    if (rateNo > 0) {
      setShow(true);
    }
    return;
  };

  return (
    <div>
      {show ? (
        ""
      ) : (
        <div className="container">
          <div className="hero_img">
            <img src={img} alt="" />
          </div>
          <div className="rateTitle">
            <h2>How did we do?</h2>
          </div>
          <div className="rateContent">
            <p>
              Please let us know how we did with your support request. All
              feedback is appreciated to help us improve our offering
            </p>
          </div>
          <div className="rateNumber">
            <ul onClick={getRateNo} ref={listRef}>
              <li value={1}>1</li>
              <li value={2}>2</li>
              <li value={3}>3</li>
              <li value={4}>4</li>
              <li value={5}>5</li>
            </ul>
          </div>
          <div className="btn">
            <button onClick={submitRateNo}>submit</button>
          </div>
        </div>
      )}

      {show ? <Response rateNo={rateNo} /> : ""}
    </div>
  );
};

export default App;
