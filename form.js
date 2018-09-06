// Subcribe user
$('#subscribe-form').submit(function(event) {
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

  // Send data to PHP script via .ajax() of jQuery
  $.ajax({
    type: 'POST',
    dataType: 'json',
    url: 'submitToMailChimp.php',
    data: pfbSignupData,
    success: function (results) {
      $('#first_name').hide();
      $('#last_name').hide();
      $('#email').hide();
      $('#result').text('Thanks for subscribing!');
      console.log(results);
    },
    error: function (results) {
      $('#result').html('<p>Sorry we couldnt process your subscription.</p>');
      console.log(results);
    }
  });
});