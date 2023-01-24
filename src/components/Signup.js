import { createUserWithEmailAndPassword } from 'firebase/auth';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';


export default function Signup() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const signup = (e) => {
    e.preventDefault();
    createUserWithEmailAndPassword(auth, email, password)
    .then((user) => {
      console.log(user);
    })
    .catch((error) => {
      console.log(error);
    });
  };
  return (
    <div>
      <div className='d-flex aligns-items-center justify-content-center m-5'>
    <div className='container card p-3 mt-2 w-50'>
      <h1 className='text-center bg-danger text-white p-2 mb-2'>Registration Form</h1><hr/>
      <form onSubmit={signup}>
        <div className='form-group p-2'>
            <label htmlFor='name'>Name :</label>
            <input className="form-control" type='text' placeholder='Name'/>
        </div>
        <div className='form-group p-2'>
            <label htmlFor='email'>Email :</label>
            <input className="form-control" type='email' value={email} onChange={(e) => setEmail(e.target.value)} placeholder='Email'/>
        </div>
        <div className='form-group p-2'>
            <label htmlFor='password'>Password :</label>
            <input className="form-control" type='password' value={password} onChange={(e) => setPassword(e.target.value)} placeholder='Password'/>
        </div>
        <button type='submit' className='btn btn-outline-success fs-5 p-2 mt-2 form-control'>Sign Up</button>
        <Link to='/login'>Already Registered? Log In</Link>
      </form>
    </div>
    </div>
    </div>
  )
}
