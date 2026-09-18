// Importamos el módulo readline de Node.js para interactuar por consola
const readline = require('readline');

// Variables para el módulo Caja
const listaPedidos = [];
let totalAcumulado = 0;

// Configuración de la interfaz de lectura en consola
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// Función para agregar pedidos
function agregarPedido(producto, precio) {
  const pedido = { producto, precio };
  listaPedidos.push(pedido);
  totalAcumulado += precio;
  console.log(`\n Guardado: ${producto} - $${precio}`);
}

// Función para mostrar los pedidos del cliente
function mostrarPedidos() {
  console.log("\n=== PEDIDOS DEL CLIENTE ===");
  if (listaPedidos.length === 0) {
    console.log("No hay pedidos registrados.");
  } else {
    listaPedidos.forEach((item, index) => {
      console.log(`${index + 1}. ${item.producto} - $${item.precio}`);
    });
    console.log(`\nTotal acumulado: $${totalAcumulado}`);
  }
}

// Menú interactivo
function menu() {
  console.log("\n--- MÓDULO CAJA ---");
  console.log("1. Agregar pedido");
  console.log("2. Mostrar pedidos y total");
  console.log("3. Salir");
  
  rl.question("Selecciona una opción: ", (opcion) => {
    switch (opcion.trim()) {
      case '1':
        rl.question("Nombre del producto: ", (producto) => {
          rl.question("Precio: ", (precioInput) => {
            const precio = parseFloat(precioInput);
            if (isNaN(precio) || precio <= 0) {
              console.log(" Precio inválido.");
            } else {
              agregarPedido(producto, precio);
            }
            menu();
          });
        });
        break;

      case '2':
        mostrarPedidos();
        menu();
        break;

      case '3':
        console.log("\nSaliendo del sistema de Caja...");
        rl.close();
        break;

      default:
        console.log(" Opción no válida.");
        menu();
        break;
    }
  });
}

// Iniciar la aplicación
menu();
