let Producto = function(id, nombre, precio, stock) {
    return {
        id: id,
        nombre: nombre,
        precio: precio,
        stock: stock
    }
}

let Carrito = function() {

    let items = [];

    function agregar (producto){
        items.push({producto: producto})
        if(items.length >= 2){
            console.log("Tiene algo dentro");
        }
    }
    function reporte() {

        let detalle = items.map(function(val){
            return {
                nombre: val.producto.nombre,
                precioUnitario: val.producto.precio,
                cantidad: val.cantidad,
                total: val.producto.precio
            }
        });
        return {
            detalle: detalle
        };
    }


    return {
        agregar: agregar,
        reporte: reporte
    }
}