import { Link } from "react-router-dom";

function Home(props) {
  function handleChange(e) {
    props.changeDate(e.target.value);
  }
  return (
    <div>
      <div className="container">
        <br />
        <br />
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
        <br />
        <div className="row">
          <div className="col-5 pe-0">
            <span
              className="bg-light px-4 ms-2 py-1 rounded-pill"
              style={{
                border: "solid 1px #0075FF",
                position: "absolute",
                transform: "translateY(-50%)",
              }}
            >
              From
            </span>
            <Link
              to="/depart"
              style={{ textDecoration: "none", color: "#000" }}
            >
              <div
                className="p-3 pt-4"
                style={{ background: "#E3F0FF", width: "100%" }}
              >
                <h2>{props.depart.code}</h2>
                <p>{props.depart.name}</p>
              </div>
            </Link>
          </div>
          <div className="col-2 p-0 m-0">
            <div
              style={{
                height: "100%",
                width: "100%",
                color: "#000",
                position: "relative",
              }}
            >
              <i
                className="fa fa-plane movePlanex"
                aria-hidden="true"
                style={{
                  position: "absolute",
                  transform: "rotate(45deg)",
                  top: "50%",
                }}
              ></i>
            </div>
          </div>
          <div className="col-5 ps-0">
            <span
              className="bg-light px-4 ms-2 py-1 rounded-pill"
              style={{
                border: "solid 1px #0075FF",
                position: "absolute",
                transform: "translateY(-50%)",
              }}
            >
              To
            </span>
            <Link to="/dest" style={{ textDecoration: "none" }}>
              <div
                className="p-3 pt-4"
                style={{ background: "#E3F0FF", width: "100%", color: "#000" }}
              >
                <h2>{props.dest.code}</h2>
                <p>{props.dest.name}</p>
              </div>
            </Link>
          </div>
        </div>
        <br />
        <div>
          <span
            className="bg-light px-4 ms-2 py-1 rounded-pill"
            style={{
              border: "solid 1px #0075FF",
              position: "absolute",
              transform: "translateY(-50%)",
            }}
          >
            Departure date
          </span>
          <div
            className="p-1 pt-3 m-0"
            style={{ background: "#E3F0FF", width: "100%" }}
          >
            <input
              className="w-100 p-3 border-0"
              style={{ background: "#E3F0FF" }}
              type="date"
              name=""
              id=""
              value={props.date}
              onChange={handleChange}
            />
          </div>
        </div>
        <br />
        <div className="row">
          <div className="col-6">
            <span
              className="bg-light px-4 ms-2 py-1 rounded-pill"
              style={{
                border: "solid 1px #0075FF",
                position: "absolute",
                transform: "translateY(-50%)",
              }}
            >
              Travellers
            </span>
            <Link
              to="/traveller"
              style={{ textDecoration: "none", color: "#000" }}
            >
              <div
                className="p-3 pt-4"
                style={{ background: "#E3F0FF", width: "100%" }}
              >
                <h2>{props.traveller.adult} adults</h2>
              </div>
            </Link>
          </div>

          <div className="col-6">
            <span
              className="bg-light px-4 ms-2 py-1 rounded-pill"
              style={{
                border: "solid 1px #0075FF",
                position: "absolute",
                transform: "translateY(-50%)",
              }}
            >
              Class
            </span>
            <div
              className="p-3 pt-4"
              style={{ background: "#E3F0FF", width: "100%" }}
            >
              <h2>Economy</h2>
            </div>
          </div>
        </div>
        <br />
        <div
          style={{
            background: "#1C498D",
            width: "100%",
            textDecoration: "none",
            border: "none",
            color: "white",
          }}
        >
          <Link
            disabled="true"
            onClick={() => props.findFlights()}
            to="/flights"
            className="p-3 w-100 text-center"
            style={{
              textDecoration: "none",
              color: "white",
            }}
          >
            <h2>Search Flights</h2>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Home;
