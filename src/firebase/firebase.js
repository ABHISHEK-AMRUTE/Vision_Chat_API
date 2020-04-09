const firebase = require("firebase/app"); 
const keys = require('../../keys')
require("firebase/database");
var firebaseConfig = {
    apiKey: keys.firebase,
    authDomain: "vision-chat-api.firebaseapp.com",
    databaseURL: "https://vision-chat-api.firebaseio.com",
    projectId: "vision-chat-api",
    storageBucket: "vision-chat-api.appspot.com",
    messagingSenderId: "597352145530",
    appId: "1:597352145530:web:8ee6099df47160593551c3",
    measurementId: "G-Y3246H3C18"
  };

  firebase.initializeApp(firebaseConfig);
  const database = firebase.database();

  module.exports = database