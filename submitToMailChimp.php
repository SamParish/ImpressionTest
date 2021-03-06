<?php
require __DIR__ . '/vendor/autoload.php';

use DrewM\MailChimp\MailChimp;

// MailChimp config
$MailChimp = new MailChimp('29187bb1c2791ec54bbde069d92e3c37-us19');
$list_id = '3796175ac2';

// Add user to list of subscribers
$result = $MailChimp->post("lists/$list_id/members", [
				'merge_fields' => ['FNAME'=>$_POST['firstname'], 'LNAME'=>$_POST['lastname']],
				'email_address' => $_POST['email'],
				'status'        => 'subscribed'
			]);
			
// Check if successful
if ($MailChimp->success()) {
	echo ('Congratulations! You are now subscribed.')
} else {
	echo ("Sorry something went wrong, we weren't able to subscribe you")
	Console.log($MailChimp->getLastError());
}
?>
