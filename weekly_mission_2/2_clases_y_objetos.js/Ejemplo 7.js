// Ejemplo 7: Setters para modificar los atributos del objeto
class MissionCommander {
    constructor(name, mission){
        this.name = name
        this.mission = mission
        this.students = 0
        this.lives = 0
    }

    get getStudent(){
        return this.students
    }

    get getLives(){
        return this.lives
    }

    get setStudentes(students){
        this.students = students
    }

    set setLives(lives){
        this.lives = lives
    }
}

console.log("Ejemplo 7: Setters para modificar los atributos del objeto");
const missionCommanderNode = new MissionCommander("Einar", "NodeJS");

console.log(missionCommanderNode.getStudent) // 0 por default
console.log(missionCommanderNode.getLives) // 0 por default

// actualizamos los atributos por medio de los setters
missionCommanderNode.setStudentes = 100;
missionCommanderNode.setLives = 3;
