# 2026-11-23 · JavaScript Async y Await

- **Qué hice:**
    Se crearon 2 archivos:
    1) utilidades.js -> donde generamos las funciones que se van a exportar
    2) json-async.js -> donde se importaron las funciones de utilidades.js y también está la lógica de programación

- **Qué aprendí:**
    Generar funciones para exportar, el como importar y leer el archivo que estamos generando, se creó un array el cual fue leído como JSON para convertir el objeto en texo y viceversa, se añadió una función asíncrona para enviar el recordatorio

- **Errores y cómo los resolví:**
    1) No poner el await para una función asíncrona


- **NOTA**
    Una funcion async SIEMPRE devuelve una Promise
    Un await pausa esa función hastca que la promesa se resuelva y te da el valor, solo funciona dentro de una función async.