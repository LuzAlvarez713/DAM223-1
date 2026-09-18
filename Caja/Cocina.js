// Array donde se almacenan los productos
let productos = [];

// MÉTODO PARA AGREGAR
function agregarProducto(nombre, precio, cantidad) {

    // Crear un objeto
    let producto = {
        nombre: nombre,
        precio: precio,
        cantidad: cantidad
    };

    // Agregar el objeto al array
    productos.push(producto);

    console.log("Producto agregado correctamente.");
}

// MÉTODO PARA LISTAR
function listarProductos() {

    console.log("\n===== CAFETERÍA - PRODUCTOS =====");

    if (productos.length === 0) {
        console.log("No hay productos registrados.");
        return;
    }

    productos.forEach((producto, index) => {

        console.log(
            `${index + 1}. ${producto.nombre} | Precio: $${producto.precio} | Cantidad: ${producto.cantidad}`
        );

    });
}

// MÉTODO PARA EDITAR
function editarProducto(indice, nombre, precio, cantidad) {

    if (indice >= 0 && indice < productos.length) {

        productos[indice].nombre = nombre;
        productos[indice].precio = precio;
        productos[indice].cantidad = cantidad;

        console.log("✏️ Producto editado correctamente.");

    } else {

        console.log("Producto no encontrado.");
    }
}

// MÉTODO PARA ELIMINAR
function eliminarProducto(indice) {

    if (indice >= 0 && indice < productos.length) {

        productos.splice(indice, 1);

        console.log(" Producto eliminado correctamente.");

    } else {

        console.log("Producto no encontrado.");
    }
}


// ====================================
//        PRODUCTOS DE LA CAFETERÍA
// ====================================

// AGREGAR PRODUCTOS
agregarProducto("Café Americano", 35, 20);
agregarProducto("Cappuccino", 55, 15);
agregarProducto("Frappé de Chocolate", 65, 10);
agregarProducto("Pastel de Chocolate", 50, 8);
agregarProducto("Galletas", 25, 30);


// LISTAR PRODUCTOS
listarProductos();


// EDITAR PRODUCTO
editarProducto(1, "Cappuccino Vainilla", 60, 18);

// MOSTRAR PRODUCTOS DESPUÉS DE EDITAR
listarProductos();

// ELIMINAR PRODUCTO
eliminarProducto(3);

// MOSTRAR LISTA FINAL
listarProductos();