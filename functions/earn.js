const mongoose = require('mongoose');

var minutes = 1, the_interval = minutes * 60 * 1000;
setInterval(function() {
  console.log("I am doing my 1 minute check");
  // do your stuff here
}, the_interval);