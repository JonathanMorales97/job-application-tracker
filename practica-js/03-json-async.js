import { writeFile, readFile } from "node:fs/promises";
import { esRechazada, resumen, esperar } from "./utilidades.js";


const solicitudes = [
    { id: 1, empresa: "Rockstar", puesto: "Programador Junior", estado: "enviada", dias: 8 },
    { id: 2, empresa: "Nintendo", puesto: "Diseñador", estado: "rechazada", dias: 15 },
    { id: 3, empresa: "Riot", puesto: "Niveles", estado: "entrevista", dias: 5 }
]


const texto = JSON.stringify(solicitudes, null, 2); // OBJETO A TEXTO
await writeFile("solicitudes.json", texto);

const contenido = await readFile("solicitudes.json", "utf8");
const totalSoli = JSON.parse(contenido); // TEXTO A OBJETO
console.log(totalSoli.length);

const plantillaResumen = resumen(totalSoli[0]);
console.log(plantillaResumen);


async function enviarRecordatorio(solicitud) {
    await esperar(500);
    return `Recordatorio enviado: ${solicitud.empresa}`;
}

for (const solicitud of totalSoli) {
    if (!esRechazada(solicitud.estado)) {
        const recordatorio = await enviarRecordatorio(solicitud);
        console.log(recordatorio);
    }
}

try {
    await readFile("soli.json", "utf8");
} catch (error) {
    console.log("No existe el archivo: ", error.message, error.code);
}
console.log("El programa sigue");