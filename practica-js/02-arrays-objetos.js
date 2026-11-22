const solicitudes = [
    {id: 1, empresa: "Rockstar", puesto: "Programador Junior", estado: "enviada", dias: 8},
    {id: 2, empresa: "Nintendo", puesto: "Diseñador", estado: "rechazada", dias: 15},
    {id: 3, empresa: "Riot", puesto: "Niveles", estado: "entrevista", dias: 5},
    {id: 4, empresa: "Capcom", puesto: "Programador Senior", estado: "entrevista", dias: 7}
];

function esRechazada(estado){
    return estado === "rechazada";
}

const pendientes = solicitudes.filter((solicitud) => solicitud.dias > 7 && !esRechazada(solicitud.estado));
console.log(pendientes.length);
const nombres = solicitudes.map((solicitud) => `${solicitud.empresa} - ${solicitud.estado}`);
console.log(nombres);
const buscadorId = solicitudes.find((solicitud) => solicitud.id === 3);
console.log(buscadorId.empresa);
const errorId = solicitudes.find((solicitud) => solicitud.id === 5);
console.log(errorId.empresa);
solicitudes.push({id:5, empresa: "Ubisoft", puesto: "Programador de mecanicas", estado: "rechazada", dias: 5});
console.log(solicitudes.length);
const rechazadas = solicitudes.filter((solicitud) => esRechazada(solicitud.estado));
console.log(rechazadas.length);
