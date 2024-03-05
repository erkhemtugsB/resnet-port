import React from 'react'
import Navbar from '../navbar/Navbar'
import Ost1st from './Ost1st'
import Ost2nd from './Ost2nd'
import Ost3rd from './Ost3rd'
import Ost4th from './Ost4th'
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

const Ostrander = () => {
  return (
    <div>
      <Navbar />
      <div className='building-container'>
          <Ost1st database={database} />
          <Ost2nd database={database} />
          <Ost3rd database={database} />
          <Ost4th database={database} />
      </div>
      <Footer />
    </div>
  )
}

export default Ostrander