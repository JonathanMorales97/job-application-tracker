
console.log(`SEGUIMIENTO SOLICITUD`);
function mensajeSeguimiento(empresa, puesto, diasAplicacion){
    if(diasAplicacion >= 7){
        return `Hay que darle seguimiento al puesto de ${puesto} de la empresa ${empresa}, ya pasaron ${diasAplicacion} días`;
    } else{
        return `Han pasado ${diasAplicacion} días, hay que esperar para la solicitud de ${puesto} de la empresa ${empresa}`;
    }
}

function esRechazada(estado){
    return estado === "rechazada";
}

let mensaje = mensajeSeguimiento("Rockstar Games", "Programador Senior", 3);
console.log(mensaje);
console.log(esRechazada("rechazada"));

mensaje = mensajeSeguimiento("Riot Games", "Programador Junior", 8);
console.log(mensaje);
console.log(esRechazada("aprobada"));

mensaje = mensajeSeguimiento("Nintendo Inc", "Programador de Niveles", 7);
console.log(mensaje);
console.log(esRechazada("entrevista"));

console.log(5 == "5");
console.log(5 === "5");
let x = 5;
console.log(x);
x = "cinco";
console.log(x);