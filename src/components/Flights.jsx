import plane from "../assets/icon/plane.svg";
import { Link } from "react-router-dom";

function Flights(props) {
  return (
    <div>
      <div className="container">
        <br />

        <h1 className="" style={{ fontWeight: "700", color: "#010101" }}>
          MoveWith<span className="text-primary">Air</span>
        </h1>
        <Link
          onClick={() => props.resetAll()}
          style={{ textDecoration: "none" }}
          to="/"
        >
          <h4> Back to search</h4>
        </Link>
        <br />
        <label>Results for</label>
        <h1>
          <b>{props.depart.code} </b>{" "}
          <span
            className="mx-3"
            style={{ fontWeight: "400", fontSize: "16px" }}
          >
            to
          </span>{" "}
          <b> {props.dest.code}</b>
        </h1>
        {props.routes.length !== 0 ? (
          <div className="mt-3">
            {props.routes.map((route, i) => (
              <div className="btn w-100 text-start m-0 p-0" to="/" key={i}>
                <div
                  className="pt-3 px-2 mb-2"
                  style={{
                    borderBottom: "1px solid rgba(28, 73, 141, 0.68)",
                    background: "rgba(0, 117, 255, 0.1)",
                  }}
                >
                  <div className="row">
                    <div className="col-2">
                      <div className="position-relative h-100">
                        <img
                          className="position-absolute top-50 translate-middle start-50"
                          src={plane}
                          alt=""
                        />
                      </div>
                    </div>
                    <div className="col-10">
                      <div className="row">
                        <div className="col-7">
                          <h3>
                            {route.depart} --- {route.dest}
                          </h3>
                          <p>ETA {route.eta}</p>
                        </div>
                        <div className="col-5">
                          <b>
                            <h3 style={{ color: "#1C498D" }}>
                              Rs.{route.price}
                            </h3>
                          </b>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div>
            <br />
            <h2 className="display-5">No flights found</h2>
          </div>
        )}
      </div>
    </div>
  );
}

export default Flights;
