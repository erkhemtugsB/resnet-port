import React from 'react'
import Navbar from '../navbar/Navbar'
import Cm1st from './Cm1st'
import Cm2nd from './Cm2nd'
import Cm3rd from './Cm3rd'
import Cm4th from './Cm4th'
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

const Crownhart = () => {
  return (
    <div>
      <Navbar />
      <div className='building-container'>
        <Cm1st database={database} />
        <Cm2nd database={database} />
        <Cm3rd database={database} />
        <Cm4th database={database} />
      </div>
      <Footer/>
    </div>
  )
}

export default Crownhart