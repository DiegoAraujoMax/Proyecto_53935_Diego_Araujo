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
*//*
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

window.onload = () => {
  mostrarProductos();
  mostrarCarrito();
};
*/
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
    productoElement.classList.add('tarjeta');
    productoElement.innerHTML = `
      <img src="./assets/img/${producto.nombre.replace(/\s/g, '')}.webp" alt="${producto.nombre}">
      <strong>Nombre:</strong> ${producto.nombre}<br>
      <strong>Precio:</strong> $${producto.precio}<br>
      <strong>Descripción:</strong> ${producto.descripcion}<br>
      <button onclick="agregarProductoAlCarrito(${indice})">Agregar</button>
      <button onclick="quitarProducto(${indice})">Quitar</button>`;
    productosContainer.appendChild(productoElement);
  });
}

function agregarProductoAlCarrito(indice) {
  carritoDeCompras.push(productosVinos[indice]);
  localStorage.setItem('carrito', JSON.stringify(carritoDeCompras));
  mostrarCarrito();
}

function quitarProducto(indice) {
  carritoDeCompras.splice(indice, 1);
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

window.onload = () => {
  mostrarProductos();
  mostrarCarrito();
};

