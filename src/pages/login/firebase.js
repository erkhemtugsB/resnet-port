// firebase.js
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
    apiKey: "AIzaSyDUFsHN1bMxdfcra38xYDIbB8LkMHAPlmc",
    authDomain: "resnet-port.firebaseapp.com",
    databaseURL: "https://resnet-port-default-rtdb.firebaseio.com",
    projectId: "resnet-port",
    storageBucket: "resnet-port.appspot.com",
    messagingSenderId: "825936521895",
    appId: "1:825936521895:web:ff76329fb53b71f79bc982",
    measurementId: "G-WVWDCE9E9L"
};

const firebaseApp = initializeApp(firebaseConfig);
const auth = getAuth(firebaseApp);

export default auth;