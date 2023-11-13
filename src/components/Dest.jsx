import { Link } from "react-router-dom";

function Destination(props) {
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
        <br />
        <br />
        <form action="">
          <label htmlFor="destinationCity" className="form-label">
            Select Destination
          </label>
          <input
            type="text"
            className="form-control py-3"
            style={{ background: "rgba(0, 117, 255, 0.05)", border: "none" }}
            id="destinationCity"
            aria-describedby="emailHelp"
            placeholder="Search city"
            onChange={props.destAirChange}
          />
        </form>
        <br />
        <label>Popular cities</label>
        <div className="mt-3">
          {props.data.map((cities) => {
            return (
              <Link
                key={cities.key}
                className="btn w-100 text-start m-0 p-0"
                onClick={() => props.setDestination(cities)}
                to="/"
              >
                <div
                  className="pt-3 px-2 mb-2"
                  style={{
                    borderBottom: "1px solid rgba(28, 73, 141, 0.68)",
                    background: "rgba(0, 117, 255, 0.05)",
                  }}
                >
                  <h3>{cities.code}</h3>
                  <p>{cities.name}</p>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Destination;
