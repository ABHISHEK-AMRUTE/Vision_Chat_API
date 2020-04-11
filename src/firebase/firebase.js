const firebase = require("firebase/app"); 
const keys = require('../../keys')
require("firebase/database");

  firebase.initializeApp(keys);
  const database = firebase.database();

  module.exports = database