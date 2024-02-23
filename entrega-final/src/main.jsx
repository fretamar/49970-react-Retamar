import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC1WxLUvZGBHivdNuJJZWM_d-arsZT_KNM",
  authDomain: "retamar-coder-49970.firebaseapp.com",
  projectId: "retamar-coder-49970",
  storageBucket: "retamar-coder-49970.appspot.com",
  messagingSenderId: "29148851711",
  appId: "1:29148851711:web:0566a59fb1ad53a3458bca"
};


initializeApp(firebaseConfig);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
