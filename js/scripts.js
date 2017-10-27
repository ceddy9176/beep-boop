// Front end Logic
$(document).ready(function() {
    $("#userInput").submit(function(event) {
     event.preventDefault();
     var userInput = $("#userIput").val();
     var result = beepBoop(userInput);
     $(".result").show();
     $("#output").text(result);
   });
 });
