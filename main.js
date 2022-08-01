// OBJETO DE PRODUCTO
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

    // Agrega un producto al carrito
    function agregar (producto){
        items.push({
            producto: producto,
            cantidad: 1
        })
    }
    
    // Aumenta la cantidad de productos si el id es indentico a uno ingresado
    function incrementar(producto) {
        items = items.map(function(val){
            if(val.producto.id == producto.id) {
                
                return {
                    producto: val.producto,
                    cantidad: val.cantidad + 1
                }
            }
            else
            return val;
        });
    }

    function quitar(producto) {
        items = items.filter(function(val){
            return val.producto.id !== producto.id
        });
    }
    
    function reporte() {
        // Suma el precio multiplicado por la cantidad de productos ingresado
        let precioTotal = items.reduce(function(precio, val){
            return precio + (val.producto.precio * val.cantidad)
        }, 0);

        // recorre el array llamando los datos del los productos ingresados
        let detalle = items.map(function(val){
            return {
                nombre: val.producto.nombre,
                precioUnitario: val.producto.precio,
                cantidad: val.cantidad,
                total: val.cantidad * val.producto.precio
            }
        });

        return {
            total: precioTotal,
            detalle: detalle
        };
    }
    
    return {
        agregar: agregar,
        incrementar: incrementar,
        quitar: quitar,
        reporte: reporte
    }
}