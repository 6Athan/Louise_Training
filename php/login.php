<?php
    $json = file_get_contents('php://input');

    $formLogin = json_decode($json);
    $success = true;
    $message = 'Hubo un error inesperado.';

    $response = array(
        'success'=>$success,
        'message'=>$message,
    );
    echo json_encode($response);
?>