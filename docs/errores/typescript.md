# Errores y soluciones

## Errores Comunes
## PRACTICA 24/11/26
- **Qué veía:**
    El valor de estado no existe, una propiedad mal escrita, pasar un array en vez de un texto y Promise {[[PromiseState]]: 'pending', [[PromiseResult]]: undefined} undefined, Error: Argument of type 'Solicitud[]' is not assignable to parameter of type 'Estado'.

- **Causa:**
    Estado solo tiene 3 posibilidades, escribir bien las propiedades de la funcion, pasar solo lo que pide la función no el array entero, no colocar el await a una función async. 
    
- **Solución:**
    Verificar los valores que puede tomar una variable
    Escribir bien las propiedades
    Verificar el parámetro que se esta pasando a la función
    Siempre colocar el await a una función asíncrona