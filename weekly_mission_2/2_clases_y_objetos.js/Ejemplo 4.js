// Ejemplo 4: Mètodos en los objetos 
class Repository {
    constructor(name, author, language, stars){
        this.name = name
        this.author = author
        this.language = language
        this.stars = stars
    }

getInfo(){ // es una funcion que ejecutara cualquier objeto instanciado de esta clase
    return `Repository ${this.name} has ${this.stars} stars` 
    }
}
console.log("Ejemplo 4: Mètodos en los objetos")
const myRepo = new Repository ("LaunchX", "EinarDvls", "js", 100);
console-log(myRepo.getInfo());