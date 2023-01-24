import React, { useState } from 'react';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { Link } from 'react-router-dom';
import { auth } from '../firebase';

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handlelogin = (e) => {
    e.preventDefault();
    signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      const user = userCredential.user;
      console.log(user);
    })
    .catch((error) => {
      error = alert("plz fill correct data")
      console.log(error);
    });
  };
  return (
    <div>
      <div className='d-flex aligns-items-center justify-content-center'>
        <div className='container card p-3 mt-2 w-50'>
      <h1 className='text-center bg-danger text-white p-2 mb-2'>Login Page</h1>
      {/* <p className='fs-5 text-center text-info'><br/><span className='fs-4 text-center text-success'>Your Registration Successful !!!</span><br/><span className='text-warning'>Please Log In</span></p> */}
      <form onSubmit={handlelogin}>
        <div className='form-group p-2'>
            <label htmlFor='email'>Email :</label>
            <input className="form-control" type='email' value={email} onChange={(e) => setEmail(e.target.value)} placeholder='Enter Email' required/>
        </div>
        <div className='form-group p-2'>
            <label htmlFor='password'>Password :</label>
            <input className="form-control" type='password' value={password} onChange={(e) => setPassword(e.target.value)} placeholder='Password' required/>
        </div>
        <button className='btn btn-primary p-2 mt-2 form-control' type='submit'>Log In</button>
        <Link to='/login/signup'>New user? Sign Up</Link>
      </form>
    </div>
    </div>
    </div>
  )
}
