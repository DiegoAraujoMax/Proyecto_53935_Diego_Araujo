/*PREENTREGA 2
-------------------------------------------------------------------------------------------------
Objetivos específicos

Capturar entradas mediante prompt(). (si)
Declarar variables y objetos necesarios para simular el proceso seleccionado. (si)
Crear funciones y/o métodos para realizar operaciones 
(suma, resta, concatenación, división, porcentaje, etc). (si)
Efectuar una salida, que es el resultado de los datos procesados, 
la cual puede hacerse por alert() o console.log(). (si)*/

/*Se debe entregar

Estructura HTML del proyecto. (si)
Variables de JS necesarias.  (si)
Funciones esenciales del proceso a simular. (si)
Objetos de JS. (si)
Arrays. (si)
Métodos de búsqueda y filtrado sobre el Array. (si)
------------------------------------------------------------------------------------------------*/

const productosVinos = [
  { nombre: "Vino Tinto Malbec", precio: 209, descripcion: "Tinto Malbec PUEBLO DEL SOL 75 L." },
  { nombre: "Vino Blanco", precio: 249, descripcion: "Blanco  PUEBLO DEL SOL 75 L." },
  { nombre: "Vino Tinto Tannat", precio: 209, descripcion: "Tinto Tannat PUEBLO DEL SOL 75 L." },
  { nombre: "Vino Rosado Merlot", precio: 169, descripcion: "Rosado Merlot PUEBLO DEL SOL 75 L." },
];

let carritoDeCompras = [];

function mostrarProductos() {
  let mensajeVinos = 'Vinos disponibles en bodega(Recuerde su numero correspodiente para agegar):\n\n';
  productosVinos.forEach((producto, indice) => {
    mensajeVinos += `${indice + 1}. ${producto.nombre} - Importe: $${producto.precio}\n`;
  });
  alert(mensajeVinos);
}

function agregarProductoAlCarrito(indice) {
  if (indice >= 0 && indice < productosVinos.length) {
    carritoDeCompras.push(productosVinos[indice]);
    alert(`"${productosVinos[indice].nombre}" ha sido agregado a su carrito.`);
  } else {
    alert("La opción seleccionada no es válida, vuelva a intentar.");
  }
}

function mostrarCarrito() {
  if (carritoDeCompras.length === 0) {
    alert("El carrito de compras está vacío.");
  } else {
    let mensajeCarrito = 'Contenido del carrito:\n\n';
    carritoDeCompras.forEach((producto, indice) => {
      mensajeCarrito += `${indice + 1}. ${producto.nombre} - Importe: $${producto.precio}\n`;
    });
    alert(mensajeCarrito);
  }
}

function calcularTotal() {
  let total = carritoDeCompras.reduce((acumulador, producto) => acumulador + producto.precio, 0);
  alert(`Total de su compra: $${total}`);
}

function seleccionarProductos() {
  let continuar = true;

  while (continuar) {
    mostrarProductos();
    let indiceProducto = parseInt(prompt("Ingrese el número del vino que desea agregar al carrito de compras(presionar 0 para ir al carrito):"));

    if (indiceProducto === 0) {
      continuar = false;
    } else {
      agregarProductoAlCarrito(indiceProducto - 1);
    }
  }

  mostrarCarrito();
  calcularTotal();
}

seleccionarProductos();
