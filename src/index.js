import React from 'react';
import ReactDOM from 'react-dom/client';
//import './index.css';
// import './dist/css/style.css'
import App from './App';
import reportWebVitals from './reportWebVitals';
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAGMDqw45ZOZ3paFFYc0CguoHBM8OVcTiY",
  authDomain: "dysecommerce-9e639.firebaseapp.com",
  projectId: "dysecommerce-9e639",
  storageBucket: "dysecommerce-9e639.appspot.com",
  messagingSenderId: "1036551318969",
  appId: "1:1036551318969:web:7e9d9d4e87a3004b931a68"
};

// Initialize Firebase
initializeApp(firebaseConfig);


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
