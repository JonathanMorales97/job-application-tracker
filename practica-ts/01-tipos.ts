type Estado = "enviada" | "entrevista" | "rechazada";

type Solicitud = {
    id: number;
    empresa: string;
    puesto: string;
    estado: Estado;
    dias: number;
}

function esRechazada(estado: Estado): boolean{
    return estado === "rechazada";
}

function resumen(solicitud: Solicitud): string{
    return solicitud.empresa + " - " + solicitud.puesto + " (" + solicitud.estado + ")";
}

const solicitudes: Solicitud[] = [
    {id: 1, empresa: "Rockstar", puesto: "Diseñador", estado: "rechazada", dias: 8},
    {id: 2, empresa: "Nintendo", puesto: "Programador", estado: "entrevista", dias: 4},
    {id: 3, empresa: "Riot", puesto: "Niveles", estado: "enviada", dias: 10},
    {id: 4, empresa: "Riot", puesto: "Niveles", estado: "rechazada", dias: 10}
]

const rechazadas = solicitudes.filter((solicitud) => esRechazada(solicitud.estado));
console.log(rechazadas.length);
console.log(resumen(solicitudes[0]));

//const error1 =  solicitudes.filter((solicitud) => esRechazada(solicitudes));

function esperar(ms: number): Promise<void> {
    return new Promise((resolve) => setTimeout(resolve, ms));
}

async function enviarRecordatorio(solicitud:Solicitud): Promise<string> {
    await esperar(500);
    return `Recordatorio enviado: ` + solicitud.empresa;
}

async function main(): Promise<void> {
    for (const soli of solicitudes){
        if(!esRechazada(soli.estado)){
        const msg = await enviarRecordatorio(soli);
        console.log(msg);
        }
    }
}

main();