import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import '../components/Styles.css';

export default function TrainSection({data, setData, data2, setData2}) {
  // const [data, setData] = useState([]);
  const [filtercity, setFiltercity] = useState("");
  const [filterci, setFilterci] = useState("");
  const [filterco, setFilterco] = useState("");
  const [filtergst, setFiltergst] = useState("");
  const [searchApiData, setSearchApiData] = useState([]);
                        console.log(setData2)
  useEffect(() => {
    const fetchData = () => {
      fetch("https://content.newtonschool.co/v1/pr/63b85bcf735f93791e09caf4/hotels")
        .then((response) => response.json())
        .then((json) => {
          setData(json);
          setSearchApiData(json);
        });
    };
    fetchData();
  }, []);

  // city
  const handlefilterCity = (city) => {
    setFiltercity(city.target.value);
  };

  // Check-in
  const handlefilterCi = (ci) => {
    setFilterci(ci.target.value);
  };

  // check-out
  const handlefilterCo = (co) => {
    setFilterco(co.target.value);
  };

  // Guests
  const handlefilterGst = (gst) => {
    setFiltergst(gst.target.value);
  };

  // search button
  const searchHandle =() => {
      const cityResult = searchApiData.filter((item) =>
        item.city.toLowerCase().includes(filtercity.toLowerCase())
      );
      setData(cityResult);

      const ciResult = searchApiData.filter((item) =>
        item.check_in.toLowerCase().includes(filterci.toLowerCase())
      );
      setData(ciResult);

      const coResult = searchApiData.filter((item) =>
        item.check_out.toLowerCase().includes(filterco.toLowerCase())
      );
      setData(coResult);

      const gstResult = searchApiData.filter((item) =>
        item.guests.toLowerCase().includes(filtergst.toLowerCase())
      );
      setData(gstResult);

  }
  return (
    <div>
      <div className="m-3 searchbar">
        {/* <h2 className="text-center text-danger">Hotel Section</h2>
        <hr /> */}
        <div className="p-1 mt-2">
          <label htmlFor="room">Room Type :</label>
          <select className="form-select w-25">
            <option>Single</option>
            <option>Double</option>
            <option>King</option>
          </select>
        </div>
        <div className="d-flex mt-2">
          <div className="p-1 m-3">
            <label htmlFor="city">CITY OR LOCATION</label>
            <input
              className="form-control"
              type="text"
              value={filtercity}
              onChange={(city) => handlefilterCity(city)}
              placeholder="Enter City"
              required
            />
          </div>
          <div className="p-1 m-3">
            <label htmlFor="checkin">CHECK-IN</label>
            <input
              className="form-control"
              type="date"
              value={filterci}
              onChange={(ci) => handlefilterCi(ci)}
              required
            />
          </div>
          <div className="p-1 m-3">
            <label htmlFor="checkout">CHECK-OUT</label>
            <input
              className="form-control"
              type="date"
              value={filterco}
              onChange={(co) => handlefilterCo(co)}
            />
          </div>
          <div className="p-1 m-3">
            <label htmlFor="guest">GUESTS</label>
            <input
              className="form-control"
              type="text"
              value={filtergst}
              onChange={(gst) => handlefilterGst(gst)}
              placeholder="Enter no. of guests"
            />
          </div>
        </div>
        <div className="text-center ">
          <button
            type="button"
            className="btn btn-outline-success rounded-pill" onClick={searchHandle}
          >
            Search
          </button>
        </div><hr/>
      </div>
      <div>
        <h3>Available Hotels</h3>
        {data.map((item, index) => {
          return (
            <div className="container card p-5 crd1" key={index}>
              <div className="row">
                <div className="col">
                  <p>HOTEL :</p>
                  <h4>{item.hotel_name}</h4>
                  <p>CITY :</p>
                  <h4>{item.city}</h4>
                  <p>RATING :</p>
                  <h4>{item.rating}</h4>
                </div>
                <div className="col order-1">
                  <p>CHECK-IN</p>
                  <h4>{item.check_in}</h4>
                  <p>CHECK-OUT</p>
                  <h4>{item.check_out}</h4>
                </div>
                <div className="col order-5">
                  <p>Price :</p>
                  <h4>{item.price_per_night}</h4>
                  <p>Room :</p>
                  <h4>{item.room_type}</h4>
                  <p>Guests :</p>
                  <h4>{item.guests}</h4>
                </div>
              </div>
              <div className="text-end">
                <Link to="/checkout">
                  <button type="button" className="btn btn-outline-warning" onClick={() => {
                    localStorage.setItem('hotel-Price', item.price_per_night)
                    setData2(localStorage.getItem('hotel-Price', item.price_per_night))
                  }}>
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
