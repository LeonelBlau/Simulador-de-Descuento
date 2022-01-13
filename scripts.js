


let descuento;

let descontado = 0;



function solicitarDatos() {

    monto = Number(prompt("Ingrese el monto a aplicar el descuento por su compra"))
    
    descuento = Number(prompt("Tuvo un descuento del 10 o el 25% ?"))
    
    sumarYDescontar(monto, descuento)
}
    

function sumarYDescontar(monto, descuento) {
    if (descuento == 10) {
        descontado = (monto * 0.10) 
    } else if (descuento == 25) {
        descontado = (monto * 0.25) 
    } else {
        alert("datos incorrectos")
    }
    imprimir(monto, descontado)
}

function imprimir(monto, descontado) {
    alert("Usted debe abonar " + (monto - descontado) + " $ en la caja 6")
}

solicitarDatos()



