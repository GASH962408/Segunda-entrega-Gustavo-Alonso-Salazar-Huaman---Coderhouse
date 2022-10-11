alert("Bienvenido a la tienda");
//Creo la funcion constructora  sensor para poder crear objetos en mi caso son sensores industriales
function Sensor(ID,tipo,modelo,protocolo,año,costo) 
{
    this.ID=ID;
    this.tipo=tipo;
    this.modelo=modelo;
    this.protocolo=protocolo;
    this.año=año;
    this.costo=costo;
}
// Se crea un aproximado de 5 sensores para poder usarlos en la pagina de tienda 
const sensor1 = new Sensor(0,"Capacitivo","Siemens","HART",2020,500);
const sensor2 = new Sensor(1,"Inductivo","ABB","MODBUS",2019,250);
const sensor3 = new Sensor(2,"Presion","Schneider","HART",2022,760);
const sensor4 = new Sensor(3,"Resistivo","ABB","MODBUS",2018,150);
const sensor5 = new Sensor(4,"Temperatura","ABB","MODBUS",2018,125);


// Se crea la matriz productos donde estan todos los objetos
const productos=[sensor1,sensor2,sensor3,sensor4,sensor5];


// Se crea la funcion para ver los productos de la tienda
function verproductos()
{
    for (let i=0;i<productos.length;i++)
{
    console.log(productos[i]);
}
}


//Primero se visualiza los productos
console.log("Productos de la tienda")
console.log(verproductos());


//Funcion para busqueda por Tipo en Tienda
var Y=prompt("Escriba para buscar en Tienda producto por tipo (0)Capacitivo (1)Inductivo (2)Presion (3)Resistivo (4)Temperatura ");

if (Y==0)
{var encontrado1=productos.find((el)=>{
    return el.tipo==="Capacitivo"})
console.log("Producto encontrado en tienda");
console.log(encontrado1);}

else if (Y==1)
{var encontrado1=productos.find((el)=>{
    return el.tipo==="Inductivo"})
console.log("Producto encontrado en tienda");
console.log(encontrado1);}

else if (Y==2)
{var encontrado1=productos.find((el)=>{
    return el.tipo==="Presion"})
    console.log("Producto encontrado en tienda");
    console.log(encontrado1);}

else if (Y==3)
{var encontrado1=productos.find((el)=>{
    return el.tipo==="Resistivo"})
    console.log("Producto encontrado en tienda");
    console.log(encontrado1);}

else if (Y==4)
{
    var encontrado1=productos.find((el)=>
    {
    return el.tipo==="Temperatura"
    })
    console.log("Producto encontrado en tienda");
    console.log(encontrado1);
}
else
{
    console.log("No existe producto en tienda")
}


// Se crea el array carrito donde el usuario escogera que poner al carro de compras
const carrito=[];

//Se crea un bucle para que el usuario ingrese los productos la carrito segun su ID

do 
{   
    X=prompt("Escriba el ID del producto que desea agregar, Si desea terminar escriba (Q)");
    Xi=productos[X];
    carrito.push(Xi);
}
while(X!="Q");

//Funcion para ver el Carrito
function verCarrito()
{
for (let i=0;i<carrito.length;i++)
{ console.log(carrito[i]);}
}


// Se pregunta al usuario si quiere ver los productos en carrito
var A=prompt("Desea ver los productos en el carrito Y/N?");
if (A=="Y" || A=="y" )
{
    console.log("Productos en carrito");
    console.log(verCarrito());
}
else {console.log("Entendido")} 


//Funcion para busqueda por Tipo en Carrito
var Z=prompt("Escriba para buscar en carrito producto por tipo (0)Capacitivo (1)Inductivo (2)Presion (3)Resistivo (4)Temperatura  ");

if (Z==0)
{var encontrado2=carrito.find((el)=>{
    return el.tipo==="Capacitivo"})
    console.log("Producto encontrado en carrito");
    console.log(encontrado2);}

else if (Z==1)
{var encontrado2=carrito.find((el)=>{
    return el.tipo==="Inductivo"})
    console.log("Producto encontrado en carrito");
    console.log(encontrado2);}

else if (Z==2)
{var encontrado2=carrito.find((el)=>{
    return el.tipo==="Presion"})
    console.log("Producto encontrado en carrito");
    console.log(encontrado2);}

else if (Z==3)
{var encontrado2=carrito.find((el)=>{
    return el.tipo==="Resistivo"})
    console.log("Producto encontrado en carrito");
    console.log(encontrado2);}

else if (Z==4)
{var encontrado2=carrito.find((el)=>{
    return el.tipo==="Temperatura"})
    console.log("Producto encontrado en carrito");
    console.log(encontrado2);}
else
{
    console.log("No existe producto e el carrito")
}
