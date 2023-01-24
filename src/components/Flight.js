import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function FlightSearch() {
  const [data, setData] = useState([]);
  const [filterFrom, setFilterFrom] = useState("");
  const [filterTo, setFilterTo] = useState("");
  const [filterdd, setFilterDepDate] = useState("");
  const [filterRd, setFilterRetDate] = useState("");
  const [searchApiData, setSearchApiData] = useState([]);

  useEffect(() => {
    const fetchData = () => {
      fetch("https://content.newtonschool.co/v1/pr/63b85b1209f0a79e89e17e3a/flights")
        .then((response) => response.json())
        .then((json) => {
          setData(json);
          setSearchApiData(json);
        });
    };
    fetchData();
  }, []);
  //from city
  const handlefilterfrom = (frm) => {
    if (frm.target.value === "") {
      setData(searchApiData);
    } else {
      const fromResult = searchApiData.filter((item) =>
        item.from.toLowerCase().includes(frm.target.value.toLowerCase())
      );
      setData(fromResult);
    }
    setFilterFrom(frm.target.value);
  };
  // To city
  const handlefilterTo = (to) => {
    if (to.target.value === "") {
      setData(searchApiData);
    } else {
      const toResult = searchApiData.filter((item) =>
        item.to.toLowerCase().includes(to.target.value.toLowerCase())
      );
      setData(toResult);
    }
    setFilterTo(to.target.value);
  };
  //Departure Date
  const handlefilterDepartureDate = (dd) => {
    if (dd.target.value === "") {
      setData(searchApiData);
    } else {
      const ddResult = searchApiData.filter((item) =>
        item.departure.departureDate.toLowerCase().includes(dd.target.value.toLowerCase())
      );
      setData(ddResult);
    }
    setFilterDepDate(dd.target.value);
  };
  //Return Date
  const handlefilterReturnDate = (rd) => {
    if (rd.target.value === "") {
      setData(searchApiData);
    } else {
      const rdResult = searchApiData.filter((item) =>
        item.return.returnDate.toLowerCase().includes(rd.target.value.toLowerCase())
      );
      setData(rdResult);
    }
    setFilterRetDate(rd.target.value);
  };

  return (
    <div>
      <div className="m-3">
        <h2 className="text-center text-danger">Flight Section</h2>
        <hr />
        <div className="p-1 mt-2">
          <label htmlFor="">Trip Type :</label>
          <select className="form-select w-25">
            <option>One-way</option>
            <option>Two-way</option>
          </select>
        </div>
        <div className="d-flex mt-2">
          <div className="p-1 m-3">
            <label htmlFor="city">FROM</label>
            <input
              className="form-control"
              type="text"
              value={filterFrom}
              onChange={(frm) => handlefilterfrom(frm)}
              placeholder="Enter City"
              required
            />
          </div>
          <div className="p-1 m-3">
            <label htmlFor="city">TO</label>
            <input
              className="form-control"
              type="text"
              value={filterTo}
              onChange={(to) => handlefilterTo(to)}
              placeholder="Enter City"
              required
            />
          </div>
          <div className="p-1 m-3">
            <label htmlFor="date">DEPARTURE</label>
            <input
              className="form-control"
              type="text"
              value={filterdd}
              onChange={(dd) => handlefilterDepartureDate(dd)}
              placeholder="mm/dd/yyyy"
            />
          </div>
          <div className="p-1 m-3">
            <label htmlFor="date">RETURN</label>
            <input
              className="form-control"
              type="text"
              value={filterRd}
              onChange={(rd) => handlefilterReturnDate(rd)}
              placeholder="mm/dd/yyyy"
            />
          </div>
        </div>
        <div className="text-center ">
          <button
            type="button"
            className="btn btn-outline-success rounded-pill"
          >
            Search
          </button>
        </div><hr/>
      </div>
      <div>
        <h3>Available Tickets</h3>
        {data.map((item) => {
          return (
            <div className="container card p-5">
              <div className="row">
                <div className="col">
                  <p>FROM :</p>
                  <h4>{item.from}</h4>
                  <p>TO :</p>
                  <h4>{item.to}</h4>
                  <p>Airline :</p>
                  <h4>{item.airlineName}</h4>
                </div>
                <div className="col order-1">
                  <p>DEPARTURE</p>
                  <h4>{item.departure.departureDate} | {item.departure.departureTime}</h4>
                  <p>RETURN</p>
                  <h4>{item.return.returnDate} | {item.return.returnTime}</h4>
                </div>
                <div className="col order-5">
                  <p>Price :</p>
                  <h4>{item.price}</h4>
                  <p>Via :</p>
                  <h4>{item.via}</h4>
                  <p>Duration :</p>
                  <h4>{item.duration}</h4>
                </div>
              </div>
              <div className="text-end">
                <Link to="/checkout">
                  <button type="button" className="btn btn-outline-warning">
                    BOOK
                  </button>
                </Link>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
