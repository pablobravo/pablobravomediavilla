
<?php 
require_once("conect.php"); 
conectardb("10.246.16.218","pablobravo_name","5zDGfNT7","pablobravo_name"); 
//Consegumos la conexión ahora insertamos los datos. 
$user = strip_tags($_POST["usuario"]); 
$com = strip_tags($_POST["comentario"]); 

//Bien que comienze la insertada de datos :P. 

$taringa = @mysql_query('INSERT INTO comentar (nick,comentario) VALUES("'.@mysql_real_escape_string($user).'","'.@mysql_real_escape_string($com).'")'); 
//Si todo esta bien y listo.. 
if($taringa) 
{ 
echo 'LISTO COMENTARIO AGREGADO '.$user.''; 
}else{ 
//Por lógica el else es is esto no se finalizó con éxito. 
echo 'Error, vuelve a intentarlo '.$user.' <a href="javascript:history.go(-1)">Volver.</a>'; 
} 
?>