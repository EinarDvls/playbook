const travel = {
    clientName: "Einar",
    fromAddress: "GDL address 1",
    toAddress: "GDL address 2",
    hasMiddleStops: false,
    tripType: "Uber X",
    price: 244,
    getTypeAndPrice: function(){
        return `The trip is ${this.tripType} with a price of $${this.price}`
    },
    getGeneralInfo: function(){
      return `The user ${this.clientName} will go from ${this.fromAddress} to ${this.toAddress}`
    }
   }
   
   console.log("Nombre del usuario: " + travel.clientName)
   console.log(travel.getTypeAndPrice())
   console.log(travel.getGeneralInfo())