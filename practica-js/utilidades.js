export function esRechazada(estado) {
    return estado === "rechazada";
} 

export function resumen(solicitud){
    return `${solicitud.empresa} - ${solicitud.puesto} (${solicitud.estado})`;
}

export function esperar(ms){
    return new Promise((resolve) => setTimeout(resolve, ms));
}