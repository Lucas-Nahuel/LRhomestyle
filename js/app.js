let edadRequerida = parseInt(prompt("¿cuantos años tienes?"));

    if (edadRequerida >= 18){
        alert("eres mayor, puedes acceder");
    } 
    else if (edadRequerida < 18) {
        alert("no eres mayor, lo sentimos");
    }
    else{
        alert("ingrese la edad porfavor");
    };

    class Servicio{
        constructor(servicio, precio){
            this.servicio = servicio;
            this.precio = precio;
        }
        hablar(){
            console.log("elegiste el servicio " + this.servicio + ", con precio de " + this.precio);
        }
    };

    const servicio1 = new Servicio ("decoracion de lobby", 8500);
    servicio1.hablar();