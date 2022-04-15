const user = {
    name: "Einar",
    currentCity: "GDL",
    workPlace: "Peribus Metropolitano",
    school: "UDG",
    email: "mail@example.com",
    gender: "male",
    dateOfBirth: "17/12/1992",
    getNameAndBirthday: function(){
        return `${this.name} was born on ${this.dateOfBirth}`
    },
    getGeneralInfo: function(){
      return `The user ${this.name} works at ${this.workPlace} and lives in ${this.currentCity}`
    }
   }
   
   console.log("Nombre del usuario: " + user.name)
   console.log("email: " + user.email)
   console.log(user.getNameAndBirthday())
   console.log(user.getGeneralInfo())