
// back end logic
var beepBoop = function (input, name) {
  var newArray = [];
  for (index = 0; index <= input; index += 1) {
    if (index % 100 === 10) {
      newArray.push("Boop-Beep!");
    } else if (index % 3 === 0 && index !== 0) {
      newArray.push("I'm sorry, " + name + ". I'm afraid I can't do that.");
    } else if (index === 0 || index % 10 === 0) {
      newArray.push("Beep!");
    } else if (index === 1 || index % 10 === 1 || (index > 10 && index < 20)) {
      newArray.push("Boop!");
    } else {
      newArray.push(index);
    }
  }
  return newArray;
}

// Front end Logic
$(document).ready(function() {
    $("#userInput").submit(function(event) {
     event.preventDefault();
     var userInput = $("#userInput").val();
     var userName = $("#userName").val();
     var result = beepBoop(input, name);
     $(".result").show();
     $("#output").text(result);
   });
 });
