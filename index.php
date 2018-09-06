<?php ?>
<head>
<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>
<?php //<script src="form.js"></script> ?>
</head>


<form id="subscribe-form" action="submitToMailChimp.php" method="post">
<div class="user-input">    
    <input type="text" id="firstname" name="firstname" placeholder="First Name">
    <input type="text" id="lastname" name="lastname" placeholder="Last Name">
    <input type="email" id="email" name="email" placeholder="your.email@here.com">
</div>

<input type="submit" class="submit-button" id ="submit-form-button" value="Subscribe">

<div id="result"></div>
</form>

