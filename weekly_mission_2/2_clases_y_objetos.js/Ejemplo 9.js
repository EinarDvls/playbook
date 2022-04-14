// Ejemplo 9: Herencia entre dos clases
class Developer {
    constructor(name, mainLang, stack){
        this.name = name
        this.mainLang = mainLang
        this.stack = stack
    }

    get getname(){
        return this.name
    }
}

console.log("Ejemplo 9: Herencia entre dos clases");
const einarDev = new Developer ("Einar", "js", ["elixir", "groovy", "lisp"]);
console.log(einarDev);

// Se usa la palabra para indicar que heredaràs las propiedades de la clase Padre (Developer) en la clase definida
// Podemos definir una clase vacia y rehusar todos los componentes de la clase Padre

class LaunchXStudent extends Developer{
}

const carloLaunchXDev = new LaunchXStudent("Carlo", "js", ["elixir", "groovy", "lisp"])
console.log(carloLaunchXDev)
console.log(carloLaunchXDev.getName) // getter de la clase padre rehusada en la clase hija

