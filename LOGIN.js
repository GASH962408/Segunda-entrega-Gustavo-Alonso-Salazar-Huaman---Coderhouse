//Finalmente mi pagina de inicio de sesion 

button=document.getElementById("BUT");
let z=99 //Establezco la variable z para que en caso de que el cliente ingrese el usuario o contrasena mal tengo 2 intentos mas
         // y al segundo intento se activara un tiempo de expiracion de la pagina.

let n=0  // Establezco la variable n=0 para contar las veces que el cliente inicio sesion mal
button.onclick = function()   // Cuando el usuario haga click en el boton ingresar una vez haya puesto sus datos se activaran los condicionales y bucles.
{
        X=document.getElementById("USE").value;  //de la pagina login.html convierto los valores que ingreso el cliente en este caso 
                                                 //el nombre de usuario y lo almaceno en una variable X.

        Y=document.getElementById("PAS").value; // de igual manera que el anterior pongo los valores que ingreso el cliente password en la variable Y
       
        if (X=="admin" && Y==1234)      //En esta parte comparo si ingreso correctamente los valores de usuario y contrasena con if con un AND
           {
            alert("Bienvenido Administrador"); //Si se ingreso correctamente saltara el mensaje de bienvenida.
            }
        else   //Si se equivoco el cliente saltara un mensaje para que pruebe 2 veces mas con el contador n
        {
            if (n==0)
            {
                alert("Usuario incorrecto intente de nuevo");
                n=n+1
            }
            else if (n==1)
            {
                alert("Usuario incorrecto intente de nuevo tiene un intento mas");
                n=n+1   
            }

            else if (n==2) //Si se equivoca el usuario se activara el bucle for que contara hasta 33 y le dira que la sesion ha expirado o bloqueara la pagina por seguridad
            {
                alert("Lo siento usuario incorrecto por seguridad contacte a su administrador");

                for(var i=1;i<=z;i++)
                {
                     console.log("Tiempo transcurrido" + i);
                     if(i==(z/3))
                     {
                        alert("Vuelva a la pagina principal por favor la pagina se cerrara.")
                     }
                }
                
            }

        }
    
      
}