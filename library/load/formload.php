<?php

$var = $_GET['get_text'];
if(isset($var)) {
    echo "got response";
} else {
    echo "response not found";
}
