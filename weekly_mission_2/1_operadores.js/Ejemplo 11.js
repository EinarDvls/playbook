// Ejemplo 11: uso de find para encontrar el primer elemento de una lista que cumpla co lo que indiques
const ages =[24, 22, 19, 25, 32, 35, 18];
const age = ages.find((age) => age < 20);
console.log("Ejemplo 11: primera edad menor a 20 es: " + age);
