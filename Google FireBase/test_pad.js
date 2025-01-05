// JavaScript file for the web page "World Peace Issue Tracker"
// Created by Harrison Kong
// Copyright (C) Coursera 2020

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyC8EQd4IYGndlT2ypUxgy3EqPC92VAFqjU",
    authDomain: "mallarapu-world-peace.firebaseapp.com",
    databaseURL: "https://mallarapu-world-peace-default-rtdb.firebaseio.com",
    projectId: "mallarapu-world-peace",
    storageBucket: "mallarapu-world-peace.appspot.com",
    messagingSenderId: "1082772031252",
    appId: "1:1082772031252:web:161d0ee24fc38830fc2401",
    measurementId: "G-T595RC3W2B"
  };


// Initialize Firebase
 firebase.initializeApp(firebaseConfig);
 firebase.analytics();

// Paste the web app's configuration above this line
// Our code starts below
const rootRef = firebase.database().ref("issues/");
// Task 3 ------------------------------------------

// rootRef.push ({
//   description: "Logo does not show up on screen 3",
//   resolved: "yes",
//   severity: "minor"
// });
//
// rootRef.push ({
//   description: "Screen flashes on save",
//   resolved: "no",
//   severity: "moderate"
// });

// Task 6 ------------------------------------------

// var recordRef = firebase.database().ref("issues/change-me");
//
// recordRef.update ({
//    "resolved": "yes"
// });

// Task 7 ------------------------------------------

// var recordRef = firebase.database().ref("issues/delete-me");
//
// recordRef.remove()
//    .catch(function(error) {
//      alert("Delete failed: " + error.message)
//    });
