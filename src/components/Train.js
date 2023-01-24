import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function Train() {
  const [data, setData] = useState([]);
  const [filterFrom, setFilterFrom] = useState("");
  const [filterTo, setFilterTo] = useState("");
  const [filtertd, setFiltertdDate] = useState("");
  const [filterclass, setFilterclass] = useState("");
  const [searchApiData, setSearchApiData] = useState([]);

  useEffect(() => {
    const fetchData = () => {
      fetch("https://content.newtonschool.co/v1/pr/63b85e152cabb8fdea2673ee/trains")
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
  //Travel Date
  const handlefilterTravelDate = (td) => {
    if (td.target.value === "") {
      setData(searchApiData);
    } else {
      const tdResult = searchApiData.filter((item) =>
        item.departure.departureDate.toLowerCase().includes(td.target.value.toLowerCase())
      );
      setData(tdResult);
    }
    setFiltertdDate(td.target.value);
  };
  //class - in api not available
  const handlefilterClass = (c) => {
    if (c.target.value === "") {
      setData(searchApiData);
    } else {
      const classResult = searchApiData.filter((item) =>
        item.train_number.toLowerCase().includes(c.target.value.toLowerCase())
      );
      setData(classResult);
    }
    setFilterclass(c.target.value);
  };

  return (
    <div>
      <div className="m-3">
        <h2 className="text-center text-danger">Train Section</h2>
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
            <label htmlFor="date">TRAVEL DATE</label>
            <input
              className="form-control"
              type="text"
              value={filtertd}
              onChange={(td) => handlefilterTravelDate(td)}
              placeholder="mm/dd/yyyy"
            />
          </div>
          <div className="p-1 m-3">
            <label htmlFor="date">TRAIN NO.</label>
            <input
              className="form-control"
              type="text"
              value={filterclass}
              onChange={(c) => handlefilterClass(c)}
              placeholder="Enter Class"
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
                  <p> </p>
                  <h4> </h4>
                </div>
                <div className="col order-1">
                  <p>DEPARTURE</p>
                  <h4>{item.departure.departureDate} | {item.departure.departureTime}</h4>
                  <p>TRAIN NUMBER</p>
                  <h4>{item.train_number}</h4>
                </div>
                <div className="col order-5">
                  <p>Price :</p>
                  <h4>{item.price}</h4>
                  <p>Kilometer :</p>
                  <h4>{item.kilometers}</h4>
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
