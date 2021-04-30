<?php
$db_url =  getenv('REPLIT_DB_URL');

// Adding something to the db
// database key => value
function db_push($key, $value) {
  $data = array('test' => 'hello world');

  $options = array(
    'http' => array(
      'header'  => "Content-type: application/x-www-form-urlencoded\r\n",
      'method'  => 'POST',
      'content' => http_build_query($data)
    )
  );
  $context  = stream_context_create($options);
  $result = file_get_contents($url, false, $context);
}
if ($result === FALSE) { /* Handle error */ }

// Get from db
echo file_get_contents($url . '/test');
?>