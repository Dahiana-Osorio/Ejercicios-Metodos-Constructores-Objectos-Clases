function persona(nombre_ingresado, edad_ingresada, cedula_ingresada){
    this.nombre = nombre_ingresado;
    this.edad = edad_ingresada;
    this.cedula = cedula_ingresada;
    this.mostrar = function(){
        return  `${this.nombre} ${this.edad} ${this.cedula} `;
    }  
    this.mayoredad =function(){
        if (this.edad> 18){
            return  "Es mayor de edad";
        } else{
            return "Es menor de edad";
        }
    }     
}
var dahiana= new persona("Catalina", 16, 5651565252);
console.log(dahiana.mostrar())
console.log(dahiana.mayoredad())