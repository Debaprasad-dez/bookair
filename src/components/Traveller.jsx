import { useState } from "react";
import { Link } from "react-router-dom";

function Traveller(props) {
  const [adults, setAdults] = useState(props.traveller.adult);
  return (
    <div>
      <div className="container">
        <br />
        <Link
          onClick={() => props.resetAll()}
          style={{ textDecoration: "none" }}
          to="/"
        >
          <h1 className="" style={{ fontWeight: "700", color: "#010101" }}>
            MoveWith<span className="text-primary">Air</span>
          </h1>
        </Link>

        <label>Travellers</label>
        <br />
        <div
          className="pt-3 px-2 mb-2"
          style={{
            borderBottom: "1px solid rgba(28, 73, 141, 0.68)",
            background: "rgba(0, 117, 255, 0.05)",
          }}
        >
          <div className="row">
            <div className="col">
              <h1 style={{ fontSize: "36px" }}>Adults</h1>
            </div>
            <div className="col text-end mt-0">
              <span>
                <button
                  className="btn mx-1 "
                  onClick={() => setAdults(adults - 1)}
                >
                  <i className="fa fa-minus-circle fa-2x"></i>
                </button>
                <span className="mx-1 ">{adults}</span>
                <button
                  className="btn mx-1 "
                  onClick={() => setAdults(adults + 1)}
                >
                  <i className="fa fa-plus-circle fa-2x"></i>
                </button>
              </span>
            </div>
          </div>
          <p></p>
        </div>

        <div>
          <div
            style={{
              background: "#0075FF",
              width: "100%",
              textDecoration: "none",
              border: "none",
              color: "white",
            }}
          >
            <Link
              onClick={() => props.setTravellerNo(adults)}
              className="p-3 w-100 text-center"
              to="/"
            >
              <h2 style={{ color: "#fff" }}>Done</h2>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Traveller;
