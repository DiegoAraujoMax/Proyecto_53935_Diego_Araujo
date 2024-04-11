
const productosVinos = [
  {
    nombre: "Vino Tinto Malbec",
    precio: 209,
    descripcion: "Tinto Malbec PUEBLO DEL SOL 75 L.",
  },
  {
    nombre: "Vino Blanco",
    precio: 249,
    descripcion: "Blanco  PUEBLO DEL SOL 75 L.",
  },
  {
    nombre: "Vino Tinto Tannat",
    precio: 209,
    descripcion: "Tinto Tannat PUEBLO DEL SOL 75 L.",
  },
  {
    nombre: "Vino Rosado Merlot",
    precio: 169,
    descripcion: "Rosado Merlot PUEBLO DEL SOL 75 L.",
  },
];

let carritoDeCompras = JSON.parse(localStorage.getItem("carrito")) || [];

function mostrarProductos() {
  const productosContainer = document.getElementById("productos-container");
  productosContainer.innerHTML = "";

  productosVinos.forEach((producto, indice) => {
    const productoElement = document.createElement("div");
    productoElement.classList.add("tarjeta");
    productoElement.innerHTML = `
      <img src="./assets/img/${producto.nombre.replace(/\s/g, "")}.webp" alt="${
      producto.nombre
    }">
      <strong>Nombre:</strong> ${producto.nombre}<br>
      <strong>Precio:</strong> $${producto.precio}<br>
      <strong>Descripción:</strong> ${producto.descripcion}<br>
      <button onclick="agregarProductoAlCarrito(${indice})">Agregar</button>
      <button onclick="quitarProducto('${producto.nombre}')">Quitar</button>`;
    productosContainer.appendChild(productoElement);
  });
}

function agregarProductoAlCarrito(indice) {
  carritoDeCompras.push(productosVinos[indice]);
  localStorage.setItem("carrito", JSON.stringify(carritoDeCompras));
  mostrarCarrito();
  calcularTotal();
}

function quitarProducto(nombreProducto) {
  carritoDeCompras = carritoDeCompras.filter(
    (producto) => producto.nombre !== nombreProducto
  );
  localStorage.setItem("carrito", JSON.stringify(carritoDeCompras));
  mostrarCarrito();
  calcularTotal();
}

function mostrarCarrito() {
  const carritoContainer = document.getElementById("carrito-container");
  carritoContainer.innerHTML = "";

  if (carritoDeCompras.length === 0) {
    carritoContainer.textContent = "El carrito de compras está vacío.";
  } else {
    let mensajeCarrito = "Contenido del carrito:\n\n";
    carritoDeCompras.forEach((producto, indice) => {
      mensajeCarrito += `${indice + 1}. ${producto.nombre} - Importe: $${
        producto.precio
      }\n`;
    });
    carritoContainer.textContent = mensajeCarrito;
  }
}

function calcularTotal() {
  const totalContainer = document.getElementById("total");
  let total = 0;
  carritoDeCompras.forEach((producto) => {
    total += producto.precio;
  });
  totalContainer.textContent = total;
}

window.onload = () => {
  mostrarProductos();
  mostrarCarrito();
  calcularTotal();
};
