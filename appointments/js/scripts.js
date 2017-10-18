$(document).ready(function() {
  $("#calendar").submit(function(event) {
    var name = $("input#clientName").val();
    var clientDescription = $("input#description").val();
    var clientDate = $("input#date").val();
    var eventStart = $("input#start").val();
    var eventEnd = $("input#end").val();

    $("#person").text(name);
    $("#appt-date").text(clientDate);
    $("#appt-start").text(eventStart);
    $("#appt-end").text(eventEnd);
    $("#appt-description").text(clientDescription);

    $("#appt-confirmation").show();

    event.preventDefault();
  });
});
