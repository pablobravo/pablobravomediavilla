<!DOCTYPE html>

<html lang="es">
    <!-- HEAD -->
<head>
    <meta charset="utf-8" >
    <title>Pablo Bravo Mediavilla</title>
    <meta name="MobileOptimized" content="width">
    <meta name="HandheldFriendly" content="true">
    <meta name="robots" content="all">
    <meta content="Pablo Bravo Mediavilla" name="author" >
    <meta content="" name="description" >
    <meta content="landing page profesional para facebook, landing page para facebook gratis, landing page, web responsive design, web html5" name="keywords" >
    <link rel="stylesheet" href="estilo.css" type="text/css" >
    <link rel="stylesheet" type="text/css" href="layout_Hibrido.css">
    <link rel="shortcut icon" href="favicon.ico" > 
      <script type="text/javascript" src="http://ajax.googleapis.com/ajax/libs/jquery/1.6.2/jquery.min.js"></script>
      <script type="text/javascript" src="js/jquery.flexslider-min.js"></script>
<script type="text/javascript" charset="utf-8">
  $(window).load(function() {
    $('.flexslider').flexslider({
        controlsContainer: '.flex-container'
    });
  });
</script>

<link rel="stylesheet" href="css/flexslider.css">

<script>(function(d, s, id) {
				  var js, fjs = d.getElementsByTagName(s)[0];
				  if (d.getElementById(id)) return;
				  js = d.createElement(s); js.id = id;
				  js.src = "//connect.facebook.net/es_ES/all.js#xfbml=1";
				  fjs.parentNode.insertBefore(js, fjs);
				}(document, 'script', 'facebook-jssdk'));
</script>

</head>
<body>
	<!-- Cabecera del documento -->
	<header>
		<h1>
			PABLO BRAVO MEDIAVILLA
		</h1>
		<nav>
            <ul id="navegacion">
                <li id="home"> <a href="index.php">HOME</a></li>
                <li id="hobbies"> <a href="hobbies.html">HOBBIES</a></li>
                <li id="pet"> <a href="pet.html">PET</a></li>
                <li id="experience"> <a href="experience.html">CAREER</a></li>
                <li id="contact"> <a href="contact.html">CONTACT</a></li>
            </ul>
        </nav>
	</header>
    <!-- Información complementaria -->
    <aside>
        <div class="fb-comments" data-href="http://pablobravo.name" data-numposts="8" data-width="240"; data-colorscheme="dark"></div>
    </aside>
    <main>
		<article>
				<form method="POST" action="insertardatosentabla.php"> 
                    <fieldset> 
                    <legend><b>Completa el siguiente formulario :</b></legend> 
                    <h1>¡Comenta!</h1> 
                    
                     Nick:<input type="text" name="usuario" id="" placeholder="Ingresa tu nick..."/><br /> 
                    Comentario<textarea name="comentario"></textarea> 
                    <input type="SUBMIT" value="Botón de envio estandar" name="Enviar la información al servidor">
                    </fieldset> 
                </form> 
                
                 <?php 
  
                    $db_host = "10.246.16.218";                   
                    $db_name = "pablobravo_name";                    
                    $db_user = "pablobravo_name";                    
                    $db_password = "5zDGfNT7";             
                    $db_table = "comentarios";          
                    $conexion = mysql_connect($db_host, $db_user, $db_password) or die("No se ha podido realizar la conexión con la base de datos. Error: ".mysql_error()); 
                    mysql_select_db($db_name, $conexion); 
                    
                    
                    
                    $q = @mysql_query("SELECT * FROM comentarios"); 
                    
                    //MOSTRANDO... 
                    
                    while($row=mysql_fetch_array($q)) 
                    { 
                    echo " Nombre : ".$row["nick"]." <br /> "; 
                    echo " Comentario : ".$row["comentario"]." <br /> "; 
                    } 
                    
                    ?> 
		</article>
	   </section>
	  
	</main>
	<!-- Pie del documento -->
	<footer>
		<hr>
		<p>
			<em lang=en>This document was successfully checked as HTML5</em>
		</p>
	</footer>
</body>
</html>



