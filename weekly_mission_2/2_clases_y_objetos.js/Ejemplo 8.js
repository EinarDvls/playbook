// Ejemplo 8: Mètodos static nos ayudan a escribir mètodos en una clase que podemos usar sin necesidad de instanciar algun objeto
class Toolbox {
    static getMostUsefulTools(){
        return ["Command line", "git", "Text Editor"]
    }
}

console.log("Ejemplo 8: metodos estatic");
//Puedo llamar el metodo static directamente con el nombre de la clase
console.log(Toolbox.getMostUsefulTools());
// Si intentamos instanciar un objeto, no podremos llamar este mètodo static 
// const toolbox = new Toolbox();
//console.log(toolbox.getMostUserfulTools()) // is not function

/*

Herencia: Nos permite relacionar clases entre si y rehusar sus componentes

*/