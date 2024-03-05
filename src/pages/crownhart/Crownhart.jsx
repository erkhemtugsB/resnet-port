import React from 'react'
import Navbar from '../navbar/Navbar'
import Cro1st from './Cro1st'
import Cro2nd from './Cro2nd'
import Cro3rd from './Cro3rd'
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
        <Cro1st database={database} />
        <Cro2nd database={database} />
        <Cro3rd database={database} />
      </div>
      <Footer/>
    </div>
  )
}

export default Crownhart