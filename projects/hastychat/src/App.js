import React from 'react';
import './App.css';

// Firebase and Auth
import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

import { useAuthState } from 'react-firebase-hooks/auth'
import { useCollectionDate } from 'react-firebase-hooks/firestore'

import lockedapik from './lockedapi'

firebase.initializeApp({
    apiKey: " ",
    authDomain: "hastychat-main.firebaseapp.com",
    databaseURL: "https://hastychat-main.firebaseio.com",
    projectId: "hastychat-main",
    storageBucket: "hastychat-main.appspot.com",
    messagingSenderId: "217572696148",
    appId: "1:217572696148:web:1f9570ff7d10ad1c6ecdc1",
    measurementId: "G-RXHS07GMCD"
})

const auth = firebase.auth()
const firestore = firebase.firestore()

function App() {
  return (
    <div className="App">
      <header className="App-header">
        
        

      </header>
    </div>
  );
}

export default App;
