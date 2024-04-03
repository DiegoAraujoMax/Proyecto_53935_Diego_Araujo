/*PREENTREGA 3
/*Objetivos generales:

Codificar funciones de procesos esenciales y notificación de resultados por HTML, añadiendo interacción al simulador.(NO)
Ampliar y refinar el flujo de trabajo del script en términos de captura de eventos, procesamiento del simulador y notificación de resultados en forma de salidas por HTML, modificando el DOM.(NO)


Objetivos específicos:

Definir eventos a manejar y su función de respuesta.(NO)
Modificar el DOM, ya sea para definir elementos al cargar la página o para realizar salidas de un procesamiento.(NO)
Almacenar datos (clave-valor) en el Storage y recuperarlos.(NO)

Se debe entregar:

Implementación con uso de JSON y Storage.(NO)
Modificación del DOM y detección de eventos de usuario.(NO)
------------------------------------------------------------------------------------------------ 
*/

/*const productosVinos = [
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

seleccionarProductos();*/


const productosVinos = [
  { nombre: "Vino Tinto Malbec", precio: 209, descripcion: "Tinto Malbec PUEBLO DEL SOL 75 L." },
  { nombre: "Vino Blanco", precio: 249, descripcion: "Blanco  PUEBLO DEL SOL 75 L." },
  { nombre: "Vino Tinto Tannat", precio: 209, descripcion: "Tinto Tannat PUEBLO DEL SOL 75 L." },
  { nombre: "Vino Rosado Merlot", precio: 169, descripcion: "Rosado Merlot PUEBLO DEL SOL 75 L." },
];

let carritoDeCompras = JSON.parse(localStorage.getItem('carrito')) || [];

function mostrarProductos() {
  const productosContainer = document.getElementById('productos-container');
  productosContainer.innerHTML = '';
  
  productosVinos.forEach((producto, indice) => {
    const productoElement = document.createElement('div');
    productoElement.innerHTML = `${indice + 1}. ${producto.nombre} - Importe: $${producto.precio} <button onclick="agregarProductoAlCarrito(${indice})">Agregar</button>`;
    productosContainer.appendChild(productoElement);
  });
}

function agregarProductoAlCarrito(indice) {
  carritoDeCompras.push(productosVinos[indice]);
  localStorage.setItem('carrito', JSON.stringify(carritoDeCompras));
  mostrarCarrito();
}

function mostrarCarrito() {
  const carritoContainer = document.getElementById('carrito-container');
  carritoContainer.innerHTML = '';

  if (carritoDeCompras.length === 0) {
    carritoContainer.textContent = "El carrito de compras está vacío.";
  } else {
    let mensajeCarrito = 'Contenido del carrito:\n\n';
    carritoDeCompras.forEach((producto, indice) => {
      mensajeCarrito += `${indice + 1}. ${producto.nombre} - Importe: $${producto.precio}\n`;
    });
    carritoContainer.textContent = mensajeCarrito;
  }
}

function calcularTotal() {
  let total = carritoDeCompras.reduce((acumulador, producto) => acumulador + producto.precio, 0);
  alert(`Total de su compra: $${total}`);
}

window.onload = () => {
  mostrarProductos();
  mostrarCarrito();
};

