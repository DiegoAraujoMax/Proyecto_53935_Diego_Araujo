function calcularDevolucionIVA(precio1, precio2, precio3) {
    const porcentajeIVA = 0.22;
    const totalSinIVA = precio1 + precio2 + precio3;
    const montoIVA = totalSinIVA * porcentajeIVA;
    const totalConIVA = totalSinIVA + montoIVA;
    return { totalSinIVA, montoIVA, totalConIVA };
  }
  
  function esNumeroValido(valor) {
    return !isNaN(Number(valor));
  }
  
  function validarPrecio(mensaje) {
    let precio;
    do {
      precio = parseFloat(prompt(mensaje));
      if (!esNumeroValido(precio)) {
        alert("Por favor, ingrese un precio válido.");
      }
    } while (!esNumeroValido(precio));
    return precio;
  }
  
  function ingresarPreciosYCalcularIVA() {
    const precio1 = validarPrecio("Ingrese el primer precio:");
    const precio2 = validarPrecio("Ingrese el segundo precio:");
    const precio3 = validarPrecio("Ingrese el tercer precio:");
  
    const { totalSinIVA, montoIVA, totalConIVA } = calcularDevolucionIVA(
      precio1,
      precio2,
      precio3
    );
  
    alert(
      "Resumen de la devolución de IVA sobre sus productos: " +
        "Total (sin IVA): $" +
        totalSinIVA.toFixed(2) +
        " Monto del IVA: $" +
        montoIVA.toFixed(2) +
        " Total con IVA aplicado: $" +
        totalConIVA.toFixed(2)
    );
  
    let continuar = prompt(
      "¿Quieres ingresar más precios? (Escribe 'si' o 'no')"
    ).toLowerCase();
    if (continuar === "si") {
      ingresarPreciosYCalcularIVA();
    } else if (continuar !== "no") {
      alert("Entrada no válida. El programa se cerrará.");
    }
  }
  
  ingresarPreciosYCalcularIVA();
  