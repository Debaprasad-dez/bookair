import { Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Destination from "./components/Dest";
import Departure from "./components/Departure";
import DateSelect from "./components/DateSelect";
import Traveller from "./components/Traveller";
import { useState } from "react";
import data from "./data/airports.json";
import routes from "./data/routes.json";
import "../src/App.css";
import Flights from "./components/Flights";

function App() {
  let dateToday = new Date();
  let formattedDate = `${dateToday.getDate()}-${dateToday.getMonth()}-${dateToday.getFullYear()}`;

  const [depart, setDepart] = useState({ code: "--", name: "Select city" });
  const [dest, setDest] = useState({ code: "--", name: "Select city" });
  const [date, setDate] = useState(formattedDate);
  const [traveller, setTraveller] = useState({ adult: 1, child: 0 });
  const [flights, setFlights] = useState(routes);
  const [airports, setAirports] = useState(data);
  console.log(formattedDate);

  function setDeparture(city) {
    setDepart(city);
    let origData = data;
    setAirports(origData);
  }
  function setDestination(city) {
    setDest(city);
    let origData = data;
    setAirports(origData);
  }
  function setTravellerNo(num) {
    setTraveller({ adult: num, child: 0 });
  }
  function changeDate(day) {
    console.log(day);
    setDate(day);
  }
  function findFlights() {
    let updatedList = flights.filter(
      (flight) => flight.depart === depart.code && flight.dest === dest.code
    );
    console.log(updatedList);
    setFlights(updatedList);
  }
  function depAirChange(e) {
    let origAirports = airports;
    let filtered = origAirports.filter(
      (airport) =>
        airport.code.includes(e.target.value) ||
        airport.name.includes(e.target.value)
    );
    setAirports(filtered);
  }
  function destAirChange(e) {
    let filtered = airports.filter((airport) =>
      airport.code.includes(e.target.value)
    );
    setAirports(filtered);
  }
  function resetAll() {
    setDepart({ code: "--", name: "Select city" });
    setDest({ code: "--", name: "Select city" });
    setDate(formattedDate);
    setTraveller({ adult: 1, child: 0 });
    setFlights(routes);
    setAirports(data);
  }

  return (
    <div className="App">
      <Routes>
        <Route
          exact
          path="/"
          element={
            <Home
              depart={depart}
              dest={dest}
              date={date}
              traveller={traveller}
              changeDate={changeDate}
              findFlights={findFlights}
              resetAll={resetAll}
            />
          }
        />
        <Route
          path="/depart"
          element={
            <Departure
              data={airports}
              setDeparture={setDeparture}
              depAirChange={depAirChange}
              resetAll={resetAll}
            />
          }
        />
        <Route
          path="/dest"
          element={
            <Destination
              data={airports}
              setDestination={setDestination}
              destAirChange={destAirChange}
              resetAll={resetAll}
            />
          }
        />
        <Route
          path="/date"
          element={<DateSelect dateToday={dateToday} resetAll={resetAll} />}
        />
        <Route
          path="/traveller"
          element={
            <Traveller
              traveller={traveller}
              setTravellerNo={setTravellerNo}
              resetAll={resetAll}
            />
          }
        />
        <Route
          path="/flights"
          element={
            <Flights
              routes={flights}
              depart={depart}
              dest={dest}
              resetAll={resetAll}
            />
          }
        />
      </Routes>
    </div>
  );
}

export default App;
