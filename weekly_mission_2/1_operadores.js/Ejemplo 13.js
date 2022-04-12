// Ejemplo 13: uso de findIndex, este metodo regresa la posicion del primer elemento que cumpla con la validacion que indiques
const names13 = ['Explorer 1', 'Explorer 2', 'Explorer 3'];
const result = names13.findIndex((name) => name.length > 7);
console.log("Ejemplo 13: Primer elemento cuya palabra sea mayor a 7 esta en la posicion " + result);