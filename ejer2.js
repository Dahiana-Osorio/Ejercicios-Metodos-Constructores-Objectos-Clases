function cuenta(titular, cantidad) {
    this.titular = titular;
    this.cantidad = cantidad;

    this.mostrar = function () {

        return console.log(`${titular} ${cantidad} `);
    }
    this.ingresar = function (cantidadIngresada) {

        if (this.cantidad > 0) {


            return console.log(cantidad = cantidad + cantidadIngresada)

        }
    }
    this.retirar = function (cantidadIng) {

        if (this.cantidad > 0) {


            return console.log(cantidad = cantidad - cantidadIng)

        }
    }
}
var cuenta1 = new cuenta("Catalina", 50000);
cuenta1.mostrar()
cuenta1.ingresar(3000)
cuenta1.retirar(1000)