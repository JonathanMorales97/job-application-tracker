# Errores y soluciones

## Errores Comunes
## PRACTICA 21/11/26
- **Qué veía:**
    Que el archivo no mostraba nada en pantalla, que la función no realizaba su acometido y el texto salía raro.

- **Causa:**
    No estaba guardando el archivo, el return recortaba la función y no usaba comillas invertidas.
    
- **Solución:**
    Siempre guardar con Ctrl + S
    Verificar siempre donde se coloca bien el return
    Siempre usar comillas invertidas


## PRACTICA 22/11/26
- **Qué veía:**
    Uno de los console no mostraba nada, Cannot read properties of undefined es igual que el NullReferenceExcetion de C#, el filter no devolvia nada y el distinto de !==

- **Causa:**
    Igualaba el console.log, error comun en base de datos y fue adrede, estaba mal puesta la negacion y el distinto de no estaba bien aplicado
    
- **Solución:**
    No igual el console.log
    Si algo puede ser nulo o undefinido colocar ?
    la negacion estaba mal puesta en el filter
    El distinto de se aplica con !==
