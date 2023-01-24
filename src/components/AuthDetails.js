import React, { useEffect, useState } from 'react';
import { onAuthStateChanged, signOut } from 'firebase/auth';
import { auth } from '../firebase';
import "./AuthDetails.module.css"


export default function AuthDetails() {
    const [authUser, setAuthUser] = useState(null);

    useEffect(() => {
        const ckeck = onAuthStateChanged(auth, (user) => {
            if(user) {
                setAuthUser(user);
            } else {
                setAuthUser(null);
            }
        });
        return () => {
            ckeck();
        }
    }, []);
    const usersignout = () => {
        signOut(auth).then(() => {
            // alert("sign out successful")
            console.log('sign out successful')
        }).catch(error => console.log(error))
    }
  return (
    <div>
      {
        authUser ? <><p>{authUser.email}</p><button onClick={usersignout}>Sign Out</button></> : <p></p>
      }
    </div>
  );
}
