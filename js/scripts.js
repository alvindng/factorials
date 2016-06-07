$(document).ready(function() {
  $("#factorial").submit(function(event) {
    event.preventDefault();
    var number = parseInt($("#number").val());
    var total = number;
    for(i= number-1; i >= 1; i --) {
      total = total * i;
    }

    $("#output").text(total);
  });
});
