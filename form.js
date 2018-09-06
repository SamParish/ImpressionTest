// Subcribe user
$('#subscribe-form-button').click(function(event) {
  event.preventDefault();

  // Get form data
  var userFNAME = $('#first_name').val();
  var userLNAME = $('#last_name').val();
  var userEMAIL = $('#email').val();

  // Create JSON variable of retreived data
  var userData = {
    'firstname': userFNAME,
    'lastname': userLNAME,
    'email': userEMAIL,
  };

  console.log ('About to send Ajax request')
  
  // Send data to PHP script via .ajax() of jQuery
  $.ajax({
    type: 'post',
    dataType: 'json',
    url: 'submitToMailChimp.php',
    data: 'userData',
    success: function (results) {
      console.log('succesful ajax');
	  $('#first_name').hide();
      $('#last_name').hide();
      $('#email').hide();
      $('#result').text('Thanks for subscribing!');
      console.log(results);
    },
    error: function (results) {
		console.log('unsuccesful ajax');
      $('#result').html('<p>Sorry we couldnt process your subscription.</p>');
      console.log(results);
    }
  });
});