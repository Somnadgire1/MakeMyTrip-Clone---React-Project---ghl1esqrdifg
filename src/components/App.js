import React, { useState } from 'react';
import '../styles/App.css';
import { Routes, Route } from 'react-router-dom';
import Flight from './Flight';
import Hotel from './Hotel';
import Train from './Train';
import Checkout from './Checkout';
import Login from './Login';
import Signup from './Signup';
import Header from './Header';
// import Home from './Home';

 function App() {
  const [data, setData] = useState([]);
  const [data2, setData2] = useState([]);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <div className='App'>
      <Header email={email} password={password} />
      <Routes>
        {/* <Route path='/' element={ <Home/> } /> */}
        <Route path='/' element={ <Flight data={data} setData={setData} data2={data2} setData2={setData2}/> } />
        <Route path='/hotel' element={ <Hotel data={data} setData={setData} data2={data2} setData2={setData2}/> } />
        <Route path='/train' element={ <Train data={data} setData={setData} data2={data2} setData2={setData2}/> } />
        <Route path='checkout' element={ <Checkout data={data} setData={setData} data2={data2} setData2={setData2}/> } />
        <Route path='/login' element={ <Login email={email} setEmail={setEmail} password={password} setPassword={setPassword}/> } />
        <Route path='/login/signup' element={ <Signup/> } />
      </Routes>
    </div>
  );
}
export default App
