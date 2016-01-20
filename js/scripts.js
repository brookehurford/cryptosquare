
var stripText = function(message) {
  message = message.replace(/[^\w]|/g, "");
  message = message.toLowerCase();
  return message;
};

var length = function(message) {
  return message.length;
};

var columns = function(message) {
  return Math.ceil(Math.sqrt(message.length));
};

var array = function(message) {
  return message.split("");
};

var slice = function(message) {
  var j = message.slice(0,2);
  return j;
};



    // event.preventDefault();
