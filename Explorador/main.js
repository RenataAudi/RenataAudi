canvas = document.getElementById('myCanvas');
ctx = canvas.getContext("2d");

//Define el ancho y alto de la imagen del explorador.
tortu_ancho=100;
tortu_alto=90;

background_image = "mar2.jpg";

tortu_image = "tortu.png";

tortu_x = 10;
tortu_y = 10;

//Crea la función "add()"

background_imgTag= new Image();     //Define la variable con una nueva imagen
background_imgTag.onload=uploadBackground;     // Define una función para cargar esta variable
background_imgTag.src= background_image;    // Carga la imagen

tortu_imgTag = new Image();    //Define la variable con una nueva imagen
tortu_imgTag.onload=uploadExplorador;  // Define una función para cargar esta variable
tortu_imgTag.src= tortu_image;	                                     // Carga la imagen

//Crea una función "uploadBackground()".
function uploadBackground(){                             
    ctx.drawImage(background_imgTag,0,0,canvas.width, canvas.height);   //Dibuja la imagen de fondo
}

//Crea una función "uploadrover()".
function uploadExplorador(){
    ctx.drawImage(tortu_imgTag, tortu_x, tortu_y, tortu_ancho, tortu_alto);    //Dibuja la imagen del explorador
}


window.addEventListener("keydown", my_keydown);
function my_keydown(e)
{
	keyPressed = e.keyCode;
	console.log(keyPressed);
    //Escribe el codigo si keypressed es up (arriba). El valor ASCIII para "arriba" es 38.
	if(keyPressed=='38'){
        up();
    }	
    if(keyPressed=='40'){
        down();
    }
    if(keyPressed=='37'){
        left();
    }
    if(keyPressed=='39'){
        right();
    }

     //Escribe el codigo si keypressed es down (abajo). El valor ASCIII para "abajo" es 40.
}		

function up(){
if (tortu_y >=0){
    tortu_y= tortu_y - 10; //cada que se presiona la tecla flecha arriba, se disminuye 10 px en y
    uploadBackground();// aca se recarga la imagen de fondo
    uploadExplorador();// aca se recarga la imagen del explorador
}
}
function down(){
    if(tortu_y <=500){
        tortu_y= tortu_y + 10; //cada que se presiona la tecla flecha arriba, se disminuye 10 px en y
        uploadBackground();// aca se recarga la imagen de fondo
        uploadExplorador();
    }
}
function right(){ // pueden hacer esta función?? ahora en con x
    if(tortu_x >=0){
        tortu_x= tortu_x + 10; //cada que se presiona la tecla flecha arriba, se disminuye 10 px en y
        uploadBackground();// aca se recarga la imagen de fondo
        uploadExplorador();
}
}
function left(){
    if(tortu_x <=500){
        tortu_x= tortu_x - 10; //cada que se presiona la tecla flecha arriba, se disminuye 10 px en y
        uploadBackground();// aca se recarga la imagen de fondo
        uploadExplorador();
}
}


