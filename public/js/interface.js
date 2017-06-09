// Function to control LED
$(document).ready(function() {

  // Refresh bell data
  refreshBell();
  setInterval(refreshBell, 1000);

});

function refreshBell() {

  $.get('/bell_module/ringing', function(json_data) {
    $("#ringing").text('Ringing: ' + json_data.ringing);  
  });
  
}
