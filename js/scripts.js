
var stripText = function(message) {
  message = message.replace(/[^\w]|/g, "");
  message = message.toLowerCase();
  return message;
};

var length = function(message) {
  return message.length;
};

    // event.preventDefault();
