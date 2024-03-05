import React from 'react'
import Navbar from '../navbar/Navbar'
import R1 from './R1'
import R2 from './R2'
import R3 from './R3'
import R4 from './R4'
import Footer from '../footer/Footer'


import 'firebase/compat/database'
import firebase from 'firebase/compat/app';

const firebaseConfig = {
  apiKey: "AIzaSyDUFsHN1bMxdfcra38xYDIbB8LkMHAPlmc",
  authDomain: "resnet-port.firebaseapp.com",
  databaseURL: "https://resnet-port-default-rtdb.firebaseio.com",
  projectId: "resnet-port",
  storageBucket: "resnet-port.appspot.com",
  messagingSenderId: "825936521895",
  appId: "1:825936521895:web:ff76329fb53b71f79bc982",
  measurementId: "G-WVWDCE9E9L"
}
firebase.initializeApp(firebaseConfig);
const database = firebase.database();

const Ross = () => {
  return (
    <div>
      <div className='nav'>
        <Navbar />
      </div>
      <div className='building-container'>
        <R1 database={database} />
        <R2 database={database} />
        <R3 database={database} />
        <R4 database={database} />
      </div>
      <Footer />
    </div>
  )
}

export default Ross