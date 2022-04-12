// Ejemplo 7: Uso de filter para filtear una lista de elementos 
const countries7 = ['Finland', 'Denmark', 'Sweden', 'Norway', 'Iceland'];
const countriesContainigLand = countries7.filter((country) => // esta es una funcion
    country.includes('land') // indicacion para solo filtar elementos que incluyen "land"
)
console.log("Ejemplo 7: uso de filter para filtrar una lista de elementos");
console.log(countriesContainigLand);
const countriesEndsByia = countries.filter((country) => country.endsWith('ia'))
console.log("Ejemplo 7: Paises que terminan en i")
console.log(countriesEndsByia)