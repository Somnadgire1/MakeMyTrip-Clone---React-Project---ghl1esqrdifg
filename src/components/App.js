import React from 'react';
import '../styles/App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Flight from './Flight';
import Hotel from './Hotel';
import Train from './Train';
import Checkout from './Checkout';
import Login from './Login';
import Signup from './Signup';
import Header from './Header';
import Home from './Home';

 function App() {
  return (
    <div className='App'>
      <BrowserRouter>
      <Header/>
      <Routes>
        <Route path='/' element={ <Home/> } />
        <Route path='/flight' element={ <Flight/> } />
        <Route path='/hotel' element={ <Hotel/> } />
        <Route path='/train' element={ <Train/> } />
        <Route path='checkout' element={ <Checkout/> } />
        <Route path='/login' element={ <Login/> } />
        <Route path='/login/signup' element={ <Signup/> } />
      </Routes>
      </BrowserRouter>
    </div>
  );
}
export default App
