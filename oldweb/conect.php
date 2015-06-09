
<!DOCTYPE html>

<html lang="es">
    <!-- HEAD -->
<head>
    <meta charset="utf-8" />
    <title></title>
    <meta name="MobileOptimized" content="width" />
    <meta name="HandheldFriendly" content="true" />
    <meta name="robots" content="all"/>
    <meta content="Pablo Bravo Mediavilla" name="author" />
    <meta http-equiv="refresh" content="0.6;url=index.php">
</head>

<?php 
// Realizamos la conexión con la base de datos 
  
$db_host = "10.246.16.218";                    // Servidor donde está alojada la base de datos 
$db_name = "pablobravo_name";                    // Nombre de la base de datos 
$db_user = "pablobravo_name";                    // Usuario de la base de datos 
$db_password = "5zDGfNT7";                // Contraseña de la base de datos 
$db_table = "comentarios";           // Nombre de la tabla de la base de datos 
$conexion = mysql_connect($db_host, $db_user, $db_password) or die("No se ha podido realizar la conexión con la base de datos. Error: ".mysql_error()); 
mysql_select_db($db_name, $conexion); 
//Consegumos la conexión ahora insertamos los datos. 
$user = strip_tags($_POST["usuario"]); 
$com = strip_tags($_POST["comentario"]); 

//Bien que comienze la insertada de datos :P. 
//if($user == "")

if ($com== "") { 
echo 'Tienes que poner tu comentario.'; 
} 
elseif ( $user== ""){ 
echo 'Tienes que poner tu nick.';
}
else{
    $taringa = @mysql_query('INSERT INTO comentarios (nick,comentario) VALUES("'.@mysql_real_escape_string($user).'","'.@mysql_real_escape_string($com).'")'); 
    //Si todo esta bien y listo.. 
    if($taringa) 
    { 
    }else{ 
    //Por lógica el else es is esto no se finalizó con éxito. 
    echo 'Error, vuelve a intentarlo '.$user.' <a href="javascript:history.go(-1)">Volver.</a>'; 
    } 
}
?>