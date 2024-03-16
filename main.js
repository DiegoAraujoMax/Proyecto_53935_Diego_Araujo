const productosVinos = [
  { nombre: "Vino Tinto Malbec", precio: 209, descripcion: "Tinto Malbec PUEBLO DEL SOL 75 L." },
  { nombre: "Vino Blanco", precio: 249, descripcion: "Blanco  PUEBLO DEL SOL 75 L." },
  { nombre: "Vino Tinto Tannat", precio: 209, descripcion: "Tinto Tannat PUEBLO DEL SOL 75 L." },
  { nombre: "Vino Rosado Merlot", precio: 169, descripcion: "Rosado Merlot PUEBLO DEL SOL 75 L." },
];

function mostrarProductos() {
  let mensaje = 'Vinos:\n\n';
  productosVinos.forEach((producto) => {
    mensaje += `Nombre: ${producto.nombre}\n`;
    mensaje += `Precio: ${producto.precio}\n`;
    mensaje += `Descripción: ${producto.descripcion}\n\n`;
  });
  alert(mensaje);
}

mostrarProductos();

