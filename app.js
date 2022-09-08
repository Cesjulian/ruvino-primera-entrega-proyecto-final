let componentes = [
    {articulo : "monitor" , marca : "samsung", precio : 1000},
    {articulo : "teclado" , marca : "redragon", precio : 1200},
    {articulo : "mouse" , marca : "logitech", precio : 800},
    {articulo : "gabinete completo" , marca : "asus", precio : 2500},
] 


function inicio(){
   
    alert(`¡Hola! ${nombre.toLocaleUpperCase()} , bienvenido/a Componentes Zona Sur `);
}

function agregarProducto(){

    producto = prompt("¿Que producto desea comprar? : \n 1 : Monitor Samsung $1000 \n 2 : Teclado Redragon $1200 \n 3 : Mouse Logitech $800 \n 4 : Gabinete completo Asus $2500");
    
    if ( producto=== "1"){
    
    tipo = componentes[0].articulo;
    marca = componentes[0].marca;
    resultado = componentes[0].precio;
    alert(`Eligio ${tipo}, Marca : ${marca}, Precio: $ ${resultado}`);
    carrito.push(componentes[0]);

    }
    if ( producto=== "2"){
    
    tipo = componentes[1].articulo;
    marca = componentes[1].marca;
    resultado = componentes[1].precio;
    alert(`Eligio ${tipo}, Marca : ${marca}, Precio: $ ${resultado}`);
    carrito.push(componentes[1]);
    }
    if ( producto=== "3"){
    
    tipo = componentes[2].articulo;
    marca = componentes[2].marca;
    resultado = componentes[2].precio;
    alert(`Eligio ${tipo}, Marca : ${marca}, Precio: $ ${resultado}`);
    carrito.push(componentes[2]);
    }
    if ( producto=== "4"){
    
    tipo = componentes[3].articulo;
    marca = componentes[3].marca;
    resultado = componentes[3].precio;
    alert(`Eligio ${tipo}, Marca : ${marca}, Precio: $ ${resultado}`);
    carrito.push(componentes[3]);
    }

    opcion = prompt("Que desea realizar \n \n 1 : Realizar otra compra  \n 2 : Mas Vendido \n 3 : Mostrar Carrito \n 4 : Pagar Compra \n \n 5 : Salir ");

}

function masVendido(){
    let masVendidos = componentes.filter((producto)=> producto.precio <= 1000);
    for(let masVendido of masVendidos){
        alert(`componente : ${masVendido.articulo} marca : ${masVendido.marca} a : $${masVendido.precio}`);

    }
    opcion = prompt("Que desea realizar \n \n 1 : Realizar compra  \n 2 : Mas Vendido \n 3 : Mostrar Carrito \n 4 : Pagar Compra \n \n 5 : Salir ");
}

function mostrarCarrito(){
    carrito.forEach((producto)=>{
        alert(`componentes ${producto.articulo} marca: ${producto.marca} $${producto.precio} `)
    })
    opcion = prompt("Que desea realizar \n \n 1 : Realizar compra  \n 2 : Mas Vendido \n 3 : Mostrar Carrito \n 4 : Pagar Compra \n \n 5 : Salir ");
}


function finalizarCompra(){
    let total = carrito.reduce((acc, el) => acc + el.precio , 0);
    alert(`el TOTAL es : $${total + 100} (incluye gastos de armado en caso de comprar gabinete y componentes)`);
}

let producto;
let carrito = [];
let nombre = prompt( "¿como te llamas? por favor ingresar tu nombre asi empezamos =)");
inicio();

let opcion = prompt("¿Que desea realizar? \n 1 : Comprar Componentes \n 2 : Mas Vendido \n 5 : Salir");

while(opcion!== "5"){
    if(opcion === "1"){
        agregarProducto();
    }
    if (opcion=== "2"){
        masVendido();
    }
    if (opcion === "3"){
        mostrarCarrito();
    }
    if(opcion === "4"){
        finalizarCompra();
      opcion = "5";
    }
}

alert(`¡Gracias por su compra ${nombre.toLocaleUpperCase()} , que la disfrute!`);


