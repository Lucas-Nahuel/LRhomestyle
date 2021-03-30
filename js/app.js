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