import React from 'react'
import Navbar from '../navbar/Navbar'
import Hk1 from './Hk1'
import Hk2 from './Hk2'
import Hk3 from './Hk3'
import Hk4 from './Hk4'
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

const Hawkes = () => {
  return (
    <div>
      <Navbar />
      <div className='building-container'>
          <Hk1 database={database} />
          <Hk2 database={database} />
          <Hk3 database={database} />
          <Hk4 database={database} />
      </div>
      <Footer/>
    </div>
  )
}

export default Hawkes